import express from 'express';
import cors from 'cors';
import { createServer as createHttpServer } from 'http';
import { createServer as createViteServer } from 'vite';
import path from 'path';

// Server in-memory state
interface User {
  id: string;
  name: string;
  ageVerified: boolean;
  verified: boolean;
  interests: string[];
  status: 'idle' | 'matching' | 'active';
  roomId: string | null;
  lastSeen: number;
  chatMode?: 'video' | 'text' | null;
  matchingStartedAt?: number;
  lastPartnerId?: string | null;
}

interface Room {
  id: string;
  hostId: string;
  guestId: string;
  hostIce: any[];
  guestIce: any[];
  hostSdp: any;
  guestSdp: any;
  hostTyping?: number;
  guestTyping?: number;
  messages: Array<{ id: string; sender: string; text: string; time: number }>;
  created: number;
  lastActivity: number;
}

interface Report {
  id: string;
  reporterId: string;
  reportedId: string;
  reason: string;
  details: string;
  chatLog: Array<{ sender: string; text: string; time: number }>;
  timestamp: number;
}

const activeUsers = new Map<string, User>();
const rooms = new Map<string, Room>();
const reports: Report[] = [];
const bannedUsers = new Set<string>();

// Helper to clean up offline users
setInterval(() => {
  const now = Date.now();
  for (const [userId, user] of activeUsers.entries()) {
    // If user hasn't polled status for > 7 seconds
    if (now - user.lastSeen > 7000) {
      // Clean up user's room
      if (user.roomId) {
        closeRoom(user.roomId, userId);
      }
      activeUsers.delete(userId);
      console.log(`[Server] Cleaned up offline user ${userId}`);
    }
  }
  
  // Clean up stale rooms
  for (const [roomId, room] of rooms.entries()) {
    const hostActive = activeUsers.has(room.hostId);
    const guestActive = activeUsers.has(room.guestId);
    
    if (!hostActive && !guestActive) {
      rooms.delete(roomId);
    } else if (now - room.lastActivity > 300000) { // 5 minutes inactivity
      rooms.delete(roomId);
    }
  }
}, 5000);

function closeRoom(roomId: string, leavingUserId: string) {
  const room = rooms.get(roomId);
  if (room) {
    const partnerId = room.hostId === leavingUserId ? room.guestId : room.hostId;
    const partner = activeUsers.get(partnerId);
    const leaver = activeUsers.get(leavingUserId);
    
    if (leaver) leaver.lastPartnerId = partnerId;

    if (partner) {
      partner.roomId = null;
      partner.status = 'idle';
      partner.lastPartnerId = leavingUserId;
    }
    rooms.delete(roomId);
    console.log(`[Server] Closed room ${roomId} because ${leavingUserId} left`);
  }
}

