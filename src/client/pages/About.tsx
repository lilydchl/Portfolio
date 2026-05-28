import { motion } from 'motion/react';
import { Paperclip, FileDown, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { Image } from '@/components/media/Image';
import { MoodBoard } from '@/components/sections/MoodBoard';

import lilyPhoto from '@/assets/home/lily-portrait-1.png?w=256;512;1024&format=avif;webp&as=picture';
import lilyPhoto2 from '@/assets/home/lily-portrait-2.png?w=256;512;1024&format=avif;webp&as=picture';
import whatsInMyBagImage from '@/assets/about/whats-in-my-bag.png?w=512;1024&format=avif;webp&as=picture';
import waxSeal from '@/assets/about/wax-seal.png?w=128;256&format=avif;webp&as=picture';
import lilyStamp from '@/assets/about/lily-stamp.png?w=256;512&format=avif;webp&as=picture';
import giftTag from '@/assets/about/gift-tag.png?w=256;512&format=avif;webp&as=picture';
import telemagLogo from '@/assets/about/telemag-logo.png?w=128;256&format=avif;webp&as=picture';
import mondeGlaceLogo from '@/assets/categories/monde-glace-logo.png?w=128;256&format=avif;webp&as=picture';
import animalShowLogo from '@/assets/about/animal-show-logo.png?w=128;256&format=avif;webp&as=picture';
import gandhiLogo from '@/assets/about/gandhi-logo.png?w=128;256&format=avif;webp&as=picture';
import ednLogo from '@/assets/about/edn-logo.png?w=128;256&format=avif;webp&as=picture';
import stgLogo from '@/assets/about/stg-logo.png?w=128;256&format=avif;webp&as=picture';
import cvImageUrl from '@/assets/home/cv-lily-dechalonge.png';
import competencesRaw from '@/assets/about/competences.png';

const SparklePoint = () => (
  <div className="absolute left-4 md:left-8 top-3 z-10">
    <Sparkles className="w-7 h-7 text-brand-pink drop-shadow-lg" fill="#E8469E" />
  </div>
);

type ExperienceCardProps = {
  to?: string;
  title: string;
  company: string;
  bullets: string[];
  logo?: typeof mondeGlaceLogo;
  logoAlt?: string;
  logoFit?: 'contain' | 'cover';
};

function ExperienceCard({ to, title, company, bullets, logo, logoAlt, logoFit = 'contain' }: ExperienceCardProps) {
  const logoClass = `w-20 h-20 md:w-24 md:h-24 ${logoFit === 'cover' ? 'object-cover' : 'object-contain'} rounded-xl`;
  const content = (
    <>
      <div className="flex-1 min-w-0">
        <h3 className="text-base md:text-lg font-bold mb-1 text-brand-pink">{title}</h3>
        <p className="italic text-sm md:text-base mb-2 text-brand-pink">{company}</p>
        <ul className="text-xs space-y-1 text-brand-ink">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
        {to && (
          <div className="mt-3 pt-2 border-t border-[#E8B5D4]/30 flex items-center gap-2 text-xs tracking-wider opacity-60 group-hover:opacity-100 transition-opacity text-brand-pink">
            <span>VOIR LE PROJET</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
      {logo && logoAlt && (
        <div className="hidden sm:flex items-center justify-center shrink-0">
          <Image src={logo} alt={logoAlt} className={logoClass} />
        </div>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="flex items-stretch gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-brand-pink/40 hover:-translate-y-1 group"
      >
        {content}
      </Link>
    );
  }
  return (
    <div className="flex items-stretch gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20">
      {content}
    </div>
  );
}

type TimelineEntryProps = {
  date: string;
  subtitle?: string;
  delay: number;
  children: React.ReactNode;
};

function TimelineEntry({ date, subtitle, delay, children }: TimelineEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative pl-20 md:pl-28"
    >
      <SparklePoint />
      <div className="mb-2">
        <span className="text-base md:text-xl font-bold text-[#D4A5A5]">{date}</span>
        {subtitle && <p className="text-sm md:text-base italic mt-0.5 text-brand-pink">{subtitle}</p>}
      </div>
      {children}
    </motion.div>
  );
}

type FormationCardProps = {
  title: string;
  location: string;
  bullets: React.ReactNode[];
  badge?: { text: string; variant: 'pink' | 'gold' };
  logo: typeof ednLogo;
  logoAlt: string;
  children?: React.ReactNode;
};

function FormationCard({ title, location, bullets, badge, logo, logoAlt, children }: FormationCardProps) {
  return (
    <div className="relative bg-white p-5 md:p-6 rounded-2xl shadow-lg border-2 border-[#E8B5D4]/20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, #6B8DA6 27px, #6B8DA6 28px)' }}
      />
      <div className="absolute left-10 top-0 bottom-0 w-px bg-brand-pink/15 pointer-events-none" />

      <div className="relative z-10 flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-bold mb-1 text-brand-pink">{title}</h3>
          <p className="italic text-sm md:text-base mb-3 text-brand-pink">{location}</p>
          {children}
          <ul className="text-sm space-y-1.5 text-brand-ink">
            {bullets.map((bullet, i) => (
              <li key={i}>• {bullet}</li>
            ))}
          </ul>
          {badge && (
            <div className="mt-3">
              <span
                className="inline-block px-3 py-1 text-xs rounded-full"
                style={
                  badge.variant === 'pink'
                    ? {
                        background: 'linear-gradient(135deg, #FFD6E8, #FBEAF2)',
                        color: '#E8469E',
                        fontWeight: 600,
                        border: '1px solid rgba(232, 70, 158, 0.2)',
                      }
                    : {
                        background: 'linear-gradient(135deg, #FFF3CD, #FFEEBA)',
                        color: '#856404',
                        fontWeight: 600,
                        border: '1px solid rgba(133, 100, 4, 0.15)',
                      }
                }
              >
                {badge.text}
              </span>
            </div>
          )}
        </div>
        <div className="hidden sm:flex items-center justify-center shrink-0">
          <Image src={logo} alt={logoAlt} className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div
      className="min-h-screen py-20"
      style={{
        background: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 115, 85, 0.02) 2px, rgba(139, 115, 85, 0.02) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 115, 85, 0.02) 2px, rgba(139, 115, 85, 0.02) 4px),
          linear-gradient(135deg, #F5F1ED 0%, #F8F6F2 25%, #F5F1ED 50%, #FAF8F5 75%, #F5F1ED 100%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="h-px bg-[#9B8B7E] w-16 md:w-32" />
            <h1 className="font-script text-3xl md:text-4xl text-brand-ink">à propos</h1>
            <div className="h-px bg-[#9B8B7E] w-16 md:w-32" />
          </div>
        </motion.div>

        {/* Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto h-[350px] sm:h-[500px] md:h-[900px]"
          style={{ maxWidth: '900px' }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -25 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-4 md:top-8 left-4 md:left-12 z-20"
          >
            <Paperclip className="w-8 h-8 md:w-12 md:h-12 text-[#F5D7E8]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-2 md:top-4 right-4 md:right-8 z-10"
          >
            <Image
              src={lilyStamp}
              alt="Timbre lily"
              className="w-20 h-auto md:w-36 rotate-6 drop-shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -4 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 z-30 bg-[#F8F6F2] shadow-xl p-4 md:p-6 w-40 md:w-56 lg:w-80 border-2 border-[#E8E5E0] rounded-[4px]"
          >
            <div className="text-center">
              <p className="text-2xl tracking-widest mb-2 text-brand-ink">PORTFOLIO</p>
              <p className="text-xs tracking-widest uppercase text-[#9B8B7E]">Lily de Chalonge</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -5 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute top-28 md:top-40 left-2 md:left-8 bg-white p-6 md:p-8 shadow-2xl z-20 w-32 md:w-[180px] lg:w-[320px] overflow-hidden"
          >
            <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 text-3xl md:text-5xl z-30">🎀</div>
            <Image src={lilyPhoto} alt="Lily de Chalonge" className="w-full h-56 md:h-96 object-cover scale-110" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute bottom-16 md:bottom-32 right-2 md:right-16 bg-white p-2 md:p-3 shadow-2xl z-30 w-28 md:w-[160px] lg:w-[280px]"
          >
            <Image src={lilyPhoto2} alt="Lily de Chalonge" className="w-full h-48 md:h-80 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute bottom-8 md:bottom-16 left-4 md:left-12 z-10"
          >
            <Image
              src={giftTag}
              alt="Étiquette cadeau rose"
              className="w-56 h-auto md:w-88 -rotate-12 drop-shadow-md"
            />
          </motion.div>
        </motion.div>

        {/* Grand titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16 mb-8"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-brand-ink"
            style={{ letterSpacing: '0.02em' }}
          >
            LILY DE CHALONGE
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-brand-ink">
            Découvrez mon parcours et commencez votre voyage pour devenir la meilleure version de vous-même dans le monde
            de la communication digitale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center pt-8 border-t border-[#E8E5E0] overflow-hidden"
        >
          <div className="relative whitespace-nowrap">
            <div className="inline-block about-scroll text-[#9B8B7E]">
              <span className="text-sm tracking-wider inline-block px-8">
                Communication - Créativité - Community Management - Branding - Storytelling - Authenticité - Communication -
                Créativité - Community Management - Branding - Storytelling - Authenticité - Communication - Créativité -
                Community Management - Branding - Storytelling - Authenticité
              </span>
            </div>
          </div>
        </motion.div>

        <style>{`
          @keyframes about-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .about-scroll {
            animation: about-scroll 30s linear infinite;
          }
          .about-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Journal */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-24 mb-16 sm:mb-32 max-w-3xl mx-auto px-2 sm:px-0"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 z-20"
            >
              <Paperclip
                className="w-10 h-10 sm:w-16 sm:h-16 text-[#C9A961]"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
              />
            </motion.div>

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
              <div className="absolute inset-1.5 sm:inset-2 md:inset-4 border border-[#C9A961] opacity-30 pointer-events-none" />

              <div className="text-center mb-4 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-[#C9A961]">
                <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-brand-ink mb-1 sm:mb-2">
                  À PROPOS DE LILY
                </p>
                <h3 className="font-serif text-2xl sm:text-4xl italic text-brand-ink">Portrait d&apos;une Créative</h3>
                <p className="text-[10px] sm:text-xs text-[#9B8B7E] mt-1 sm:mt-2">— 2025 —</p>
              </div>

              <div className="space-y-4 sm:space-y-6 relative z-10">
                <p className="text-sm sm:text-base leading-relaxed text-brand-ink indent-4 sm:indent-8">
                  <span className="font-serif text-3xl sm:text-5xl float-left mr-2 sm:mr-3 mt-1 leading-none">É</span>
                  tudiante en BTS Communication à l&apos;École du Numérique, je suis passionnée par l&apos;univers de la
                  communication digitale et du community management. Mon approche allie créativité, stratégie et
                  authenticité pour créer des contenus qui touchent et engagent.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-brand-ink indent-4 sm:indent-8">
                  Mes expériences avec Le Monde de la Glace, Yvently et mes projets académiques m&apos;ont permis de
                  développer une expertise dans la création de contenus visuels, la gestion de communautés et le branding
                  événementiel. J&apos;aime créer des univers esthétiques qui racontent une histoire.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-brand-ink indent-4 sm:indent-8">
                  Mon style se caractérise par une attention particulière aux détails, une inspiration puisée dans
                  l&apos;aesthetic Pinterest, et une capacité à transformer chaque projet en une expérience mémorable. Je
                  crois en la puissance du storytelling et de l&apos;authenticité pour créer des connexions durables.
                </p>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#D4C5A5]">
                  <p className="font-serif text-sm sm:text-lg italic text-center text-brand-ink">
                    &quot;Créer du contenu qui inspire, engage et transforme.&quot;
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex justify-end">
                <p className="font-hand text-xl sm:text-2xl text-brand-ink">Lily de Chalonge</p>
              </div>

              <Image
                src={waxSeal}
                alt="Sceau de cire rose"
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rotate-12 drop-shadow-lg z-20"
              />
            </div>

            <div className="absolute inset-0 bg-black opacity-5 blur-xl -z-10 translate-y-4 translate-x-2" />
          </div>
        </motion.div>

        {/* CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.a
            href={cvImageUrl}
            download="CV-Lily-de-Chalonge.png"
            className="inline-flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5 bg-brand-pink text-white text-xs tracking-widest hover:bg-[#D4307E] transition-all font-medium rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown className="w-5 h-5" />
            TÉLÉCHARGER MON CV
          </motion.a>
          <p className="text-xs mt-3 italic text-[#9B8B7E]">Format PNG • Mis à jour en 2025</p>
        </motion.div>

        {/* What's in my bag */}
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
            <Image
              src={whatsInMyBagImage}
              alt="What's in my bag - Community Manager essentials"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Expériences */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 mb-20"
        >
          <h2
            className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-brand-ink"
            style={{ letterSpacing: '0.05em' }}
          >
            EXPÉRIENCES
          </h2>

          <div className="relative max-w-3xl mx-auto px-4">
            <motion.div
              className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E8B5D4] via-brand-pink to-[#D4A5A5]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-6">
              <TimelineEntry date="JUILLET 2025" subtitle="En cours" delay={0.1}>
                <ExperienceCard
                  to="/project/monde-glace/lgm"
                  title="COMMUNITY MANAGER"
                  company="Le Monde de la Glace"
                  bullets={[
                    'Création de contenus visuels et rédactionnels',
                    'Gestion des réseaux sociaux',
                    'Animation de la communauté',
                  ]}
                  logo={mondeGlaceLogo}
                  logoAlt="Logo Le Monde de la Glace"
                />
              </TimelineEntry>

              <TimelineEntry date="MAI 2025" delay={0.2}>
                <ExperienceCard
                  to="/project/divers/animal-show"
                  title="CHARGÉE DE COMMUNICATION ÉVÉNEMENTIELLE"
                  company="Salon Animalier - Animal Show"
                  bullets={[
                    "Élaboration et gestion d'un calendrier éditorial",
                    'Réalisation pancartes informatives',
                    'Création de contenus visuels et rédactionnels pour les réseaux sociaux',
                  ]}
                  logo={animalShowLogo}
                  logoAlt="Logo Animal Show"
                  logoFit="cover"
                />
              </TimelineEntry>

              <TimelineEntry date="JUILLET 2024 - JANVIER 2025" delay={0.3}>
                <ExperienceCard
                  to="/project/telemag-plus/realisation-interview"
                  title="CRÉATRICE DE CONTENU EN ALTERNANCE"
                  company="Télémagplus"
                  bullets={["Rédaction d'articles", 'Interviews']}
                  logo={telemagLogo}
                  logoAlt="Logo Télémagplus"
                  logoFit="cover"
                />
              </TimelineEntry>

              <TimelineEntry date="MAI 2022/2023/2024" delay={0.4}>
                <ExperienceCard
                  title="CHARGÉE D'IMPRESSION PHOTOS"
                  company="Foire Agricole de Bras-Panon"
                  bullets={['Impression photos numériques']}
                />
              </TimelineEntry>

              <TimelineEntry date="MARS 2023" delay={0.5}>
                <ExperienceCard
                  to="/project/divers/animal-show"
                  title="HÔTESSE D'ACCUEIL"
                  company="Salon Animalier - Animal show"
                  bullets={['Accueillir, orienter, informer une personne', 'Identifier et traiter une demande']}
                  logo={animalShowLogo}
                  logoAlt="Logo Animal Show"
                  logoFit="cover"
                />
              </TimelineEntry>

              <TimelineEntry date="MAI 2022" delay={0.6}>
                <ExperienceCard
                  title="STAGIAIRE ASSISTANTE RÉALISATEUR"
                  company="Banijay studio Bry sur Marne"
                  bullets={['Transmettre des informations']}
                />
              </TimelineEntry>

              <TimelineEntry date="AVRIL 2021" delay={0.7}>
                <ExperienceCard
                  title="STAGIAIRE POLICE NATIONALE"
                  company="Commissariat de Saint-André"
                  bullets={['Découvrir les différents services']}
                />
              </TimelineEntry>

              <TimelineEntry date="OCTOBRE 2019" delay={0.8}>
                <ExperienceCard
                  title="HÔTESSE PARC D'ATTRACTION"
                  company="New Park"
                  bullets={['Gérer le flux des attractions', 'Travailler en équipe']}
                />
              </TimelineEntry>
            </div>
          </div>
        </motion.div>

        {/* Formation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 mb-20"
        >
          <h2
            className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-brand-ink"
            style={{ letterSpacing: '0.05em' }}
          >
            FORMATION
          </h2>

          <div className="relative max-w-3xl mx-auto px-4">
            <motion.div
              className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4A5A5] via-[#E8B5D4] to-brand-pink"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-6">
              <TimelineEntry date="2024 — EN COURS" delay={0.1}>
                <FormationCard
                  title="ÉCOLE DU NUMÉRIQUE, CCIR"
                  location="Saint-Denis, La Réunion"
                  bullets={[
                    'Mettre en œuvre et suivre un projet de communication',
                    'Conseiller et vendre des solutions de communication',
                    'Veille opérationnelle',
                    'Produire des supports de communication',
                    'Mettre en œuvre une stratégie de communication digitale',
                    'Organiser des événements de communication',
                    'Contribuer à la communication interne',
                  ]}
                  badge={{ text: 'En cours', variant: 'pink' }}
                  logo={ednLogo}
                  logoAlt="Logo École du Numérique"
                >
                  <p className="text-sm text-brand-ink mb-2">
                    2ème année de <strong>BTS Communication</strong>
                  </p>
                </FormationCard>
              </TimelineEntry>

              <TimelineEntry date="2021 — 2024" delay={0.3}>
                <FormationCard
                  title="LYCÉE MAHATMA GANDHI"
                  location="Saint-André, La Réunion"
                  bullets={[
                    <>
                      Obtention du <strong>Baccalauréat</strong>
                    </>,
                    <>
                      Spécialités <strong>SES</strong> et <strong>LLCE Anglais</strong> — mention Bien
                    </>,
                    <>
                      Obtention <strong>Certification PIX</strong>
                    </>,
                    <>
                      Obtention <strong>Certification Cambridge</strong>
                    </>,
                  ]}
                  badge={{ text: 'Mention Bien', variant: 'gold' }}
                  logo={gandhiLogo}
                  logoAlt="Logo Lycée Mahatma Gandhi"
                />
              </TimelineEntry>

              <TimelineEntry date="2017 — 2021" delay={0.5}>
                <FormationCard
                  title="COLLÈGE SAINTE-GENEVIÈVE"
                  location="La Réunion"
                  bullets={[
                    <>
                      Obtention du <strong>Brevet des collèges</strong>
                    </>,
                    <>
                      Formation <strong>PSC1</strong> (Premiers secours)
                    </>,
                  ]}
                  logo={stgLogo}
                  logoAlt="Logo Collège Sainte-Geneviève"
                />
              </TimelineEntry>
            </div>
          </div>
        </motion.div>

        {/* Compétences camera */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-[#D4A5A5]">Mes compétences</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
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

                <rect x="78" y="138" width="664" height="320" rx="24" fill="black" opacity="0.08" filter="url(#softShadow)" />
                <rect x="75" y="130" width="670" height="320" rx="24" fill="url(#bodyGrad)" stroke="#D4A0B8" strokeWidth="2" />

                {Array.from({ length: 16 }, (_, i) => (
                  <line key={`tex-${i}`} x1="85" y1={155 + i * 20} x2="735" y2={155 + i * 20} stroke="#D4A0B8" strokeWidth="0.3" opacity="0.4" />
                ))}

                <rect x="75" y="105" width="670" height="40" rx="12" fill="#F2C6DE" stroke="#D4A0B8" strokeWidth="2" />
                <rect x="80" y="110" width="660" height="30" rx="10" fill="url(#bodyGrad)" opacity="0.7" />

                <rect x="110" y="112" width="45" height="26" rx="5" fill="#F8E8F0" stroke="#D4A0B8" strokeWidth="1.5" />
                <rect x="115" y="117" width="35" height="16" rx="3" fill="white" opacity="0.8" />
                {Array.from({ length: 6 }, (_, i) => (
                  <line key={`flash-${i}`} x1={120 + i * 5} y1="119" x2={120 + i * 5} y2="131" stroke="#E8B5D4" strokeWidth="0.8" opacity="0.5" />
                ))}

                <rect x="370" y="112" width="80" height="24" rx="6" fill="#333" stroke="#555" strokeWidth="1.5" />
                <rect x="378" y="117" width="64" height="14" rx="4" fill="#1a1a1a" />
                <rect x="382" y="119" width="56" height="10" rx="3" fill="#2d2d3d" />
                <circle cx="410" cy="124" r="4" fill="none" stroke="#555" strokeWidth="0.5" opacity="0.5" />

                <circle cx="660" cy="112" r="22" fill="#D4A5A5" stroke="#BF8F8F" strokeWidth="2" />
                <circle cx="660" cy="112" r="17" fill="#E8B5D4" />
                <circle cx="660" cy="112" r="6" fill="#C4959D" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={`cran-${angle}`}
                    x1={660 + Math.cos((angle * Math.PI) / 180) * 14}
                    y1={112 + Math.sin((angle * Math.PI) / 180) * 14}
                    x2={660 + Math.cos((angle * Math.PI) / 180) * 19}
                    y2={112 + Math.sin((angle * Math.PI) / 180) * 19}
                    stroke="#BF8F8F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ))}
                <text x="660" y="96" fontFamily="Arial" fontSize="6" fill="#9B8B7E" textAnchor="middle">AUTO</text>

                <ellipse cx="600" cy="108" rx="18" ry="10" fill="#C4959D" stroke="#B08080" strokeWidth="1.5" />
                <ellipse cx="600" cy="106" rx="14" ry="7" fill="#E8469E" />
                <ellipse cx="598" cy="104" rx="6" ry="3" fill="white" opacity="0.3" />

                <rect x="540" y="110" width="30" height="12" rx="6" fill="#7A6F5D" />
                <circle cx="563" cy="116" r="4" fill="#9B8B7E" />
                <text x="548" y="119" fontFamily="Arial" fontSize="6" fill="white">ON</text>

                <text x="260" y="128" fontFamily="'Homemade Apple', cursive" fontSize="22" fill="#9B7088" fontStyle="italic" opacity="0.8">Lily&apos;s Cam</text>

                <rect x="75" y="150" width="65" height="280" rx="12" fill="url(#gripGrad)" />
                {Array.from({ length: 19 }, (_, i) => (
                  <line key={`grip-${i}`} x1="85" y1={165 + i * 14} x2="130" y2={165 + i * 14} stroke="#B08080" strokeWidth="0.8" opacity="0.5" />
                ))}

                <rect x="155" y="155" width="440" height="275" rx="8" fill="#111" stroke="#333" strokeWidth="3" />
                <rect x="162" y="162" width="426" height="261" rx="5" fill="#f8f8f8" />
                <image href={competencesRaw} x="167" y="167" width="416" height="251" preserveAspectRatio="xMidYMid meet" />
                <rect x="162" y="162" width="426" height="261" rx="5" fill="url(#screenReflect)" />
                <circle cx="180" cy="178" r="4" fill="#E8469E" opacity="0.9" />
                <text x="190" y="181" fontFamily="Arial" fontSize="8" fill="white" opacity="0.9">REC</text>
                <text x="560" y="181" fontFamily="Arial" fontSize="8" fill="white" opacity="0.7" textAnchor="end">F2.8</text>
                <text x="560" y="410" fontFamily="Arial" fontSize="8" fill="white" opacity="0.7" textAnchor="end">ISO 400</text>

                <rect x="610" y="155" width="120" height="275" rx="8" fill="#E0A8C8" opacity="0.5" />

                <rect x="625" y="170" width="90" height="35" rx="4" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
                <rect x="629" y="174" width="82" height="27" rx="2" fill="#2a3a2a" />
                <text x="670" y="185" fontFamily="'Courier New'" fontSize="7" fill="#8fbc8f" textAnchor="middle">P MODE</text>
                <text x="670" y="196" fontFamily="'Courier New'" fontSize="9" fill="#8fbc8f" textAnchor="middle">1/125  f2.8</text>

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

                <rect x="625" y="320" width="40" height="16" rx="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                <text x="645" y="332" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle" fontWeight="bold">MENU</text>
                <rect x="675" y="320" width="40" height="16" rx="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                <text x="695" y="332" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle">▶</text>
                <rect x="625" y="350" width="40" height="16" rx="4" fill="#7A6F5D" stroke="#6A5F4D" strokeWidth="1" />
                <text x="645" y="362" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle">Fn</text>
                <rect x="675" y="350" width="40" height="16" rx="4" fill="#7A6F5D" stroke="#6A5F4D" strokeWidth="1" />
                <text x="695" y="362" fontFamily="Arial" fontSize="7" fill="white" textAnchor="middle">Q</text>

                <rect x="300" y="438" width="50" height="8" rx="2" fill="#555" />
                <text x="325" y="458" fontFamily="Arial" fontSize="7" fill="#9B8B7E" textAnchor="middle">HDMI</text>
                <rect x="380" y="438" width="35" height="8" rx="2" fill="#555" />
                <text x="397" y="458" fontFamily="Arial" fontSize="7" fill="#9B8B7E" textAnchor="middle">USB</text>

                <circle cx="95" cy="145" r="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                <line x1="92" y1="145" x2="98" y2="145" stroke="#B08080" strokeWidth="1" />
                <circle cx="725" cy="145" r="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                <line x1="722" y1="145" x2="728" y2="145" stroke="#B08080" strokeWidth="1" />
                <circle cx="95" cy="435" r="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                <line x1="92" y1="435" x2="98" y2="435" stroke="#B08080" strokeWidth="1" />
                <circle cx="725" cy="435" r="4" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                <line x1="722" y1="435" x2="728" y2="435" stroke="#B08080" strokeWidth="1" />

                <rect x="740" y="165" width="12" height="20" rx="3" fill="#C4959D" stroke="#B08080" strokeWidth="1" />
                <path d="M 752 170 Q 790 175 785 200 Q 780 230 760 225" stroke="#D4A5A5" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M 752 170 Q 790 175 785 200 Q 780 230 760 225" stroke="#E8B5D4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <text x="778" y="198" fontSize="12" fill="#E8469E" opacity="0.7">♥</text>
              </svg>
            </motion.div>
          </div>

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

        {/* Soft skills receipt */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 mb-20 max-w-xs mx-auto"
        >
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-full h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-2xl shadow-xl border-t-4 border-gray-500" />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white shadow-2xl relative font-mono"
              style={{
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
              }}
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold tracking-wide mb-1 text-[#2a2a2a]">SOFT SKILLS</h3>
                <p className="text-xs tracking-widest text-[#666]">✦ LILY DE CHALONGE ✦</p>
              </div>

              <div className="border-t-2 border-dashed border-gray-400 mb-4" />

              <div className="text-xs mb-3 space-y-1 text-[#2a2a2a]">
                <div className="flex justify-between">
                  <span>DATE:</span>
                  <span>FÉVRIER 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>LOC:</span>
                  <span className="text-right">BTS COMMUNICATION</span>
                </div>
              </div>

              <div className="border-t-2 border-black mb-3" />

              <div className="flex justify-between text-xs font-bold mb-2 text-[#2a2a2a]">
                <span>COMPÉTENCE</span>
                <span>NIVEAU</span>
              </div>

              <div className="space-y-1.5 text-xs mb-3 text-[#2a2a2a]">
                <div className="flex justify-between"><span>CRÉATIVE</span><span>★★★★★</span></div>
                <div className="flex justify-between"><span>AMBITIEUSE</span><span>★★★★☆</span></div>
                <div className="flex justify-between"><span>FORCE DE PROPOSITION</span><span>★★★★☆</span></div>
                <div className="flex justify-between"><span>DYNAMIQUE</span><span>★★★★★</span></div>
                <div className="flex justify-between"><span>CAPACITÉ D&apos;ADAPTATION</span><span>★★★★☆</span></div>
                <div className="flex justify-between"><span>ESPRIT D&apos;ÉQUIPE</span><span>★★★★★</span></div>
              </div>

              <div className="border-t-2 border-black mb-3" />

              <div className="flex justify-between text-sm font-bold mb-4 text-[#2a2a2a]">
                <span>TOTAL</span>
                <span>100%</span>
              </div>

              <div className="border-t-2 border-black mb-4" />

              <div className="flex justify-center gap-px mb-3">
                {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 4, 2, 1, 3].map((height, i) => (
                  <div
                    key={i}
                    className="bg-black"
                    style={{ width: i % 3 === 0 ? '3px' : '2px', height: `${height * 12}px` }}
                  />
                ))}
              </div>
              <p className="text-center text-xs tracking-wider mb-3 text-[#2a2a2a]">
                |||| 2025LILY974BTSCOMMUNICATION ||||
              </p>

              <div
                className="absolute -bottom-4 left-0 right-0 h-6 bg-white"
                style={{
                  clipPath:
                    'polygon(0 0, 5% 50%, 0 100%, 8% 50%, 5% 0, 13% 50%, 10% 100%, 18% 50%, 15% 0, 23% 50%, 20% 100%, 28% 50%, 25% 0, 33% 50%, 30% 100%, 38% 50%, 35% 0, 43% 50%, 40% 100%, 48% 50%, 45% 0, 53% 50%, 50% 100%, 58% 50%, 55% 0, 63% 50%, 60% 100%, 68% 50%, 65% 0, 73% 50%, 70% 100%, 78% 50%, 75% 0, 83% 50%, 80% 100%, 88% 50%, 85% 0, 93% 50%, 90% 100%, 98% 50%, 95% 0, 100% 50%, 100% 100%, 0 100%)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        <MoodBoard />
      </div>
    </div>
  );
}
