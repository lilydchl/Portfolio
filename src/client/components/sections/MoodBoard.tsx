import { useState, type ElementType, type CSSProperties } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Music,
  Camera,
  Palette,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Coffee,
  Plane,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { Image } from '@/components/media/Image';
import { Pushpin, pushpinColors } from '@/components/decor/Pushpin';
import type { Picture } from '@/lib/picture';
import iceCreamPhoto from '@/assets/moodboard/ice-cream.png?w=256;512&format=avif;webp&as=picture';
import cheersPhoto from '@/assets/moodboard/cheers.png?w=256;512&format=avif;webp&as=picture';
import voyagePhoto from '@/assets/moodboard/voyage.png?w=256;512&format=avif;webp&as=picture';

const concertPhoto =
  'https://images.unsplash.com/photo-1619973226698-b77a5b5dd14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGxpdmUlMjBzdGFnZXxlbnwxfHx8fDE3NzMzMTU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const monIlePhoto =
  'https://images.unsplash.com/photo-1772984815781-f3ce7a662f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMHJldW5pb24lMjBvY2VhbiUyMGJlYWNofGVufDF8fHx8MTc3MzMxNTY0Nnww&ixlib=rb-4.1.0&q=80&w=1080';

type PostItProps = {
  text: string;
  color?: string;
  rotate?: number;
  font?: string;
  className?: string;
  delay?: number;
};

const PostIt = ({ text, color = '#FFF9C4', rotate = 0, font, className = '', delay = 0 }: PostItProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: rotate - 5 }}
    whileInView={{ opacity: 1, y: 0, rotate }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
    className={`relative shadow-lg cursor-default ${className}`}
    style={{ background: color, width: 'fit-content' }}
  >
    <div
      className="absolute bottom-0 right-0 w-6 h-6"
      style={{ background: `linear-gradient(135deg, ${color} 50%, rgba(0,0,0,0.06) 50%)` }}
    />
    <div className="p-5 pb-7">
      <p className="text-sm leading-relaxed text-[#4A3F35]" style={{ fontFamily: font ?? 'var(--font-hand)' }}>
        {text}
      </p>
    </div>
  </motion.div>
);

type WashiTapeProps = {
  color?: string;
  rotate?: number;
  width?: number;
  className?: string;
};

