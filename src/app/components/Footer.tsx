import { Link } from "react-router";
import { motion } from "motion/react";
import { Sparkles, Heart, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import lilyLogo from "figma:asset/a4d704f984a497648d956494eb0ddf4ec8262912.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#EDE8E3] overflow-hidden">
      {/* Bordure washi tape en haut */}
      <div className="relative h-5 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "repeating-linear-gradient(90deg, #F8C8DC 0px, #F8C8DC 12px, #FADCE6 12px, #FADCE6 24px)",
            opacity: 0.6,
          }}
        />
        {/* Bords déchirés */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2"
          style={{
            background: "linear-gradient(135deg, transparent 33.33%, #EDE8E3 33.33%, #EDE8E3 66.66%, transparent 66.66%)",
            backgroundSize: "8px 8px",
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-12 md:pt-16 pb-8">
        {/* Top section — logo + navigation + socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">

          {/* Colonne gauche — Logo + tagline dans un cadre polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="bg-white p-4 pb-10 shadow-md rotate-[-2deg] hover:rotate-0 transition-transform duration-300 relative">
              <img
                src={lilyLogo}
                alt="Lily de Chalonge"
                className="h-16 md:h-20 w-auto mx-auto"
              />
              {/* Annotation manuscrite sous le logo */}
              <span
                className="absolute bottom-2.5 left-0 right-0 text-center text-[#E8469E] text-sm"
                style={{ fontFamily: "'Sacramento', cursive" }}
              >
                étudiante en communication
              </span>
              {/* Trombone décoratif */}
              <div className="absolute -top-3 right-3 rotate-12">
                <svg width="16" height="36" viewBox="0 0 16 36" fill="none">
                  <path
                    d="M8 2C4 2 2 5 2 8V26C2 30 5 34 8 34C11 34 14 30 14 26V10C14 7 12 5 10 5C8 5 6 7 6 10V24"
                    stroke="#D4A5A5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Colonne centre — Navigation sur une note collante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Washi tape en haut du post-it */}
              <div
                className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 rounded-sm z-10 rotate-[-1deg]"
                style={{
                  background: "rgba(232, 70, 158, 0.2)",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1' fill='rgba(255,255,255,0.4)'/%3E%3C/svg%3E")`,
                }}
              />
              <div
                className="bg-[#FFF9F0] p-6 pt-8 shadow-sm"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                }}
              >
                <h4
                  className="text-xs tracking-[0.2em] text-[#9B8B7E] mb-4 text-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  NAVIGATION
                </h4>
                <nav className="flex flex-col gap-2 items-center">
                  {[
                    { name: "Accueil", path: "/" },
                    { name: "À propos", path: "/about" },
                    { name: "Réalisations", path: "/projects" },
                    { name: "Contact", path: "/contact" },
                  ].map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-[#2D2D2D] text-sm hover:text-[#E8469E] transition-colors relative group"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#E8469E] group-hover:w-full transition-all duration-300" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite — Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center md:items-end"
          >
            <h4
              className="text-xs tracking-[0.2em] text-[#9B8B7E] mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              ME RETROUVER
            </h4>

            <div className="flex gap-3">
              {[
                {
                  icon: <Linkedin className="w-4 h-4" />,
                  href: "https://www.linkedin.com/in/lily-de-chalonge/",
                  label: "LinkedIn",
                },
                {
                  icon: <Instagram className="w-4 h-4" />,
                  href: "https://www.instagram.com/lilydechalonge/",
                  label: "Instagram",
                },
                {
                  icon: <Mail className="w-4 h-4" />,
                  href: "mailto:lily.dechalonge@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border-2 border-[#D4A5A5]/40 flex items-center justify-center text-[#9B8B7E] hover:bg-[#E8469E] hover:border-[#E8469E] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Petite citation manuscrite */}
            <div className="mt-6 bg-white/60 px-4 py-3 rounded-sm rotate-[1deg] shadow-sm max-w-[200px]">
              <span
                className="text-sm text-[#9B8B7E] block text-center"
                style={{ fontFamily: "'Homemade Apple', cursive" }}
              >
                let's create together
              </span>
              <Sparkles className="w-3 h-3 text-[#E8469E] mx-auto mt-1 opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Séparateur décoratif — ligne pointillée style couture */}
        <div className="my-8 md:my-10 flex items-center gap-3">
          <div className="flex-1 border-t-2 border-dashed border-[#D4A5A5]/30" />
          <Heart className="w-3.5 h-3.5 text-[#E8469E] opacity-40 fill-[#E8469E]" />
          <div className="flex-1 border-t-2 border-dashed border-[#D4A5A5]/30" />
        </div>

        {/* Bottom section — copyright + bouton retour en haut */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span
              className="text-[#9B8B7E] text-xs tracking-wide"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              &copy; 2025 Lily de Chalonge
            </span>
            <span className="mx-2 text-[#D4A5A5]/40">•</span>
            <span
              className="text-[#B8A89C] text-xs"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Portfolio de Communication
            </span>
          </div>

          <span
            className="text-xs text-[#D4A5A5]"
            style={{ fontFamily: "'Sacramento', cursive" }}
          >
            made with <Heart className="w-3 h-3 inline text-[#E8469E] fill-[#E8469E] -mt-0.5" /> à Paris
          </span>

          {/* Bouton remonter */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full bg-[#E8469E]/10 hover:bg-[#E8469E] text-[#E8469E] hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Stickers décoratifs flottants */}
      <div className="absolute top-8 left-6 opacity-[0.07] pointer-events-none hidden md:block">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="#E8469E">
          <path d="M12 2L13.5 8.5L20 7L14.5 11L18 17L12 13.5L6 17L9.5 11L4 7L10.5 8.5L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-10 opacity-[0.06] pointer-events-none hidden md:block rotate-12">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="#D4A5A5">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </footer>
  );
}
