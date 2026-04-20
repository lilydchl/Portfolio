import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Send, Paperclip, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { useState } from 'react';

type FormStatus = { kind: 'idle' } | { kind: 'sending' } | { kind: 'ok' } | { kind: 'error'; message: string };

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<FormStatus>({ kind: 'idle' });
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status.kind === 'sending') return;

    setStatus({ kind: 'sending' });
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        if (res.status === 429) {
          setStatus({ kind: 'error', message: 'Trop de tentatives, réessayez dans 30 secondes.' });
          return;
        }
        if (res.status === 503) {
          setStatus({ kind: 'error', message: 'Service email indisponible pour l\'instant.' });
          return;
        }
        setStatus({ kind: 'error', message: "Impossible d'envoyer le message. Réessayez." });
        return;
      }
      setStatus({ kind: 'ok' });
      setFormData({ name: '', email: '', message: '', website: '' });
    } catch {
      setStatus({ kind: 'error', message: 'Erreur réseau. Réessayez.' });
    }
  };

  const sending = status.kind === 'sending';

  return (
    <div className="min-h-screen py-10 md:py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-20 relative"
        >
          <motion.div
            animate={{ rotate: [45, 50, 45], y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Paperclip className="w-10 h-10 text-[#E8B5D4] absolute -top-8 left-1/2 -translate-x-1/2 rotate-45 opacity-50" />
          </motion.div>
          <h1 className="font-accent text-4xl md:text-8xl font-bold mb-4 md:mb-6 text-[#D4A5A5]">
            Contactez-moi
          </h1>
          <p className="font-accent text-brand-soft-ink text-base md:text-lg">
            Une question, un projet ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                name="website"
                className="absolute -left-[9999px]"
                aria-hidden="true"
              />

              <div>
                <motion.label
                  htmlFor="name"
                  className="font-accent block text-xs tracking-widest text-brand-mute mb-3 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  NOM COMPLET
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={200}
                  disabled={sending}
                  className="font-accent w-full px-0 py-4 bg-transparent border-b-2 border-[#E8E5E0] focus:border-[#D4A5A5] focus:outline-none transition-colors disabled:opacity-60"
                  placeholder="Votre nom"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <motion.label
                  htmlFor="email"
                  className="font-accent block text-xs tracking-widest text-brand-mute mb-3 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  EMAIL
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  maxLength={320}
                  disabled={sending}
                  className="font-accent w-full px-0 py-4 bg-transparent border-b-2 border-[#E8E5E0] focus:border-[#D4A5A5] focus:outline-none transition-colors disabled:opacity-60"
                  placeholder="votre@email.fr"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <motion.label
                  htmlFor="message"
                  className="font-accent block text-xs tracking-widest text-brand-mute mb-3 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  MESSAGE
                </motion.label>
                <motion.textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  maxLength={5000}
                  disabled={sending}
                  className="font-accent w-full px-0 py-4 bg-transparent border-b-2 border-[#E8E5E0] focus:border-[#D4A5A5] focus:outline-none transition-colors resize-none disabled:opacity-60"
                  placeholder="Parlez-moi de votre projet..."
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={sending ? undefined : { scale: 1.02 }}
                whileTap={sending ? undefined : { scale: 0.98 }}
                className="font-accent w-full py-5 bg-[#D4A5A5] text-white text-xs tracking-widest hover:bg-[#C49595] transition-colors flex items-center justify-center gap-3 rounded-full shadow-lg font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {sending ? 'ENVOI EN COURS...' : 'ENVOYER LE MESSAGE'}
              </motion.button>

              {status.kind === 'ok' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-accent text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3"
                  role="status"
                >
                  Merci, votre message a bien été envoyé ✨
                </motion.p>
              )}
              {status.kind === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-accent text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
                  role="alert"
                >
                  {status.message}
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <motion.div
              className="bg-gradient-to-br from-[#D4C4B0] to-[#D4A5A5] p-10 rounded-3xl shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                animate={{ rotate: [45, 50, 45] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Paperclip className="w-16 h-16 text-white/10 absolute top-4 right-4 rotate-45" />
              </motion.div>

              <h4 className="font-accent text-2xl font-semibold text-white mb-6">
                Services disponibles
              </h4>
              <ul className="font-accent space-y-3 text-white/90">
                {[
                  'Community Management',
                  'Création de Contenu',
                  'Stratégie Social Media',
                  'Branding & Identité Visuelle',
                  'Événementiel Digital',
                ].map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="font-accent text-4xl font-bold mb-4 text-[#D4A5A5]">Mes Coordonnées</h3>
            <span className="font-hand text-brand-soft-ink text-base block">
              Cliquez sur l'enveloppe pour découvrir mes informations
            </span>
          </div>

          <div className="relative flex justify-center items-center min-h-[350px] md:min-h-[500px]">
            {!isEnvelopeOpen && (
              <motion.div
                className="absolute -left-2 md:-left-16 -top-8 md:top-1/2 md:-translate-y-1/2 flex flex-col items-center gap-2 z-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="font-hand block text-xl md:text-3xl text-brand-pink rotate-[-8deg]"
                  animate={{ rotate: [-8, -10, -8], y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Cliquez ici !
                </motion.span>
                <motion.div
                  animate={{ x: [0, 8, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-8 h-8 text-brand-pink" strokeWidth={2.5} />
                </motion.div>
              </motion.div>
            )}

            <motion.div
              className="relative cursor-pointer w-full max-w-[320px] md:max-w-none"
              onClick={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-[calc(100%-40px)] md:w-[380px] bg-white rounded-t-lg shadow-2xl z-10"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: isEnvelopeOpen ? -280 : 0, opacity: isEnvelopeOpen ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ top: '36%' }}
              >
                <div className="p-4 md:p-8 space-y-3 md:space-y-4">
                  <div className="text-center mb-6">
                    <p className="font-accent text-xs tracking-widest text-brand-mute mb-2">
                      LILY DE CHALONGE
                    </p>
                    <h4 className="font-accent text-2xl font-bold italic text-[#D4A5A5]">
                      Community Manager
                    </h4>
                  </div>

                  <div className="font-accent space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-brand-pink flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-brand-mute font-medium">EMAIL</p>
                        <p className="text-brand-soft-ink">lilydechalonge@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Instagram className="w-4 h-4 text-brand-pink flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-brand-mute font-medium">INSTAGRAM</p>
                        <p className="text-brand-soft-ink">@lily.creates</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Linkedin className="w-4 h-4 text-brand-pink flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-brand-mute font-medium">LINKEDIN</p>
                        <a
                          href="https://www.linkedin.com/in/lily-de-chalonge/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-soft-ink hover:text-brand-pink transition-colors underline decoration-[#E8B5D4]"
                        >
                          /lily-de-chalonge
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-brand-pink flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-brand-mute font-medium">TELEPHONE</p>
                        <p className="text-brand-soft-ink">06 92 14 31 82</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 py-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8B5D4] to-transparent" />
                    <Sparkles className="w-3 h-3 text-brand-pink" />
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8B5D4] to-transparent" />
                  </div>

                  <p className="font-accent text-xs text-center italic text-brand-mute leading-relaxed">
                    "Transformons vos idées en contenu qui inspire"
                  </p>
                </div>
              </motion.div>

              <svg width="100%" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <ellipse cx="250" cy="320" rx="180" ry="20" fill="black" opacity="0.1" />
                <rect x="50" y="100" width="400" height="220" rx="8" fill="#F5F1ED" />

                <path
                  d="M50 100 Q55 95 60 100 Q65 95 70 100 Q75 95 80 100 Q85 95 90 100 Q95 95 100 100 Q105 95 110 100 Q115 95 120 100 Q125 95 130 100 Q135 95 140 100 Q145 95 150 100 Q155 95 160 100 Q165 95 170 100 Q175 95 180 100 Q185 95 190 100 Q195 95 200 100 Q205 95 210 100 Q215 95 220 100 Q225 95 230 100 Q235 95 240 100 Q245 95 250 100 Q255 95 260 100 Q265 95 270 100 Q275 95 280 100 Q285 95 290 100 Q295 95 300 100 Q305 95 310 100 Q315 95 320 100 Q325 95 330 100 Q335 95 340 100 Q345 95 350 100 Q355 95 360 100 Q365 95 370 100 Q375 95 380 100 Q385 95 390 100 Q395 95 400 100 Q405 95 410 100 Q415 95 420 100 Q425 95 430 100 Q435 95 440 100 Q445 95 450 100"
                  stroke="#E8B5D4"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 320 Q55 325 60 320 Q65 325 70 320 Q75 325 80 320 Q85 325 90 320 Q95 325 100 320 Q105 325 110 320 Q115 325 120 320 Q125 325 130 320 Q135 325 140 320 Q145 325 150 320 Q155 325 160 320 Q165 325 170 320 Q175 325 180 320 Q185 325 190 320 Q195 325 200 320 Q205 325 210 320 Q215 325 220 320 Q225 325 230 320 Q235 325 240 320 Q245 325 250 320 Q255 325 260 320 Q265 325 270 320 Q275 325 280 320 Q285 325 290 320 Q295 325 300 320 Q305 325 310 320 Q315 325 320 320 Q325 325 330 320 Q335 325 340 320 Q345 325 350 320 Q355 325 360 320 Q365 325 370 320 Q375 325 380 320 Q385 325 390 320 Q395 325 400 320 Q405 325 410 320 Q415 325 420 320 Q425 325 430 320 Q435 325 440 320 Q445 325 450 320"
                  stroke="#E8B5D4"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 100 Q45 105 50 110 Q45 115 50 120 Q45 125 50 130 Q45 135 50 140 Q45 145 50 150 Q45 155 50 160 Q45 165 50 170 Q45 175 50 180 Q45 185 50 190 Q45 195 50 200 Q45 205 50 210 Q45 215 50 220 Q45 225 50 230 Q45 235 50 240 Q45 245 50 250 Q45 255 50 260 Q45 265 50 270 Q45 275 50 280 Q45 285 50 290 Q45 295 50 300 Q45 305 50 310 Q45 315 50 320"
                  stroke="#E8B5D4"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M450 100 Q455 105 450 110 Q455 115 450 120 Q455 125 450 130 Q455 135 450 140 Q455 145 450 150 Q455 155 450 160 Q455 165 450 170 Q455 175 450 180 Q455 185 450 190 Q455 195 450 200 Q455 205 450 210 Q455 215 450 220 Q455 225 450 230 Q455 235 450 240 Q455 245 450 250 Q455 255 450 260 Q455 265 450 270 Q455 275 450 280 Q455 285 450 290 Q455 295 450 300 Q455 305 450 310 Q455 315 450 320"
                  stroke="#E8B5D4"
                  strokeWidth="3"
                  fill="none"
                />

                <path d="M50 100 L250 210 L450 100" fill="#E8E5E0" />

                <motion.g
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: isEnvelopeOpen ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ transformOrigin: '250px 100px' }}
                >
                  <path d="M50 100 L250 40 L450 100 L250 210 Z" fill="#E8B5D4" />
                  <circle cx="250" cy="120" r="8" fill="white" opacity="0.3" />
                </motion.g>

                <line x1="100" y1="200" x2="300" y2="200" stroke="#D4A5A5" strokeWidth="2" opacity="0.3" />
                <line x1="100" y1="230" x2="250" y2="230" stroke="#D4A5A5" strokeWidth="2" opacity="0.3" />
                <line x1="100" y1="260" x2="280" y2="260" stroke="#D4A5A5" strokeWidth="2" opacity="0.3" />
              </svg>

              {!isEnvelopeOpen && (
                <motion.span
                  className="font-hand absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-brand-pink whitespace-nowrap block"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  Cliquez pour ouvrir
                </motion.span>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
