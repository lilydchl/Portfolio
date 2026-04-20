import { useLocation, useOutlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Layout } from "./Layout";

/**
 * Freezes the outlet so it persists during exit animations.
 * When AnimatePresence unmounts the old motion.div (exit), 
 * the frozen outlet keeps rendering the previous page content.
 */
function FrozenOutlet() {
  const outlet = useOutlet();
  const [frozen] = useState(outlet);
  return frozen;
}

export function RootLayout() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.995 }}
          transition={{
            duration: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <FrozenOutlet />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
