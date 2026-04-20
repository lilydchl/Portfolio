import { motion } from "motion/react";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import patisserieHalloween from "figma:asset/37817afc7460ce96b40c5830981396f6bb2e5b85.png";
import patisserieStValentin from "figma:asset/756ef591b3bf3385504c8008f2f53a17c10415fd.png";
import tagliattellesCrepes from "figma:asset/ac9019658f28be3c9b85319e001a240c3d770948.png";
import buchesNoel from "figma:asset/5c3d282d4dd2604b837895906998827d508ced4e.png";

interface IglooProject {
  id: string;
  name: string;
  image?: string;
}

const iglooProjects: IglooProject[] = [
  { id: "buches-de-noel", name: "Bûches de Noël", image: buchesNoel },
  { id: "patisserie-halloween", name: "Pâtisserie d'Halloween", image: patisserieHalloween },
  { id: "tagliatelle-crepes", name: "Tagliatelle de crêpes", image: tagliattellesCrepes },
  { id: "patisserie-st-valentin", name: "Pâtisserie St Valentin", image: patisserieStValentin },
  { id: "crepe-epinard", name: "Crêpe épinard" },
  { id: "trend", name: "Trend" },
];

export function IglooProjects() {
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
                to="/project/monde-glace/igloo"
                className="inline-flex items-center gap-2 text-[#7A6F5D] hover:text-[#E8469E] transition-colors mb-8"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour au projet Igloo</span>
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
                Projets L'Igloo
              </h1>
              <p
                className="text-sm tracking-widest text-[#9B8B7E] font-medium"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                CRÉATIONS PÂTISSIÈRES & ÉVÉNEMENTS • LE MONDE DE LA GLACE
              </p>
            </motion.div>
          </div>
        </div>

        {/* Grille de projets */}
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {iglooProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/project/igloo/${project.id}`}>
                  <motion.div
                    className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square group rounded-2xl"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image / Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      )}

                      {/* Overlay rose avec nom du projet au hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#E8469E] via-[#E8469E]/95 to-[#E8469E]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-8 z-10 pointer-events-none">
                        <h3
                          className="text-white text-center font-bold text-2xl"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {project.name}
                        </h3>
                      </div>

                      {/* Badge nom en bas (visible par défaut) */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3
                          className="text-white font-semibold text-lg"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {project.name}
                        </h3>
                      </div>

                      {/* Bouton cœur */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleLike(project.id);
                        }}
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 z-30"
                      >
                        <Heart
                          className={`w-5 h-5 transition-all ${
                            likedProjects.has(project.id)
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