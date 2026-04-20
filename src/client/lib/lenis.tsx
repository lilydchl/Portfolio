import Lenis from 'lenis';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Tempus } from './tempus';

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

    const unsubscribe = Tempus.add((time) => {
      instance.raf(time);
    }, { priority: 0 });

    return () => {
      unsubscribe?.();
      instance.destroy();
      ref.current = null;
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
