import { motion } from "motion/react";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import smartiesPartyShake from "figma:asset/af2a53f4c9ec4973d84b632706e8e3039110c793.png";
import xmasShake from "figma:asset/643aaf2aa99938d901a9fe3ecc1ac32c022631aa.png";
import monstershake from "figma:asset/c796ee46ec804d80ee7948633a8424d11fabf922.png";
import sneakyshake from "figma:asset/348c91942b2be16172948896810346a5383105c5.png";
import popshake from "figma:asset/8eadf7f65bbc75f457f74b480256df54b0f2dabb.png";
import dolceVitaShake from "figma:asset/16c2f4364cb7e4b0799d67d8c4b1cbaac312eaf6.png";

interface ShakeProject {
  id: string;
  name: string;
  image?: string;
}

const shakeProjects: ShakeProject[] = [
  { id: "smarties-party-shake", name: "Smarties Party Shake", image: smartiesPartyShake },
  { id: "dolce-vita-shake", name: "Dolce Vita Shake", image: dolceVitaShake },
  { id: "popshake", name: "Popshake", image: popshake },
  { id: "monstershake", name: "Monstershake", image: monstershake },
  { id: "sneakyshake", name: "Sneakyshake", image: sneakyshake },
  { id: "xmas-shake", name: "Xmas'shake", image: xmasShake },
];

export function ShakeDuMoment() {
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());

  const toggleLike = (projectId: string) => {
    const newLiked = new Set(likedProjects);
    if (newLiked.has(projectId)) {
      newLiked.delete(projectId);
    } else {
      newLiked.add(projectId);
    }
    setLikedProjects(newLiked);
  };

  return (
      <div className="min-h-screen bg-[#F5F1ED]">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#E8E5E0] to-[#F5F3F0] py-20">
          <div className="max-w-7xl mx-auto px-8">
            {/* Bouton retour */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/project/monde-glace/lgm"
                className="inline-flex items-center gap-2 text-[#7A6F5D] hover:text-[#E8469E] transition-colors mb-8"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour au projet LGM</span>
              </Link>
            </motion.div>

            {/* Titre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center space-y-6"
            >
              <h1
                className="text-7xl font-bold"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "#D4A5A5",
                }}
              >
                Shake du moment
              </h1>
              <p
                className="text-sm tracking-widest text-[#9B8B7E] font-medium"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                COLLECTION DE SHAKES CRÉATIFS • LE MONDE DE LA GLACE
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section explicative */}
        <div className="max-w-4xl mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <p
              className="text-base md:text-lg text-[#2D2D2D] leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Depuis plusieurs années, <span className="font-semibold text-[#E8469E]">LGM – Le Glacier Moderne</span> a instauré une tradition créative particulièrement appréciée de sa clientèle : <span className="font-semibold">le milkshake signature du mois</span>. Chaque mois, un nouveau milkshake exclusif fait son apparition au menu, proposant des associations de saveurs inédites, des toppings gourmands et une présentation soignée qui fait la différence. Cette stratégie permet à la marque de créer un sentiment d'exclusivité et d'urgence, tout en proposant un produit premium à plus forte valeur ajoutée. Les clients fidèles attendent avec impatience la révélation du nouveau shake, créant ainsi un véritable rendez-vous mensuel autour de l'innovation et de la gourmandise. Cette approche marketing contribue également à dynamiser la communication sur les réseaux sociaux et à maintenir l'engagement de la communauté autour de la marque.
            </p>
          </motion.div>
        </div>

        {/* Grille de projets */}
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shakeProjects.map((shake, index) => (
              <motion.div
                key={shake.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/shake/${shake.id}`}>
                  <motion.div
                    className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square group rounded-2xl"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image / Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                      {shake.image && (
                        <img
                          src={shake.image}
                          alt={shake.name}
                          className="w-full h-full object-cover"
                        />
                      )}

                      {/* Overlay rose avec nom du shake au hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#E8469E] via-[#E8469E]/95 to-[#E8469E]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-8 z-10 pointer-events-none">
                        <h3
                          className="text-white text-center font-bold text-2xl"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {shake.name}
                        </h3>
                      </div>

                      {/* Badge nom en bas (visible par défaut) */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3
                          className="text-white font-semibold text-lg"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {shake.name}
                        </h3>
                      </div>

                      {/* Bouton cœur */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleLike(shake.id);
                        }}
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 z-30"
                      >
                        <Heart
                          className={`w-5 h-5 transition-all ${
                            likedProjects.has(shake.id)
                              ? "fill-[#E8469E] text-[#E8469E]"
                              : "text-[#7A6F5D]"
                          }`}
                        />
                      </button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#E8469E] to-[#D4307E] py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-8 text-center space-y-8"
          >
            <h2
              className="text-5xl font-bold text-white"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Découvrez tous mes projets
            </h2>
            <p
              className="text-white/90 text-lg"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Explorez l'ensemble de mes réalisations.
            </p>
            <Link
              to="/projects"
              className="inline-block px-12 py-5 bg-white text-[#E8469E] text-xs tracking-widest hover:bg-[#F5F1ED] transition-colors rounded-full shadow-lg hover:shadow-xl font-semibold"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              VOIR TOUTES MES RÉALISATIONS
            </Link>
          </motion.div>
        </div>
      </div>
  );
}