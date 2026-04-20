import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { Image } from '@/components/media/Image';
import { iglooProjectsList } from '@/data/igloo-projects';
import { getCover } from '@/lib/covers';

export function IglooProjects() {
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());

  const toggleLike = (projectId: string) => {
    const next = new Set(likedProjects);
    if (next.has(projectId)) {
      next.delete(projectId);
    } else {
      next.add(projectId);
    }
    setLikedProjects(next);
  };

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="relative bg-gradient-to-br from-[#E8E5E0] to-[#F5F3F0] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/project/monde-glace/igloo"
              className="font-accent inline-flex items-center gap-2 text-[#7A6F5D] hover:text-brand-pink transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour au projet Igloo</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h1 className="font-accent text-5xl md:text-7xl font-bold text-brand-rose">Projets L&apos;Igloo</h1>
            <p className="font-accent text-xs md:text-sm tracking-widest text-brand-mute font-medium">
              CRÉATIONS PÂTISSIÈRES & ÉVÉNEMENTS • LE MONDE DE LA GLACE
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {iglooProjectsList.map((project, index) => {
            const cover = getCover(project.coverAsset);
            return (
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
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                      {cover && (
                        <Image
                          src={cover}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-brand-pink via-brand-pink/95 to-brand-pink/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-8 z-10 pointer-events-none">
                        <h3 className="font-accent text-white text-center font-bold text-2xl">{project.name}</h3>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 className="font-accent text-white font-semibold text-lg">{project.name}</h3>
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleLike(project.id);
                        }}
                        aria-label={likedProjects.has(project.id) ? 'Retirer le favori' : 'Ajouter aux favoris'}
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 z-30"
                      >
                        <Heart
                          className={`w-5 h-5 transition-all ${
                            likedProjects.has(project.id)
                              ? 'fill-brand-pink text-brand-pink'
                              : 'text-[#7A6F5D]'
                          }`}
                        />
                      </button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-brand-pink to-[#D4307E] py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6 md:space-y-8"
        >
          <h2 className="font-accent text-3xl md:text-5xl font-bold text-white">Découvrez tous mes projets</h2>
          <p className="font-accent text-white/90 text-base md:text-lg">
            Explorez l&apos;ensemble de mes réalisations.
          </p>
          <Link
            to="/projects"
            className="font-accent inline-block px-8 md:px-12 py-4 md:py-5 bg-white text-brand-pink text-xs tracking-widest hover:bg-[#F5F1ED] transition-colors rounded-full shadow-lg hover:shadow-xl font-semibold"
          >
            VOIR TOUTES MES RÉALISATIONS
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
