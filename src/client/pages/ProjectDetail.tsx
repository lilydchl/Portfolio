import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Target,
  Lightbulb,
  CheckCircle2,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Award,
} from 'lucide-react';
import { Instagram } from '@/components/icons/brand';
import { Link, useParams } from 'react-router';
import { Image } from '@/components/media/Image';
import { Pushpin, pushpinColors } from '@/components/decor/Pushpin';
import { projectsById } from '@/data/projects';
import { getCover } from '@/lib/covers';

export function ProjectDetail() {
  const { projectId } = useParams<{ category: string; projectId: string }>();
  const project = projectId ? projectsById[projectId] : undefined;

  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visuels = project?.visuels ?? [];

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % visuels.length : null));
  }, [visuels.length]);
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + visuels.length) % visuels.length : null));
  }, [visuels.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const toggleLike = (subProjectId: string) => {
    setLikedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(subProjectId)) next.delete(subProjectId);
      else next.add(subProjectId);
      return next;
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5F1ED] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-brand-ink mb-4">
            Projet non trouvé
          </h1>
          <Link to="/projects" className="text-brand-pink hover:underline">
            Retour aux réalisations
          </Link>
        </div>
      </div>
    );
  }

  const cover = getCover(project.coverAsset);
  const activeVisuel = lightboxIndex !== null ? visuels[lightboxIndex] : null;
  const activeVisuelCover = activeVisuel ? getCover(activeVisuel.asset) : undefined;

  const preuves = project.preuves ?? [];
  const preuveSlots = Array.from({ length: Math.max(4, preuves.length) }, (_, i) => preuves[i]);

  return (
    <>
      <div className="min-h-screen bg-[#F5F1ED]">
        <div className="relative bg-[#F5F1ED] pt-10 md:pt-16 pb-4">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-brand-soft-ink hover:text-brand-pink transition-colors text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                <span>Retour aux réalisations</span>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="overflow-hidden relative">
              <Pushpin
                className="absolute -top-3 left-12 z-10"
                color={pushpinColors.rose}
                size={24}
                style={{ transform: 'rotate(-5deg)' }}
              />
              <Pushpin
                className="absolute -top-3 right-12 z-10"
                color={pushpinColors.corail}
                size={24}
                style={{ transform: 'rotate(8deg)' }}
              />
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-2 py-4 md:px-6 md:py-6">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-brand-pink text-white rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-5">
                    {project.categoryLabel}
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-brand-ink">
                    {project.name}
                  </h1>
                  <div className="space-y-2 md:space-y-3 text-sm md:text-base text-brand-mute mb-6">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-brand-pink flex-shrink-0" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-brand-pink flex-shrink-0" />
                      <span>Client: {project.client}</span>
                    </div>
                  </div>
                  {project.presentation && (
                    <p className="font-sans text-brand-soft-ink leading-relaxed mb-5">
                      {project.presentation}
                    </p>
                  )}
                  {project.instagram && (
                    <a
                      href={project.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-pink to-[#F0C8D8] text-white text-xs tracking-widest rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                      VOIR SUR INSTAGRAM
                    </a>
                  )}
                </div>

                {cover && (
                  <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-[#F8D7E8] p-6 flex items-center justify-center shadow-xl">
                    <Image src={cover} alt={project.name} className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {!project.presentation && project.instagram && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 flex justify-center"
            >
              <a
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-pink to-[#F0C8D8] text-white text-xs tracking-widest rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Instagram className="w-4 h-4" />
                VOIR SUR INSTAGRAM
              </a>
            </motion.div>
          )}

          {visuels.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E8B5D4]/50" />
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-6 h-6 text-brand-pink" />
                  <h2 className="font-serif text-2xl md:text-4xl font-bold text-center text-brand-ink">
                    Mes visuels
                  </h2>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E8B5D4]/50" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {visuels.map((visuel, index) => {
                  const rotations = [-2.5, 1.8, -1.2, 3, -0.8, 2.2];
                  const rotation = rotations[index % rotations.length];
                  const pinColorsArr = [
                    pushpinColors.rose,
                    pushpinColors.roseClaire,
                    pushpinColors.corail,
                    pushpinColors.or,
                    pushpinColors.rouge,
                  ];
                  const pinColor = pinColorsArr[index % pinColorsArr.length];
                  const visuelCover = getCover(visuel.asset);

                  return (
                    <motion.div
                      key={visuel.asset}
                      initial={{ opacity: 0, y: 20, rotate: rotation }}
                      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="group"
                    >
                      <motion.div
                        className="relative bg-white p-4 pb-14 shadow-xl cursor-pointer"
                        style={{ transform: `rotate(${rotation}deg)` }}
                        onClick={() => openLightbox(index)}
                        whileHover={{ y: -10, scale: 1.04, rotate: 0, transition: { duration: 0.3 } }}
                      >
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                          <Pushpin
                            color={pinColor}
                            size={24}
                            style={{ transform: `rotate(${(index * 7) % 15 - 7}deg)` }}
                          />
                        </div>

                        <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                          {visuelCover && (
                            <Image
                              src={visuelCover}
                              alt={visuel.label || `${project.name} - Visuel ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                        </div>

                        {visuel.label && (
                          <div className="pt-4 text-center">
                            <p className="font-hand text-brand-ink text-sm">{visuel.label}</p>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="border-2 border-dashed border-[#E8B5D4]/40 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center">
                <ImageIcon className="w-12 h-12 text-[#E8B5D4]/50 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-2 text-[#C4B5A5]">Mes visuels</h3>
                <p className="font-sans text-[#C4B5A5] text-sm">
                  Les visuels de ce projet seront bientôt disponibles.
                </p>
              </div>
            </motion.div>
          )}

          <Section icon={<Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />} iconBg="#D4A5A5" title="Contexte">
            {project.contexte}
          </Section>
          <Section icon={<Target className="w-5 h-5 md:w-6 md:h-6 text-white" />} iconBg="#E8469E" title="Objectifs">
            {project.objectif}
          </Section>

          {project.cibles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E8B5D4] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-brand-ink">Cibles</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.cibles.map((cible, index) => (
                  <motion.span
                    key={cible}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-brand-ink"
                    style={{
                      background: 'rgba(255, 214, 232, 0.25)',
                      borderColor: 'rgba(232, 70, 158, 0.25)',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-pink" />
                    {cible}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {Array.isArray(project.solution) ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#E8B5D4]">
                  <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-brand-ink">Solution</h2>
              </div>
              <ol className="space-y-5">
                {project.solution.map((etape, index) => (
                  <motion.li
                    key={etape}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-brand-pink text-white font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-base md:text-lg text-brand-soft-ink leading-relaxed">{etape}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          ) : (
            <Section icon={<Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />} iconBg="#E8B5D4" title="Solution">
              {project.solution}
            </Section>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-pink rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-brand-ink">Résultats</h2>
            </div>
            <ul className="space-y-4">
              {project.resultats.map((resultat, index) => (
                <motion.li
                  key={resultat}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-pink flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-brand-soft-ink">{resultat}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {project.subProjects && project.subProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-brand-ink">
                {project.id === 'lgm' ? 'Projets LGM' : project.id === 'igloo' ? "Projets L'Igloo" : 'Projets'}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {project.subProjects.map((subProject, index) => {
                  const isShakeDuMoment = subProject.id === 'shake-du-moment';
                  const isIglooProject = project.id === 'igloo';
                  const subCover = getCover(subProject.coverAsset);

                  const card = (
                    <motion.div
                      className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square group"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                        {subCover && (
                          <Image
                            src={subCover}
                            alt={subProject.name}
                            className="w-full h-full object-cover"
                          />
                        )}

                        <div className="absolute inset-0 bg-brand-pink opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center p-6 z-10 pointer-events-none">
                          <h3 className="text-white text-center font-semibold text-lg">
                            {subProject.name}
                          </h3>
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleLike(subProject.id);
                          }}
                          aria-label={likedProjects.has(subProject.id) ? 'Retirer le favori' : 'Ajouter aux favoris'}
                          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 z-30 group-hover:opacity-0"
                        >
                          <Heart
                            className={`w-4 h-4 transition-all ${
                              likedProjects.has(subProject.id)
                                ? 'fill-brand-pink text-brand-pink'
                                : 'text-brand-soft-ink'
                            }`}
                          />
                        </button>
                      </div>
                    </motion.div>
                  );

                  return (
                    <motion.div
                      key={subProject.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      {isShakeDuMoment ? (
                        <Link to="/shake-du-moment">{card}</Link>
                      ) : isIglooProject ? (
                        <Link to="/igloo-projects">{card}</Link>
                      ) : (
                        card
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E8B5D4]/50" />
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-pink" />
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-center text-brand-ink">
                  Preuve
                </h2>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E8B5D4]/50" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {preuveSlots.map((preuve, index) => {
                const preuveCover = preuve ? getCover(preuve.asset) : undefined;

                if (preuve && preuveCover) {
                  return (
                    <motion.figure
                      key={preuve.asset}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="bg-white p-3 pb-4 shadow-xl"
                    >
                      <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                          src={preuveCover}
                          alt={preuve.label || `${project.name} - Preuve ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {preuve.label && (
                        <figcaption className="pt-3 text-center font-hand text-brand-ink text-sm">
                          {preuve.label}
                        </figcaption>
                      )}
                    </motion.figure>
                  );
                }

                return (
                  <motion.div
                    key={`preuve-vide-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="aspect-[4/5] border-2 border-dashed border-[#E8B5D4]/50 rounded-xl flex flex-col items-center justify-center text-center px-3 bg-[#FBEAF2]/30"
                  >
                    <ImageIcon className="w-8 h-8 md:w-10 md:h-10 text-[#E8B5D4] mb-3" />
                    <p className="font-sans text-[#C4B5A5] text-xs md:text-sm">image à venir</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
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
                  <span
                    className="text-[#3D3027] tracking-wider text-xs font-bold"
                    style={{ letterSpacing: '0.15em' }}
                  >
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

      <AnimatePresence>
        {activeVisuel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Fermer"
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {visuels.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Précédent"
                className="absolute left-3 md:left-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white p-3 md:p-5 pb-14 md:pb-16 shadow-2xl">
                {activeVisuelCover && (
                  <Image
                    src={activeVisuelCover}
                    alt={activeVisuel.label || `Visuel ${(lightboxIndex ?? 0) + 1}`}
                    className="max-h-[70vh] max-w-[85vw] md:max-w-[75vw] object-contain"
                    loading="eager"
                  />
                )}
                {activeVisuel.label && (
                  <p className="font-hand absolute bottom-4 md:bottom-5 left-0 right-0 text-center text-brand-ink text-sm md:text-base">
                    {activeVisuel.label}
                  </p>
                )}
              </div>

              <span className="font-sans mt-4 text-white/70 text-sm">
                {(lightboxIndex ?? 0) + 1} / {visuels.length}
              </span>
            </motion.div>

            {visuels.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Suivant"
                className="absolute right-3 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Section({
  icon,
  iconBg,
  title,
  children,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-brand-ink">{title}</h2>
      </div>
      <p className="text-base md:text-lg text-brand-soft-ink leading-relaxed">{children}</p>
    </motion.div>
  );
}
