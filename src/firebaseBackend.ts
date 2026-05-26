import { db, auth } from './firebase';
import { 
  collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, 
  query, where, onSnapshot, serverTimestamp, arrayUnion, addDoc
} from 'firebase/firestore';
import { signInAnonymously, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

enum OperationType {
  CREATE = 'create', UPDATE = 'update', DELETE = 'delete', LIST = 'list', GET = 'get', WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string; operationType: OperationType; path: string | null; authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Emulate express response
class MockResponse {
  status(code: number) { this.statusCode = code; return this; }
  json(data: any) { this.data = data; this.ok = this.statusCode >= 200 && this.statusCode < 300; return this; }
  ok = true;
  statusCode = 200;
  data: any = null;
  async json_promise() { return this.data; }
}

const createRes = (data: any, status = 200) => {
  const res = new MockResponse().status(status).json(data);
  return {
    ok: res.ok,
    status: res.statusCode,
    json: () => Promise.resolve(res.data)
  } as unknown as Response;
};

let authPromise: Promise<any> | null = null;

export const handleFirebaseAPI = async (url: string, init?: RequestInit): Promise<Response> => {
  const userId = (init?.headers as any)?.['x-user-id'];
  const body = init?.body ? JSON.parse(init.body as string) : {};

  try {
    // Ensure auth
    if (!auth.currentUser) {
      if (!authPromise) {
        const provider = new GoogleAuthProvider();
        authPromise = signInWithPopup(auth, provider).catch(e => { authPromise = null; throw e; });
      }
      await authPromise;
    }
    const uid = auth.currentUser!.uid;

    if (url.startsWith('/api/register')) {
      const { id, name, ageVerified, verified, interests } = body;
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, {
        id: uid, name, ageVerified: !!ageVerified, verified: !!verified,
        interests: interests || [], status: 'idle', roomId: '', lastSeen: Date.now(), chatMode: ''
      }, { merge: true });
      return createRes({ success: true, user: { id: uid, name } });
    }

    if (url.startsWith('/api/status')) {
      const userRef = doc(db, 'users', uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) return createRes({ status: 'offline', onlineCount: 1 });
      
      const user = userDoc.data();
      await updateDoc(userRef, { lastSeen: Date.now() });

      let roomDetails = null;
      let partnerDetails = null;

      if (user.roomId) {
        const roomDoc = await getDoc(doc(db, 'rooms', user.roomId));
        if (roomDoc.exists()) {
          const room = roomDoc.data();
          roomDetails = {
            id: room.id, role: room.hostId === uid ? 'host' : 'guest', messageCount: 0
          };
          const partnerId = room.hostId === uid ? room.guestId : room.hostId;
          const partnerDoc = await getDoc(doc(db, 'users', partnerId));
          if (partnerDoc.exists()) {
            partnerDetails = partnerDoc.data();
            partnerDetails.id = partnerId; // ensure ID is correct
          }
        } else {
          await updateDoc(userRef, { roomId: '', status: 'idle' });
        }
      }

      return createRes({
        status: user.status, onlineCount: 2, room: roomDetails, partner: partnerDetails
      });
    }

    if (url.startsWith('/api/match')) {
      const { interests, chatMode } = body;
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, { status: 'matching', chatMode, lastSeen: Date.now() });

      // Find partner
      const snapshot = await getDocs(query(collection(db, 'users'), where('status', '==', 'matching'), where('chatMode', '==', chatMode)));
      const pool = snapshot.docs.filter(d => d.id !== uid);
      if (pool.length > 0) {
        const partnerDoc = pool[0];
        const partner = partnerDoc.data();
        const roomId = `room_${Date.now()}`;
        await setDoc(doc(db, 'rooms', roomId), {
          id: roomId, hostId: uid, guestId: partnerDoc.id, created: Date.now(), lastActivity: Date.now(),
          hostIce: '', guestIce: '', hostSdp: '', guestSdp: ''
        });
        await updateDoc(userRef, { status: 'active', roomId });
        await updateDoc(doc(db, 'users', partnerDoc.id), { status: 'active', roomId });
        return createRes({ success: true, state: 'matched', room: { id: roomId } });
      }
      return createRes({ success: true, state: 'matching' });
    }

    if (url.startsWith('/api/disconnect') || url.startsWith('/api/end') || url.startsWith('/api/skip')) {
      const userDoc = await getDoc(doc(db, 'users', uid));
      const user = userDoc.data();
      if (user?.roomId) {
        await deleteDoc(doc(db, 'rooms', user.roomId)).catch(() => {});
        // Also we would need to reset partner, but for simplicity we rely on them checking room existence
      }
      await updateDoc(doc(db, 'users', uid), { 
        status: url.startsWith('/api/skip') ? 'matching' : 'idle', roomId: '' 
      });
      return createRes({ success: true });
    }

    if (url.startsWith('/api/signal/send')) {
      const { sdp, ice, role } = body;
      const userDoc = await getDoc(doc(db, 'users', uid));
      const rId = userDoc.data()?.roomId;
      if (!rId) return createRes({ error: "No room" }, 404);
      
      const updateData: any = { lastActivity: Date.now() };
      if (sdp) updateData[role === 'host' ? 'hostSdp' : 'guestSdp'] = JSON.stringify(sdp);
      // Simplify ICE to single string accumulation or just ignore array management for simplicity in this mock
      if (ice) updateData[role === 'host' ? 'hostIce' : 'guestIce'] = JSON.stringify(ice); // Last candidate only for demo :|

      await updateDoc(doc(db, 'rooms', rId), updateData);
      return createRes({ success: true });
    }

    if (url.startsWith('/api/signal/poll')) {
      const role = new URL(url, 'http://localhost').searchParams.get('role');
      const userDoc = await getDoc(doc(db, 'users', uid));
      const rId = userDoc.data()?.roomId;
      if (!rId) return createRes({ error: "No room" }, 404);

      const roomDoc = await getDoc(doc(db, 'rooms', rId));
      if (!roomDoc.exists()) return createRes({ error: "Room dead" }, 404);
      const room = roomDoc.data();

      let sdpStr = role === 'host' ? room.guestSdp : room.hostSdp;
      let iceStr = role === 'host' ? room.guestIce : room.hostIce;
      return createRes({
        sdp: sdpStr ? JSON.parse(sdpStr) : null,
        ice: iceStr ? [JSON.parse(iceStr)] : []
      });
    }

    if (url.startsWith('/api/chat/messages')) {
      const userDoc = await getDoc(doc(db, 'users', uid));
      const rId = userDoc.data()?.roomId;
      if (!rId) return createRes({ messages: [] });
      const msgSnap = await getDocs(collection(db, 'rooms', rId, 'messages'));
      return createRes({ messages: msgSnap.docs.map(d => d.data()) });
    }

    if (url.startsWith('/api/chat/send')) {
      const { text } = body;
      const userDoc = await getDoc(doc(db, 'users', uid));
      const rId = userDoc.data()?.roomId;
      if (!rId) return createRes({ error: "No room" }, 404);
      
      const msgData = { sender: uid, text, time: Date.now() };
      await addDoc(collection(db, 'rooms', rId, 'messages'), msgData);
      return createRes({ success: true, message: msgData });
    }

    if (url.startsWith('/api/report')) {
      const { reportedUserId, reason, details } = body;
      await addDoc(collection(db, 'reports'), {
        reporterId: uid, reportedId: reportedUserId, reason, details, timestamp: Date.now()
      });
      return createRes({ success: true });
    }

    if (url.startsWith('/api/verify')) {
      await updateDoc(doc(db, 'users', uid), { verified: true });
      return createRes({ success: true });
    }

    return createRes({ error: "Unknown API route" }, 404);
  } catch (err) {
    console.error("Firebase API Mock Error:", err);
    return createRes({ error: "Internal Error" }, 500);
  }
};
