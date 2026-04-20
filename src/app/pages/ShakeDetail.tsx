import { motion } from "motion/react";
import { ArrowLeft, Calendar, Target, TrendingUp, Info } from "lucide-react";
import { Link, useParams } from "react-router";
import smartiesPartyShake from "figma:asset/af2a53f4c9ec4973d84b632706e8e3039110c793.png";
import xmasShake from "figma:asset/643aaf2aa99938d901a9fe3ecc1ac32c022631aa.png";
import monstershake from "figma:asset/c796ee46ec804d80ee7948633a8424d11fabf922.png";
import sneakyshake from "figma:asset/348c91942b2be16172948896810346a5383105c5.png";
import popshake from "figma:asset/8eadf7f65bbc75f457f74b480256df54b0f2dabb.png";
import dolceVitaShake from "figma:asset/16c2f4364cb7e4b0799d67d8c4b1cbaac312eaf6.png";

interface ShakeData {
  id: string;
  name: string;
  image?: string;
  date: string;
  duree: string;
  description: string;
  objectif: string;
  composition: string[];
  ventes: string;
  impact: string[];
}

const shakesData: Record<string, ShakeData> = {
  "smarties-party-shake": {
    id: "smarties-party-shake",
    name: "Smarties Party Shake",
    image: smartiesPartyShake,
    date: "Mars 2024",
    duree: "1 mois",
    description: "Un milkshake festif et coloré inspiré des célèbres bonbons Smarties, conçu pour apporter une touche de gaieté et de nostalgie gourmande. Ce shake ludique et Instagram-friendly cible particulièrement les familles et les enfants.",
    objectif: "Créer un produit viral sur les réseaux sociaux grâce à son aspect visuel coloré et attractif, tout en capitalisant sur la nostalgie des bonbons d'enfance pour toucher un public intergénérationnel.",
    composition: [
      "Base de glace vanille premium",
      "Lait entier onctueux",
      "Smarties écrasés mélangés dans le shake",
      "Chantilly généreuse",
      "Smarties entiers en topping",
      "Sauce chocolat en décoration"
    ],
    ventes: "850+ shakes vendus",
    impact: [
      "Forte viralité sur Instagram et TikTok",
      "Augmentation de 40% du trafic en boutique pendant le mois",
      "Engagement client élevé avec partages photos",
      "Demandes de retour du produit les mois suivants"
    ]
  },
  "dolce-vita-shake": {
    id: "dolce-vita-shake",
    name: "Dolce Vita Shake",
    image: dolceVitaShake,
    date: "Juin 2024",
    duree: "1 mois",
    description: "Un milkshake raffiné inspiré de l'élégance italienne, associant la douceur de la glace vanille à la richesse du café et des saveurs méditerranéennes. Une expérience premium pensée pour les adultes en quête de sophistication.",
    objectif: "Proposer une alternative haut de gamme ciblant une clientèle adulte et élargir le positionnement de LGM au-delà des produits uniquement destinés aux enfants.",
    composition: [
      "Glace vanille artisanale",
      "Espresso corsé",
      "Amaretti écrasés",
      "Chantilly mascarpone",
      "Copeaux de chocolat noir",
      "Poudre de cacao"
    ],
    ventes: "720+ shakes vendus",
    impact: [
      "Repositionnement réussi vers une clientèle adulte",
      "Panier moyen en hausse de 25%",
      "Excellents retours sur la qualité et le raffinement",
      "Création d'une image premium pour la marque"
    ]
  },
  "popshake": {
    id: "popshake",
    name: "Popshake",
    image: popshake,
    date: "Avril 2024",
    duree: "1 mois",
    description: "Un milkshake explosif inspiré des pop-corn caramélisés, alliant textures croquantes et saveurs sucrées-salées. Une expérience sensorielle originale qui surprend et ravit les papilles.",
    objectif: "Proposer une saveur audacieuse et différenciante pour créer la surprise et stimuler la curiosité des clients habitués aux parfums plus classiques.",
    composition: [
      "Glace caramel beurre salé",
      "Lait malté",
      "Pop-corn caramélisé mixé",
      "Chantilly vanille",
      "Pop-corn caramélisé entier en topping",
      "Filet de caramel"
    ],
    ventes: "680+ shakes vendus",
    impact: [
      "Concept original générant buzz et curiosité",
      "Forte attractivité auprès des 15-25 ans",
      "Contenus créatifs partagés sur les réseaux sociaux",
      "Différenciation réussie par rapport à la concurrence"
    ]
  },
  "monstershake": {
    id: "monstershake",
    name: "Monstershake",
    image: monstershake,
    date: "Octobre 2024",
    duree: "1 mois",
    description: "Un milkshake spectaculaire spécialement conçu pour Halloween, avec un visuel terrifiant et gourmand. Surmonté de décorations monstrueuses, ce shake géant est pensé pour l'effet « wow » et le partage sur les réseaux sociaux.",
    objectif: "Capitaliser sur l'événement Halloween pour créer un produit à forte valeur ajoutée, hautement instagrammable, et renforcer la présence de la marque pendant cette période festive.",
    composition: [
      "Glace chocolat noir intense",
      "Lait chocolaté",
      "Brownie écrasé",
      "Chantilly noire (colorant alimentaire)",
      "Décoration monstre en pâte à sucre",
      "Bonbons Halloween variés",
      "Sauce chocolat coulante"
    ],
    ventes: "950+ shakes vendus",
    impact: [
      "Record de ventes pour un shake signature",
      "Viralité exceptionnelle sur TikTok et Instagram",
      "Augmentation de 60% du trafic en boutique en octobre",
      "Demande client pour reproduire le concept à Noël"
    ]
  },
  "sneakyshake": {
    id: "sneakyshake",
    name: "Sneakyshake",
    image: sneakyshake,
    date: "Août 2024",
    duree: "1 mois",
    description: "Un milkshake mystérieux et ludique avec une saveur surprise révélée uniquement après achat. Cette approche marketing joue sur la curiosité et l'effet de surprise pour créer l'engagement.",
    objectif: "Créer un mécanisme d'engagement et de gamification autour du produit, en transformant l'achat en expérience interactive et surprenante.",
    composition: [
      "Saveur mystère variant chaque semaine",
      "Glace artisanale du parfum du jour",
      "Ingrédients secrets",
      "Chantilly colorée selon la saveur",
      "Toppings surprise",
      "Étiquette révélant la composition après achat"
    ],
    ventes: "790+ shakes vendus",
    impact: [
      "Fort engagement et retours clients pour deviner la saveur",
      "Création de suspense et d'attente sur les réseaux sociaux",
      "Clients réguliers revenant tester les nouvelles saveurs",
      "Concept innovant qui renforce l'image créative de LGM"
    ]
  },
  "xmas-shake": {
    id: "xmas-shake",
    name: "Xmas'shake",
    image: xmasShake,
    date: "Décembre 2024",
    duree: "1 mois",
    description: "Un milkshake féerique aux saveurs de Noël, combinant épices chaudes, pain d'épices et décoration festive. Ce shake incarne la magie des fêtes de fin d'année et crée une ambiance conviviale et chaleureuse.",
    objectif: "Capitaliser sur la période festive de Noël pour proposer un produit saisonnier premium qui célèbre les traditions et renforce le lien émotionnel avec les clients.",
    composition: [
      "Glace vanille aux épices de Noël",
      "Lait chaud parfumé cannelle",
      "Morceaux de pain d'épices",
      "Chantilly à la vanille bourbon",
      "Biscuits de Noël décorés",
      "Poudre de cannelle et étoiles en sucre"
    ],
    ventes: "1100+ shakes vendus",
    impact: [
      "Record absolu de ventes pour un shake signature",
      "Ambiance festive renforcée en boutique",
      "Clientèle fidèle revenue spécifiquement pour ce produit",
      "Excellent ambassadeur de la marque pendant les fêtes"
    ]
  }
};

