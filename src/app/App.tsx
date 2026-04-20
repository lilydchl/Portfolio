import { RouterProvider } from "react-router";
import { router } from "@/app/routes";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "@/app/components/SplashScreen";
import { useState, useCallback } from "react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
    </>
  );
}
