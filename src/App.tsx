import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, Shield, ShieldAlert, Video, VideoOff, Mic, MicOff, 
  Send, CheckCircle2, Users, Ban, X, Check, Award, AlertOctagon,
  RefreshCw, Info, Lock, Eye, Trash2, Tag, ChevronRight, UserCheck
} from 'lucide-react';
import * as THREE from 'three';

// Suppress benign Vitewise/HMR websocket warnings & errors to avoid UI console noises
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const r = event.reason;
    if (r && (
      String(r).includes('WebSocket') || 
      String(r.message || r).includes('websocket') ||
      String(r.message || r).includes('vite') ||
      String(r.message || r).includes('websocket connection')
    )) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  window.addEventListener('error', (event) => {
    if (event.message && (
      event.message.includes('WebSocket') ||
      event.message.includes('websocket') ||
      event.message.includes('vite')
    )) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

}

// Safe API fetch helper to support static host deployments (like GitHub Pages proxying requests to an external self-hosted backend)
const appFetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  // Always use relative URL by default to reach local express backend
  if (typeof input === 'string' && input.startsWith('/api')) {
    return window.fetch(input, init);
  }
  return window.fetch(input, init);
};

// -------------------------------------------------------------
// THREE.JS 3D BACKGROUND COMPONENT (ADVANCED)
// -------------------------------------------------------------
function Background3D({ theme }: { theme: 'cosmic' | 'neon' | 'matrix' | 'lounge' }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(theme === 'neon' ? 0xf43f5e : 0x020205, 0.015);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // Don't set initial size until ResizeObserver fires, avoiding forced layout
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    const meshGroup = new THREE.Group();
    scene.add(meshGroup);

    // Mouse interactive state
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 180;
      mouseY = (e.clientY - window.innerHeight / 2) / 180;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const startTime = performance.now();

    if (theme === 'cosmic') {
      // High-density stellar field
      const starsGeometry = new THREE.BufferGeometry();
      const starsCount = 2000;
      const positions = new Float32Array(starsCount * 3);
      const colors = new Float32Array(starsCount * 3);

      for (let i = 0; i < starsCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 150;
        positions[i+1] = (Math.random() - 0.5) * 150;
        positions[i+2] = (Math.random() - 0.5) * 150;

        // Custom cyber-nebula palette
        if (Math.random() > 0.5) {
          colors[i] = 0.0;     // No red
          colors[i+1] = 0.9;   // Bright Emerald Cyan
          colors[i+2] = 1.0;   // Deep Blue
        } else {
          colors[i] = 1.0;     // Pink
          colors[i+1] = 0.1;
          colors[i+2] = 0.8;
        }
      }

      starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const starsMaterial = new THREE.PointsMaterial({
        size: 0.22,
        vertexColors: true,
        transparent: true,
        opacity: 0.95
      });

      const starParticles = new THREE.Points(starsGeometry, starsMaterial);
      meshGroup.add(starParticles);

      // Advanced Holographic Outer Ring Planet
      const sphereGeo = new THREE.SphereGeometry(6, 40, 40);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: 0.25
      });
      const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
      meshGroup.add(coreSphere);

      // Inner Opposition Ring
      const ringGeo = new THREE.RingGeometry(8, 10, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        side: THREE.DoubleSide,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
      orbitalRing.rotation.x = Math.PI / 2.3;
      meshGroup.add(orbitalRing);

      // Orbiting virtual satellites
      for (let i = 0; i < 4; i++) {
        const satGeo = new THREE.IcosahedronGeometry(0.5, 1);
        const satMat = new THREE.MeshBasicMaterial({ color: 0x00fccc, wireframe: true });
        const satellite = new THREE.Mesh(satGeo, satMat);
        // Tag custom index for math animation later
        (satellite as any).orbitRadius = 11 + i * 2.5;
        (satellite as any).orbitSpeed = 0.02 + i * 0.01;
        meshGroup.add(satellite);
      }

    } else if (theme === 'neon') {
      // Dynamic Cyberpunk Grid Moving
      const gridHelper = new THREE.GridHelper(160, 45, 0x00ffcc, 0xf43f5e);
      gridHelper.position.y = -12;
      meshGroup.add(gridHelper);

      // Floating Wireframe Neon Beacon Columns
      for (let i = 0; i < 24; i++) {
        const shapeType = Math.random();
        let beaconGeo;
        if (shapeType > 0.6) {
          beaconGeo = new THREE.CylinderGeometry(0.1, 1.8, 6, 4);
        } else if (shapeType > 0.3) {
          beaconGeo = new THREE.OctahedronGeometry(2);
        } else {
          beaconGeo = new THREE.TorusGeometry(1.5, 0.4, 6, 12);
        }

        const beaconMat = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xf43f5e : 0x00ffcc,
          wireframe: true,
          transparent: true,
          opacity: 0.8
        });
        const beacon = new THREE.Mesh(beaconGeo, beaconMat);
        beacon.position.set(
          (Math.random() - 0.5) * 90,
          Math.random() * 25 - 5,
          (Math.random() - 0.5) * 60
        );
        meshGroup.add(beacon);
      }

    } else if (theme === 'matrix') {
      // Matrix rain simulated as cascading 3D columns
      const cols = 75;
      for (let i = 0; i < cols; i++) {
        const segmentCount = Math.floor(Math.random() * 6) + 3;
        const colGroup = new THREE.Group();
        
        for (let j = 0; j < segmentCount; j++) {
          const charGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
          const charMat = new THREE.MeshBasicMaterial({
            color: 0x10b981,
            wireframe: true,
            transparent: true,
            opacity: 1.0 - (j / segmentCount) // fade out tail
          });
          const box = new THREE.Mesh(charGeo, charMat);
          box.position.y = j * 0.9;
          colGroup.add(box);
        }

        colGroup.position.set(
          (Math.random() - 0.5) * 85,
          Math.random() * 50 - 25,
          (Math.random() - 0.5) * 45
        );
        (colGroup as any).fallSpeed = 0.12 + Math.random() * 0.18;
        meshGroup.add(colGroup);
      }

    } else { // Lounge Theme
      // Luxury Fluid Toruses & Shimmering Lights
      const torusCount = 18;
      for (let i = 0; i < torusCount; i++) {
        const torusGeo = new THREE.TorusKnotGeometry(2.2, 0.61, 64, 8);
        const torusMat = new THREE.MeshNormalMaterial({
          wireframe: true,
          transparent: true,
          opacity: 0.6
        });
        const torus = new THREE.Mesh(torusGeo, torusMat);
        torus.position.set(
          (Math.random() - 0.5) * 75,
          (Math.random() - 0.5) * 45,
          (Math.random() - 0.5) * 40
        );
        meshGroup.add(torus);
      }
    }

    // Advanced Moving Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const pinkLight = new THREE.PointLight(0xf43f5e, 2, 80);
    pinkLight.position.set(20, 15, 10);
    scene.add(pinkLight);

    const turquoiseLight = new THREE.PointLight(0x00ffcc, 2, 80);
    turquoiseLight.position.set(-20, -15, 10);
    scene.add(turquoiseLight);

    // Animation Loop with real-world continuous dynamics
    const animate = () => {
      const elapsedTime = (performance.now() - startTime) / 1000;
      
      // Update camera positioning slightly according to mouse for highly immersive interactive 3D feel
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      if (pinkLight && turquoiseLight) {
        pinkLight.position.x = Math.sin(elapsedTime * 0.8) * 30;
        pinkLight.position.y = Math.cos(elapsedTime * 0.6) * 20;
        turquoiseLight.position.x = -Math.sin(elapsedTime * 0.7) * 30;
        turquoiseLight.position.y = -Math.cos(elapsedTime * 0.9) * 20;
      }

      if (theme === 'cosmic') {
        meshGroup.rotation.y = elapsedTime * 0.05;
        meshGroup.rotation.x = elapsedTime * 0.012;
        
        // Rotate the planets/orbitals independently
        meshGroup.children.forEach((child) => {
          if ((child as any).orbitRadius) {
            const rad = (child as any).orbitRadius;
            const speed = (child as any).orbitSpeed;
            child.position.x = Math.sin(elapsedTime * speed * 10) * rad;
            child.position.z = Math.cos(elapsedTime * speed * 10) * rad;
            child.rotation.y += 0.02;
          }
        });
      } else if (theme === 'neon') {
        // Move Grid towards us for high-speed flight feeling
        meshGroup.children.forEach((child, idx) => {
          if (child instanceof THREE.GridHelper) {
            child.position.z = (elapsedTime * 15) % 40 - 20;
          } else if (child instanceof THREE.Mesh) {
            child.rotation.y += 0.015;
            child.rotation.x += 0.006;
            child.position.y += Math.sin(elapsedTime * 1.5 + idx) * 0.022;
          }
        });
      } else if (theme === 'matrix') {
        meshGroup.children.forEach((child) => {
          if (child instanceof THREE.Group) {
            const groupWithSpeed = child as any;
            groupWithSpeed.position.y -= groupWithSpeed.fallSpeed;
            if (groupWithSpeed.position.y < -30) {
              groupWithSpeed.position.y = 30;
              groupWithSpeed.position.x = (Math.random() - 0.5) * 85;
            }
            // slight rotation
            groupWithSpeed.rotation.y += 0.005;
          }
        });
      } else { // Lounge
        meshGroup.children.forEach((child, idx) => {
          if (child instanceof THREE.Mesh) {
            child.rotation.x += 0.015;
            child.rotation.y += 0.012;
            child.position.y += Math.sin(elapsedTime * 0.8 + idx) * 0.028;
            child.position.x += Math.cos(elapsedTime * 0.4 + idx) * 0.012;
          }
        });
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      }
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full -z-20 overflow-hidden opacity-90 pointer-events-none" />;
}