export function ShakeDetail() {
  const { shakeId } = useParams<{ shakeId: string }>();
  const shake = shakeId ? shakesData[shakeId] : null;

  if (!shake) {
    return (
      <div className="min-h-screen bg-[#F5F1ED] flex items-center justify-center">
        <p className="text-[#7A6F5D]" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          Shake introuvable
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Header avec image de fond */}
      <div className="relative h-[500px] overflow-hidden">
        {shake.image && (
          <img
            src={shake.image}
            alt={shake.name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Contenu du header */}
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          {/* Bouton retour */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/shake-du-moment"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux shakes</span>
            </Link>
          </motion.div>

          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {shake.name}
            </h1>
            <p
              className="text-white/90 text-lg flex items-center gap-2"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              <Calendar className="w-5 h-5" />
              {shake.date} • {shake.duree}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-5xl mx-auto px-8 py-16 space-y-12">
        {/* Description */}
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
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
            >
              Description
            </h2>
          </div>
          <p
            className="text-lg text-[#2D2D2D] leading-relaxed"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            {shake.description}
          </p>
        </motion.div>

        {/* Objectif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#E8469E] rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
            >
              Objectif
            </h2>
          </div>
          <p
            className="text-lg text-[#2D2D2D] leading-relaxed"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            {shake.objectif}
          </p>
        </motion.div>

        {/* Composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
          >
            Composition
          </h2>
          <ul className="space-y-3">
            {shake.composition.map((ingredient, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-[#E8469E] rounded-full flex-shrink-0" />
                <span
                  className="text-lg text-[#2D2D2D]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {ingredient}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Ventes et Impact */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ventes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#E8469E] to-[#D4307E] rounded-3xl p-8 md:p-10 shadow-lg text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-10 h-10" />
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Ventes
              </h2>
            </div>
            <p
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {shake.ventes}
            </p>
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
            >
              Impact
            </h2>
            <ul className="space-y-3">
              {shake.impact.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-[#E8469E] rounded-full flex-shrink-0 mt-2" />
                  <span
                    className="text-base text-[#2D2D2D]"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
