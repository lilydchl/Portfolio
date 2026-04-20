import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Target } from 'lucide-react';
import { Link } from 'react-router';
import { Image } from '@/components/media/Image';
import { Pushpin, pushpinColors } from '@/components/decor/Pushpin';
import { categoriesInfo, projectsList, type Category } from '@/data/projects';
import { getCover } from '@/lib/covers';

const washiTapeColors = [
  { bg: 'rgba(255, 192, 217, 0.6)', border: 'rgba(255, 170, 200, 0.4)' },
  { bg: 'rgba(255, 228, 196, 0.6)', border: 'rgba(240, 200, 160, 0.4)' },
  { bg: 'rgba(220, 235, 255, 0.5)', border: 'rgba(190, 210, 240, 0.4)' },
  { bg: 'rgba(255, 255, 200, 0.5)', border: 'rgba(240, 240, 170, 0.4)' },
  { bg: 'rgba(215, 240, 215, 0.5)', border: 'rgba(185, 220, 185, 0.4)' },
  { bg: 'rgba(235, 215, 255, 0.5)', border: 'rgba(210, 185, 240, 0.4)' },
];

const washiPatterns = ['dots', 'stripes', 'plain', 'zigzag'] as const;

function getWashiTape(index: number) {
  const color = washiTapeColors[index % washiTapeColors.length];
  const pattern = washiPatterns[index % washiPatterns.length];
  const rotation = ((index * 7 + 3) % 15) - 7;

  let patternSvg: string | undefined;
  if (pattern === 'dots') {
    patternSvg = `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='1' fill='rgba(255,255,255,0.4)'/%3E%3C/svg%3E")`;
  } else if (pattern === 'stripes') {
    patternSvg = `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='6' y2='6' stroke='rgba(255,255,255,0.3)' stroke-width='1'/%3E%3C/svg%3E")`;
  } else if (pattern === 'zigzag') {
    patternSvg = `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3 L2.5 1 L5 3 L7.5 1 L10 3' stroke='rgba(255,255,255,0.35)' fill='none' stroke-width='0.8'/%3E%3C/svg%3E")`;
  }

  return { color, patternSvg, rotation };
}

const CATEGORY_FILTERS: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'monde-glace', label: 'Le Monde de la Glace' },
  { id: 'ecole-numerique', label: 'École du Numérique' },
  { id: 'yvently', label: 'Yvently' },
  { id: 'telemag-plus', label: 'Télémag Plus' },
  { id: 'divers', label: 'Divers' },
];

