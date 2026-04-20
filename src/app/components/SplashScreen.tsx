import { motion } from "motion/react";
import { useEffect, useState } from "react";
import lilyLogo from "figma:asset/a4d704f984a497648d956494eb0ddf4ec8262912.png";

interface SplashScreenProps {
  onComplete: () => void;
}

// Sparkle positions for the animation
const sparkles = [
  { x: -80, y: -60, delay: 0.6, size: 14 },
  { x: 90, y: -40, delay: 0.8, size: 10 },
  { x: -50, y: 50, delay: 1.0, size: 12 },
  { x: 70, y: 60, delay: 0.7, size: 16 },
  { x: -100, y: 10, delay: 0.9, size: 8 },
  { x: 110, y: -10, delay: 1.1, size: 11 },
  { x: 0, y: -90, delay: 0.5, size: 13 },
  { x: -30, y: 80, delay: 1.2, size: 9 },
  { x: 50, y: -80, delay: 0.65, size: 15 },
  { x: -90, y: -30, delay: 1.05, size: 10 },
];

// Floating hearts
const hearts = [
  { x: -120, y: 40, delay: 0.8, size: 16, rotate: -15 },
  { x: 130, y: -50, delay: 1.0, size: 12, rotate: 20 },
  { x: -60, y: -100, delay: 1.2, size: 14, rotate: -30 },
  { x: 100, y: 80, delay: 0.9, size: 10, rotate: 10 },
];

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    // Start exit after 2.4s
    const exitTimer = setTimeout(() => setPhase("exit"), 2400);
    // Complete after exit animation
    const completeTimer = setTimeout(onComplete, 3200);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F5F3F0 0%, #FDF8F5 30%, #FFF5F9 60%, #F5F3F0 100%)" }}
      initial={{ opacity: 1 }}
      animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.5,
          mixBlendMode: "multiply",
        }}
      />

      {/* Decorative grid lines (scrapbook feel) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, #E8469E 39px, #E8469E 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, #E8469E 39px, #E8469E 40px)
          `,
        }}
      />

      {/* Central content */}
      <div className="relative flex flex-col items-center">
        {/* Sparkles */}
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `calc(50% + ${sparkle.x}px)`,
              top: `calc(50% + ${sparkle.y}px)`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 0.6, 1, 0],
              scale: [0, 1.2, 0.8, 1, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 2.0,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          >
            <svg
              width={sparkle.size}
              height={sparkle.size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L13.5 8.5L20 7L14.5 11L18 17L12 13.5L6 17L9.5 11L4 7L10.5 8.5L12 2Z"
                fill="#E8469E"
                opacity="0.7"
              />
            </svg>
          </motion.div>
        ))}

        {/* Floating hearts */}
        {hearts.map((heart, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `calc(50% + ${heart.x}px)`,
              top: `calc(50% + ${heart.y}px)`,
            }}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
              opacity: [0, 0.5, 0.3, 0],
              scale: [0, 1, 1.1, 0.8],
              y: [0, -20, -30, -40],
              rotate: [heart.rotate, heart.rotate + 10, heart.rotate - 5, heart.rotate],
            }}
            transition={{
              duration: 2.2,
              delay: heart.delay,
              ease: "easeOut",
            }}
          >
            <svg
              width={heart.size}
              height={heart.size}
              viewBox="0 0 24 24"
              fill="#D4A5A5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}

        {/* Washi tape decorative strips */}
        <motion.div
          className="absolute -top-16 -left-20 pointer-events-none"
          initial={{ opacity: 0, x: -20, rotate: -12 }}
          animate={{ opacity: 0.4, x: 0, rotate: -12 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="w-24 h-5 rounded-sm"
            style={{
              background: "rgba(255, 192, 217, 0.5)",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='1' fill='rgba(255,255,255,0.5)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
        <motion.div
          className="absolute -bottom-12 -right-16 pointer-events-none"
          initial={{ opacity: 0, x: 20, rotate: 8 }}
          animate={{ opacity: 0.4, x: 0, rotate: 8 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div
            className="w-20 h-5 rounded-sm"
            style={{
              background: "rgba(255, 228, 196, 0.5)",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='6' y2='6' stroke='rgba(255,255,255,0.4)' stroke-width='1'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>

        {/* Logo — "sticker being placed" animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 1.4, rotate: -8, y: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.34, 1.56, 0.64, 1], // Spring-like bounce
          }}
        >
          {/* Soft glow behind logo */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(232, 70, 158, 0.15) 0%, transparent 70%)" }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1.2] }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <img
            src={lilyLogo}
            alt="Lily de Chalonge"
            className="h-24 md:h-32 w-auto relative z-10 drop-shadow-lg"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span
            className="text-2xl md:text-3xl text-[#E8469E]"
            style={{ fontFamily: "'Sacramento', cursive" }}
          >
            Portfolio
          </span>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="mt-6 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#D4A5A5]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                delay: 1.2 + i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Handwritten "bienvenue" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-4"
        >
          <span
            className="text-sm text-[#9B8B7E] tracking-widest"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            bienvenue
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
