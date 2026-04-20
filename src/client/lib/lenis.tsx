import Lenis from 'lenis';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

const LenisContext = createContext<Lenis | null>(null);

export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const ref = useRef<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    ref.current = instance;
    setLenis(instance);

    let rafId = 0;
    const loop = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      ref.current = null;
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
