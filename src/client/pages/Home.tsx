import { Link } from 'react-router';
import { motion } from 'motion/react';
import { FileDown, Paperclip, Sparkles } from 'lucide-react';
import { Image } from '@/components/media/Image';

import lilyPortrait1 from '@/assets/home/lily-portrait-1.png?w=256;512;1024&format=avif;webp&as=picture';
import lilyPortrait2 from '@/assets/home/lily-portrait-2.png?w=256;512;1024&format=avif;webp&as=picture';
import pinkStripes from '@/assets/home/pink-stripes.png?w=256;512;1024&format=avif;webp&as=picture';
import dolceVitaStrip from '@/assets/home/dolce-vita-strip.png?w=256;512&format=avif;webp&as=picture';
import cvImageUrl from '@/assets/home/cv-lily-dechalonge.png';

export function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 md:space-y-8 relative"
        >
          <motion.div
            animate={{ rotate: [12, 8, 12], y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Paperclip className="w-8 h-8 text-brand-rose absolute top-0 left-1/4 rotate-12 opacity-50 hidden md:block" />
          </motion.div>

          <motion.div
            animate={{ rotate: [-45, -40, -45], y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Paperclip className="w-6 h-6 text-[#E8B5D4] absolute top-10 right-1/4 -rotate-45 opacity-50 hidden md:block" />
          </motion.div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-brand-ink">
            Portfolio
          </h1>
          <p className="text-xs md:text-sm tracking-widest text-brand-mute font-medium px-4">
            ÉTUDIANTE EN COMMUNICATION • CRÉATIVE • COMMUNITY MANAGER
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] mx-auto w-full max-w-md md:max-w-none"
          >
            <motion.div
              className="absolute top-0 left-0 w-48 md:w-72 rotate-[-3deg] shadow-2xl bg-white p-3 md:p-4"
              whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Image
                src={pinkStripes}
                alt=""
                className="w-full h-60 md:h-96 object-cover"
                loading="eager"
              />
            </motion.div>

            <motion.div
              className="absolute top-20 md:top-32 right-0 w-44 md:w-64 rotate-[1deg] shadow-xl bg-white p-3 md:p-4"
              whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Image
                src={lilyPortrait2}
                alt="Lily"
                className="w-full h-48 md:h-72 object-cover"
                loading="eager"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-8 md:left-20 w-36 md:w-48 rotate-[-2deg] bg-white p-4 md:p-6 shadow-lg border border-[#F8E3F0]/50"
              whileHover={{ rotate: 2, scale: 1.05, transition: { duration: 0.3 } }}
            >
              <p className="text-sm italic text-brand-ink">
                "Créer des histoires qui connectent"
              </p>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-4 h-4 text-brand-rose absolute -top-2 -right-2" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl tracking-wide font-semibold text-[#5D5347]">
                BONJOUR, JE SUIS LILY
              </h3>

              <p className="text-brand-soft-ink leading-relaxed">
                Étudiante en communication à l&apos;École du Numérique, je suis passionnée par la création
                de contenu et le storytelling digital. Mon approche combine créativité, sensibilité aux
                tendances et stratégie social media pour créer des univers visuels qui racontent des
                histoires authentiques.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-brand-rose text-white text-xs tracking-widest hover:bg-[#C49595] transition-colors font-medium rounded-full shadow-lg"
              >
                EN SAVOIR PLUS
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={cvImageUrl}
                download="CV-Lily-de-Chalonge.png"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-brand-pink text-xs tracking-widest hover:bg-brand-pink hover:text-white transition-all font-medium rounded-full border-2 border-brand-pink shadow-md"
              >
                <FileDown className="w-4 h-4" />
                TÉLÉCHARGER MON CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#E8E5E0] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-2 md:space-y-3 relative"
          >
            <div className="flex justify-center relative">
              <div className="relative w-64 h-[480px] md:w-80 md:h-[600px] bg-black rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 shadow-2xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 md:w-28 h-5 md:h-6 bg-black rounded-b-2xl z-10" />
                <div className="w-full h-full bg-black rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                  <iframe
                    title="Reel portfolio Lily"
                    src="https://player.cloudinary.com/embed/?cloud_name=dgxacf8au&public_id=copy_22FF3E37-90A7-420A-884E-DB1D1DC9CD68_w0ybwm&autoplay=true&loop=true&muted=true&controls=false"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 6 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ duration: 0.9, delay: 1.0 }}
                className="absolute right-2 md:right-8 lg:right-20 top-4 z-10 hidden md:block"
              >
                <div
                  className="bg-white rounded-sm shadow-2xl px-3 pt-3 pb-6 lg:px-4 lg:pt-4 lg:pb-8"
                  style={{ width: 'fit-content' }}
                >
                  <div className="flex flex-col gap-1.5 lg:gap-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.3 }}
                      className="w-24 h-20 lg:w-32 lg:h-26 overflow-hidden"
                    >
                      <Image
                        src={dolceVitaStrip}
                        alt="La Dolce Vita — LGM"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.45 }}
                      className="w-24 h-20 lg:w-32 lg:h-26 overflow-hidden"
                    >
                      <Image
                        src={lilyPortrait1}
                        alt="Lily"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.6 }}
                      className="w-24 h-20 lg:w-32 lg:h-26 overflow-hidden"
                    >
                      <Image
                        src={lilyPortrait2}
                        alt="Lily"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                    className="text-center mt-3 lg:mt-4"
                  >
                    <p className="font-script text-sm lg:text-base text-brand-ink">
                      Lily&apos;s Portfolio
                    </p>
                    <p className="text-[8px] lg:text-[10px] tracking-widest text-brand-mute mt-0.5">
                      2024 — 2026
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-block px-8 py-4 bg-brand-rose text-white text-xs tracking-widest hover:bg-[#C49595] transition-colors font-medium rounded-full shadow-lg"
              >
                VOIR MES RÉALISATIONS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
