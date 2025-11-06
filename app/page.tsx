"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'classnames';

type Scene = {
  id: string;
  duration: number; // seconds
  element: JSX.Element;
};

const AUDIO_URL = 'https://cdn.pixabay.com/download/audio/2021/10/26/audio_9d8a5d6eaf.mp3?filename=upbeat-fashion-112854.mp3';

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#3B82F6"/>
            <stop offset="100%" stopColor="#F59E0B"/>
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="none" stroke="url(#g)" strokeWidth="3"/>
        <circle cx="22" cy="42" r="6" fill="none" stroke="#fff" strokeWidth="3"/>
        <circle cx="42" cy="42" r="6" fill="none" stroke="#fff" strokeWidth="3"/>
        <path d="M22 42 L32 30 L42 42" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <div className="leading-tight">
        <div className="text-sm tracking-widest text-white/70">FAMILY & FRIENDS</div>
        <div className="text-xl font-semibold">Cycle Spot</div>
      </div>
    </div>
  );
}

function SceneContainer({ children, bg }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 overflow-hidden">
        {bg && (
          <div
            className="absolute inset-0 bg-cover bg-center scale-[1.05]"
            style={{ backgroundImage: `url(${bg})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

function OpeningScene() {
  return (
    <SceneContainer bg="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1920&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute left-10 top-10"
      >
        <LogoMark className="glass px-4 py-3 rounded-xl shadow-glow" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="absolute bottom-16 left-10"
      >
        <div className="text-4xl md:text-6xl font-semibold gradient-text">Ride the Future</div>
        <div className="mt-3 text-white/80">Modern. Clean. Premium.</div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
      />
    </SceneContainer>
  );
}

function DetailScene() {
  // Close-ups/ken-burns sequence
  const images = [
    'https://images.unsplash.com/photo-1605719124115-9b38da15ea45?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1454540723230-6dd578d17fc6?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1920&auto=format&fit=crop'
  ];
  return (
    <div className="absolute inset-0">
      {images.map((src, idx) => (
        <motion.div
          key={src}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 3.3, duration: 3.3, ease: 'easeOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-12 left-10 text-3xl md:text-5xl font-semibold"
      >
        The Gleam of New Adventures
      </motion.div>
    </div>
  );
}

function LifestyleScene() {
  const words = ['Precision', 'Speed', 'Comfort'];
  return (
    <SceneContainer bg="https://images.unsplash.com/photo-1520975937876-6b6c1c6e6c65?q=80&w=1920&auto=format&fit=crop">
      <div className="absolute bottom-14 left-10 flex gap-3">
        {words.map((w, i) => (
          <motion.span
            key={w}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.4, duration: 0.6 }}
            className="glass px-4 py-2 rounded-full text-white/95"
          >
            {w}
          </motion.span>
        ))}
      </div>
    </SceneContainer>
  );
}

function TechScene() {
  return (
    <SceneContainer bg="https://images.unsplash.com/photo-1608219959305-8e085852d7d8?q=80&w=1920&auto=format&fit=crop">
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="text-2xl md:text-4xl font-semibold mb-3">E-Assist, Reimagined</div>
          <div className="text-white/80">Long-range batteries ? Smooth torque ? Smart connectivity</div>
        </motion.div>
      </div>
    </SceneContainer>
  );
}

function FamilyScene() {
  return (
    <SceneContainer bg="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-14 left-10"
      >
        <div className="text-3xl md:text-5xl font-semibold">Together, Every Mile</div>
        <div className="text-white/80 mt-2">Family and friends, riding as one.</div>
      </motion.div>
    </SceneContainer>
  );
}

function InteriorScene() {
  return (
    <SceneContainer bg="https://images.unsplash.com/photo-1513211888428-66f36dc7c2b3?q=80&w=1920&auto=format&fit=crop">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute left-10 bottom-14"
      >
        <div className="text-2xl md:text-4xl font-semibold mb-2">Premium Service. Personalized Fit.</div>
        <div className="text-white/80">Expert staff ? Pro tune-ups ? Care you can feel</div>
      </motion.div>
    </SceneContainer>
  );
}

function EndSlate() {
  return (
    <SceneContainer bg="https://images.unsplash.com/photo-1520975922116-319f10814151?q=80&w=1920&auto=format&fit=crop">
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <LogoMark className="justify-center mb-4" />
          <div className="text-3xl md:text-5xl font-semibold gradient-text">Ride the Future</div>
          <div className="mt-3 text-white/80">Discover your next bike today</div>
          <div className="mt-6 inline-flex items-center gap-3">
            <a
              href="#"
              className="glass rounded-full px-6 py-3 text-white hover:shadow-glow transition"
            >
              Book a Test Ride
            </a>
            <span className="text-white/60">or visit us in-store</span>
          </div>
          <div className="mt-6 text-white/60 text-sm">familynfriendscyclespot.com</div>
        </motion.div>
      </div>
    </SceneContainer>
  );
}

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const scenes: Scene[] = useMemo(
    () => [
      { id: 'opening', duration: 5, element: <OpeningScene /> },
      { id: 'details', duration: 10, element: <DetailScene /> },
      { id: 'lifestyle', duration: 15, element: <LifestyleScene /> },
      { id: 'tech', duration: 15, element: <TechScene /> },
      { id: 'family', duration: 15, element: <FamilyScene /> },
      { id: 'interior', duration: 15, element: <InteriorScene /> },
      { id: 'end', duration: 10, element: <EndSlate /> },
    ],
    []
  );

  useEffect(() => {
    if (!isPlaying) return;
    let cancelled = false;

    async function run() {
      let idx = 0;
      for (let i = 0; i < scenes.length; i++) {
        idx = i;
        if (cancelled) return;
        setCurrentSceneIndex(i);
        const seconds = scenes[i].duration;
        await new Promise((r) => setTimeout(r, seconds * 1000));
      }
      if (!cancelled) {
        setIsPlaying(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [isPlaying, scenes]);

  const totalSeconds = scenes.reduce((a, b) => a + b.duration, 0);
  const elapsed = scenes.slice(0, currentSceneIndex).reduce((a, b) => a + b.duration, 0);
  const progress = (elapsed / totalSeconds) * 100;

  const handleStart = async () => {
    setIsPlaying(true);
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      }
    } catch {
      // Ignore autoplay issues; user can unmute
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-[1280px] frame-21x9 rounded-2xl overflow-hidden relative shadow-2xl border border-white/10">
        <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div key={scenes[currentSceneIndex].id} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
            {scenes[currentSceneIndex].element}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4">
          <div className="glass rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div className="text-white/70 text-sm hidden md:block">
                Family and Friends Cycle Spot ? Ride the Future
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMuted((m) => !m)}
                className="px-3 py-2 rounded-lg hover:bg-white/10 transition"
                aria-label={muted ? 'Unmute' : 'Mute'}
              >
                {muted ? '??' : '??'}
              </button>
              <button
                onClick={handleStart}
                className="bg-white text-black rounded-lg px-4 py-2 font-medium hover:opacity-90 transition"
              >
                {isPlaying ? 'Restart' : 'Play'}
              </button>
            </div>
          </div>
          <div className="h-1 w-full bg-white/10 mt-2 rounded overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-amber-400" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <audio ref={audioRef} src={AUDIO_URL} preload="auto" loop muted={muted} />
      </div>

      <div className="max-w-[1280px] w-full mt-6 text-white/70 text-sm">
        Video length: ~{totalSeconds}s ? Style: Modern, clean, premium
      </div>
    </main>
  );
}