const WashiTape = ({ color = '#F0C8D8', rotate = 0, width = 80, className = '' }: WashiTapeProps) => (
  <div
    className={`absolute z-20 ${className}`}
    style={{
      width: `${width}px`,
      height: '14px',
      background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} 4px, transparent 4px, transparent 6px)`,
      opacity: 0.85,
      transform: `rotate(${rotate}deg)`,
      borderRadius: '1px',
    }}
  />
);

type InstagramMockupProps = {
  imageSrc?: Picture | string;
  username?: string;
  caption?: string;
  likes?: string;
  rotate?: number;
  className?: string;
  delay?: number;
};

const InstagramMockup = ({
  imageSrc,
  username = 'lily.dlc',
  caption = '',
  likes = '127',
  rotate = 0,
  className = '',
  delay = 0,
}: InstagramMockupProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
    className={`bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-[200px] ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <div className="flex items-center gap-2 px-3 py-2">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-pink to-[#F0C8D8]" />
      <span className="font-sans text-[10px] font-medium text-[#3A3A3A]">{username}</span>
      <span className="text-[#C4C4C4] ml-auto text-xs">...</span>
    </div>
    <div className="w-full aspect-square bg-gradient-to-br from-[#F0E6DF] to-[#E8DDD5] overflow-hidden">
      {imageSrc ? (
        <Image src={imageSrc} alt="Instagram post" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Camera className="w-10 h-10 text-[#C4B5A5] opacity-40" />
        </div>
      )}
    </div>
    <div className="px-3 py-2 space-y-1">
      <div className="flex items-center gap-3">
        <Heart className="w-4 h-4 text-brand-pink fill-brand-pink" />
        <svg className="w-4 h-4 text-[#3A3A3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <Plane className="w-4 h-4 text-[#3A3A3A]" />
      </div>
      <p className="font-sans text-[9px] font-medium text-[#3A3A3A]">{likes} j&apos;aime</p>
      {caption && (
        <p className="font-sans text-[8px] text-[#5A5A5A] leading-relaxed">
          <span className="font-medium text-[#3A3A3A]">{username}</span> {caption}
        </p>
      )}
    </div>
  </motion.div>
);

type PlaylistWidgetProps = { rotate?: number; className?: string; delay?: number };

const PlaylistWidget = ({ rotate = 0, className = '', delay = 0 }: PlaylistWidgetProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const tracks = [
    { title: 'Golden Hour', artist: 'JVKE', active: true },
    { title: 'Espresso', artist: 'Sabrina Carpenter', active: false },
    { title: 'Daylight', artist: 'David Kushner', active: false },
    { title: 'Pink + White', artist: 'Frank Ocean', active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 30 }}
      className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden w-full max-w-[220px] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="bg-gradient-to-r from-brand-pink to-[#E8B5D4] p-4 pb-5">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-4 h-4 text-white" />
          <span className="font-sans text-[10px] tracking-widest text-white/90 uppercase">Ma Playlist</span>
        </div>
        <p className="font-script text-white text-lg">Mes vibes du moment</p>
      </div>

      <div className="p-3 space-y-1">
        {tracks.map((track, i) => (
          <motion.div
            key={track.title}
            className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
              track.active ? 'bg-[#FFF0F5]' : 'hover:bg-[#F5F1ED]'
            }`}
            whileHover={{ x: 3 }}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                track.active ? 'bg-brand-pink' : 'bg-[#E8E5E0]'
              }`}
            >
              {track.active ? (
                <div className="flex items-center gap-[2px]">
                  {[0, 1, 2].map((j) => (
                    <motion.div
                      key={j}
                      className="w-[2px] bg-white rounded-full"
                      animate={isPlaying ? { height: [3, 8, 3] } : { height: 3 }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: j * 0.15 }}
                    />
                  ))}
                </div>
              ) : (
                <span className="font-sans text-[8px] text-brand-mute">{i + 1}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`font-sans text-[10px] truncate ${
                  track.active ? 'text-brand-pink font-medium' : 'text-[#5A4A3A]'
                }`}
              >
                {track.title}
              </p>
              <p className="font-sans text-[8px] text-brand-mute truncate">{track.artist}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="px-4 pb-4 pt-1">
        <div className="w-full h-1 bg-[#E8E5E0] rounded-full mb-3 overflow-hidden">
          <motion.div
            className="h-full bg-brand-pink rounded-full"
            animate={isPlaying ? { width: ['30%', '100%'] } : {}}
            transition={{ duration: 8, ease: 'linear' }}
            style={{ width: '30%' }}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <SkipBack className="w-3.5 h-3.5 text-brand-mute cursor-pointer hover:text-brand-ink" />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause' : 'Lecture'}
            className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center shadow-md"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-white" />
            ) : (
              <Play className="w-3.5 h-3.5 text-white ml-0.5" />
            )}
          </motion.button>
          <SkipForward className="w-3.5 h-3.5 text-brand-mute cursor-pointer hover:text-brand-ink" />
        </div>
      </div>
    </motion.div>
  );
};

type ScrapbookPolaroidProps = {
  imageSrc?: Picture | string;
  label?: string;
  rotate?: number;
  className?: string;
  delay?: number;
};

