import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Paperclip, FileDown, Menu, X } from "lucide-react";
import { useState } from "react";
import lilyLogo from "figma:asset/a4d704f984a497648d956494eb0ddf4ec8262912.png";

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navItems = [
    { name: "À PROPOS", path: "/about" },
    { name: "RÉALISATIONS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3F0]/80 backdrop-blur-md border-b border-[#E8E5E0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setMobileOpen(false)}
        >
          <img src={lilyLogo} alt="Lily de Chalonge" className="h-12 sm:h-16 md:h-20 w-auto" />
        </Link>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden p-2 text-[#1A1A1A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* Nav desktop */}
        <nav className="hidden md:flex items-end gap-4">
          {navItems.map((link) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative flex flex-col items-center group"
              >
                {/* Onglet style dossier */}
                <div className={`transition-all ${isActive ? "scale-105" : "hover:scale-105"}`}>
                  <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Onglet du dossier plus épais */}
                    <path 
                      d="M8 30 C8 26 12 22 17 22 L60 22 L72 30 L172 30 L172 78 C172 78 12 78 8 78 Z" 
                      fill={isActive ? "#E8469E" : "#E8B5D4"}
                      className="transition-colors group-hover:fill-[#E8469E]"
                    />
                  </svg>
                  
                  {/* Texte au centre de l'onglet */}
                  <span 
                    className={`absolute inset-0 flex items-center justify-center text-base font-medium transition-colors pt-6 ${
                      isActive ? "text-white" : "text-[#2D2D2D]"
                    } group-hover:text-white`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {link.name}
                  </span>
                </div>
              </Link>
            );
          })}

        </nav>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F5F3F0]/95 backdrop-blur-md border-t border-[#E8E5E0] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-4 rounded-xl text-sm tracking-widest font-medium transition-all ${
                      isActive
                        ? "bg-[#E8469E] text-white"
                        : "text-[#2D2D2D] hover:bg-[#E8B5D4]/20"
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}