async function startServer() {
  const app = express();
  const httpServer = createHttpServer(app);

  app.use(cors());
  app.use(express.json());

  // Log requests & Ban enforcement
  app.use((req, res, next) => {
    const clientId = req.headers['x-user-id'] as string;
    if (clientId && bannedUsers.has(clientId)) {
      res.status(403).json({ error: "BANNED", message: "Your access has been suspended due to community guidelines violations." });
      return;
    }
    next();
  });

  // API ROUTING

  // 1. Profile registration & Age gate verification
  app.post('/api/register', (req, res) => {
    const { id, name, ageVerified, verified, interests } = req.body;
    if (!id || !name) {
       res.status(400).json({ error: "Missing identity fields" });
       return;
    }

    if (bannedUsers.has(id)) {
       res.status(403).json({ error: "BANNED" });
       return;
    }

    const userData: User = {
      id,
      name: name.slice(0, 30),
      ageVerified: !!ageVerified,
      verified: !!verified,
      interests: Array.isArray(interests) ? interests.map(i => i.toLowerCase().trim()).filter(Boolean) : [],
      status: 'idle',
      roomId: null,
      lastSeen: Date.now(),
      chatMode: null
    };

    activeUsers.set(id, userData);
    res.json({ success: true, user: userData });
  });

  // 2. Poll server status, peer details, room info and reports
  app.get('/api/status', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    if (!userId) {
       res.status(400).json({ error: "Missing session header" });
       return;
    }

    const user = activeUsers.get(userId);
    if (!user) {
      res.json({ status: 'offline', onlineCount: activeUsers.size });
      return;
    }

    user.lastSeen = Date.now();

    // Check if user is inside an active room
    let roomDetails = null;
    let partnerDetails = null;

    if (user.roomId) {
      const room = rooms.get(user.roomId);
      if (room) {
        roomDetails = {
          id: room.id,
          role: room.hostId === userId ? 'host' : 'guest',
          messageCount: room.messages.length
        };
        const partnerId = room.hostId === userId ? room.guestId : room.hostId;
        const partner = activeUsers.get(partnerId);
        if (partner) {
          partnerDetails = {
            id: partner.id,
            name: partner.name,
            verified: partner.verified,
            interests: partner.interests
          };
        }
      } else {
        // Room disappeared/stale
        user.roomId = null;
        user.status = 'idle';
      }
    }

    res.json({
      status: user.status,
      chatMode: user.chatMode,
      onlineCount: activeUsers.size, // Real user count, no simulation padding
      room: roomDetails,
      partner: partnerDetails
    });
  });

  // 3. Trigger profile verification status checkmark
  app.post('/api/verify', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    if (!userId) {
       res.status(400).json({ error: "Missing session header" });
       return;
    }

    if (!activeUsers.has(userId)) {
      // Register with default values
      const newUser: User = {
        id: userId,
        name: 'Anonymous Human',
        ageVerified: false,
        verified: true,
        interests: [],
        status: 'idle',
        roomId: null,
        lastSeen: Date.now()
      };
      activeUsers.set(userId, newUser);
      res.json({ success: true, user: newUser });
    } else {
      const user = activeUsers.get(userId)!;
      user.verified = true;
      res.json({ success: true, user });
    }
  });

  // 4. Leave match or disconnect active room (Go back to idle)
  app.post('/api/disconnect', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    if (!userId) {
       res.status(400).json({ error: "No user header" });
       return;
    }

    const user = activeUsers.get(userId);
    if (user) {
      if (user.roomId) {
        closeRoom(user.roomId, userId);
      }
      user.status = 'idle';
      user.chatMode = null;
    }

    res.json({ success: true });
  });

  // 5. Interest-based matchmaking queue trigger
  app.post('/api/match', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const { interests, chatMode } = req.body;

    if (!userId) {
       res.status(400).json({ error: "Missing user credentials" });
       return;
    }

    const user = activeUsers.get(userId);
    if (!user) {
       res.status(404).json({ error: "User not registered" });
       return;
    }

    if (interests && Array.isArray(interests)) {
      user.interests = interests.map(i => i.toLowerCase().trim()).filter(Boolean);
    }
    
    if (chatMode) {
      user.chatMode = chatMode;
    }

    // If already matched by another user's concurrent match request, return the room!
    if (user.status === 'active' && user.roomId) {
      const room = rooms.get(user.roomId);
      if (room) {
        res.json({ success: true, state: 'matched', room });
        return;
      } else {
        // Stale room
        user.roomId = null;
        user.status = 'matching';
      }
    }

    // Clean up current room if any (should only happen if state is out of sync)
    if (user.roomId) {
      closeRoom(user.roomId, userId);
    }

    if (user.status !== 'matching') {
      user.status = 'matching';
      user.matchingStartedAt = Date.now();
    }
    user.lastSeen = Date.now();

    // Matchmaking Logic: Find other matching real users with the SAME chat mode (video or text)
    let matchPool = Array.from(activeUsers.values()).filter(
      other => other.id !== userId && 
               other.status === 'matching' && 
               other.chatMode === user.chatMode &&
               !other.id.startsWith('sim_') &&
               other.id !== user.lastPartnerId 
    );

    // Fallback: If no strict match found, check if there is only 1 other user matching
    if (matchPool.length === 0) {
      const allOtherMatchingRealUsers = Array.from(activeUsers.values()).filter(
        other => other.id !== userId &&
                 other.status === 'matching' &&
                 !other.id.startsWith('sim_')
      );
      
      const now = Date.now();
      const userWaitTime = now - (user.matchingStartedAt || now);

      if (allOtherMatchingRealUsers.length === 1) {
        const other = allOtherMatchingRealUsers[0];
        const otherWaitTime = now - (other.matchingStartedAt || now);
        
        // Connect them if they've been waiting for long, or if they skipped each other recently, or even if different chat mode.
        if (userWaitTime > 3000 || otherWaitTime > 3000 || user.lastPartnerId === other.id || other.chatMode !== user.chatMode) {
          matchPool = [other];
        }
      }
    }

    if (matchPool.length > 0) {
      // Sort candidates by common interest count
      const scores = matchPool.map(other => {
        const common = other.interests.filter(i => user.interests.includes(i));
        return { other, score: common.length };
      });

      // Sort with highest match first
      scores.sort((a, b) => b.score - a.score);
      const chosenPartner = scores[0].other;

      // Group into a room
      const roomId = `room_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const newRoom: Room = {
        id: roomId,
        hostId: userId,
        guestId: chosenPartner.id,
        hostIce: [],
        guestIce: [],
        hostSdp: null,
        guestSdp: null,
        messages: [],
        created: Date.now(),
        lastActivity: Date.now()
      };

      rooms.set(roomId, newRoom);

      user.status = 'active';
      user.roomId = roomId;
      user.matchingStartedAt = undefined;

      chosenPartner.status = 'active';
      chosenPartner.roomId = roomId;
      chosenPartner.matchingStartedAt = undefined;

      console.log(`[Server] Matched ${user.name} and ${chosenPartner.name} in room ${roomId} for ${user.chatMode} chat`);
      res.json({ success: true, state: 'matched', room: newRoom });
      return;
    }

    res.json({ success: true, state: 'matching' });
  });

  // 6. Skip action: Dissolve current room, put BOTH users to 'matching'
  app.post('/api/skip', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const user = activeUsers.get(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (user.roomId) {
      const room = rooms.get(user.roomId);
      if (room) {
        const partnerId = room.hostId === userId ? room.guestId : room.hostId;
        const partner = activeUsers.get(partnerId);
        rooms.delete(user.roomId);

        user.roomId = null;
        user.status = 'matching';
        user.matchingStartedAt = Date.now();
        user.lastPartnerId = partnerId;

        if (partner) {
          partner.roomId = null;
          partner.status = 'matching';
          partner.matchingStartedAt = Date.now();
          partner.lastPartnerId = userId;
          console.log(`[Server] Skip: Both ${user.name} and ${partner.name} placed back into matching queue.`);
        }
      } else {
        user.roomId = null;
        user.status = 'matching';
        user.matchingStartedAt = Date.now();
      }
    } else {
      user.status = 'matching';
      user.matchingStartedAt = Date.now();
    }

    res.json({ success: true });
  });

  // 7. End action: Dissolve current room, initiator goes to home (idle), partner goes to matching
  app.post('/api/end', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const user = activeUsers.get(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (user.roomId) {
      const room = rooms.get(user.roomId);
      if (room) {
        const partnerId = room.hostId === userId ? room.guestId : room.hostId;
        const partner = activeUsers.get(partnerId);
        rooms.delete(user.roomId);

        user.roomId = null;
        user.status = 'idle';
        user.chatMode = null;
        user.matchingStartedAt = undefined;
        user.lastPartnerId = partnerId;

        if (partner) {
          partner.roomId = null;
          partner.status = 'matching';
          partner.matchingStartedAt = Date.now();
          partner.lastPartnerId = userId;
          console.log(`[Server] End Call: ${user.name} returned to home. Partner ${partner.name} placed back in matching queue.`);
        }
      } else {
        user.roomId = null;
        user.status = 'idle';
        user.chatMode = null;
        user.matchingStartedAt = undefined;
      }
    } else {
      user.status = 'idle';
      user.chatMode = null;
      user.matchingStartedAt = undefined;
    }

    res.json({ success: true });
  });

  // 8. WebRTC SDP and ICE signaling exchange
  app.post('/api/signal/send', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const { sdp, ice, role } = req.body;

    const user = activeUsers.get(userId);
    if (!user || !user.roomId) {
      res.status(404).json({ error: "No active chat room to signal" });
      return;
    }

    const room = rooms.get(user.roomId);
    if (!room) {
      res.status(404).json({ error: "Room not found" });
      return;
    }

    room.lastActivity = Date.now();

    if (role === 'host') {
      if (sdp) room.hostSdp = sdp;
      if (ice) room.hostIce.push(ice);
    } else {
      if (sdp) room.guestSdp = sdp;
      if (ice) room.guestIce.push(ice);
    }

    res.json({ success: true });
  });

  app.get('/api/signal/poll', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const role = req.query.role as string;

    const user = activeUsers.get(userId);
    if (!user || !user.roomId) {
      res.json({ error: "No active room to signal" });
      return;
    }

    const room = rooms.get(user.roomId);
    if (!room) {
       res.json({ error: "Room not found" });
       return;
    }

    if (role === 'host') {
      res.json({
        sdp: room.guestSdp,
        ice: room.guestIce
      });
    } else {
      res.json({
        sdp: room.hostSdp,
        ice: room.hostIce
      });
    }
  });

  // 9. Text Messages
  app.get('/api/chat/messages', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const user = activeUsers.get(userId);
    if (!user || !user.roomId) {
       res.json({ messages: [] });
       return;
    }

    const room = rooms.get(user.roomId);
    if (!room) {
       res.json({ messages: [] });
       return;
    }

    const isHost = room.hostId === userId;
    const now = Date.now();
    let partnerTyping = false;
    
    if (isHost && room.guestTyping && now - room.guestTyping < 3000) {
      partnerTyping = true;
    } else if (!isHost && room.hostTyping && now - room.hostTyping < 3000) {
      partnerTyping = true;
    }

    res.json({ messages: room.messages, partnerTyping });
  });

  app.post('/api/chat/typing', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const user = activeUsers.get(userId);
    if (!user || !user.roomId) {
       res.json({ success: false });
       return;
    }

    const room = rooms.get(user.roomId);
    if (!room) {
       res.json({ success: false });
       return;
    }

    if (room.hostId === userId) {
      room.hostTyping = Date.now();
    } else {
      room.guestTyping = Date.now();
    }

    res.json({ success: true });
  });

  app.post('/api/chat/send', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const { text } = req.body;

    if (!text || text.trim() === '') {
       res.status(400).json({ error: "Empty message" });
       return;
    }

    const user = activeUsers.get(userId);
    if (!user || !user.roomId) {
       res.status(404).json({ error: "User or active room not found" });
       return;
    }

    const room = rooms.get(user.roomId);
    if (!room) {
       res.status(404).json({ error: "Room expired" });
       return;
    }

    room.lastActivity = Date.now();
    if (room.hostId === userId) {
      room.hostTyping = undefined;
    } else {
      room.guestTyping = undefined;
    }

    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      sender: userId,
      text: text.slice(0, 500), // Max 500 characters
      time: Date.now()
    };

    room.messages.push(newMessage);

    res.json({ success: true, message: newMessage });
  });

  // 10. Submit a community violation report
  app.post('/api/report', (req, res) => {
    const userId = req.headers['x-user-id'] as string;
    const { reportedUserId, reason, details } = req.body;

    if (!userId || !reportedUserId || !reason) {
       res.status(400).json({ error: "Missing report details" });
       return;
    }

    const reporter = activeUsers.get(userId);
    let chatHistory: Array<{ sender: string; text: string; time: number }> = [];

    if (reporter && reporter.roomId) {
      const room = rooms.get(reporter.roomId);
      if (room) {
        chatHistory = [...room.messages];
      }
    }

    const newReport: Report = {
      id: `rep_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      reporterId: userId,
      reportedId: reportedUserId,
      reason,
      details: details || "No extra context.",
      chatLog: chatHistory,
      timestamp: Date.now()
    };

    reports.push(newReport);
    console.log(`[Moderation] New Report on user ${reportedUserId} from reporter ${userId} for reason: ${reason}`);

    if (reporter && reporter.roomId) {
      closeRoom(reporter.roomId, userId);
    }

    res.json({ success: true, message: "Report processed successfully." });
  });

  // 11. Administrator dashboard endpoints (banned tracking)
  app.get('/api/admin/reports', (req, res) => {
    const enrichedReports = reports.map(r => {
      const reporter = activeUsers.get(r.reporterId) || { name: "Reported Off" };
      const suspect = activeUsers.get(r.reportedId) || { name: "Offline Host" };
      return {
        ...r,
        reporterName: reporter.name,
        reportedName: suspect.name,
        isBanned: bannedUsers.has(r.reportedId)
      };
    });

    res.json({
      success: true,
      reports: enrichedReports,
      onlineUsers: Array.from(activeUsers.values()).map(u => ({
        id: u.id,
        name: u.name,
        interests: u.interests,
        verified: u.verified,
        ageVerified: u.ageVerified,
        status: u.status,
        isBanned: bannedUsers.has(u.id)
      })),
      bannedList: Array.from(bannedUsers)
    });
  });

  app.post('/api/admin/ban', (req, res) => {
    const { targetUserId } = req.body;
    if (!targetUserId) {
       res.status(400).json({ error: "Target necessary" });
       return;
    }

    bannedUsers.add(targetUserId);
    console.log(`[Admin] Banned user session ${targetUserId}`);

    const userObj = activeUsers.get(targetUserId);
    if (userObj) {
      if (userObj.roomId) {
        closeRoom(userObj.roomId, targetUserId);
      }
      activeUsers.delete(targetUserId);
    }

    res.json({ success: true, bannedUsers: Array.from(bannedUsers) });
  });

  app.post('/api/admin/unban', (req, res) => {
    const { targetUserId } = req.body;
    if (!targetUserId) {
       res.status(400).json({ error: "Target necessary" });
       return;
    }

    bannedUsers.delete(targetUserId);
    res.json({ success: true, bannedUsers: Array.from(bannedUsers) });
  });

  // Integrate Vite Dev Server Middleware or static client build serving
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('[Server] Loaded Vite dev server middleware.');
  } else {
    const buildPath = path.join(process.cwd(), 'dist');
    app.use(express.static(buildPath));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(buildPath, 'index.html'));
    });
    console.log('[Server] Set up to serve static assets from "/dist".');
  }

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  httpServer.listen(port, '0.0.0.0', () => {
    console.log(`[Server] Server is online and listening at http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('[Server] Fatal startup error:', err);
  process.exit(1);
});
