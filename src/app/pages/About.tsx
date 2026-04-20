import { motion } from "motion/react";
import { Paperclip, FileDown, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { MoodBoard } from "@/app/components/MoodBoard";
import lilyPhoto from "figma:asset/1f61f3ee2a59c8cc9f95f9dd5608b4bef399f562.png";
import lilyPhoto2 from "figma:asset/10c78477032fe062303bb80a1c61dfa384a73ee6.png";
import competencesImage from "figma:asset/bf99c06a0c8964ef9c8bae52f8fcc53dac684c0f.png";
import cameraImage from "figma:asset/6cb5a3e995e275702871e7bf892c254f6bb46782.png";
import whatsInMyBagImage from "figma:asset/9cd6f08ff94eb5b9bb09600128dd9cdd23cdaed7.png";
import waxSeal from "figma:asset/1065df8f2a1e4f08482714c2c9d43462151e8989.png";
import lilyStamp from "figma:asset/fbe0055d526764d59dc360732905f65df1b3d459.png";
import giftTag from "figma:asset/e94f86c29f0461496560bc43ce5830aae505ed39.png";
import cvImage from "figma:asset/3a00ab15267cd5ecfe822f2fca367a44491715c7.png";
import telemagLogo from "figma:asset/f5bd4963c415d6deb2b0457f1cc756020198eff3.png";
import mondeGlaceLogo from "figma:asset/3a6af8187620778f592ca4e4ba79318c84c608c4.png";
import animalShowLogo from "figma:asset/622e0844e4b62829351bc3d24f0047ddd912adf9.png";
import gandhiLogo from "figma:asset/079121fa87c8580d121d52a41997dcef17020011.png";
import ednLogo from "figma:asset/bc4232217e8cf5d9b98af35564ee076ae95894b0.png";
import stgLogo from "figma:asset/393a9bef6cf1e4d760450450cb44dcc38a159fe5.png";

const SparklePoint = () => (
  <div className="absolute left-4 md:left-8 top-3 z-10">
    <Sparkles className="w-7 h-7 text-[#E8469E] drop-shadow-lg" fill="#E8469E" />
  </div>
);

export function About() {
  return (
      <div 
        className="min-h-screen py-20"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(139, 115, 85, 0.02) 2px,
              rgba(139, 115, 85, 0.02) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(139, 115, 85, 0.02) 2px,
              rgba(139, 115, 85, 0.02) 4px
            ),
            linear-gradient(
              135deg,
              #F5F1ED 0%,
              #F8F6F2 25%,
              #F5F1ED 50%,
              #FAF8F5 75%,
              #F5F1ED 100%
            )
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Header avec lignes décoratives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 relative"
          >
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
              <div className="h-px bg-[#9B8B7E] w-16 md:w-32" />
              <h1
                className="text-3xl md:text-4xl italic"
                style={{
                  fontFamily: "'Brush Script MT', cursive, 'Work Sans', sans-serif",
                  color: "#2D2D2D",
                }}
              >
                à propos
              </h1>
              <div className="h-px bg-[#9B8B7E] w-16 md:w-32" />
            </div>
          </motion.div>

          {/* Collage central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto h-[500px] md:h-[900px]"
            style={{ maxWidth: "900px" }}
          >
            {/* Trombone rose en haut à gauche */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -25 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-4 md:top-8 left-4 md:left-12 z-20"
            >
              <Paperclip className="w-8 h-8 md:w-12 md:h-12 text-[#F5D7E8]" />
            </motion.div>

            {/* Timbre lily en haut à droite */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-2 md:top-4 right-4 md:right-8 z-10"
            >
              <img
                src={lilyStamp}
                alt="Timbre lily"
                className="w-20 h-auto md:w-36 rotate-6 drop-shadow-md"
              />
            </motion.div>

            {/* Enveloppe / Carte postale */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -4 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 z-30 bg-[#F8F6F2] shadow-xl p-4 md:p-6 w-56 md:w-80 border-2 border-[#E8E5E0]"
              style={{ borderRadius: "4px" }}
            >
              <div className="text-center">
                <p
                  className="text-2xl tracking-widest mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#2D2D2D",
                  }}
                >
                  PORTFOLIO
                </p>
                <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif", color: "#9B8B7E" }}>
                  Lily de Chalonge
                </p>
              </div>
            </motion.div>

            {/* Photo 1 - femme avec café */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -5 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-28 md:top-40 left-2 md:left-8 bg-white p-6 md:p-8 shadow-2xl z-20 w-[180px] md:w-[320px] overflow-hidden"
            >
              {/* Emoji noeud rose au-dessus de la photo */}
              <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 text-3xl md:text-5xl z-30">
                🎀
              </div>
              <img
                src={lilyPhoto}
                alt="Lily de Chalonge"
                className="w-full h-56 md:h-96 object-cover scale-110"
              />
            </motion.div>

            {/* Photo 2 - femme avec fleurs et headphones */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 3 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute bottom-16 md:bottom-32 right-2 md:right-16 bg-white p-2 md:p-3 shadow-2xl z-30 w-[160px] md:w-[280px]"
            >
              <img
                src={lilyPhoto2}
                alt="Lily de Chalonge"
                className="w-full h-48 md:h-80 object-cover"
              />
            </motion.div>

            {/* Étiquette cadeau rose en bas à gauche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute bottom-8 md:bottom-16 left-4 md:left-12 z-10"
            >
              <img
                src={giftTag}
                alt="Étiquette cadeau rose"
                className="w-56 h-auto md:w-88 -rotate-12 drop-shadow-md"
              />
            </motion.div>

          </motion.div>

          {/* Grand titre central */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16 mb-8"
          >
            <h2
              className="text-4xl md:text-7xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif, 'Work Sans', sans-serif",
                color: "#1A1A1A",
                letterSpacing: "0.02em",
              }}
            >
              LILY DE CHALONGE
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}
            >
              Découvrez mon parcours et commencez votre voyage pour devenir la meilleure version de vous-même dans le monde de la communication digitale.
            </p>
          </motion.div>

          {/* Mots-clés en bas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center pt-8 border-t border-[#E8E5E0] overflow-hidden"
          >
            <div className="relative whitespace-nowrap">
              <div 
                className="inline-block animate-scroll"
                style={{ fontFamily: "'Work Sans', sans-serif", color: "#9B8B7E" }}
              >
                <span className="text-sm tracking-wider inline-block px-8">
                  Communication - Créativité - Community Management - Branding - Storytelling - Authenticité - 
                  Communication - Créativité - Community Management - Branding - Storytelling - Authenticité - 
                  Communication - Créativité - Community Management - Branding - Storytelling - Authenticité
                </span>
              </div>
            </div>
          </motion.div>

          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Page de journal old money aesthetic */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-24 mb-16 sm:mb-32 max-w-3xl mx-auto px-2 sm:px-0"
          >
            {/* Journal paper */}
            <div className="relative">
              {/* Trombone doré en haut */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 z-20"
              >
                <Paperclip className="w-10 h-10 sm:w-16 sm:h-16 text-[#C9A961]" style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }} />
              </motion.div>

              {/* Page de journal */}
              <div 
                className="bg-[#FAF8F3] border-2 border-[#D4C5A9] shadow-2xl p-4 sm:p-6 md:p-12 relative"
                style={{ 
                  backgroundImage: `
                    linear-gradient(to right, #E8E5DD 1px, transparent 1px),
                    linear-gradient(to bottom, transparent 31px, #E8E5DD 31px, transparent 32px)
                  `,
                  backgroundSize: '100% 32px',
                }}
              >
                {/* Bordure décorative */}
                <div className="absolute inset-1.5 sm:inset-2 md:inset-4 border border-[#C9A961] opacity-30 pointer-events-none" />
                
                {/* En-tête style journal */}
                <div className="text-center mb-4 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-[#C9A961]">
                  <p 
                    className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#1A1A1A] mb-1 sm:mb-2"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    À PROPOS DE LILY
                  </p>
                  <h3 
                    className="text-2xl sm:text-4xl italic text-[#1A1A1A]"
                    style={{ fontFamily: "'Playfair Display', serif, 'Work Sans', sans-serif" }}
                  >
                    Portrait d'une Créative
                  </h3>
                  <p 
                    className="text-[10px] sm:text-xs text-[#9B8B7E] mt-1 sm:mt-2"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    — 2025 —
                  </p>
                </div>

                {/* Contenu */}
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-[#1A1A1A] indent-4 sm:indent-8"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    <span className="text-3xl sm:text-5xl float-left mr-2 sm:mr-3 mt-1 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>É</span>
                    tudiante en BTS Communication à l'École du Numérique, je suis passionnée par l'univers de la communication digitale et du community management. Mon approche allie créativité, stratégie et authenticité pour créer des contenus qui touchent et engagent.
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-[#1A1A1A] indent-4 sm:indent-8"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    Mes expériences avec Le Monde de la Glace, Yvently et mes projets académiques m'ont permis de développer une expertise dans la création de contenus visuels, la gestion de communautés et le branding événementiel. J'aime créer des univers esthétiques qui racontent une histoire.
                  </p>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed text-[#1A1A1A] indent-4 sm:indent-8"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    Mon style se caractérise par une attention particulière aux détails, une inspiration puisée dans l'aesthetic Pinterest, et une capacité à transformer chaque projet en une expérience mémorable. Je crois en la puissance du storytelling et de l'authenticité pour créer des connexions durables.
                  </p>

                  {/* Citation */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#D4C5A5]">
                    <p 
                      className="text-sm sm:text-lg italic text-center text-[#1A1A1A]"
                      style={{ fontFamily: "'Playfair Display', serif, 'Work Sans', sans-serif" }}
                    >
                      "Créer du contenu qui inspire, engage et transforme."
                    </p>
                  </div>
                </div>

                {/* Signature */}
                <div className="mt-6 sm:mt-8 flex justify-end">
                  <p 
                    className="text-xl sm:text-2xl italic text-[#1A1A1A]"
                    style={{ fontFamily: "'Homemade Apple', cursive" }}
                  >
                    Lily de Chalonge
                  </p>
                </div>

                {/* Sceau de cire rose en bas à droite */}
                <img 
                  src={waxSeal} 
                  alt="Sceau de cire rose" 
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rotate-12 drop-shadow-lg z-20"
                />
              </div>

              {/* Ombre portée supplémentaire pour effet de profondeur */}
              <div className="absolute inset-0 bg-black opacity-5 blur-xl -z-10 translate-y-4 translate-x-2" />
            </div>
          </motion.div>

          {/* Bouton Télécharger mon CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.a
              href={cvImage}
              download="CV-Lily-de-Chalonge.png"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#E8469E] text-white text-xs tracking-widest hover:bg-[#D4307E] transition-all font-medium rounded-full shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown className="w-5 h-5" />
              TÉLÉCHARGER MON CV
            </motion.a>
            <p
              className="text-xs mt-3 italic"
              style={{ fontFamily: "'Work Sans', sans-serif", color: "#9B8B7E" }}
            >
              Format PNG • Mis à jour en 2025
            </p>
          </motion.div>

          {/* Section What's in my bag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 mb-20 max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={whatsInMyBagImage}
                alt="What's in my bag - Community Manager essentials"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Section Expériences */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 mb-20"
          >
            <h2
              className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-center"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                color: "#1A1A1A",
                letterSpacing: "0.05em",
              }}
            >
              EXPÉRIENCES
            </h2>

            {/* Timeline verticale */}
            <div className="relative max-w-3xl mx-auto px-4">
              {/* Ligne verticale */}
              <motion.div 
                className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E8B5D4] via-[#E8469E] to-[#D4A5A5]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "top" }}
              />

              {/* Expériences */}
              <div className="space-y-6">
                {/* 2025 - Le Monde de la Glace */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      JUILLET 2025
                    </span>
                    <p
                      className="text-sm md:text-base italic mt-0.5"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      En cours
                    </p>
                  </div>

                  {/* Contenu */}
                  <Link
                    to="/project/monde-glace/lgm"
                    className="flex items-stretch gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#E8469E]/40 hover:-translate-y-1 group"
                  >
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base md:text-lg font-bold mb-1"
                        style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                      >
                        COMMUNITY MANAGER
                      </h3>
                      <p
                        className="italic text-sm md:text-base mb-2"
                        style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                      >
                        Le Monde de la Glace
                      </p>
                      <ul className="text-xs space-y-1" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                        <li>• Création de contenus visuels et rédactionnels</li>
                        <li>• Gestion des réseaux sociaux</li>
                        <li>• Animation de la communauté</li>
                      </ul>
                      <div className="mt-3 pt-2 border-t border-[#E8B5D4]/30 flex items-center gap-2 text-xs tracking-wider opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}>
                        <span>VOIR LE PROJET</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    {/* Logo Le Monde de la Glace */}
                    <div className="hidden sm:flex items-center justify-center shrink-0">
                      <img
                        src={mondeGlaceLogo}
                        alt="Logo Le Monde de la Glace"
                        className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl"
                      />
                    </div>
                  </Link>
                </motion.div>

                {/* 2025 - Chargée de communication événementielle */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      MAI 2025
                    </span>
                  </div>

                  {/* Contenu */}
                  <Link
                    to="/project/divers/animal-show"
                    className="flex items-stretch gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#E8469E]/40 hover:-translate-y-1 group"
                  >
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base md:text-lg font-bold mb-1"
                        style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                      >
                        CHARGÉE DE COMMUNICATION ÉVÉNEMENTIELLE
                      </h3>
                      <p
                        className="italic text-sm md:text-base mb-2"
                        style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                      >
                        Salon Animalier - Animal Show
                      </p>
                      <ul className="text-xs space-y-1" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                        <li>• Élaboration et gestion d'un calendrier éditorial</li>
                        <li>• Réalisation pancartes informatives</li>
                        <li>• Création de contenus visuels et rédactionnels pour les réseaux sociaux</li>
                      </ul>
                      <div className="mt-3 pt-2 border-t border-[#E8B5D4]/30 flex items-center gap-2 text-xs tracking-wider opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}>
                        <span>VOIR LE PROJET</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    {/* Logo Animal Show */}
                    <div className="hidden sm:flex items-center justify-center shrink-0">
                      <img
                        src={animalShowLogo}
                        alt="Logo Animal Show"
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl"
                      />
                    </div>
                  </Link>
                </motion.div>

                {/* 2024 - Créatrice de contenu */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-base md:text-lg font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      JUILLET 2024 - JANVIER 2025
                    </span>
                  </div>

                  {/* Contenu */}
                  <Link
                    to="/project/telemag-plus/realisation-interview"
                    className="flex items-stretch gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#E8469E]/40 hover:-translate-y-1 group"
                  >
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base md:text-lg font-bold mb-1"
                        style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                      >
                        CRÉATRICE DE CONTENU EN ALTERNANCE
                      </h3>
                      <p
                        className="italic text-sm md:text-base mb-2"
                        style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                      >
                        Télémagplus
                      </p>
                      <ul className="text-xs space-y-1" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                        <li>• Rédaction d'articles</li>
                        <li>• Interviews</li>
                      </ul>
                      <div className="mt-3 pt-2 border-t border-[#E8B5D4]/30 flex items-center gap-2 text-xs tracking-wider opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}>
                        <span>VOIR LE PROJET</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    {/* Logo Télémagplus */}
                    <div className="hidden sm:flex items-center justify-center shrink-0">
                      <img
                        src={telemagLogo}
                        alt="Logo Télémagplus"
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl"
                      />
                    </div>
                  </Link>
                </motion.div>

                {/* 2022/2023/2024 - Chargée d'impression photos */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-base md:text-lg font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      MAI 2022/2023/2024
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20">
                    <h3
                      className="text-base md:text-lg font-bold mb-1"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      CHARGÉE D'IMPRESSION PHOTOS
                    </h3>
                    <p
                      className="italic text-sm md:text-base mb-2"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      Foire Agricole de Bras-Panon
                    </p>
                    <ul className="text-xs space-y-1" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                      <li>• Impression photos numériques</li>
                    </ul>
                  </div>
                </motion.div>

                {/* 2023 - Hôtesse d'accueil */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      MARS 2023
                    </span>
                  </div>

                  {/* Contenu */}
                  <Link
                    to="/project/divers/animal-show"
                    className="flex items-stretch gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#E8469E]/40 hover:-translate-y-1 group"
                  >
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base md:text-lg font-bold mb-1"
                        style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                      >
                        HÔTESSE D'ACCUEIL
                      </h3>
                      <p
                        className="italic text-sm md:text-base mb-2"
                        style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                      >
                        Salon Animalier - Animal show
                      </p>
                      <ul className="text-xs space-y-1" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                        <li>• Accueillir, orienter, informer une personne</li>
                        <li>• Identifier et traiter une demande</li>
                      </ul>
                      <div className="mt-3 pt-2 border-t border-[#E8B5D4]/30 flex items-center gap-2 text-xs tracking-wider opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}>
                        <span>VOIR LE PROJET</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    {/* Logo Animal Show */}
                    <div className="hidden sm:flex items-center justify-center shrink-0">
                      <img
                        src={animalShowLogo}
                        alt="Logo Animal Show"
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl"
                      />
                    </div>
                  </Link>
                </motion.div>

                {/* 2022 - Stagiaire assistante réalisateur */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      MAI 2022
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20">
                    <h3
                      className="text-base md:text-lg font-bold mb-1"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      STAGIAIRE ASSISTANTE RÉALISATEUR
                    </h3>
                    <p
                      className="italic text-sm md:text-base mb-2"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      Banijay studio Bry sur Marne
                    </p>
                    <ul className="text-xs space-y-1" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                      <li>• Transmettre des informations</li>
                    </ul>
                  </div>
                </motion.div>

                {/* 2021 - Stagiaire police nationale */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      AVRIL 2021
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20">
                    <h3
                      className="text-base md:text-lg font-bold mb-1"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      STAGIAIRE POLICE NATIONALE
                    </h3>
                    <p
                      className="italic text-sm md:text-base mb-2"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      Commissariat de Saint-André
                    </p>
                    <ul className="text-xs space-y-1" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                      <li>• Découvrir les différents services</li>
                    </ul>
                  </div>
                </motion.div>

                {/* 2019 - Hôtesse parc d'attraction */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      OCTOBRE 2019
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20">
                    <h3
                      className="text-base md:text-lg font-bold mb-1"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      HÔTESSE PARC D'ATTRACTION
                    </h3>
                    <p
                      className="italic text-sm md:text-base mb-2"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                    >
                      New Park
                    </p>
                    <ul className="text-xs space-y-1" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                      <li>• Gérer le flux des attractions</li>
                      <li>• Travailler en équipe</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════ Section FORMATION ═══════════ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 mb-20"
          >
            <h2
              className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-center"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                color: "#1A1A1A",
                letterSpacing: "0.05em",
              }}
            >
              FORMATION
            </h2>

            {/* Cartes formation style cahier d'école */}
            <div className="relative max-w-3xl mx-auto px-4">
              {/* Ligne verticale */}
              <motion.div 
                className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4A5A5] via-[#E8B5D4] to-[#E8469E]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "top" }}
              />

              <div className="space-y-6">
                {/* 2024 - École du Numérique */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      2024 — EN COURS
                    </span>
                  </div>

                  {/* Contenu — style page de cahier */}
                  <div 
                    className="relative bg-white p-5 md:p-6 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 overflow-hidden"
                  >
                    {/* Lignes de cahier subtiles */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-[0.07]"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #6B8DA6 27px, #6B8DA6 28px)',
                      }}
                    />
                    {/* Marge rouge */}
                    <div className="absolute left-10 top-0 bottom-0 w-px bg-[#E8469E]/15 pointer-events-none" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-base md:text-lg font-bold mb-1"
                          style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                        >
                          ÉCOLE DU NUMÉRIQUE, CCIR
                        </h3>
                        <p
                          className="italic text-sm md:text-base mb-3"
                          style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                        >
                          Saint-Denis, La Réunion
                        </p>
                        <div className="space-y-1.5">
                          <p className="text-sm" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                            2ème année de <strong>BTS Communication</strong>
                          </p>
                          <ul className="text-xs space-y-1 mt-2" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                            <li>• Mettre en œuvre et suivre un projet de communication</li>
                            <li>• Conseiller et vendre des solutions de communication</li>
                            <li>• Veille opérationnelle</li>
                            <li>• Produire des supports de communication</li>
                            <li>• Mettre en œuvre une stratégie de communication digitale</li>
                            <li>• Organiser des événements de communication</li>
                            <li>• Contribuer à la communication interne</li>
                          </ul>
                        </div>
                        {/* Badge "En cours" */}
                        <div className="mt-3">
                          <span 
                            className="inline-block px-3 py-1 text-xs rounded-full"
                            style={{
                              fontFamily: "'Work Sans', sans-serif",
                              background: 'linear-gradient(135deg, #FFD6E8, #FBEAF2)',
                              color: '#E8469E',
                              fontWeight: 600,
                              border: '1px solid rgba(232, 70, 158, 0.2)',
                            }}
                          >
                            En cours
                          </span>
                        </div>
                      </div>
                      {/* Logo École du Numérique */}
                      <div className="hidden sm:flex items-center justify-center shrink-0">
                        <img
                          src={ednLogo}
                          alt="Logo École du Numérique"
                          className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 2021-2024 - Lycée Mahatma Gandhi */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      2021 — 2024
                    </span>
                  </div>

                  {/* Contenu */}
                  <div 
                    className="relative bg-white p-5 md:p-6 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 overflow-hidden"
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-[0.07]"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #6B8DA6 27px, #6B8DA6 28px)',
                      }}
                    />
                    <div className="absolute left-10 top-0 bottom-0 w-px bg-[#E8469E]/15 pointer-events-none" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-base md:text-lg font-bold mb-1"
                          style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                        >
                          LYCÉE MAHATMA GANDHI
                        </h3>
                        <p
                          className="italic text-sm md:text-base mb-3"
                          style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                        >
                          Saint-André, La Réunion
                        </p>
                        <ul className="text-sm space-y-1.5" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                          <li>• Obtention du <strong>Baccalauréat</strong></li>
                          <li>• Spécialités <strong>SES</strong> et <strong>LLCE Anglais</strong> — mention Bien</li>
                          <li>• Obtention <strong>Certification PIX</strong></li>
                          <li>• Obtention <strong>Certification Cambridge</strong></li>
                        </ul>
                        {/* Badge mention */}
                        <div className="mt-3">
                          <span 
                            className="inline-block px-3 py-1 text-xs rounded-full"
                            style={{
                              fontFamily: "'Work Sans', sans-serif",
                              background: 'linear-gradient(135deg, #FFF3CD, #FFEEBA)',
                              color: '#856404',
                              fontWeight: 600,
                              border: '1px solid rgba(133, 100, 4, 0.15)',
                            }}
                          >
                            Mention Bien
                          </span>
                        </div>
                      </div>
                      {/* Logo Lycée Mahatma Gandhi */}
                      <div className="hidden sm:flex items-center justify-center shrink-0">
                        <img
                          src={gandhiLogo}
                          alt="Logo Lycée Mahatma Gandhi"
                          className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 2017-2021 - Collège Sainte-Geneviève */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-28"
                >
                  <SparklePoint />
                  
                  {/* Date */}
                  <div className="mb-2">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{ fontFamily: "'Work Sans', sans-serif", color: "#D4A5A5" }}
                    >
                      2017 — 2021
                    </span>
                  </div>

                  {/* Contenu */}
                  <div 
                    className="relative bg-white p-5 md:p-6 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 overflow-hidden"
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-[0.07]"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #6B8DA6 27px, #6B8DA6 28px)',
                      }}
                    />
                    <div className="absolute left-10 top-0 bottom-0 w-px bg-[#E8469E]/15 pointer-events-none" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-base md:text-lg font-bold mb-1"
                          style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                        >
                          COLLÈGE SAINTE-GENEVIÈVE
                        </h3>
                        <p
                          className="italic text-sm md:text-base mb-3"
                          style={{ fontFamily: "'Work Sans', sans-serif", color: "#E8469E" }}
                        >
                          La Réunion
                        </p>
                        <ul className="text-sm space-y-1.5" style={{ fontFamily: "'Work Sans', sans-serif", color: "#2D2D2D" }}>
                          <li>• Obtention du <strong>Brevet des collèges</strong></li>
                          <li>• Formation <strong>PSC1</strong> (Premiers secours)</li>
                        </ul>
                      </div>
                      {/* Logo Collège Sainte-Geneviève */}
                      <div className="hidden sm:flex items-center justify-center shrink-0">
                        <img
                          src={stgLogo}
                          alt="Logo Collège Sainte-Geneviève"
                          className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Section Through My Lens - Outils */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2
                className="text-3xl md:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "#D4A5A5",
                }}
              >
                Mes compétences
              </h2>
            </div>

            {/* Appareil photo numérique rose vintage */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* SVG Appareil photo amélioré */}
                <svg width="100%" viewBox="0 0 820 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F2C6DE" />
                      <stop offset="50%" stopColor="#E8B5D4" />
                      <stop offset="100%" stopColor="#D9A0C4" />
                    </linearGradient>
                    <linearGradient id="gripGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4A5A5" />
                      <stop offset="100%" stopColor="#BF8F8F" />
                    </linearGradient>
                    <linearGradient id="screenReflect" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <filter id="softShadow" x="-5%" y="-5%" width="115%" height="120%">
                      <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.18" />
                    </filter>
                  </defs>

                  {/* Ombre portée */}
                  <rect x="78" y="138" width="664" height="320" rx="24" fill="black" opacity="0.08" filter="url(#softShadow)" />

                  {/* Corps principal */}
                  <rect x="75" y="130" width="670" height="320" rx="24" fill="url(#bodyGrad)" stroke="#D4A0B8" strokeWidth="2" />
                  
                  {/* Texture lignes horizontales */}
                  {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => (
                    <line key={`tex-${i}`} x1="85" y1={155 + i * 20} x2="735" y2={155 + i * 20} stroke="#D4A0B8" strokeWidth="0.3" opacity="0.4" />
                  ))}

                  {/* Top plate surélevée */}
                  <rect x="75" y="105" width="670" height="40" rx="12" fill="#F2C6DE" stroke="#D4A0B8" strokeWidth="2" />
                  <rect x="80" y="110" width="660" height="30" rx="10" fill="url(#bodyGrad)" opacity="0.7" />

                  {/* Flash */}
                  <rect x="110" y="112" width="45" height="26" rx="5" fill="#F8E8F0" stroke="#D4A0B8" strokeWidth="1.5" />
                  <rect x="115" y="117" width="35" height="16" rx="3" fill="white" opacity="0.8" />
                  {[0,1,2,3,4,5].map((i) => (
                    <line key={`flash-${i}`} x1={120 + i * 5} y1="119" x2={120 + i * 5} y2="131" stroke="#E8B5D4" strokeWidth="0.8" opacity="0.5" />
                  ))}

                  {/* Viseur optique */}
                  <rect x="370" y="112" width="80" height="24" rx="6" fill="#333" stroke="#555" strokeWidth="1.5" />
                  <rect x="378" y="117" width="64" height="14" rx="4" fill="#1a1a1a" />
                  <rect x="382" y="119" width="56" height="10" rx="3" fill="#2d2d3d" />
                  <circle cx="410" cy="124" r="4" fill="none" stroke="#555" strokeWidth="0.5" opacity="0.5" />

                  {/* Molette mode */}
                  <circle cx="660" cy="112" r="22" fill="#D4A5A5" stroke="#BF8F8F" strokeWidth="2" />
                  <circle cx="660" cy="112" r="17" fill="#E8B5D4" />
                  <circle cx="660" cy="112" r="6" fill="#C4959D" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <line
                      key={`cran-${angle}`}
                      x1={660 + Math.cos(angle * Math.PI / 180) * 14}
                      y1={112 + Math.sin(angle * Math.PI / 180) * 14}
                      x2={660 + Math.cos(angle * Math.PI / 180) * 19}
                      y2={112 + Math.sin(angle * Math.PI / 180) * 19}
                      stroke="#BF8F8F" strokeWidth="1.5" strokeLinecap="round"
                    />
                  ))}
                  <text x="660" y="96" fontFamily="Arial" fontSize="6" fill="#9B8B7E" textAnchor="middle">AUTO</text>

                  {/* Bouton déclencheur */}
                  <ellipse cx="600" cy="108" rx="18" ry="10" fill="#C4959D" stroke="#B08080" strokeWidth="1.5" />
                  <ellipse cx="600" cy="106" rx="14" ry="7" fill="#E8469E" />
                  <ellipse cx="598" cy="104" rx="6" ry="3" fill="white" opacity="0.3" />

                  {/* ON/OFF */}
                  <rect x="540" y="110" width="30" height="12" rx="6" fill="#7A6F5D" />
                  <circle cx="563" cy="116" r="4" fill="#9B8B7E" />
                  <text x="548" y="119" fontFamily="Arial" fontSize="6" fill="white">ON</text>

                  {/* Logo */}
                  <text x="260" y="128" fontFamily="'Brush Script MT', cursive" fontSize="22" fill="#9B7088" fontStyle="italic" opacity="0.8">Lily&apos;s Cam</text>

                  {/* Grip simili-cuir gauche */}
                  <rect x="75" y="150" width="65" height="280" rx="12" fill="url(#gripGrad)" />
                  {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((i) => (
                    <line key={`grip-${i}`} x1="85" y1={165 + i * 14} x2="130" y2={165 + i * 14} stroke="#B08080" strokeWidth="0.8" opacity="0.5" />
                  ))}

                  {/* === ÉCRAN LCD === */}
                  <rect x="155" y="155" width="440" height="275" rx="8" fill="#111" stroke="#333" strokeWidth="3" />
                  <rect x="162" y="162" width="426" height="261" rx="5" fill="#f8f8f8" />
                  <image 
                    href={competencesImage} 
                    x="167" y="167" width="416" height="251" 
                    preserveAspectRatio="xMidYMid meet"
                  />
                  <rect x="162" y="162" width="426" height="261" rx="5" fill="url(#screenReflect)" />
                  {/* Indicateurs écran */}
                  <circle cx="180" cy="178" r="4" fill="#E8469E" opacity="0.9" />
                  <text x="190" y="181" fontFamily="Arial" fontSize="8" fill="white" opacity="0.9">REC</text>
                  <text x="560" y="181" fontFamily="Arial" fontSize="8" fill="white" opacity="0.7" textAnchor="end">F2.8</text>
                  <text x="560" y="410" fontFamily="Arial" fontSize="8" fill="white" opacity="0.7" textAnchor="end">ISO 400</text>

                  {/* === Panneau droit === */}
                  <rect x="610" y="155" width="120" height="275" rx="8" fill="#E0A8C8" opacity="0.5" />

                  {/* Petit écran info */}
                  <rect x="625" y="170" width="90" height="35" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
                  <rect x="629" y="174" width="82" height="27" rx="2" fill="#2a3a2a" />
                  <text x="670" y="185" fontFamily="'Courier New'" fontSize="7" fill="#8fbc8f" textAnchor="middle">P MODE</text>
                  <text x="670" y="196" fontFamily="'Courier New'" fontSize="9" fill="#8fbc8f" textAnchor="middle">1/125  f2.8</text>

                  {/* Croix directionnelle */}
                  <circle cx="670" cy="260" r="38" fill="#D4A5A5" stroke="#BF8F8F" strokeWidth="2" />
                  <circle cx="670" cy="260" r="32" fill="#E8B5D4" />
                  <circle cx="670" cy="260" r="12" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                  <text x="670" y="263" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle">OK</text>
                  <polygon points="670,232 665,240 675,240" fill="#BF8F8F" />
                  <polygon points="670,288 665,280 675,280" fill="#BF8F8F" />
                  <polygon points="642,260 650,255 650,265" fill="#BF8F8F" />
                  <polygon points="698,260 690,255 690,265" fill="#BF8F8F" />
                  <text x="670" y="229" fontFamily="Arial" fontSize="6" fill="#7A6F5D" textAnchor="middle">DISP</text>
                  <text x="670" y="298" fontFamily="Arial" fontSize="6" fill="#7A6F5D" textAnchor="middle">DELETE</text>

                  {/* Boutons bas droite */}
                  <rect x="625" y="320" width="40" height="16" rx="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                  <text x="645" y="332" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle" fontWeight="bold">MENU</text>
                  <rect x="675" y="320" width="40" height="16" rx="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                  <text x="695" y="332" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle">▶</text>
                  <rect x="625" y="350" width="40" height="16" rx="4" fill="#7A6F5D" stroke="#6A5F4D" strokeWidth="1" />
                  <text x="645" y="362" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle">Fn</text>
                  <rect x="675" y="350" width="40" height="16" rx="4" fill="#7A6F5D" stroke="#6A5F4D" strokeWidth="1" />
                  <text x="695" y="362" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle">Q</text>

                  {/* Ports en bas */}
                  <rect x="300" y="438" width="50" height="8" rx="2" fill="#555" />
                  <text x="325" y="458" fontFamily="Arial" fontSize="7" fill="#9B8B7E" textAnchor="middle">HDMI</text>
                  <rect x="380" y="438" width="35" height="8" rx="2" fill="#555" />
                  <text x="397" y="458" fontFamily="Arial" fontSize="7" fill="#9B8B7E" textAnchor="middle">USB</text>

                  {/* Vis déco aux coins */}
                  <circle cx="95" cy="145" r="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                  <line x1="92" y1="145" x2="98" y2="145" stroke="#B08080" strokeWidth="1" />
                  <circle cx="725" cy="145" r="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                  <line x1="722" y1="145" x2="728" y2="145" stroke="#B08080" strokeWidth="1" />
                  <circle cx="95" cy="435" r="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                  <line x1="92" y1="435" x2="98" y2="435" stroke="#B08080" strokeWidth="1" />
                  <circle cx="725" cy="435" r="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                  <line x1="722" y1="435" x2="728" y2="435" stroke="#B08080" strokeWidth="1" />

                  {/* Dragonne */}
                  <rect x="740" y="165" width="12" height="20" rx="3" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                  <path d="M 752 170 Q 790 175 785 200 Q 780 230 760 225" stroke="#D4A5A5" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M 752 170 Q 790 175 785 200 Q 780 230 760 225" stroke="#E8B5D4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <text x="778" y="198" fontSize="12" fill="#E8469E" opacity="0.7">♥</text>
                </svg>
              </motion.div>
            </div>

            {/* Décoration - Trombones */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 15 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-8 right-12"
            >
              <Paperclip className="w-10 h-10 text-[#E8B5D4]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-12 left-16"
            >
              <Paperclip className="w-8 h-8 text-[#D4A5A5]" />
            </motion.div>
          </motion.div>

          {/* Ticket de caisse - Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 mb-20 max-w-xs mx-auto"
          >
            <div className="relative">
              {/* Machine à ticket en haut (effet 3D) */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-full h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-2xl shadow-xl border-t-4 border-gray-500" />
              
              {/* Ticket */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white shadow-2xl relative"
                style={{
                  fontFamily: "'Courier New', monospace",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                {/* En-tête du ticket */}
                <div className="text-center mb-4">
                  <h3 
                    className="text-lg font-bold tracking-wide mb-1"
                    style={{ fontFamily: "'Courier New', monospace", color: "#2a2a2a" }}
                  >
                    SOFT SKILLS
                  </h3>
                  <p 
                    className="text-xs tracking-widest"
                    style={{ color: "#666" }}
                  >
                    ✦ LILY DE CHALONGE ✦
                  </p>
                </div>

                {/* Ligne séparatrice */}
                <div className="border-t-2 border-dashed border-gray-400 mb-4" />

                {/* Date et info */}
                <div className="text-xs mb-3 space-y-1" style={{ color: "#2a2a2a" }}>
                  <div className="flex justify-between">
                    <span>DATE:</span>
                    <span>FÉVRIER 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LOC:</span>
                    <span className="text-right">BTS COMMUNICATION</span>
                  </div>
                </div>

                {/* Ligne séparatrice */}
                <div className="border-t-2 border-black mb-3" />

                {/* En-têtes colonnes */}
                <div className="flex justify-between text-xs font-bold mb-2" style={{ color: "#2a2a2a" }}>
                  <span>COMPÉTENCE</span>
                  <span>NIVEAU</span>
                </div>

                {/* Liste des compétences */}
                <div className="space-y-1.5 text-xs mb-3" style={{ color: "#2a2a2a" }}>
                  <div className="flex justify-between">
                    <span>CRÉATIVE</span>
                    <span>★★★★★</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AMBITIEUSE</span>
                    <span>★★★★☆</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FORCE DE PROPOSITION</span>
                    <span>★★★★☆</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DYNAMIQUE</span>
                    <span>★★★★★</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CAPACITÉ D'ADAPTATION</span>
                    <span>★★★★☆</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ESPRIT D'ÉQUIPE</span>
                    <span>★★★★★</span>
                  </div>
                </div>

                {/* Ligne séparatrice */}
                <div className="border-t-2 border-black mb-3" />

                {/* Total */}
                <div className="flex justify-between text-sm font-bold mb-4" style={{ color: "#2a2a2a" }}>
                  <span>TOTAL</span>
                  <span>100%</span>
                </div>

                {/* Ligne séparatrice */}
                <div className="border-t-2 border-black mb-4" />

                {/* Code-barres stylisé */}
                <div className="flex justify-center gap-px mb-3">
                  {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 4, 2, 1, 3].map((height, i) => (
                    <div
                      key={i}
                      className="bg-black"
                      style={{
                        width: i % 3 === 0 ? '3px' : '2px',
                        height: `${height * 12}px`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-center text-xs tracking-wider mb-3" style={{ color: "#2a2a2a" }}>
                  |||| 2025LILY974BTSCOMMUNICATION ||||
                </p>

                {/* Bord déchiré en bas */}
                <div 
                  className="absolute -bottom-4 left-0 right-0 h-6 bg-white"
                  style={{
                    clipPath: 'polygon(0 0, 5% 50%, 0 100%, 8% 50%, 5% 0, 13% 50%, 10% 100%, 18% 50%, 15% 0, 23% 50%, 20% 100%, 28% 50%, 25% 0, 33% 50%, 30% 100%, 38% 50%, 35% 0, 43% 50%, 40% 100%, 48% 50%, 45% 0, 53% 50%, 50% 100%, 58% 50%, 55% 0, 63% 50%, 60% 100%, 68% 50%, 65% 0, 73% 50%, 70% 100%, 78% 50%, 75% 0, 83% 50%, 80% 100%, 88% 50%, 85% 0, 93% 50%, 90% 100%, 98% 50%, 95% 0, 100% 50%, 100% 100%, 0 100%)'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Section Mood Board — Mes Hobbies */}
          <MoodBoard />
        </div>
      </div>
  );
}