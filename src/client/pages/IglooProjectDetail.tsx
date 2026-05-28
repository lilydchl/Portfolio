import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { Image } from '@/components/media/Image';
import { getCover } from '@/lib/covers';
import { iglooProjectsById } from '@/data/igloo-projects';

export function IglooProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? iglooProjectsById[projectId] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-rose mb-4">Projet non trouvé</h1>
          <Link to="/igloo-projects" className="text-brand-pink hover:underline">
            Retour aux projets L&apos;Igloo
          </Link>
        </div>
      </div>
    );
  }

  const cover = getCover(project.coverAsset);

  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="relative bg-gradient-to-br from-[#E8E5E0] to-[#F5F3F0] pb-20">
        <div className="max-w-7xl mx-auto px-8 pt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/igloo-projects"
              className="inline-flex items-center gap-2 text-[#7A6F5D] hover:text-brand-pink transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux projets L&apos;Igloo</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-6 mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-brand-rose">{project.name}</h1>
            <p className="text-sm tracking-widest text-brand-mute font-medium">
              L&apos;IGLOO • LE MONDE DE LA GLACE
            </p>
          </motion.div>

          {cover && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                <Image src={cover} alt={project.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-sm tracking-widest text-brand-pink font-semibold mb-3">DATE</h3>
            <p className="text-[#7A6F5D] text-lg">{project.date}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-sm tracking-widest text-brand-pink font-semibold mb-3">CLIENT</h3>
            <p className="text-[#7A6F5D] text-lg">{project.client}</p>
          </div>
        </motion.div>

        <Section title="Objectif" delay={0.1}>{project.objectif}</Section>
        <Section title="Contexte" delay={0.2}>{project.contexte}</Section>
        <Section title="Solution" delay={0.3}>{project.solution}</Section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-pink to-[#D4307E] p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Résultats</h2>
          <ul className="space-y-4">
            {project.resultats.map((resultat, index) => (
              <motion.li
                key={resultat}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="text-white text-lg">{resultat}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="bg-gradient-to-br from-[#E8E5E0] to-[#F5F3F0] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-8 text-center space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-rose">Découvrez mes autres projets</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/igloo-projects"
              className="inline-block px-6 py-3 sm:px-12 sm:py-5 bg-brand-pink text-white text-xs tracking-widest hover:bg-[#D4307E] transition-colors rounded-full shadow-lg hover:shadow-xl font-semibold"
            >
              AUTRES PROJETS L&apos;IGLOO
            </Link>
            <Link
              to="/projects"
              className="inline-block px-6 py-3 sm:px-12 sm:py-5 bg-white text-brand-pink text-xs tracking-widest hover:bg-brand-cream transition-colors rounded-full shadow-lg hover:shadow-xl font-semibold"
            >
              TOUTES MES RÉALISATIONS
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ title, delay, children }: { title: string; delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold text-brand-rose mb-6">{title}</h2>
      <p className="text-[#7A6F5D] text-lg leading-relaxed">{children}</p>
    </motion.div>
  );
}
