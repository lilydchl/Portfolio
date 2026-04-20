import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Target, TrendingUp, Info } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { Image } from '@/components/media/Image';
import { getCover } from '@/lib/covers';
import { shakesById } from '@/data/shakes';

export function ShakeDetail() {
  const { shakeId } = useParams<{ shakeId: string }>();
  const shake = shakeId ? shakesById[shakeId] : undefined;

  if (!shake) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <p className="font-accent text-[#7A6F5D]">Shake introuvable</p>
      </div>
    );
  }

  const cover = getCover(shake.coverAsset);

  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="relative h-[500px] overflow-hidden">
        {cover && <Image src={cover} alt={shake.name} className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/shake-du-moment"
              className="font-accent inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux shakes</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-accent text-5xl md:text-7xl font-bold text-white mb-4">{shake.name}</h1>
            <p className="font-accent text-white/90 text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {shake.date} • {shake.duree}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#E8B5D4] rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-accent text-3xl md:text-4xl font-bold text-brand-ink">Description</h2>
          </div>
          <p className="font-accent text-lg text-brand-soft-ink leading-relaxed">{shake.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-accent text-3xl md:text-4xl font-bold text-brand-ink">Objectif</h2>
          </div>
          <p className="font-accent text-lg text-brand-soft-ink leading-relaxed">{shake.objectif}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="font-accent text-3xl md:text-4xl font-bold mb-8 text-brand-ink">Composition</h2>
          <ul className="space-y-3">
            {shake.composition.map((ingredient, index) => (
              <motion.li
                key={ingredient}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-brand-pink rounded-full flex-shrink-0" />
                <span className="font-accent text-lg text-brand-soft-ink">{ingredient}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-pink to-[#D4307E] rounded-3xl p-8 md:p-10 shadow-lg text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-10 h-10" />
              <h2 className="font-accent text-2xl md:text-3xl font-bold">Ventes</h2>
            </div>
            <p className="font-accent text-4xl md:text-5xl font-bold">{shake.ventes}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
          >
            <h2 className="font-accent text-2xl md:text-3xl font-bold mb-6 text-brand-ink">Impact</h2>
            <ul className="space-y-3">
              {shake.impact.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-brand-pink rounded-full flex-shrink-0 mt-2" />
                  <span className="font-accent text-base text-brand-soft-ink">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