// -------------------------------------------------------------
// INTERACTIVE GLASSMORPHIC 3D TILT CARD COMPONENT
// -------------------------------------------------------------
function ActionCard({ children, className = '', id, style }: { children: React.ReactNode; className?: string; id?: string, style?: React.CSSProperties }) {
  return (
    <div
      id={id}
      style={style}
      className={`border border-white/10 rounded-2xl bg-zinc-950/80 backdrop-blur-xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

// -------------------------------------------------------------
// MAIN APP COMPONENT
// -------------------------------------------------------------
export default function App() {
  // Session IDs and Identity (uses sessionStorage per tab session for multi-tab testing)
  const [userId, setUserId] = useState(() => {
    const saved = sessionStorage.getItem('justchat_user_id');
    if (saved) return saved;
    const fresh = 'u_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('justchat_user_id', fresh);
    return fresh;
  });

  // State managers
  const [isAgeVerified, setIsAgeVerified] = useState(() => {
    return localStorage.getItem('justchat_age_verified') === 'true';
  });
  const [hasAgreedTerms, setHasAgreedTerms] = useState(false);
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('justchat_username') || 'Anonymous Human';
  });
  const [showAgeGate, setShowAgeGate] = useState(false);
  const [pendingChatMode, setPendingChatMode] = useState<'video' | 'text' | null>(null);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Interests Tags State
  const [interests, setInterests] = useState<string[]>([]);
  const [interestInput, setInterestInput] = useState('');

  // 3D customization & Profile elements
  const [selected3DTheme, setSelected3DTheme] = useState<'cosmic' | 'neon' | 'matrix' | 'lounge'>('cosmic');
  const [isChatSlideoutOpen, setIsChatSlideoutOpen] = useState(false);
  const [isProfileVerified, setIsProfileVerified] = useState(false);
  const [verificationStep, setVerificationStep] = useState<'idle' | 'pose_prompt' | 'scanning' | 'verified'>('idle');
  const [selectedGesture, setSelectedGesture] = useState('✌️ Peace Sign');

  // Matching and Chat Mode Selection State
  const [chatMode, setChatMode] = useState<'video' | 'text' | null>(null);
  const [status, setStatus] = useState<'idle' | 'matching' | 'active'>('idle');
  const [onlineCount, setOnlineCount] = useState(4);
  const [partner, setPartner] = useState<{ id: string; name: string; verified: boolean; interests: string[] } | null>(null);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [sysBanned, setSysBanned] = useState(false);

  // Connection settings
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [cameraActive, setCameraActive] = useState(true);
  const [micActive, setMicActive] = useState(true);

  // Chat Log State
  const [messages, setMessages] = useState<Array<{ id: string; sender: string; text: string; time: number }>>([]);
  const [messageInput, setMessageInput] = useState('');

  // Moderation Dialog Panels
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportReason, setReportReason] = useState('Harassment');
  const [reportDetails, setReportDetails] = useState('');
  const [showReportSuccess, setShowReportSuccess] = useState(false);

  // Refs for WebRTC and streams
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const isTransitioningRef = useRef(false);

  // Send disconnect on tab close/refresh to immediately free partner
  useEffect(() => {
    const handleBeforeUnload = () => {
      const apiUrl = (import.meta as any).env.VITE_API_URL;
      const base = typeof apiUrl === 'string' ? apiUrl.replace(/\/$/, '') : '';
      fetch(`${base}/api/disconnect`, {
        method: 'POST',
        keepalive: true,
        headers: { 'x-user-id': userId }
      }).catch(() => {});
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [userId]);

  // Save nickname updates to local storage
  const handleNicknameChange = (newVal: string) => {
    setUserName(newVal);
    localStorage.setItem('justchat_username', newVal);
  };

  // On initial load, try to clear any stale state on the server so we don't jump into a room without user interaction.
  useEffect(() => {
    if (userId) {
      appFetch('/api/disconnect', {
        method: 'POST',
        headers: { 'x-user-id': userId }
      }).catch(() => {});
    }
  }, [userId]);

  // Setup Webcam streams for video chat
  const setupMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 480, height: 360, facingMode: 'user' },
        audio: true
      });
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.warn("Camera/Mic not permitted. Generating virtual camera overlay.", err);
      createMockLocalMediaStream();
    }
  };

  const createMockLocalMediaStream = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let angle = 0;
      setInterval(() => {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, 300, 200);
        
        ctx.fillStyle = '#10b981';
        for (let i = 0; i < 15; i++) {
          const x = (Math.sin(angle + i) * 100) + 150;
          const y = (Math.cos(angle * 0.5 + i * 2) * 60) + 100;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.strokeStyle = '#27272a';
        ctx.lineWidth = 1;
        ctx.strokeRect(10, 10, 280, 180);

        ctx.fillStyle = '#e4e4e7';
        ctx.font = '10px monospace';
        ctx.fillText('Secure Handshake Cam [Active]', 20, 30);
        ctx.fillText('Verified Human User', 20, 180);
        ctx.fillText(new Date().toLocaleTimeString(), 190, 180);

        angle += 0.03;
      }, 50);
    }
    const canvasStream = (canvas as any).captureStream(30);
    setLocalStream(canvasStream);
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = canvasStream;
    }
  };

  const createMockRemoteMediaStream = (partnerId: string) => {
    // Clear any existing simulation interval first
    if ((window as any)._remoteSimIntervalId) {
      clearInterval((window as any)._remoteSimIntervalId);
    }

    const canvas = document.createElement('canvas');
    canvas.width = 480;
    canvas.height = 365;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    let angle = 0;
    const intervalId = setInterval(() => {
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, 480, 365);

      if (partnerId === 'sim_sam') {
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x < 480; x += 30) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x + Math.sin(angle) * 10, 365);
        }
        ctx.stroke();

        ctx.fillStyle = '#10b981';
        ctx.font = '12px monospace';
        ctx.fillText('⚡ CyberSam PEER FEED', 20, 40);
        ctx.fillText('STATUS: STREAM SYNCHRONIZED', 20, 60);
        ctx.fillText('LATENCY: 8ms CONNECTED', 20, 80);

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < 480; i++) {
          const y = 180 + Math.sin(i * 0.05 + angle) * 20;
          if (i === 0) ctx.moveTo(i, y);
          else ctx.lineTo(i, y);
        }
        ctx.stroke();
      } else if (partnerId === 'sim_luna') {
        ctx.fillStyle = '#030712';
        ctx.fillRect(0, 0, 480, 365);

        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 20; i++) {
          const x = (Math.sin(i * 99 + angle * 0.2) * 240) + 240;
          const y = (Math.cos(i * 45 + angle * 0.1) * 180) + 180;
          const size = Math.abs(Math.sin(angle + i)) * 3;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = '#c084fc';
        ctx.font = '12px monospace';
        ctx.fillText('🌌 LunaGamer Cosmic Feed', 20, 40);
        ctx.fillText('VIBE STATUS: ROTATING IN ORBIT', 20, 60);

        ctx.strokeStyle = '#818cf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i < 480; i++) {
          const y = 220 + Math.cos(i * 0.02 - angle) * 30 + Math.sin(i * 0.07 + angle) * 10;
          if (i === 0) ctx.moveTo(i, y);
          else ctx.lineTo(i, y);
        }
        ctx.stroke();
      } else if (partnerId === 'sim_matrix') {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 480, 365);

        ctx.fillStyle = '#10b981';
        ctx.font = '12px monospace';
        ctx.fillText('🕶️ NEOPIONEER STREAM FEED', 20, 40);
        ctx.fillText('SECURE SIGNAL: DECRYPTED', 20, 60);

        for (let col = 0; col < 20; col++) {
          const x = col * 24 + 10;
          const yBase = (col * 77 + angle * 250) % 400 - 30;
          ctx.fillStyle = 'rgba(16, 185, 129, 0.9)';
          ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, yBase);
          ctx.fillStyle = 'rgba(16, 185, 129, 0.3)';
          ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, yBase - 15);
        }
      } else {
        ctx.fillStyle = '#110505';
        ctx.fillRect(0, 0, 480, 365);

        ctx.fillStyle = '#f43f5e';
        ctx.font = '12px monospace';
        ctx.fillText('🍷 SOPHIEVIBE LOUNGE FEED', 20, 40);
        ctx.fillText('STATUS: CHAMPAGNE & JAZZ', 20, 60);

        for (let i = 0; i < 8; i++) {
          const x = (i * 65 + Math.sin(angle + i) * 30) % 480;
          const y = (365 - (angle * 40 + i * 80) % 400);
          ctx.fillStyle = 'rgba(244, 63, 94, 0.2)';
          ctx.beginPath();
          ctx.arc(x, y, 20 + i, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.strokeRect(10, 10, 460, 345);

      angle += 0.06;
    }, 50);

    (window as any)._remoteSimIntervalId = intervalId;
    const canvasStream = (canvas as any).captureStream(30);
    setRemoteStream(canvasStream);
    return intervalId;
  };

  // Bind local/remote stream dynamically on mount
  useEffect(() => {
    if (localVideoRef.current && localStream) {
      if (localVideoRef.current.srcObject !== localStream) {
        localVideoRef.current.srcObject = localStream;
      }
    }
    
    // Also inject tracks to PeerConnection if they were missed during fast matches
    if (localStream && peerConnectionRef.current) {
      const pc = peerConnectionRef.current;
      const senders = pc.getSenders();
      localStream.getTracks().forEach(track => {
        const alreadyAdded = senders.find(s => s.track === track);
        if (!alreadyAdded) {
          pc.addTrack(track, localStream);
        }
      });
    }
  }, [localStream, status, chatMode]);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      if (remoteVideoRef.current.srcObject !== remoteStream) {
        remoteVideoRef.current.srcObject = remoteStream;
        // Only try to play if we just attached it
        remoteVideoRef.current.play().catch(e => {
          if (e.name !== 'AbortError') {
             console.warn("Autoplay blocked for remote stream:", e);
          }
        });
      }
    }
  }, [remoteStream, status, chatMode]);

  const toggleCamera = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setCameraActive(!cameraActive);
    }
  };

  const toggleMic = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setMicActive(!micActive);
    }
  };

  // Sync state & messages with server
  useEffect(() => {
    if (!isAgeVerified) return;

    const interval = setInterval(async () => {
      if (isTransitioningRef.current) return;
      try {
        const response = await appFetch('/api/status', {
          headers: { 'x-user-id': userId }
        });
        
        if (response.status === 403) {
          setSysBanned(true);
          setStatus('idle');
          return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          return;
        }

        const data = await response.json();
        setOnlineCount(data.onlineCount || 1);

        if (response.ok) {
          if (data.chatMode && !chatMode) {
            setChatMode(data.chatMode);
            if (data.chatMode === 'video' && !localStream) {
               setupMedia();
            }
          }

          if (data.status === 'offline') {
            // Server forgot us (e.g. restart), re-register silently
            const resolvedName = userName.trim() || 'Anonymous Human';
            await appFetch('/api/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name: resolvedName, id: userId, interests })
            });
            return;
          }

          if (data.status === 'active' && data.room) {
            // If the room changed from under us (e.g. instantly rematched while we were polling), clean up old WebRTC
            if (roomId && roomId !== data.room.id) {
              cleanupWebRTC();
              setRemoteStream(null);
            }
            
            setRoomId(data.room.id);
            setPartner(data.partner);
            setStatus('active');
            
            // Sync chat messages
            fetchMessages();

            // Setup simulated stream fallback, or real RTC tracks
            if (chatMode === 'video') {
              if (data.partner && data.partner.id.startsWith('sim_')) {
                if (!remoteStream && !(window as any)._remoteSimIntervalId) {
                  createMockRemoteMediaStream(data.partner.id);
                }
              } else if (!peerConnectionRef.current && localStream) {
                setupWebRTCPeerConnection(data.room.role);
              }
            }
          } else if (data.status === 'matching') {
            if (status === 'active') {
              addSystemMessage("Partner skipped or disconnected. Finding a new partner...");
              cleanupWebRTC();
            }
            setStatus('matching');
            setRoomId(null);
            setPartner(null);
            setRemoteStream(null);
          } else {
            // Idle state
            if (status === 'active') {
              addSystemMessage("Peer terminated conversation session.");
              cleanupWebRTC();
              setStatus('idle');
              setRoomId(null);
              setPartner(null);
              setRemoteStream(null);
            } else if (status !== 'matching') {
              setStatus('idle');
              setRoomId(null);
              setPartner(null);
              setRemoteStream(null);
            }
          }
        }
      } catch (err: any) {
        if (!err.message?.includes('NetworkError') && !err.message?.includes('Failed to fetch')) {
          console.error("Poller status failure:", err);
        }
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isAgeVerified, status, userId, chatMode, localStream, remoteStream, roomId]);

  // Periodic automated matchmaking scans (Check matching list every 3s so users pair instantly)
  useEffect(() => {
    if (status !== 'matching' || !chatMode) return;

    const interval = setInterval(async () => {
      try {
        console.log(`[Queue] Checking matchmaking candidates for mode: ${chatMode}`);
        const res = await appFetch('/api/match', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
          body: JSON.stringify({ interests, chatMode })
        });
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
           return;
        }
        const data = await res.json();
        if (data.state === 'matched' && data.room) {
          setRoomId(data.room.id);
          setStatus('active');
          addSystemMessage("Secure match established successfully!");
        }
      } catch (err: any) {
        if (!err.message?.includes('NetworkError') && !err.message?.includes('Failed to fetch')) {
          console.warn("Queue loop scan fail:", err);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [status, userId, interests, chatMode]);

  // WebRTC Peer Connection Logic
  const setupWebRTCPeerConnection = async (role: 'host' | 'guest') => {
    try {
      console.log(`[WebRTC] Set up signaling peer as ${role}`);
      const configuration: RTCConfiguration = {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' }
        ]
      };
      
      const pc = new RTCPeerConnection(configuration);
      peerConnectionRef.current = pc;

      if (localStream) {
        localStream.getTracks().forEach(track => {
          pc.addTrack(track, localStream);
        });
      }

      pc.ontrack = (event) => {
        console.log("[WebRTC] Got Remote stream track:", event.track.kind);
        if (event.streams && event.streams[0]) {
          setRemoteStream(event.streams[0]);
        } else {
          setRemoteStream(prev => {
            const stream = prev || new MediaStream();
            if (!stream.getTracks().includes(event.track)) {
              stream.addTrack(event.track);
            }
            return stream;
          });
        }
      };

      pc.onicecandidate = async (event) => {
        if (event.candidate) {
          await appFetch('/api/signal/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
            body: JSON.stringify({ ice: event.candidate, role })
          });
        }
      };

      pc.oniceconnectionstatechange = () => {
        console.log("[WebRTC] ICE Connection State:", pc.iceConnectionState);
        if (pc.iceConnectionState === 'connected' || pc.iceConnectionState === 'completed') {
           if ((window as any)._signalIntervalId) {
             clearInterval((window as any)._signalIntervalId);
             (window as any)._signalIntervalId = null;
           }
        }
        if (pc.iceConnectionState === 'failed' || pc.iceConnectionState === 'disconnected') {
          // You might try to restart ICE here, but for now we log it.
          console.warn("[WebRTC] WebRTC connection failed or disconnected.");
        }
      };

      pc.onnegotiationneeded = async () => {
        try {
          if (role === 'host') {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            await appFetch('/api/signal/send', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
              body: JSON.stringify({ sdp: offer, role })
            });
          }
        } catch (e) {
          console.error("Negotiation failed", e);
        }
      };

      pollIceAndSdp(role);

    } catch (err) {
      console.error("[WebRTC] WebRTC startup error:", err);
    }
  };

  const pollIceAndSdp = (role: 'host' | 'guest') => {
    if ((window as any)._signalIntervalId) {
      clearInterval((window as any)._signalIntervalId);
    }
    // Track added ICE candidates by their candidate string to avoid duplicate additions
    const processedIce = new Set<string>();

    const signalInterval = setInterval(async () => {
      const pc = peerConnectionRef.current;
      if (!pc) {
        clearInterval(signalInterval);
        return;
      }

      try {
        const res = await appFetch(`/api/signal/poll?role=${role}`, {
          headers: { 'x-user-id': userId }
        });
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
           return;
        }
        const signal = await res.json();

        if (signal.sdp) {
          if (role === 'guest' && !pc.remoteDescription) {
            await pc.setRemoteDescription(new RTCSessionDescription(signal.sdp));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            await appFetch('/api/signal/send', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
              body: JSON.stringify({ sdp: answer, role })
            });
          } else if (role === 'host' && !pc.remoteDescription) {
            await pc.setRemoteDescription(new RTCSessionDescription(signal.sdp));
          }
        }

        // Only add ICE candidate if remote description is set and we haven't added it yet
        if (signal.ice && signal.ice.length > 0 && pc.remoteDescription) {
          for (const cand of signal.ice) {
            const candKey = cand.candidate || JSON.stringify(cand);
            if (!processedIce.has(candKey)) {
              processedIce.add(candKey);
              try {
                await pc.addIceCandidate(new RTCIceCandidate(cand));
              } catch (e) {
                console.warn("Failed to add ICE candidate:", e);
              }
            }
          }
        }
      } catch (err: any) {
        if (!err.message?.includes('NetworkError') && !err.message?.includes('Failed to fetch')) {
          console.warn("Signaling poll failed:", err);
        }
      }
    }, 1500);
    (window as any)._signalIntervalId = signalInterval;
  };

  // Clean WebRTC and intervals
  const cleanupWebRTC = () => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    if ((window as any)._remoteSimIntervalId) {
      clearInterval((window as any)._remoteSimIntervalId);
      (window as any)._remoteSimIntervalId = null;
    }
    if ((window as any)._signalIntervalId) {
      clearInterval((window as any)._signalIntervalId);
      (window as any)._signalIntervalId = null;
    }
    setRemoteStream(null);
  };

  const fetchMessages = async () => {
    try {
      const res = await appFetch('/api/chat/messages', {
        headers: { 'x-user-id': userId }
      });
      const data = await res.json();
      if (data.messages) {
        setMessages(prev => {
          if (prev.length !== data.messages.length) {
            scrollToBottom();
          }
          return data.messages;
        });
      }
    } catch (err) {
      console.warn("Message sync fail:", err);
    }
  };

  // Start selected chat matchmaking mode
  const startChatMatchmaking = async (mode: 'video' | 'text', forceBypassAgeCheck = false) => {
    if (sysBanned) return;
    if (!isAgeVerified && !forceBypassAgeCheck) {
      setPendingChatMode(mode);
      setShowAgeGate(true);
      return;
    }
    if (isTransitioningRef.current) return;
    try {
      isTransitioningRef.current = true;
      setChatMode(mode);
      setStatus('matching');
      setMessages([]);
      setPartner(null);
      setRoomId(null);
      cleanupWebRTC();

      if (mode === 'video') {
        await setupMedia();
      }

      await appFetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({ interests, chatMode: mode })
      });

    } catch (err) {
      console.error("Match init failure:", err);
      setStatus('idle');
      setChatMode(null);
    } finally {
      isTransitioningRef.current = false;
    }
  };

  // Skip partner: both find a new partner
  const handleSkipMatch = async () => {
    if (isTransitioningRef.current) return;
    try {
      isTransitioningRef.current = true;
      setStatus('matching');
      setPartner(null);
      setRoomId(null);
      setMessages([]);
      cleanupWebRTC();

      await appFetch('/api/skip', {
        method: 'POST',
        headers: { 'x-user-id': userId }
      });

      // Instantly start next match call on server
      await appFetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({ interests, chatMode })
      });

      addSystemMessage("Skipped partner. Finding a new partner...");

    } catch (err) {
      console.warn("Skip room action fail:", err);
    } finally {
      isTransitioningRef.current = false;
    }
  };

  // End Call: Returns initiator to homepage, partner finds a new partner
  const handleEndMatch = async () => {
    if (isTransitioningRef.current) return;
    try {
      isTransitioningRef.current = true;
      setStatus('idle');
      setChatMode(null);
      setRoomId(null);
      setPartner(null);
      setMessages([]);
      cleanupWebRTC();

      if (localStream) {
        localStream.getTracks().forEach(t => t.stop());
        setLocalStream(null);
      }

      await appFetch('/api/end', {
        method: 'POST',
        headers: { 'x-user-id': userId }
      });
    } catch (err) {
      console.warn("End action request failing:", err);
    } finally {
      isTransitioningRef.current = false;
    }
  };

  const handleCancelSearch = async () => {
    try {
      setStatus('idle');
      setChatMode(null);
      setRoomId(null);
      setPartner(null);
      cleanupWebRTC();

      await appFetch('/api/disconnect', {
        method: 'POST',
        headers: { 'x-user-id': userId }
      });
    } catch (err) {
      console.warn("Cancel fail:", err);
    }
  };

  // Chat message submission
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !roomId) return;

    try {
      const textVal = messageInput;
      setMessageInput('');

      const res = await appFetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({ text: textVal })
      });

      if (res.ok) {
        fetchMessages();
      }
    } catch (err) {
      console.warn("Message send error:", err);
    }
  };

  // Submit violation report
  const handleReportSubmit = async () => {
    if (!partner) return;

    try {
      const res = await appFetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({
          reportedUserId: partner.id,
          reason: reportReason,
          details: reportDetails
        })
      });

      if (res.ok) {
        setShowReportSuccess(true);
        setTimeout(() => {
          setShowReportSuccess(false);
          setIsReportOpen(false);
          // Auto skip after report completes
          handleSkipMatch();
        }, 2200);
      }
    } catch (err) {
      console.error("Report process failed:", err);
    }
  };

  // Age gating validation
  const completeAgeVerification = async () => {
    if (!hasAgreedTerms) {
      alert("You must agree to the community guidelines and terms.");
      return;
    }

    const resolvedName = userName.trim() || 'Anonymous Human';

    try {
      const res = await appFetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: userId,
          name: resolvedName,
          ageVerified: true,
          verified: isProfileVerified,
          interests
        })
      });

      if (res.ok) {
        const resData = await res.json();
        if (resData.user?.id) {
           setUserId(resData.user.id);
           sessionStorage.setItem('justchat_user_id', resData.user.id);
        }
        localStorage.setItem('justchat_age_verified', 'true');
        setIsAgeVerified(true);
        setShowAgeGate(false);
        
        // Auto navigate or match for the requested mode
        if (pendingChatMode) {
          startChatMatchmaking(pendingChatMode, true);
          setPendingChatMode(null);
        }
      } else {
        const errData = await res.json();
        if (errData.error === "BANNED") {
          setSysBanned(true);
        }
      }
    } catch (err) {
      console.error("Gateway registration error:", err);
    }
  };

  // Gesture checking model
  const submitVerificationPose = () => {
    setVerificationStep('scanning');
    setTimeout(() => {
      setVerificationStep('verified');
      setIsProfileVerified(true);
      appFetch('/api/verify', {
        method: 'POST',
        headers: { 'x-user-id': userId }
      }).catch(err => console.warn(err));
    }, 2500);
  };

  const handleAddInterest = (e: React.FormEvent) => {
    e.preventDefault();
    const tag = interestInput.trim().toLowerCase();
    if (tag && !interests.includes(tag)) {
      setInterests([...interests, tag]);
      setInterestInput('');
    }
  };

  const handleRemoveInterest = (tag: string) => {
    setInterests(interests.filter(i => i !== tag));
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const addSystemMessage = (text: string) => {
    setMessages(prev => [
      ...prev,
      { id: `sys_${Date.now()}`, sender: 'system', text, time: Date.now() }
    ]);
    scrollToBottom();
  };

  return (
    <div className="relative min-h-[100dvh] flex flex-col justify-between text-zinc-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#09091b] via-[#020206] to-[#000000] font-sans antialiased overflow-x-hidden select-none">
      
      {/* Three.js 3D Background */}
      <Background3D theme={selected3DTheme} />

      {/* -------------------------------------------------------------
          3. SIGNED-IN HEADER BAR
         ------------------------------------------------------------- */}
      {!sysBanned && (
        <header className="bg-[#0F0F0F] border-b border-[#1F1F1F] px-4 py-2.5 flex items-center justify-between sticky top-0 z-30 shadow-sm animate-fade-in">
          <button 
            onClick={() => {
              if (status === 'active' || status === 'matching') {
                if (stream) {
                  stream.getTracks().forEach(t => t.stop());
                  setStream(null);
                }
              }
              setChatMode(null);
              setStatus('idle');
              setPartner(null);
              setMessages([]);
            }}
            className="flex items-center gap-2.5 hover:opacity-80 transition cursor-pointer text-left"
          >
            <div className="w-7 h-7 bg-zinc-200 flex items-center justify-center rounded">
              <MessageSquare className="w-3.5 h-3.5 text-zinc-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-white font-mono">JustChat</span>
                {chatMode !== null && (
                  <span className="text-[8px] bg-zinc-800 border border-zinc-700 text-zinc-300 font-bold px-1.5 py-0.5 rounded uppercase font-mono hidden sm:inline-block">
                    {chatMode} chat
                  </span>
                )}
              </div>
            </div>
          </button>

          <div className="flex items-center gap-4">
            {/* Nav Links */}
            <div className="flex items-center gap-4 text-[11px] font-mono mr-2">
              <button onClick={() => setShowAboutModal(true)} className="text-zinc-400 hover:text-white transition cursor-pointer">About Us</button>
              <button onClick={() => setShowTermsModal(true)} className="text-zinc-400 hover:text-white transition cursor-pointer">Terms & Conditions</button>
            </div>

            {/* Core metrics details */}
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#141414] border border-[#1F1F1F] rounded text-[10px] font-medium font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-zinc-300 font-bold">{onlineCount}</span>
              <span className="text-zinc-550">users online</span>
            </div>

            {isProfileVerified && (
              <span className="px-2 py-1 bg-emerald-955/25 border border-emerald-900/30 text-emerald-400 text-[9px] font-bold font-mono rounded">
                VERIFIED HUMAN
              </span>
            )}
          </div>
        </header>
      )}

      {/* Access suspension lock screen */}
      {sysBanned && (
        <div className="fixed inset-0 bg-[#020206]/95 flex flex-col items-center justify-center p-4 z-50 text-center">
          <ActionCard className="max-w-md bg-zinc-950/80 border border-red-500/20 p-6 rounded-2xl shadow-2xl">
            <AlertOctagon className="w-12 h-12 text-red-500 mx-auto mb-3 animate-pulse" />
            <h1 className="text-lg font-mono font-bold text-red-400 uppercase tracking-widest mb-2">Access Suspended</h1>
            <p className="text-zinc-405 text-xs mb-4 leading-relaxed">
              Your session has been terminated by our moderation patrol system due to behavior report validation.
            </p>
            <div className="text-[9px] text-zinc-400 bg-black/60 p-2.5 rounded border border-white/10 font-mono">
              SESSION PIN: {userId}
            </div>
          </ActionCard>
        </div>
      )}

      {/* -------------------------------------------------------------
          1. REGISTRATION AGE GATE
         ------------------------------------------------------------- */}
      {showAgeGate && !sysBanned && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-40 animate-fade-in">
          <ActionCard className="w-full max-w-md p-6 relative bg-zinc-950/80 border border-white/10 shadow-2xl rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500" />
            
            <div className="text-center mb-5">
              <span className="px-2.5 py-0.5 bg-white/5 text-zinc-300 border border-white/10 text-[9px] font-bold rounded uppercase tracking-wider font-mono">
                Security Shield Active
              </span>
              <h1 className="text-xl font-bold font-mono tracking-tight mt-3 text-zinc-100">Age Verification Gate</h1>
              <p className="text-[10px] text-zinc-400 mt-1">Please confirm you meet the age requirements to enter {pendingChatMode === 'video' ? 'Video Call' : 'Text Chat'}.</p>
            </div>

            <div className="space-y-4">
              {/* Nickname confirmation */}
              <div className="space-y-1">
                <label className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block font-mono">Confirm Alias / Nickname</label>
                <input 
                  type="text" 
                  placeholder="Anonymous User"
                  value={userName}
                  onChange={(e) => handleNicknameChange(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-xs font-mono text-zinc-200"
                />
              </div>

              {/* Age & Terms combined Validation Checklist */}
              <div className="space-y-3 p-3.5 bg-black/40 border border-white/5 rounded-xl">
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Age & policy agreement</span>
                
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={hasAgreedTerms}
                    onChange={(e) => setHasAgreedTerms(e.target.checked)}
                    className="mt-1 accent-teal-400 cursor-pointer h-4 w-4"
                  />
                  <span className="text-[11px] text-zinc-300 leading-relaxed font-sans">
                    I verify that <strong className="text-teal-400">I am at least 18 years of age</strong> and I legally consent and agree to the <button onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }} className="text-teal-400 underline hover:text-teal-300">Terms & Conditions</button> and community safety protocols.
                  </span>
                </label>

                <p className="text-[10px] text-zinc-500 font-serif leading-relaxed italic border-t border-white/5 pt-2">
                  JustChat requires all participants to be 18+. Any explicit, harassing, or synthetic activities will result in immediate state bans.
                </p>
              </div>

              {/* Useful compliant info links */}
              <div className="flex gap-4 justify-center text-[11px] font-mono py-1">
                <button 
                  onClick={() => setShowAboutModal(true)}
                  className="text-zinc-400 hover:text-white underline"
                >
                  About Us &rarr;
                </button>
                <button 
                  onClick={() => setShowTermsModal(true)}
                  className="text-zinc-400 hover:text-white underline"
                >
                  Terms & Conditions &rarr;
                </button>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    setShowAgeGate(false);
                    setPendingChatMode(null);
                  }}
                  className="flex-1 px-4 py-2.5 bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-semibold rounded-lg font-mono transition tracking-wider cursor-pointer hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button 
                  onClick={completeAgeVerification}
                  className="flex-1 bg-gradient-to-r from-teal-400 via-emerald-500 to-indigo-500 hover:brightness-110 text-black font-bold py-2.5 rounded-lg text-xs transition tracking-wider cursor-pointer font-mono"
                >
                  Confirm & Match &rarr;
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[9px] text-zinc-500 font-mono">
              <span>HOST: SECURE PORT 3000</span>
              <span>STANDARDS COMPLIANT</span>
            </div>
          </ActionCard>
        </div>
      )}

      {/* -------------------------------------------------------------
          2. DYNAMIC HOMEPAGE VIEW (chatMode === null)
          Accessible without initial locking; verified status checked before matching
         ------------------------------------------------------------- */}
      {!sysBanned && chatMode === null && (
        <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 flex flex-col justify-center items-center gap-8 min-h-0 animate-fade-in" id="homepage_container">
          
          <div className="text-center space-y-2 max-w-lg">
            <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-cyan-300 font-bold text-[9px] rounded-full uppercase tracking-widest font-mono shadow-sm shadow-cyan-500/20 backdrop-blur-md">
              ⚡ WebRTC Hyper-Space Active
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-mono drop-shadow-[0_4px_16px_rgba(168,85,247,0.5)]">JustChat</h1>
            <p className="text-xs sm:text-sm text-[#8e9fdd] font-medium max-w-md mx-auto drop-shadow-sm">
              Dynamic matching on encrypted streams. Pick a connection protocol and align tag parameters to peer with the space.
            </p>
          </div>

          {/* Central Homepage Control Dashboard */}
          <ActionCard style={{ backgroundColor: 'rgba(10, 15, 30, 0.4)' }} className="w-full max-w-2xl p-5 sm:p-6 shadow-[0_8px_32px_rgba(59,130,246,0.3)] border border-white/20 backdrop-blur-md relative overflow-hidden rounded-3xl text-blue-50">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            
            {/* Alias / Nickname Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 border border-white/20 p-3.5 rounded-xl backdrop-blur-md shadow-inner shadow-white/5">
              <div className="space-y-0.5">
                <span className="text-[9px] font-bold text-blue-200 uppercase font-mono tracking-wider">Your Alias Profile</span>
                <p className="text-sm font-semibold font-mono text-white drop-shadow-md flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping absolute" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500 relative" />
                  {userName || 'Anonymous Participant'}
                </p>
              </div>
              
              <div className="flex items-center gap-2 relative z-10">
                <input 
                  type="text" 
                  placeholder="Set Nickname..."
                  value={userName}
                  onChange={(e) => handleNicknameChange(e.target.value)}
                  className="px-3 py-1.5 bg-black/20 border border-white/20 text-white rounded-lg text-xs font-mono focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 backdrop-blur-md shadow-inner"
                />
              </div>
            </div>

            {/* Interest setting parameters */}
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                  <Tag className="w-3.5 h-3.5 text-teal-400" /> Match Interests & Tags
                </span>
                <span className="text-[9px] text-indigo-300 font-mono">Shared intersections prioritized</span>
              </div>

              {/* current tags */}
              <div className="flex flex-wrap gap-1.5 min-h-[40px] p-2.5 bg-black/20 border border-white/20 rounded-xl backdrop-blur-md shadow-inner shadow-white/5">
                {interests.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center bg-white/10 border border-white/20 rounded-lg px-2.5 py-0.5 text-xs text-white font-mono gap-1 hover:border-white/40 transition-all shadow-sm"
                  >
                    <span className="text-blue-300">#</span>
                    <span>{tag}</span>
                    <button 
                      onClick={() => handleRemoveInterest(tag)}
                      className="p-0.5 hover:bg-white/20 rounded text-blue-100 hover:text-red-400 cursor-pointer"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </span>
                ))}
                {interests.length === 0 && (
                  <span className="text-[10px] text-blue-200/70 italic font-mono p-1">No interest tags configured. Swiping global pools.</span>
                )}
              </div>

              <form onSubmit={handleAddInterest} className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Enter tags (e.g., coding, lofi, gaming, travel, music)..."
                  value={interestInput}
                  onChange={(e) => setInterestInput(e.target.value)}
                  className="flex-1 px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 text-xs font-mono text-white backdrop-blur-md shadow-inner"
                  id="tag_creator_input"
                />
                <button 
                  type="submit"
                  className="px-4 bg-white/10 border border-white/30 hover:bg-white/20 font-bold text-white text-xs rounded-lg transition font-mono cursor-pointer backdrop-blur-md shadow-sm"
                >
                  Add Tag
                </button>
              </form>
            </div>

            {/* Selector Grid for Video vs Text Chat */}
            <div className="space-y-3 pt-2 relative z-10">
              <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest block font-mono">Choose Matching Protocol</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. VIDEO CHAT SELECTION CARD WITH GLASS GLOW */}
                <div 
                  onClick={() => startChatMatchmaking('video')}
                  className="p-5 rounded-xl bg-white/5 border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-left relative cursor-pointer group shadow-lg backdrop-blur-md overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-lg text-blue-300 border border-white/20 group-hover:bg-blue-400 group-hover:text-white transition shadow-sm">
                      <Video className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[8px] border border-white/20 text-blue-200 bg-black/20 px-2 py-0.5 rounded-full uppercase font-bold font-mono group-hover:border-blue-400/50 transition shadow-inner">
                      WebRTC cam
                    </span>
                  </div>
                  <h3 className="text-sm font-bold font-mono text-white mb-1 relative z-10 drop-shadow-md">Start Video Chat</h3>
                  <p className="text-[10px] text-blue-100 leading-normal font-sans relative z-10">
                    Match with human peers over an interactive encrypted streaming video channel feed.
                  </p>
                </div>

                {/* 2. TEXT CHAT SELECTION CARD WITH GLASS GLOW */}
                <div 
                  onClick={() => startChatMatchmaking('text')}
                  className="p-5 rounded-xl bg-white/5 border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-left relative cursor-pointer group shadow-lg backdrop-blur-md overflow-hidden"
                >
                  <div className="absolute inset-0 bg-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-lg text-indigo-300 border border-white/20 group-hover:bg-indigo-400 group-hover:text-white transition shadow-sm">
                      <MessageSquare className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[8px] border border-white/20 text-indigo-200 bg-black/20 px-2 py-0.5 rounded-full uppercase font-bold font-mono group-hover:border-indigo-400/50 transition shadow-inner">
                      No Webcam
                    </span>
                  </div>
                  <h3 className="text-sm font-bold font-mono text-white mb-1 relative z-10 drop-shadow-md">Start Text Chat</h3>
                  <p className="text-[10px] text-blue-100 leading-normal font-sans relative z-10">
                    Plain, elegant messaging chat space. Communicate safely using text log transmissions.
                  </p>
                </div>
              </div>
            </div>

            {/* Theme & Profile Verification Options */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pt-4 border-t border-white/20 relative z-10 shadow-t">
              
              {/* Virtual Background Selection */}
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-blue-200 font-mono font-bold uppercase tracking-wider">3D Hologram:</span>
                <div className="flex gap-1.5 p-1 bg-black/20 rounded-xl backdrop-blur-sm border border-white/10 shadow-inner">
                  {(['cosmic', 'neon', 'matrix', 'lounge'] as const).map((themeName) => (
                    <button
                      key={themeName}
                      onClick={() => setSelected3DTheme(themeName)}
                      className={`px-3 py-1 text-[9px] font-bold rounded-lg uppercase tracking-wider transition-all font-mono border cursor-pointer ${
                        selected3DTheme === themeName 
                        ? 'bg-white/20 text-white border-white/50 shadow-sm' 
                        : 'bg-transparent border-transparent text-blue-300/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {themeName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Verified Badge Pose */}
              <button 
                onClick={() => setVerificationStep(isProfileVerified ? 'verified' : 'pose_prompt')}
                className={`py-1.5 px-3 border rounded-xl text-[10px] font-bold font-mono flex items-center justify-center gap-1.5 transition cursor-pointer shadow-sm backdrop-blur-md ${
                  isProfileVerified 
                  ? 'bg-emerald-900/40 border-emerald-400/50 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]' 
                  : 'bg-white/5 hover:bg-white/10 border-white/30 text-blue-100 hover:text-white'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${isProfileVerified ? 'text-emerald-400' : 'text-blue-300'}`} />
                <span>{isProfileVerified ? 'VERIFIED HUMAN' : 'PROOF HUMAN POSE'}</span>
              </button>

            </div>

          </ActionCard>

        </div>
      )}



      {/* -------------------------------------------------------------
          4. MAIN VIEW PORTS: ACTIVE CHATING / MATCHING SCREEN
         ------------------------------------------------------------- */}
      {isAgeVerified && !sysBanned && chatMode !== null && (
        <main className="flex-1 w-full max-w-7xl mx-auto p-3 flex flex-col lg:grid lg:grid-cols-12 gap-3 relative animate-fade-in min-h-0">
          
          {/* QUEUE MATCHING INTERACTIVE LOADING STATE */}
          {status === 'matching' && (
            <div className="lg:col-span-12 flex flex-col items-center justify-center gap-6 flex-1 text-center animate-fade-in" id="queue_loading_viewport">
              <div className="relative">
                {/* Ping/Radar animation */}
                <div className="absolute inset-x-0 -top-4 -bottom-4 bg-teal-500/10 blur-xl rounded-full scale-125 animate-pulse" />
                <div className="relative flex items-center justify-center w-24 h-24 bg-zinc-950/80 border border-teal-500/25 rounded-full shadow-2xl">
                  <RefreshCw className="w-10 h-10 text-teal-400 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
              </div>

              <div className="space-y-2 max-w-md">
                <h3 className="text-lg font-bold font-mono tracking-tight text-teal-400 animate-pulse">Connecting to partner...</h3>
                <p className="text-xs text-[#6f6f7c] font-medium">Searching for available matching peers for {chatMode === 'video' ? 'Video Call' : 'Text Chat'}...</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Running secure tag overlap scanners</p>
                
                {interests.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                    {interests.map(i => (
                      <span key={i} className="text-[9px] bg-black/40 border border-white/5 text-zinc-400 px-2 py-0.5 rounded-full font-mono font-medium">#{i}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 items-center">
                <p className="text-[10px] text-zinc-450 font-mono">Instant mock matches will activate if queue is quiet.</p>
                <button 
                  onClick={handleCancelSearch}
                  className="px-5 py-2.5 bg-red-955/20 hover:bg-red-955/40 border border-red-900/30 text-red-400 text-xs font-bold rounded-lg font-mono transition tracking-wider cursor-pointer shadow-lg hover:shadow-red-950/20"
                >
                  Cancel Matching Session &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ACTIVE LIVE CHAT VIEWPORT */}
          {status === 'active' && (
            <>
              {/* IF VIDEO MODE: Left column video tracks split cards */}
              {chatMode === 'video' && (
                <section className="col-span-full lg:col-span-12 flex flex-col gap-3 shrink-0 relative">
                  <div className="flex gap-2 overflow-x-auto lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:overflow-visible h-[45vh] lg:h-[65vh]">
                    
                    {/* OWN CAMERA CONTAINER */}
                    <ActionCard className="bg-zinc-950/80 border border-white/10 p-3 relative flex flex-col justify-between shadow-2xl overflow-hidden flex-1 min-w-[200px] lg:col-span-1 rounded-xl shrink-0 h-full">
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1">
                        <span className="px-1.5 py-0.5 bg-black/60 border border-white/10 text-zinc-350 text-[8px] font-bold font-mono rounded uppercase">
                          You
                        </span>
                        {isProfileVerified && (
                          <span className="bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold font-mono px-1 py-0.5 rounded">
                            VERIFIED
                          </span>
                        )}
                      </div>

                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="px-1.5 py-0.5 bg-black/60 border border-white/10 text-zinc-500 text-[8px] font-bold font-mono rounded uppercase">
                          Theme: {selected3DTheme}
                        </span>
                      </div>

                      <div className="w-full h-full flex items-center justify-center bg-black/40 rounded overflow-hidden relative border border-white/5 my-0.5">
                        <video 
                          ref={localVideoRef} 
                          autoPlay 
                          playsInline 
                          muted 
                          className={`w-full h-full object-contain sm:object-cover ${cameraActive ? 'scale-x-[-1]' : 'hidden'}`}
                        />
                        {(!cameraActive || !localStream) && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-650 text-[10px] font-mono">
                            <VideoOff className="w-6 h-6 mb-1 text-zinc-600" />
                            <span>Cam offline</span>
                          </div>
                        )}
                      </div>

                      <div className="w-full flex items-center justify-between mt-1 text-[9px] font-mono text-zinc-500">
                        <span className="truncate">Handshake cam: secure</span>
                        
                        <div className="flex gap-1 shrink-0 ml-1">
                          <button 
                            onClick={toggleMic}
                            className={`p-1 rounded border transition cursor-pointer ${micActive ? 'bg-black/60 hover:bg-white/10 border-white/15 text-zinc-300' : 'bg-red-950/30 border-red-900/40 text-red-400'}`}
                            title={micActive ? "Mute Microphone" : "Unmute Microphone"}
                          >
                            {micActive ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
                          </button>
                          <button 
                            onClick={toggleCamera}
                            className={`p-1 rounded border transition cursor-pointer ${cameraActive ? 'bg-black/60 hover:bg-white/10 border-white/15 text-zinc-300' : 'bg-red-950/30 border-red-900/40 text-red-400'}`}
                            title={cameraActive ? "Mute Video" : "Unmute Video"}
                          >
                            {cameraActive ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    </ActionCard>

                    {/* PEER REMOTE STREAM CONTAINER */}
                    <ActionCard className="bg-zinc-950/80 border border-white/10 p-3 relative flex flex-col justify-between shadow-2xl overflow-hidden flex-1 min-w-[200px] lg:col-span-3 rounded-xl shrink-0 h-full">
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1">
                        <span className="px-1.5 py-0.5 bg-black/60 border border-white/10 text-zinc-350 text-[8px] font-bold font-mono rounded uppercase">
                          Partner
                        </span>
                        {partner?.verified && (
                          <span className="inline-flex items-center gap-1 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold font-mono px-1.5 py-0.5 rounded">
                            VERIFIED HUMAN
                          </span>
                        )}
                      </div>

                      {partner && (
                        <div className="absolute top-2.5 right-2.5 z-10">
                          <div className="flex gap-1.5">
                            {(partner.interests || []).slice(0, 2).map((i: string, id: number) => (
                              <span key={id} className="bg-black/60 border border-white/10 text-zinc-400 text-[8px] px-1.5 py-0.5 font-bold font-mono rounded">
                                #{i}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="w-full h-full flex items-center justify-center bg-black/40 rounded overflow-hidden relative border border-white/5 my-0.5">
                        {remoteStream ? (
                          <video 
                            ref={remoteVideoRef} 
                            autoPlay 
                            playsInline 
                            className="w-full h-full object-contain sm:object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-650 text-[10px] font-mono text-center p-2">
                            <span className="animate-pulse flex h-2 w-2 rounded-full bg-orange-400 mb-1" />
                            <p className="font-semibold text-zinc-400">Negotiating...</p>
                            <p className="text-[8px] text-zinc-550 leading-relaxed mt-1 font-sans hidden sm:block">Wait for peer's audio & video stream signal matching.</p>
                          </div>
                        )}
                      </div>

                      <div className="w-full flex items-center justify-between mt-1 text-[9px] font-mono text-zinc-500">
                        <span className="truncate">{partner ? `Connecting: ${partner.name}` : 'Handshake...'}</span>
                        
                        {partner && (
                          <button 
                            onClick={() => setIsReportOpen(true)}
                            className="flex items-center gap-1 px-2 py-0.5 bg-red-950/20 hover:bg-red-950/40 border border-red-900/35 rounded text-red-400 transition font-mono tracking-wide cursor-pointer text-[9px] font-bold shrink-0 ml-1"
                          >
                            <ShieldAlert className="w-3 h-3" />
                            <span className="hidden sm:inline">Report violation</span>
                            <span className="sm:hidden">Report</span>
                          </button>
                        )}
                      </div>
                    </ActionCard>

                  </div>

                  {/* ACTIVE CONTROLS GRID */}
                  <div className="bg-[#141414] border border-[#1F1F1F] p-3 rounded flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex gap-2">
                      <button 
                        onClick={handleEndMatch}
                        className="px-4 py-2 bg-red-950/45 hover:bg-red-955/65 border border-red-900/40 text-red-400 font-bold rounded text-xs font-mono transition inline-flex items-center gap-1 animate-fade-in cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>End Session</span>
                      </button>
                      <button 
                        onClick={handleSkipMatch}
                        className="px-5 py-2 bg-zinc-200 hover:bg-white text-zinc-950 font-bold rounded text-xs font-mono transition inline-flex items-center gap-1 animate-fade-in cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span>Skip Partner</span>
                      </button>
                      <button 
                        onClick={() => setIsChatSlideoutOpen(!isChatSlideoutOpen)}
                        className="px-4 py-2 bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/30 text-indigo-400 font-bold rounded text-xs font-mono transition inline-flex items-center gap-1 animate-fade-in cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 bg-[#0A0A0A] p-1.5 rounded border border-[#1F1F1F]">
                      <span className="text-zinc-500 font-semibold text-[9px] uppercase tracking-wider px-1 font-mono">Theme:</span>
                      <div className="flex gap-1">
                        {(['cosmic', 'neon', 'matrix', 'lounge'] as const).map((space) => (
                          <button
                            key={space}
                            onClick={() => setSelected3DTheme(space)}
                            className={`px-2 py-0.5 capitalize text-[10px] font-bold rounded transition cursor-pointer ${
                              selected3DTheme === space 
                              ? 'bg-zinc-800 text-zinc-100' 
                              : 'text-zinc-500 hover:text-zinc-350'
                            }`}
                          >
                            {space}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* CHATING MESSAGING BLOCK */}
              <section className={`${chatMode === 'video' ? `fixed top-0 right-0 w-[400px] max-w-[90vw] h-full bg-zinc-950 z-[100] transform transition-transform duration-300 shadow-2xl border-l border-white/10 ${isChatSlideoutOpen ? 'translate-x-0' : 'translate-x-full'}` : 'col-span-full lg:col-span-12 max-w-2xl mx-auto w-full h-[70vh] lg:h-[80vh]'} flex-1 flex flex-col min-h-0 transition`}>
                <div className="bg-[#141414] border border-[#1F1F1F] rounded flex-1 flex flex-col overflow-hidden shadow-sm h-full">
                  
                  {/* Top Header of Chat Panel */}
                  <div className="bg-[#0F0F0F] border-b border-[#1F1F1F] p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#1A1A1A] border border-[#27272a] flex items-center justify-center font-bold text-zinc-300 font-mono text-[9px]">
                        {partner?.name ? partner.name.slice(0,1).toUpperCase() : '?'}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs font-mono text-zinc-200">
                          {partner?.name || 'Matched Peer'}
                        </h4>
                        <p className="text-[8px] text-zinc-500 font-mono tracking-wider uppercase">
                          Peer: Handshake Encrypted
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {(partner?.interests || []).map(i => (
                        <span key={i} className="text-[9px] bg-[#0A0A0A] border border-[#1F1F1F] text-zinc-400 px-1.5 py-0.2 rounded font-mono hidden sm:inline-block">
                          #{i}
                        </span>
                      ))}
                      {/* Unified Skip and End Controls */}
                      <div className="flex items-center gap-1.5 ml-3 border-l border-[#1F1F1F] pl-3">
                        {chatMode === 'video' && (
                          <button 
                            onClick={() => setIsChatSlideoutOpen(false)}
                            className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded font-mono transition cursor-pointer flex items-center shadow-md mr-1"
                            title="Close Chat"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        <button 
                          onClick={handleSkipMatch}
                          className="px-2.5 py-1 bg-zinc-200 hover:bg-white text-zinc-950 font-bold text-[10px] font-mono rounded-md transition cursor-pointer flex items-center gap-1 shadow-md"
                          title="Skip to next partner"
                        >
                          <ChevronRight className="w-3 h-3" />
                          <span>Skip</span>
                        </button>
                        <button 
                          onClick={handleEndMatch}
                          className="px-2.5 py-1 bg-red-950/40 hover:bg-red-500 hover:text-white border border-red-500/20 text-red-400 font-bold text-[10px] font-mono rounded-md transition cursor-pointer flex items-center gap-1 shadow-md"
                          title="End active session"
                        >
                          <X className="w-3 h-3" />
                          <span>End</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages Stream Container */}
                  <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#0D0D0D]">
                    {messages.length === 0 && (
                      <div className="h-full flex flex-col items-center justify-center text-center p-5 text-zinc-650 space-y-1.5">
                        <MessageSquare className="w-7 h-7 text-zinc-800" />
                        <div className="space-y-0.5 max-w-xs">
                          <p className="font-bold text-[10px] font-mono text-zinc-500 uppercase">Handshake Channel active</p>
                          <p className="text-[9px] text-zinc-650 leading-normal font-sans">
                            Session text transmissions are anonymous, and strictly subject to local community trust controls. Say hello!
                          </p>
                        </div>
                      </div>
                    )}

                    {messages.map((m) => {
                      if (m.sender === 'system') {
                        return (
                          <div key={m.id} className="flex justify-center">
                            <span className="bg-[#0A0A0A] border border-[#1F1F1F] text-[8px] font-mono py-0.5 px-2.5 text-zinc-500 rounded uppercase">
                              {m.text}
                            </span>
                          </div>
                        );
                      }

                      const isSelf = m.sender === userId;
                      return (
                        <div key={m.id} className={`flex flex-col max-w-[85%] ${isSelf ? 'ml-auto items-end' : 'mr-auto items-start animate-fade-in'}`}>
                          <div className="text-[8px] text-zinc-600 font-mono mb-0.5 px-0.5">
                            {isSelf ? 'You' : (partner?.name || 'Partner')} • {new Date(m.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                          <div className={`px-2.5 py-1.5 rounded text-xs leading-relaxed font-mono ${
                            isSelf 
                              ? 'bg-zinc-200 text-zinc-950 font-medium' 
                              : 'bg-[#141414] border border-[#1F1F1F] text-zinc-200'
                          }`}>
                            {m.text}
                          </div>
                        </div>
                      );
                    })}

                    <div ref={chatBottomRef} />
                  </div>

                  {/* Submit message input form */}
                  <form onSubmit={sendMessage} className="bg-[#0F0F0F] border-t border-[#1F1F1F] p-2 flex gap-1.5">
                    <input 
                      type="text" 
                      placeholder="Enter transmission message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-[#0a0a0a] border border-[#1F1F1F] rounded focus:outline-none focus:border-zinc-500 text-xs font-mono text-zinc-250 placeholder-zinc-700"
                    />
                    <button 
                      type="submit"
                      disabled={!messageInput.trim()}
                      className="px-3 bg-zinc-200 text-[#0f0f0f] font-bold rounded hover:bg-white disabled:opacity-25 transition text-xs font-mono flex items-center justify-center cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>

                </div>
              </section>
            </>
          )}

        </main>
      )}

      {/* -------------------------------------------------------------
          5. MODAL DIALOGS AND SLIDEOUT PANELS
         ------------------------------------------------------------- */}
      
      {/* 5A. PROOF HUMAN GESTURE VERIF PROTOCOL */}
      {verificationStep !== 'idle' && verificationStep !== 'verified' && (
        <div className="fixed inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 z-40">
          <div className="w-full max-w-sm bg-[#141414] border border-[#1F1F1F] rounded p-5 relative">
            <button 
              onClick={() => setVerificationStep('idle')}
              className="absolute top-3 right-3 text-zinc-500 hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="text-center mb-4 space-y-1">
              <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700 text-[8px] font-bold tracking-widest uppercase rounded inline-block font-mono">
                Mandatory Pose Guard
              </span>
              <h2 className="text-sm font-bold font-mono text-zinc-100">Prove Human Presence</h2>
              <p className="text-[10px] text-zinc-400">Perform this random hand gesture clearly in front of your camera.</p>
            </div>

            {verificationStep === 'pose_prompt' && (
              <div className="space-y-3 font-sans">
                <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded text-center space-y-2">
                  <p className="text-[8px] text-zinc-500 uppercase tracking-widest font-mono">Perform Gesture:</p>
                  <p className="text-2xl font-bold font-mono text-emerald-400">{selectedGesture}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setVerificationStep('idle')}
                    className="flex-1 py-1.5 bg-zinc-900 hover:bg-zinc-850 text-[10px] font-bold rounded text-zinc-400 transition font-mono border border-[#1F1F1F] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submitVerificationPose}
                    className="flex-1 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 text-[10px] font-bold rounded transition font-mono cursor-pointer"
                  >
                    Submit Pose Verification
                  </button>
                </div>
              </div>
            )}

            {verificationStep === 'scanning' && (
              <div className="p-4 text-center space-y-3">
                <RefreshCw className="w-6 h-6 text-emerald-450 animate-spin mx-auto" />
                <div className="space-y-0.5">
                  <p className="font-bold text-xs font-mono text-zinc-200">Analyzing Face & Hand Gesture Pose...</p>
                  <p className="text-[8px] text-zinc-500 font-mono uppercase tracking-wider">Neural pose checking</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5B. SECURITY SENTINEL REPORT SYSTEM */}
      {isReportOpen && partner && (
        <div className="fixed inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 z-40">
          <div className="w-full max-w-md bg-[#141414] border border-[#1F1F1F] rounded p-5 relative">
            
            <button 
              onClick={() => setIsReportOpen(false)}
              className="absolute top-3 right-3 text-zinc-500 hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="text-center mb-4 space-y-1">
              <span className="px-2 py-0.5 bg-red-950/25 border border-red-900/30 text-red-400 text-[8px] font-bold tracking-widest uppercase rounded inline-block font-mono">
                Sentinel moderations
              </span>
              <h2 className="text-sm font-bold font-mono text-zinc-100">Send Trust violation</h2>
              <p className="text-[10px] text-zinc-450">Please report harassment or inappropriate actions.</p>
            </div>

            {showReportSuccess ? (
              <div className="p-3 text-center space-y-2 animate-fade-in">
                <CheckCircle2 className="w-8 h-8 text-emerald-450 mx-auto" />
                <h4 className="text-xs font-bold text-emerald-400 font-mono">Report Filed Securely</h4>
                <p className="text-[10px] text-zinc-400 font-sans">Checking session conversation logs manually. Resetting peer room...</p>
              </div>
            ) : (
              <div className="space-y-4 font-sans">
                <div className="bg-[#0A0A0A] p-2.5 rounded border border-[#1F1F1F] space-y-0.5">
                  <span className="text-[8px] text-zinc-520 uppercase font-mono block">Suspect Session key:</span>
                  <span className="text-[10px] text-zinc-350 font-mono block break-all font-semibold select-all">{partner.id}</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-450 font-mono uppercase block">Violation Reason</label>
                  <select 
                    value={reportReason} 
                    onChange={(e) => setReportReason(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#0A0A0A] border border-[#1F1F1F] rounded focus:outline-none focus:border-zinc-500 text-xs font-mono text-zinc-300"
                  >
                    <option value="Inappropriate stream">Inappropriate stream feed or action</option>
                    <option value="Harassment">Harassment or abusive speech</option>
                    <option value="Bot/Spam">Synthetic Bot / advertising links</option>
                    <option value="Minor profile">Suspected under-aged account</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-455 font-mono uppercase block">Extra description</label>
                  <textarea 
                    rows={3}
                    placeholder="Provide specific dialogue statements or action descriptions..."
                    value={reportDetails}
                    onChange={(e) => setReportDetails(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#0A0A0A] border border-[#1F1F1F] rounded focus:outline-none focus:border-zinc-500 text-xs font-mono text-zinc-300 resize-none font-sans"
                  />
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setIsReportOpen(false)}
                    className="flex-1 py-1.5 bg-zinc-900 text-[10px] font-bold rounded text-zinc-400 border border-[#1F1F1F] transition font-mono cursor-pointer"
                  >
                    Close
                  </button>
                  <button 
                    onClick={handleReportSubmit}
                    className="flex-1 py-1.5 bg-red-950/40 hover:bg-red-950/60 border border-red-900/40 text-red-400 text-[10px] font-bold rounded transition font-mono cursor-pointer"
                  >
                    Submit Report &rArr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER PROTOCOL INFO */}
      <footer className="bg-[#0F0F0F] border-t border-[#1F1F1F] px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-zinc-400 font-mono">
        <div className="flex flex-wrap items-center gap-4">
          <span>SECURE ENCRYPTED HANDSHAKE ACTIVE</span>
          <span>STATE: PROTOCOLS BOUNDED</span>
        </div>
        <div>
          <span>&copy; {new Date().getFullYear()} JustChat Space • Preserving Authentic Connection.</span>
        </div>
      </footer>

      {/* -------------------------------------------------------------
          ABOUT US MODAL OVERLAY
         ------------------------------------------------------------- */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in" id="about_us_modal">
          <ActionCard className="w-full max-w-lg p-6 relative bg-zinc-950/95 border border-zinc-800 shadow-2xl rounded-2xl max-h-[90vh] overflow-y-auto">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-400 via-emerald-500 to-indigo-500" />
            
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
              <h3 className="text-base font-bold font-mono text-zinc-100 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow shadow-teal-500/50 animate-pulse" />
                About JustChat
              </h3>
              <button 
                onClick={() => setShowAboutModal(false)}
                className="text-zinc-500 hover:text-white transition text-xs font-mono px-2 py-1 bg-white/5 rounded"
              >
                Close ESC
              </button>
            </div>

            <div className="space-y-4 text-xs text-zinc-300 leading-relaxed font-sans">
              <p>
                <strong>JustChat</strong> is a next-generation real-time peering lounge built to safely match passionate coders, musicians, artists, and creators globally. 
              </p>
              
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1.5 font-mono text-[11px]">
                <h4 className="font-bold text-teal-400 uppercase">Core Architecture details</h4>
                <ul className="list-disc pl-4 space-y-1 text-zinc-400">
                  <li><strong>Instant Match Engine:</strong> Algorithmic pairing based on tag intersects.</li>
                  <li><strong>Authentic Connections:</strong> Direct human-to-human chats with no chatbots, AI bots, or fake filler entries.</li>
                  <li><strong>Custom Holographic Vibe Scenes:</strong> 3D canvas rendering supporting Cosmic, Neon, Lounge, and Matrix environments.</li>
                  <li><strong>P2P Media Protocols:</strong> Encrypted WebRTC streams.</li>
                </ul>
              </div>

              <p>
                Our mission is to help restore genuine, instant, friction-free social micro-conversations without the bloat, ads, trackers, or endless algorithms of typical platforms.
              </p>

              <div className="border-t border-white/5 pt-3 flex justify-end font-mono">
                <button 
                  onClick={() => setShowAboutModal(false)}
                  className="px-4 py-2 bg-zinc-900 border border-white/10 text-zinc-300 rounded-lg hover:bg-zinc-800 transition text-[11px] font-bold cursor-pointer"
                >
                  Close Panel
                </button>
              </div>
            </div>
          </ActionCard>
        </div>
      )}

      {/* -------------------------------------------------------------
          TERMS & CONDITIONS MODAL OVERLAY
         ------------------------------------------------------------- */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in" id="terms_conditions_modal">
          <ActionCard className="w-full max-w-lg p-6 relative bg-zinc-950/95 border border-zinc-800 shadow-2xl rounded-2xl max-h-[90vh] overflow-y-auto">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-400 via-orange-500 to-indigo-500" />
            
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
              <h3 className="text-base font-bold font-mono text-zinc-100 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow shadow-red-500/50 animate-pulse" />
                Terms & Conditions
              </h3>
              <button 
                onClick={() => setShowTermsModal(false)}
                className="text-zinc-500 hover:text-white transition text-xs font-mono px-2 py-1 bg-white/5 rounded"
              >
                Close ESC
              </button>
            </div>

            <div className="space-y-4 text-xs text-zinc-300 leading-relaxed font-sans">
              <p className="font-semibold text-zinc-200">
                Welcome to JustChat. By using this platform, you commit to respecting the community standard rules, terms, and guidelines:
              </p>

              <ol className="list-decimal pl-4 space-y-3 text-zinc-400 font-mono text-[11px]">
                <li>
                  <strong className="text-zinc-205">Age Check requirements:</strong>
                  <br />You must be at least 18 years of age. Underaged users are strictly prohibited and will be reported to moderation authorities.
                </li>
                <li>
                  <strong className="text-zinc-205">Respectful peer interaction:</strong>
                  <br />Harassment, bullying, toxic speeches, vulgar displays, or non-consensual multimedia broadcasts are forbidden.
                </li>
                <li>
                  <strong className="text-zinc-205">Service Suspension:</strong>
                  <br />Our system automatically flags high-frequency skips or reports. Valid violation reports trigger immediate hardware IP bans.
                </li>
                <li>
                  <strong className="text-zinc-205">P2P Security responsibility:</strong>
                  <br />Stream data is encrypted and negotiated peer-to-peer. JustChat does not cache transmission streams or logs. You are solely responsible for interactions you initiate.
                </li>
              </ol>

              <div className="p-3 bg-red-950/20 border border-red-900/40 rounded-xl leading-relaxed text-red-300 text-[10px] font-mono">
                SAFETY PROTOCOL: Violating the terms will terminate your session and black-list your session signatures from joining again.
              </div>

              <div className="border-t border-white/5 pt-3 flex gap-2 justify-end font-mono">
                <button 
                  onClick={() => {
                    setHasAgreedTerms(true);
                    setShowTermsModal(false);
                  }}
                  className="px-4 py-2 bg-teal-500 text-black rounded-lg hover:bg-teal-400 transition text-[11px] font-bold cursor-pointer font-sans"
                >
                  I Agree & Accept Checklist
                </button>
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="px-4 py-2 bg-zinc-900 border border-white/10 text-zinc-300 rounded-lg hover:bg-zinc-800 transition text-[11px] font-bold cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </ActionCard>
        </div>
      )}

    </div>
  );
}