const ScrapbookPolaroid = ({
  imageSrc,
  label,
  rotate = 0,
  className = '',
  delay = 0,
}: ScrapbookPolaroidProps) => (
  <motion.div
    initial={{ opacity: 0, rotate: rotate + 8 }}
    whileInView={{ opacity: 1, rotate }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
    className={`bg-white p-2.5 pb-8 shadow-xl cursor-default ${className}`}
    style={{ width: '140px' }}
  >
    <div className="w-full aspect-square bg-gradient-to-br from-[#F0E6DF] to-[#E8DDD5] overflow-hidden">
      {imageSrc ? (
        <Image src={imageSrc} alt={label ?? 'Photo'} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Camera className="w-8 h-8 text-[#C4B5A5] opacity-30" />
        </div>
      )}
    </div>
    {label && <p className="font-hand text-center mt-2 text-sm text-brand-ink">{label}</p>}
  </motion.div>
);

type StickerProps = {
  icon: ElementType;
  color?: string;
  bgColor?: string;
  rotate?: number;
  size?: number;
  className?: string;
  delay?: number;
};

const Sticker = ({
  icon: Icon,
  color = '#E8469E',
  bgColor = '#FFF0F5',
  rotate = 0,
  size = 44,
  className = '',
  delay = 0,
}: StickerProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ type: 'spring', delay, stiffness: 200 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.2, rotate: rotate + 15 }}
    className={`rounded-full flex items-center justify-center shadow-md cursor-default ${className}`}
    style={{ width: size, height: size, background: bgColor, transform: `rotate(${rotate}deg)` }}
  >
    <Icon style={{ color, width: size * 0.45, height: size * 0.45 } as CSSProperties} />
  </motion.div>
);

type TornNoteProps = { text: string; rotate?: number; className?: string; delay?: number };

const TornNote = ({ text, rotate = 0, className = '', delay = 0 }: TornNoteProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.06, rotate: 0 }}
    className={`relative bg-white shadow-md px-5 py-3 cursor-default ${className}`}
    style={{
      transform: `rotate(${rotate}deg)`,
      borderLeft: '3px solid #E8469E',
      clipPath:
        'polygon(0% 0%, 98% 2%, 100% 12%, 97% 25%, 100% 40%, 98% 55%, 100% 70%, 97% 85%, 100% 100%, 0% 98%)',
    }}
  >
    <p className="font-hand text-xs leading-relaxed text-brand-ink">{text}</p>
  </motion.div>
);