function FolderTabButton({
  id,
  label,
  active,
  onClick,
}: {
  id: 'all' | Category;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const bodyFill = active ? '#E8469E' : id === 'all' ? '#F5D7E8' : '#E8B5D4';
  const tabFill = active ? '#D4307E' : id === 'all' ? '#E8B5D4' : '#E8469E';

  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center group"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`relative transition-all ${active ? 'scale-110' : ''}`}
        animate={active ? { rotate: [0, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <svg className="w-16 h-12 md:w-[100px] md:h-[75px]" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="68" rx="35" ry="5" fill="black" opacity="0.1" />
          <rect x="8" y="22" width="84" height="45" rx="6" fill={bodyFill} />
          <path d="M8 22 C8 19 10 17 13 17 L35 17 L42 22 L92 22 L92 28 L8 28 Z" fill={tabFill} />
        </svg>
      </motion.div>
      <span
        className={`mt-1 text-xs font-semibold transition-colors text-center ${
          active ? 'text-brand-pink' : 'text-brand-soft-ink'
        }`}
      >
        {label}
      </span>
    </motion.button>
  );
}

export function Projects() {
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<'all' | Category>('all');

  const toggleLike = (projectId: string) => {
    const next = new Set(likedProjects);
    if (next.has(projectId)) {
      next.delete(projectId);
    } else {
      next.add(projectId);
    }
    setLikedProjects(next);
  };

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsList
      : projectsList.filter((p) => p.category === selectedCategory);

  const activeCategory =
    selectedCategory !== 'all' ? categoriesInfo.find((c) => c.id === selectedCategory) : undefined;
  const activeCategoryLogo = activeCategory ? getCover(activeCategory.logoAsset) : undefined;

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-brand-rose">MES RÉALISATIONS</h1>
          <p className="text-xs md:text-sm tracking-widest text-brand-mute font-medium px-2">
            DÉCOUVREZ MES PROJETS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-4 mt-8 md:mt-12"
        >
          {CATEGORY_FILTERS.map((filter) => (
            <FolderTabButton
              key={filter.id}
              id={filter.id}
              label={filter.label}
              active={selectedCategory === filter.id}
              onClick={() => setSelectedCategory(filter.id)}
            />
          ))}
        </motion.div>
      </div>

      {activeCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 md:px-8 mb-16"
        >
          <div className="relative" style={{ transform: 'rotate(-0.5deg)' }}>
            <div
              className="relative bg-[#FFFBF5] shadow-2xl overflow-hidden"
              style={{ boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}
            >
              <Pushpin
                className="absolute -top-2 right-8 z-30"
                color={pushpinColors.rose}
                size={24}
                style={{ transform: 'rotate(8deg)' }}
              />

              <div
                className="h-24 relative"
                style={{
                  backgroundColor: '#FFD6E8',
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(232, 70, 158, 0.15) 19px, rgba(232, 70, 158, 0.15) 20px),
                    repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(232, 70, 158, 0.15) 19px, rgba(232, 70, 158, 0.15) 20px)
                  `,
                }}
              />

              <div className="absolute top-8 -left-4 z-20" style={{ transform: 'rotate(-15deg)' }}>
                <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path
                    d="M25 20 Q25 10, 35 10 L55 10 Q65 10, 65 20 L65 80 Q65 95, 50 95 L40 95 Q25 95, 25 80 Z"
                    stroke="#C0C0C0"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 25 L30 75 Q30 85, 40 85 L50 85 Q60 85, 60 75 L60 25"
                    stroke="#C0C0C0"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="px-4 md:px-12 pt-6 md:pt-8 pb-6 md:pb-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-24 h-24 md:w-40 md:h-40 bg-white rounded-2xl overflow-hidden shadow-md flex items-center justify-center p-3 md:p-4">
                      {activeCategoryLogo && (
                        <Image
                          src={activeCategoryLogo}
                          alt={activeCategory.label}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="font-serif text-xl md:text-3xl font-bold text-center md:text-left text-brand-ink tracking-tight">
                      {activeCategory.label}
                    </h3>

                    <p className="text-brand-ink text-sm leading-relaxed whitespace-pre-line">
                      {activeCategory.description}
                    </p>

                    <ul className="space-y-2">
                      {activeCategory.points.map((point) => (
                        <li key={point} className="text-brand-ink text-sm flex items-start">
                          <span className="text-brand-pink mr-3 font-bold">●</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-brand-pink" />
                        <h4 className="text-sm tracking-widest font-semibold text-brand-ink">
                          CIBLES
                        </h4>
                        <div className="flex-1 h-px bg-[#E8B5D4]/40" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeCategory.cibles.map((cible) => (
                          <span
                            key={cible}
                            className="inline-block px-3 py-1.5 text-xs rounded-full border text-brand-soft-ink"
                            style={{
                              background: 'rgba(255, 214, 232, 0.3)',
                              borderColor: 'rgba(232, 70, 158, 0.2)',
                            }}
                          >
                            {cible}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-20 flex items-center justify-center" style={{ background: '#FFD6E8' }}>
                <h3 className="font-serif text-2xl font-bold italic text-brand-ink">Mes Réalisations</h3>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-32 relative">
        <div
          className="absolute inset-0 -mx-8 rounded-3xl opacity-40 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(210, 180, 140, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 30%, rgba(188, 160, 130, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(200, 170, 135, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 -mx-8 rounded-3xl pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            opacity: 0.5,
          }}
        />
        <div
          className="absolute inset-0 -mx-8 rounded-3xl pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 15% 25%, rgba(160, 130, 100, 0.06) 0%, transparent 30%),
              radial-gradient(circle at 75% 15%, rgba(180, 150, 110, 0.05) 0%, transparent 25%),
              radial-gradient(circle at 45% 75%, rgba(170, 140, 105, 0.04) 0%, transparent 35%),
              radial-gradient(circle at 90% 60%, rgba(155, 125, 95, 0.05) 0%, transparent 20%),
              radial-gradient(circle at 30% 90%, rgba(165, 135, 100, 0.04) 0%, transparent 25%)
            `,
          }}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 relative z-10">
          {filteredProjects.map((project, index) => {
            const cover = getCover(project.coverAsset);
            const washi = getWashiTape(index);
            const usePushpin = index % 4 === 2;
            const pinColors = [
              pushpinColors.rose,
              pushpinColors.corail,
              pushpinColors.roseClaire,
              pushpinColors.or,
              pushpinColors.rouge,
            ];
            const pinColor = pinColors[index % pinColors.length];
            const cardRotation = ((index * 17) % 6) - 3;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/project/${project.category}/${project.id}`} className="block group">
                  <motion.div
                    className="bg-white p-2 md:p-4 pb-10 md:pb-16 shadow-xl hover:shadow-2xl transition-all cursor-pointer relative"
                    style={{ transform: `rotate(${cardRotation}deg)` }}
                    whileHover={{ y: -8, scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
                  >
                    {usePushpin ? (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                        <Pushpin
                          color={pinColor}
                          size={22}
                          style={{ transform: `rotate(${((index * 11) % 20) - 10}deg)` }}
                        />
                      </div>
                    ) : (
                      <div
                        className="absolute -top-3 left-1/2 z-20 pointer-events-none"
                        style={{
                          transform: `translateX(-50%) rotate(${washi.rotation}deg)`,
                          width: '60px',
                          height: '18px',
                          backgroundColor: washi.color.bg,
                          backgroundImage: washi.patternSvg,
                          borderLeft: `1px solid ${washi.color.border}`,
                          borderRight: `1px solid ${washi.color.border}`,
                          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                        }}
                      />
                    )}

                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                      {cover && (
                        <Image
                          src={cover}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      )}

                      <div className="absolute inset-0 bg-brand-pink opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center p-4 pointer-events-none">
                        <p className="font-sans text-white text-center text-sm">{project.categoryLabel}</p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleLike(project.id);
                        }}
                        aria-label={likedProjects.has(project.id) ? 'Retirer le favori' : 'Ajouter aux favoris'}
                        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-md hover:scale-110 z-30"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-all ${
                            likedProjects.has(project.id)
                              ? 'fill-brand-pink text-brand-pink'
                              : 'text-[#7A6F5D]'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="pt-5 text-center">
                      <p className="polaroid-handwriting">{project.name}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F5] to-[#F9F0EC]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-md mx-auto px-6 relative"
        >
          <span className="absolute -top-5 -left-3 text-yellow-400 text-2xl animate-pulse pointer-events-none select-none">
            ✦
          </span>
          <span className="absolute -bottom-5 -right-3 text-yellow-400 text-xl animate-pulse pointer-events-none select-none">
            ✦
          </span>

          <div className="rounded-2xl bg-gradient-to-b from-[#F4A0C0] to-brand-pink p-[6px] shadow-[0_8px_30px_rgba(232,70,158,0.3)]">
            <div className="bg-white rounded-xl border-[2.5px] border-[#3D3027] overflow-hidden">
              <div className="bg-gradient-to-r from-[#F8D7E8] to-[#FBEAF2] border-b-[2.5px] border-[#3D3027] px-5 py-3 flex items-center justify-between">
                <span className="text-[#3D3027] tracking-wider text-xs font-bold" style={{ letterSpacing: '0.15em' }}>
                  UN PROJET EN TÊTE ?
                </span>
                <span className="text-[#3D3027] text-xs border border-[#3D3027] w-5 h-5 flex items-center justify-center">
                  ✕
                </span>
              </div>

              <div className="px-6 py-8 text-center">
                <h2 className="font-serif text-2xl md:text-3xl text-[#3D3027] mb-3 font-bold">
                  ✨ Un projet similaire en tête ? ✨
                </h2>
                <p className="font-sans text-brand-mute text-sm md:text-base">
                  Discutons ensemble de la façon dont
                  <br />
                  je peux vous aider à atteindre vos objectifs !
                </p>
              </div>

              <div className="flex border-t-[2.5px] border-[#3D3027]">
                <Link
                  to="/contact"
                  className="flex-1 py-4 text-center text-brand-pink text-sm tracking-wider hover:bg-[#FDF2F7] transition-colors font-semibold"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Me contacter 💌
                </Link>
                <div className="w-[2.5px] bg-[#3D3027]" />
                <Link
                  to="/projects"
                  className="flex-1 py-4 text-center text-brand-mute text-sm tracking-wider hover:bg-[#F5F1ED] transition-colors font-semibold"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Voir mes projets
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
