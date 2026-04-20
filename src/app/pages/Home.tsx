import { motion } from "motion/react";
import { Link } from "react-router";
import { Paperclip, Sparkles, FileDown } from "lucide-react";
import lilyPhoto from "figma:asset/1f61f3ee2a59c8cc9f95f9dd5608b4bef399f562.png";
import lilyPhoto2 from "figma:asset/10c78477032fe062303bb80a1c61dfa384a73ee6.png";
import pinkStripes from "figma:asset/8cdbd7a719ed37c54eeb01b1520a4b239b18e68c.png";
import dolceVitaPhoto from "figma:asset/0a41a1e74773905771fa9b7419a886a5473d1818.png";
import cvImage from "figma:asset/3a00ab15267cd5ecfe822f2fca367a44491715c7.png";

export function Home() {
  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 md:space-y-8 relative"
          >
            <motion.div
              animate={{ 
                rotate: [12, 8, 12],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Paperclip className="w-8 h-8 text-[#D4A5A5] absolute top-0 left-1/4 rotate-12 opacity-50 hidden md:block" />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: [-45, -40, -45],
                y: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Paperclip className="w-6 h-6 text-[#E8B5D4] absolute top-10 right-1/4 -rotate-45 opacity-50 hidden md:block" />
            </motion.div>
            
            <h1
              className="text-5xl md:text-8xl lg:text-9xl font-bold"
              style={{ 
                fontFamily: "'Work Sans', sans-serif",
                color: "#1A1A1A",
              }}
            >
              Portfolio
            </h1>
            <p
              className="text-xs md:text-sm tracking-widest text-[#9B8B7E] font-medium px-4"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              ÉTUDIANTE EN COMMUNICATION • CRÉATIVE • COMMUNITY MANAGER
            </p>
          </motion.div>
        </div>

        {/* About Preview Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Images collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[600px] mx-auto w-full max-w-md md:max-w-none"
            >
              {/* Photo arrière — rayures roses */}
              <motion.div 
                className="absolute top-0 left-0 w-48 md:w-72 rotate-[-3deg] shadow-2xl bg-white p-3 md:p-4"
                whileHover={{ 
                  rotate: 0,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img src={pinkStripes} alt="" className="w-full h-60 md:h-96 object-cover" />
              </motion.div>

              {/* Photo secondaire */}
              <motion.div 
                className="absolute top-20 md:top-32 right-0 w-44 md:w-64 rotate-[1deg] shadow-xl bg-white p-3 md:p-4"
                whileHover={{ 
                  rotate: 0,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img src={lilyPhoto2} alt="Lily" className="w-full h-48 md:h-72 object-cover" />
              </motion.div>

              {/* Petite note manuscrite */}
              <motion.div 
                className="absolute bottom-0 left-8 md:left-20 w-36 md:w-48 rotate-[-2deg] bg-white p-4 md:p-6 shadow-lg border border-[#F8E3F0]/50"
                whileHover={{ 
                  rotate: 2,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <p
                  className="text-sm italic"
                  style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
                >
                  "Créer des histoires qui connectent"
                </p>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-4 h-4 text-[#D4A5A5] absolute -top-2 -right-2" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3
                  className="text-xl tracking-wide font-semibold"
                  style={{ 
                    fontFamily: "'Work Sans', sans-serif",
                    color: "#5D5347",
                  }}
                >
                  BONJOUR, JE SUIS LILY
                </h3>
                
                <p
                  className="text-[#2D2D2D] leading-relaxed"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  Étudiante en communication à l'École du Numérique, je suis passionnée 
                  par la création de contenu et le storytelling digital. Mon approche 
                  combine créativité, sensibilité aux tendances et stratégie social media 
                  pour créer des univers visuels qui racontent des histoires authentiques.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-block px-8 py-4 bg-[#D4A5A5] text-white text-xs tracking-widest hover:bg-[#C49595] transition-colors font-medium rounded-full shadow-lg"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  EN SAVOIR PLUS
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={cvImage}
                  download="CV-Lily-de-Chalonge.png"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[#E8469E] text-xs tracking-widest hover:bg-[#E8469E] hover:text-white transition-all font-medium rounded-full border-2 border-[#E8469E] shadow-md"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  <FileDown className="w-4 h-4" />
                  TÉLÉCHARGER MON CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* My Work Section */}
        <div className="bg-[#E8E5E0] py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center space-y-2 md:space-y-3 relative"
            >
              {/* Mock iPhone with videos */}
              <div className="flex justify-center relative">
                <div className="relative w-64 h-[480px] md:w-80 md:h-[600px] bg-black rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 md:w-28 h-5 md:h-6 bg-black rounded-b-2xl z-10" />
                  <div className="w-full h-full bg-black rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                    <iframe
                      src="https://player.cloudinary.com/embed/?cloud_name=dgxacf8au&public_id=copy_22FF3E37-90A7-420A-884E-DB1D1DC9CD68_w0ybwm&autoplay=true&loop=true&muted=true&controls=false"
                      className="absolute inset-0 w-full h-full border-0"
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      style={{ border: 0 }}
                    />
                  </div>
                </div>

                {/* Bande photobooth — à droite du téléphone */}
                <motion.div
                  initial={{ opacity: 0, x: 50, rotate: 6 }}
                  animate={{ opacity: 1, x: 0, rotate: 6 }}
                  transition={{ duration: 0.9, delay: 1.0 }}
                  className="absolute right-2 md:right-8 lg:right-20 top-4 z-10 hidden md:block"
                >
                  <div
                    className="bg-white rounded-sm shadow-2xl px-3 pt-3 pb-6 lg:px-4 lg:pt-4 lg:pb-8"
                    style={{ width: "fit-content" }}
                  >
                    {/* Photos empilées — 3 photos */}
                    <div className="flex flex-col gap-1.5 lg:gap-2">
                      {/* Photo 1 — Dolce Vita */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.3 }}
                        className="w-24 h-20 lg:w-32 lg:h-26 overflow-hidden"
                      >
                        <img src={dolceVitaPhoto} alt="La Dolce Vita - LGM" className="w-full h-full object-cover" />
                      </motion.div>
                      {/* Photo 2 — Lily */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.45 }}
                        className="w-24 h-20 lg:w-32 lg:h-26 overflow-hidden"
                      >
                        <img src={lilyPhoto} alt="Lily" className="w-full h-full object-cover" />
                      </motion.div>
                      {/* Photo 3 — Lily 2 */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.6 }}
                        className="w-24 h-20 lg:w-32 lg:h-26 overflow-hidden"
                      >
                        <img src={lilyPhoto2} alt="Lily" className="w-full h-full object-cover" />
                      </motion.div>
                    </div>
                    {/* Texte en bas du strip */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.0 }}
                      className="text-center mt-3 lg:mt-4"
                    >
                      <p
                        className="text-sm lg:text-base text-[#1A1A1A]"
                        style={{ fontFamily: "'Sacramento', cursive" }}
                      >
                        Lily's Portfolio
                      </p>
                      <p
                        className="text-[8px] lg:text-[10px] tracking-widest text-[#9B8B7E] mt-0.5"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        2024 — 2026
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="inline-block px-8 py-4 bg-[#D4A5A5] text-white text-xs tracking-widest hover:bg-[#C49595] transition-colors font-medium rounded-full shadow-lg"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  VOIR MES RÉALISATIONS
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
  );
}