export function MoodBoard() {
  return (
    <div className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-6 relative z-10"
      >
        <p className="font-script text-lg text-brand-pink mb-2">un peu de moi...</p>
        <h2 className="font-serif text-6xl md:text-7xl font-bold text-brand-ink">Mon Univers</h2>
        <p className="font-sans text-sm tracking-widest text-brand-mute mt-3 uppercase">
          Hobbies &amp; inspirations
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-4 md:p-10 min-h-[600px] md:min-h-[800px] lg:min-h-[700px] overflow-hidden"
          style={{
            background:
              'linear-gradient(145deg, #D4B896 0%, #C4A882 30%, #B89E76 60%, #C9AD8A 100%)',
            boxShadow: 'inset 0 2px 15px rgba(0,0,0,0.15), 0 8px 40px rgba(0,0,0,0.12)',
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(139,115,85,0.3) 1px, transparent 1px),
                radial-gradient(circle at 60% 70%, rgba(139,115,85,0.2) 1px, transparent 1px),
                radial-gradient(circle at 80% 20%, rgba(139,115,85,0.25) 1px, transparent 1px),
                radial-gradient(circle at 40% 80%, rgba(139,115,85,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '6px 6px, 8px 8px, 5px 5px, 7px 7px',
            }}
          />

          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: '8px solid transparent',
              borderImage:
                'linear-gradient(135deg, #A0845C, #8B7040, #C4A060, #8B7040, #A0845C) 1',
              borderRadius: '16px',
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-[3px] border-[#A08050]/30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-2 items-start">
            <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 pt-4">
              <div className="relative">
                <Pushpin className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" color={pushpinColors.rose} size={22} />
                <ScrapbookPolaroid imageSrc={voyagePhoto} label="voyage ✈️" rotate={-3} delay={0.3} />
              </div>

              <div className="relative">
                <WashiTape color="#F0C8D8" rotate={-8} width={70} className="-top-2 left-4" />
                <PostIt text="Voyager, explorer, découvrir le monde..." color="#FFF9C4" rotate={4} delay={0.5} />
              </div>

              <div className="flex gap-3 items-center">
                <Sticker icon={Plane} color="#E8469E" bgColor="#FFF0F5" rotate={-10} delay={0.6} />
                <Sticker icon={Heart} color="#E8469E" bgColor="#FFF0F5" rotate={8} delay={0.7} />
              </div>

              <TornNote text="Mode & vintage shopping" rotate={2} delay={0.8} />
            </div>

            <div className="flex flex-col items-center gap-6 md:gap-8 md:pt-8">
              <div className="relative">
                <Pushpin
                  className="absolute -top-4 right-4 z-20"
                  color={pushpinColors.corail}
                  size={22}
                  style={{ transform: 'rotate(12deg)' }}
                />
                <InstagramMockup
                  imageSrc={cheersPhoto}
                  username="lily.dlc"
                  caption="prestation événementielle 🎀✨"
                  likes="312"
                  rotate={-2}
                  delay={0.4}
                />
              </div>

              <div className="relative">
                <WashiTape color="#C8E6C9" rotate={5} width={60} className="-top-2 right-2" />
                <PostIt
                  text="Créer des événements magiques & mémorables"
                  color="#E8F5E9"
                  rotate={5}
                  delay={0.6}
                />
              </div>

              <div className="flex gap-2">
                <Sticker icon={Sparkles} color="#D4A545" bgColor="#FFF8E1" rotate={-5} size={38} delay={0.7} />
                <Sticker icon={Palette} color="#7B61FF" bgColor="#F0EDFF" rotate={12} size={38} delay={0.75} />
                <Sticker icon={Camera} color="#E8469E" bgColor="#FFF0F5" rotate={-8} size={38} delay={0.8} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 md:gap-8 pt-2">
              <div className="relative">
                <Pushpin
                  className="absolute -top-4 left-6 z-20"
                  color={pushpinColors.jaune}
                  size={22}
                  style={{ transform: 'rotate(-8deg)' }}
                />
                <PlaylistWidget rotate={3} delay={0.3} />
              </div>

              <TornNote text="Écouter de la musique 🎧" rotate={-2} delay={0.5} />

              <div className="relative">
                <WashiTape color="#E1BEE7" rotate={6} width={65} className="-top-2 left-6" />
                <ScrapbookPolaroid imageSrc={concertPhoto} label="concert 🎶" rotate={-4} delay={0.7} />
              </div>

              <Sticker icon={Music} color="#7B61FF" bgColor="#F0EDFF" rotate={15} size={50} delay={0.9} />
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 md:gap-8 md:pt-6">
              <div className="relative">
                <WashiTape color="#BBDEFB" rotate={-4} width={75} className="-top-2 left-6" />
                <InstagramMockup
                  imageSrc={monIlePhoto}
                  username="lily.dlc"
                  caption="mon île 🌴🏝️ la Réunion, mon cœur"
                  likes="467"
                  rotate={4}
                  delay={0.5}
                />
              </div>

              <div className="relative">
                <Pushpin
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  color={pushpinColors.roseClaire}
                  size={22}
                />
                <PostIt
                  text="Mon île, ma Réunion, mon paradis 🌺"
                  color="#E1F5FE"
                  rotate={3}
                  delay={0.7}
                />
              </div>

              <div className="relative">
                <ScrapbookPolaroid imageSrc={iceCreamPhoto} label="ice cream lover" rotate={-5} delay={0.85} />
              </div>

              <div className="flex gap-3">
                <Sticker icon={Coffee} color="#8B7040" bgColor="#FFF3E0" rotate={-12} delay={0.9} />
                <Sticker icon={BookOpen} color="#4A8FD4" bgColor="#E8F4FD" rotate={8} delay={0.95} />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="absolute bottom-6 right-8 z-20 hidden md:block"
          >
            <p
              className="font-hand text-2xl text-white/60"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}
            >
              my happy place
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true }}
            className="absolute top-5 right-12 z-20 hidden md:block"
          >
            <p className="font-script text-sm text-white/40" style={{ transform: 'rotate(6deg)' }}>
              xoxo
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
