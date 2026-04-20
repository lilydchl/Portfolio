import lgmLogo from "figma:asset/d166bc4f2e9fdeccc7d7dbe37f3844170aa9554f.png";
import yventlyLogo from "figma:asset/d9a08129f82af1836be7c2475968b39cb4b0fc34.png";
import ednLogo from "figma:asset/8c9e7e5498802e138264b8b6f34748dfcc40c273.png";
import ednReelImage from "figma:asset/e174974c4e7dbd0a17201a509c3b39c02c1f0a23.png";
import egcNewImage from "@/imports/IMG_2302-1.jpeg";
import nespressoLogo from "figma:asset/8c288ded686a661c8fd6f67553cfda258dedd865.png";
import interviewImage from "figma:asset/bd39b9700bd8f9db7e99b6b76c647211ce0aba17.png";
import mondeDeLaGlaceLogo from "figma:asset/3a6af8187620778f592ca4e4ba79318c84c608c4.png";
import iglooLogo from "figma:asset/e49787d2a3ddce1b14ee2402ae29e60b607ba7c9.png";
import pandasLogo from "figma:asset/e3e9288e5ce0fd577b188ae3201c78149ed6f13e.png";
import rafaelloLogo from "figma:asset/4d4c85083e1cb67ee26f193e903cae368290c170.png";
import pardonCover from "@/imports/IMG_7663.png";
import vaianaLegoAffiche from "figma:asset/17ecc61da37b11ef8e4c673b0b146f62c1e6f023.png";
import proxiteAffiche from "figma:asset/6afe75601959cf54f9449841ffc973291f5a5cda.png";
import billieEilishPizzaHut from "figma:asset/43cbe75e11ce01e5dda050dc7867440cd482b8bb.png";
import telemagPlusLogo from "figma:asset/09a670443481ee906e27fe0708be80f0029bf599.png";
import telemagLogo1 from "@/imports/IMG_7664-1.png";
import aprilLogo from "@/imports/IMG_7665.jpeg";
import fairePartMariageImage from "figma:asset/385c25ca7194305eb532f4392d25e4f79875c971.png";
import animalShowImage from "figma:asset/a4abc1bfa91e70368a34e186ef25afe703d07393.png";
import animalShowNewImage from "@/imports/496E35D2-EFA2-4E74-B5AD-6CC464397C04.png";
import porscheSoireeImage from "figma:asset/bf288ec4a759a228c97a30807cb71ce162dbc8de.png";
import porscheSoireeNewImage from "@/imports/IMG_7669.jpeg";
import yventlyCorporateImage from "@/imports/56525453-CD33-4EBC-97C6-946753558121.jpeg";
import videDressingAffiche from "figma:asset/4ba7af402dacafac27dba955d80e207952c9be5a.png";
import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Target } from "lucide-react";
import { Link } from "react-router";
import "./Projects.css";
import { Pushpin, pushpinColors } from "@/app/components/Pushpin";

// Couleurs de washi tape
const washiTapeColors = [
  { bg: 'rgba(255, 192, 217, 0.6)', border: 'rgba(255, 170, 200, 0.4)' },  // rose
  { bg: 'rgba(255, 228, 196, 0.6)', border: 'rgba(240, 200, 160, 0.4)' },  // pêche
  { bg: 'rgba(220, 235, 255, 0.5)', border: 'rgba(190, 210, 240, 0.4)' },  // bleu clair
  { bg: 'rgba(255, 255, 200, 0.5)', border: 'rgba(240, 240, 170, 0.4)' },  // jaune pâle
  { bg: 'rgba(215, 240, 215, 0.5)', border: 'rgba(185, 220, 185, 0.4)' },  // vert menthe
  { bg: 'rgba(235, 215, 255, 0.5)', border: 'rgba(210, 185, 240, 0.4)' },  // lavande
];

// Patterns pour washi tape
const washiPatterns = ['dots', 'stripes', 'plain', 'zigzag'] as const;

function getWashiTape(index: number) {
  const color = washiTapeColors[index % washiTapeColors.length];
  const pattern = washiPatterns[index % washiPatterns.length];
  const rotation = (index * 7 + 3) % 15 - 7; // entre -7 et 7 degrés
  const offsetX = (index * 13) % 30 - 15; // décalage horizontal
  
  let patternSvg = '';
  if (pattern === 'dots') {
    patternSvg = `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='1' fill='rgba(255,255,255,0.4)'/%3E%3C/svg%3E")`;
  } else if (pattern === 'stripes') {
    patternSvg = `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='6' y2='6' stroke='rgba(255,255,255,0.3)' stroke-width='1'/%3E%3C/svg%3E")`;
  } else if (pattern === 'zigzag') {
    patternSvg = `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3 L2.5 1 L5 3 L7.5 1 L10 3' stroke='rgba(255,255,255,0.35)' fill='none' stroke-width='0.8'/%3E%3C/svg%3E")`;
  }
  
  return { color, patternSvg, rotation, offsetX };
}


interface Project {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  image?: string; // Pour les logos personnalisés
}

const projects: Project[] = [
  // Le Monde de la Glace
  { 
    id: "lgm", 
    name: "Lgm", 
    category: "monde-glace",
    categoryLabel: "Le Monde de la Glace",
    image: lgmLogo
  },
  { 
    id: "rafaello", 
    name: "Rafaello", 
    category: "monde-glace",
    categoryLabel: "Le Monde de la Glace",
    image: rafaelloLogo
  },
  { 
    id: "igloo", 
    name: "L'igloo", 
    category: "monde-glace",
    categoryLabel: "Le Monde de la Glace",
    image: iglooLogo
  },
  { 
    id: "pandas", 
    name: "Pandas", 
    category: "monde-glace",
    categoryLabel: "Le Monde de la Glace",
    image: pandasLogo
  },
  
  // École du Numérique
  { 
    id: "collab-improbable", 
    name: "Collab improbable – Billie Eilish x Pizza Hut", 
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: billieEilishPizzaHut
  },
  { 
    id: "reel-edn", 
    name: "Reel edn", 
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: ednReelImage
  },
  { 
    id: "proxite", 
    name: "Proxité", 
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: proxiteAffiche
  },
  {
    id: "pardon",
    name: "Pardon! – Lava Flow",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: pardonCover
  },
  { 
    id: "pantoufle-pepere", 
    name: "La pantoufle à pépère", 
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
  },
  { 
    id: "affiche-film-fictive", 
    name: "Affiche de film fictive", 
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: vaianaLegoAffiche
  },
  { 
    id: "remise-diplomes-egc", 
    name: "Soirée remise des diplômes egc", 
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: animalShowNewImage
  },
  { 
    id: "newsletter-nespresso", 
    name: "Newsletter nespresso", 
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: nespressoLogo
  },
  
  // Yvently
  { 
    id: "soiree-corporate", 
    name: "Organisation soirée corporate pour un client", 
    category: "yvently",
    categoryLabel: "Yvently",
    image: yventlyCorporateImage
  },
  { 
    id: "faire-part-mariage", 
    name: "Faire part de mariage digital sur mesure", 
    category: "yvently",
    categoryLabel: "Yvently",
    image: fairePartMariageImage
  },
  { 
    id: "soiree-april", 
    name: "Organisation de la soirée de fin d'année – April", 
    category: "yvently",
    categoryLabel: "Yvently",
    image: telemagLogo1
  },
  
  // Télémag Plus
  { 
    id: "realisation-interview", 
    name: "Réalisation d'interview", 
    category: "telemag-plus",
    categoryLabel: "Télémag Plus",
    image: aprilLogo
  },

  { 
    id: "soiree-caritative-porsche", 
    name: "Soirée caritative Porsche", 
    category: "telemag-plus",
    categoryLabel: "Télémag Plus",
    image: porscheSoireeNewImage,
  },
  
  // Divers
  { 
    id: "animal-show", 
    name: "Animal show", 
    category: "divers",
    categoryLabel: "Divers",
    image: egcNewImage
  },
  { 
    id: "vide-dressing", 
    name: "Vide dressing", 
    category: "divers",
    categoryLabel: "Divers",
    image: videDressingAffiche,
  },
  // removed vaiana-lego-affiche duplicate
];

interface Category {
  id: string;
  label: string;
  description: string;
  points: string[];
  cibles: string[];
  logo: string;
}

const categories: Category[] = [
  {
    id: "monde-glace",
    label: "Le Monde de la Glace",
    description: "Le Monde de la Glace est une entreprise réunionnaise spécialisée dans la fabrication artisanale de glaces et de sorbets, créée en 2002 et basée au Port. Elle développe et fournit une large gamme de produits glacés, notamment des crèmes glacées et des sorbets tropicaux sous sa propre marque et la marque Panda's, distribués en dizaine de points de vente répartis sur plusieurs enseignes à La Réunion. L'entreprise fournit également une multitude de revendeurs locaux, ce qui en fait un acteur majeur de l'univers des desserts glacés sur l'île.\n\nL.G.M. – Le Glacier Moderne est une franchise de glaciers artisanaux implantée à La Réunion depuis plusieurs décennies, avec plusieurs points de vente proposant des glaces et sorbets artisanaux aux parfums variés, disponibles sur place ou à emporter.\n\nL'Igloo est un glacier historique de Saint‑Denis, ouvert depuis 1988, réputé pour ses glaces artisanales, ses vacherins et autres desserts glacés. L'établissement dispose de plusieurs salles et d'un espace snack, ce qui en fait un lieu de pause rafraîchissante incontournable au cœur du centre‑ville.",
    points: [
      "7 points de vente LGM",
      "L'enseigne emblématique IGLOO",
      "RAFFAELLO et PANDA'S"
    ],
    cibles: [
      "Familles et enfants",
      "Jeunes adultes (18-35 ans)",
      "Touristes à La Réunion",
      "Amateurs de glaces artisanales"
    ],
    logo: mondeDeLaGlaceLogo,
  },
  {
    id: "ecole-numerique",
    label: "École du Numérique",
    description: "L'École du Numérique (974) forme aux métiers du digital et propose des parcours en alternance pour développer des compétences en développement, marketing digital et cybersécurité. L'école met l'accent sur l'immersion professionnelle et les projets concrets, afin de préparer des talents opérationnels pour le marché réunionnais.",
    points: [
      "Formation en communication digitale",
      "Projets créatifs et innovants",
      "Préparation aux métiers du digital"
    ],
    cibles: [
      "Futurs étudiants (post-bac)",
      "Étudiants en reconversion",
      "Parents d'élèves",
      "Entreprises partenaires"
    ],
    logo: ednLogo,
  },
  {
    id: "yvently",
    label: "Yvently",
    description: "Yvently est une entreprise qui propose à la fois des services de communication et des prestations événementielles. Elle accompagne les entreprises dans leur communication à travers la création de contenus et de supports visuels, et propose également des services événementiels pour les particuliers et les professionnels. Cela inclut la location de mobilier, la mise en place de décorations, ainsi que l'organisation et la coordination d'évnements avec la gestion des différents prestataires.",
    points: [
      "Services de communication et création de contenus",
      "Organisation et coordination d'événements",
      "Location de mobilier et décoration",
      "Gestion de prestataires"
    ],
    cibles: [
      "Entreprises",
      "Particuliers",
      "Professionnels",
      "Organisateurs d'événements"
    ],
    logo: yventlyLogo,
  },
  {
    id: "telemag-plus",
    label: "Télémag Plus",
    description: "Télémag Plus est un magazine réunionnais qui propose un guide des programmes TV mais aussi des articles variés sur l'actualité locale. Il met en avant des initiatives réunionnaises, des talents, des projets, ainsi que des sujets de société, culture et divertissement. Son objectif est d'informer et de valoriser les acteurs et dynamiques de l'île auprès d'un large public.",
    points: [
      "Guide des programmes TV",
      "Articles sur l'actualité locale",
      "Mise en avant des talents réunionnais",
      "Sujets société, culture et divertissement"
    ],
    cibles: [
      "Grand public réunionnais",
      "Talents et acteurs locaux",
      "Passionnés de culture locale",
      "Téléspectateurs"
    ],
    logo: telemagPlusLogo,
  },
];

export function Projects() {
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleLike = (projectId: string) => {
    const newLiked = new Set(likedProjects);
    if (newLiked.has(projectId)) {
      newLiked.delete(projectId);
    } else {
      newLiked.add(projectId);
    }
    setLikedProjects(newLiked);
  };

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
      <div className="min-h-screen bg-[#F5F1ED]">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <h1
              className="text-3xl md:text-5xl font-bold"
              style={{ 
                fontFamily: "'Work Sans', sans-serif",
                color: "#D4A5A5",
              }}
            >
              MES RÉALISATIONS
            </h1>
            <p
              className="text-xs md:text-sm tracking-widest text-[#9B8B7E] font-medium px-2"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              DÉCOUVREZ MES PROJETS
            </p>
          </motion.div>

          {/* Filtres de catégories - style Pinterest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-4 mt-8 md:mt-12"
          >
            {/* Tous */}
            <motion.button
              onClick={() => setSelectedCategory("all")}
              className="flex flex-col items-center group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`relative transition-all ${selectedCategory === "all" ? "scale-110" : ""}`}
                animate={selectedCategory === "all" ? { rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-12 md:w-[100px] md:h-[75px]" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Ombre du dossier */}
                  <ellipse cx="50" cy="68" rx="35" ry="5" fill="black" opacity="0.1" />
                  
                  {/* Corps du dossier */}
                  <rect x="8" y="22" width="84" height="45" rx="6" fill={selectedCategory === "all" ? "#E8469E" : "#F5D7E8"} />
                  
                  {/* Onglet du dossier */}
                  <path d="M8 22 C8 19 10 17 13 17 L35 17 L42 22 L92 22 L92 28 L8 28 Z" fill={selectedCategory === "all" ? "#D4307E" : "#E8B5D4"} />
                </svg>
              </motion.div>
              <span 
                className={`mt-1 text-xs font-semibold transition-colors ${
                  selectedCategory === "all" ? "text-[#E8469E]" : "text-[#2D2D2D]"
                }`}
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Tous
              </span>
            </motion.button>

            {/* Le Monde de la Glace */}
            <motion.button
              onClick={() => setSelectedCategory("monde-glace")}
              className="flex flex-col items-center group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`relative transition-all ${selectedCategory === "monde-glace" ? "scale-110" : ""}`}
                animate={selectedCategory === "monde-glace" ? { rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-12 md:w-[100px] md:h-[75px]" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="68" rx="35" ry="5" fill="black" opacity="0.1" />
                  <rect x="8" y="22" width="84" height="45" rx="6" fill={selectedCategory === "monde-glace" ? "#E8469E" : "#E8B5D4"} />
                  <path d="M8 22 C8 19 10 17 13 17 L35 17 L42 22 L92 22 L92 28 L8 28 Z" fill={selectedCategory === "monde-glace" ? "#D4307E" : "#E8469E"} />
                </svg>
              </motion.div>
              <span 
                className={`mt-1 text-xs font-semibold transition-colors text-center ${
                  selectedCategory === "monde-glace" ? "text-[#E8469E]" : "text-[#2D2D2D]"
                }`}
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Le Monde de la Glace
              </span>
            </motion.button>

            {/* École du Numérique */}
            <motion.button
              onClick={() => setSelectedCategory("ecole-numerique")}
              className="flex flex-col items-center group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`relative transition-all ${selectedCategory === "ecole-numerique" ? "scale-110" : ""}`}
                animate={selectedCategory === "ecole-numerique" ? { rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-12 md:w-[100px] md:h-[75px]" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="68" rx="35" ry="5" fill="black" opacity="0.1" />
                  <rect x="8" y="22" width="84" height="45" rx="6" fill={selectedCategory === "ecole-numerique" ? "#E8469E" : "#E8B5D4"} />
                  <path d="M8 22 C8 19 10 17 13 17 L35 17 L42 22 L92 22 L92 28 L8 28 Z" fill={selectedCategory === "ecole-numerique" ? "#D4307E" : "#E8469E"} />
                </svg>
              </motion.div>
              <span 
                className={`mt-1 text-xs font-semibold transition-colors text-center ${
                  selectedCategory === "ecole-numerique" ? "text-[#E8469E]" : "text-[#2D2D2D]"
                }`}
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                École du Numérique
              </span>
            </motion.button>

            {/* Yvently */}
            <motion.button
              onClick={() => setSelectedCategory("yvently")}
              className="flex flex-col items-center group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`relative transition-all ${selectedCategory === "yvently" ? "scale-110" : ""}`}
                animate={selectedCategory === "yvently" ? { rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-12 md:w-[100px] md:h-[75px]" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="68" rx="35" ry="5" fill="black" opacity="0.1" />
                  <rect x="8" y="22" width="84" height="45" rx="6" fill={selectedCategory === "yvently" ? "#E8469E" : "#E8B5D4"} />
                  <path d="M8 22 C8 19 10 17 13 17 L35 17 L42 22 L92 22 L92 28 L8 28 Z" fill={selectedCategory === "yvently" ? "#D4307E" : "#E8469E"} />
                </svg>
              </motion.div>
              <span 
                className={`mt-1 text-xs font-semibold transition-colors ${
                  selectedCategory === "yvently" ? "text-[#E8469E]" : "text-[#2D2D2D]"
                }`}
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Yvently
              </span>
            </motion.button>

            {/* Télémag Plus */}
            <motion.button
              onClick={() => setSelectedCategory("telemag-plus")}
              className="flex flex-col items-center group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`relative transition-all ${selectedCategory === "telemag-plus" ? "scale-110" : ""}`}
                animate={selectedCategory === "telemag-plus" ? { rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-12 md:w-[100px] md:h-[75px]" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="68" rx="35" ry="5" fill="black" opacity="0.1" />
                  <rect x="8" y="22" width="84" height="45" rx="6" fill={selectedCategory === "telemag-plus" ? "#E8469E" : "#E8B5D4"} />
                  <path d="M8 22 C8 19 10 17 13 17 L35 17 L42 22 L92 22 L92 28 L8 28 Z" fill={selectedCategory === "telemag-plus" ? "#D4307E" : "#E8469E"} />
                </svg>
              </motion.div>
              <span 
                className={`mt-1 text-xs font-semibold transition-colors text-center ${
                  selectedCategory === "telemag-plus" ? "text-[#E8469E]" : "text-[#2D2D2D]"
                }`}
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Télémag Plus
              </span>
            </motion.button>

            {/* Divers */}
            <motion.button
              onClick={() => setSelectedCategory("divers")}
              className="flex flex-col items-center group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`relative transition-all ${selectedCategory === "divers" ? "scale-110" : ""}`}
                animate={selectedCategory === "divers" ? { rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-12 md:w-[100px] md:h-[75px]" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="68" rx="35" ry="5" fill="black" opacity="0.1" />
                  <rect x="8" y="22" width="84" height="45" rx="6" fill={selectedCategory === "divers" ? "#E8469E" : "#E8B5D4"} />
                  <path d="M8 22 C8 19 10 17 13 17 L35 17 L42 22 L92 22 L92 28 L8 28 Z" fill={selectedCategory === "divers" ? "#D4307E" : "#E8469E"} />
                </svg>
              </motion.div>
              <span 
                className={`mt-1 text-xs font-semibold transition-colors ${
                  selectedCategory === "divers" ? "text-[#E8469E]" : "text-[#2D2D2D]"
                }`}
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                Divers
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Description de la catégorie sélectionnée */}
        {selectedCategory !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-4 md:px-8 mb-16"
          >
            {/* Carton style container */}
            <div 
              className="relative"
              style={{
                transform: 'rotate(-0.5deg)',
              }}
            >
              {/* Carte principale */}
              <div 
                className="relative bg-[#FFFBF5] shadow-2xl overflow-hidden"
                style={{
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                }}
              >
                {/* Punaise en haut à droite */}
                <Pushpin
                  className="absolute -top-2 right-8 z-30"
                  color={pushpinColors.rose}
                  size={24}
                  style={{ transform: 'rotate(8deg)' }}
                />

                {/* Grille rose quadrillée en haut */}
                <div 
                  className="h-24 relative"
                  style={{
                    backgroundColor: '#FFD6E8',
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(232, 70, 158, 0.15) 19px, rgba(232, 70, 158, 0.15) 20px),
                      repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(232, 70, 158, 0.15) 19px, rgba(232, 70, 158, 0.15) 20px)
                    `,
                  }}
                >
                  {/* Bulle "En savoir plus" supprimée */}
                </div>

                {/* Trombone décoratif */}
                <div 
                  className="absolute top-8 -left-4 z-20"
                  style={{ transform: 'rotate(-15deg)' }}
                >
                  <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                {/* Contenu */}
                <div className="px-4 md:px-12 pt-6 md:pt-8 pb-6 md:pb-8">
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                    {/* Logo à gauche */}
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <div className="w-24 h-24 md:w-40 md:h-40 bg-white rounded-2xl overflow-hidden shadow-md flex items-center justify-center p-3 md:p-4">
                        <img
                          src={categories.find(c => c.id === selectedCategory)?.logo}
                          alt={categories.find(c => c.id === selectedCategory)?.label}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Texte à droite */}
                    <div className="flex-1 space-y-4">
                      {/* Titre */}
                      <h3
                        className="text-xl md:text-3xl font-bold text-center md:text-left"
                        style={{ 
                          fontFamily: "'Playfair Display', serif",
                          color: '#1A1A1A',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {categories.find(c => c.id === selectedCategory)?.label}
                      </h3>

                      {/* Texte descriptif */}
                      <p
                        className="text-[#1A1A1A] text-sm leading-relaxed whitespace-pre-line"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {categories.find(c => c.id === selectedCategory)?.description}
                      </p>

                      {/* Points clés */}
                      <ul className="space-y-2">
                        {categories.find(c => c.id === selectedCategory)?.points.map((point, index) => (
                          <li
                            key={index}
                            className="text-[#1A1A1A] text-sm flex items-start"
                            style={{ fontFamily: "'Work Sans', sans-serif" }}
                          >
                            <span className="text-[#E8469E] mr-3 font-bold">●</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Cibles */}
                      <div className="pt-2">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="w-4 h-4 text-[#E8469E]" />
                          <h4
                            className="text-sm tracking-widest font-semibold"
                            style={{
                              fontFamily: "'Work Sans', sans-serif",
                              color: '#1A1A1A',
                            }}
                          >
                            CIBLES
                          </h4>
                          <div className="flex-1 h-px bg-[#E8B5D4]/40" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {categories.find(c => c.id === selectedCategory)?.cibles.map((cible, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1.5 text-xs rounded-full border"
                              style={{
                                fontFamily: "'Work Sans', sans-serif",
                                background: 'rgba(255, 214, 232, 0.3)',
                                borderColor: 'rgba(232, 70, 158, 0.2)',
                                color: '#2D2D2D',
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

                {/* Bande rose en bas */}
                <div 
                  className="h-20 flex items-center justify-center"
                  style={{
                    background: '#FFD6E8',
                  }}
                >
                  <h3
                    className="text-2xl font-bold italic"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: '#1A1A1A',
                    }}
                  >
                    Mes Réalisations
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grille Polaroid */}
        <div 
          className="max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-32 relative"
        >
          {/* Fond texturé papier ancien */}
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
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")
              `,
              opacity: 0.5,
            }}
          />
          {/* Taches subtiles de vieillissement */}
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
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/project/${project.category}/${project.id}`} className="block group">
                  {/* Cadre Polaroid */}
                  <motion.div 
                    className="bg-white p-2 md:p-4 pb-10 md:pb-16 shadow-xl hover:shadow-2xl transition-all cursor-pointer relative"
                    style={{
                      transform: `rotate(${Math.random() * 6 - 3}deg)`,
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.05,
                      rotate: 0,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Washi tape en haut du Polaroid */}
                    {(() => {
                      const washi = getWashiTape(index);
                      // Punaise à la place du washi tape tous les 4 Polaroïds
                      const usePushpin = index % 4 === 2;
                      
                      if (usePushpin) {
                        const pinColors = [pushpinColors.rose, pushpinColors.corail, pushpinColors.roseClaire, pushpinColors.or, pushpinColors.rouge];
                        const pinColor = pinColors[index % pinColors.length];
                        return (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                            <Pushpin
                              color={pinColor}
                              size={22}
                              style={{ transform: `rotate(${(index * 11) % 20 - 10}deg)` }}
                            />
                          </div>
                        );
                      }
                      
                      return (
                        <div
                          className="absolute -top-3 left-1/2 z-20 pointer-events-none"
                          style={{
                            transform: `translateX(-50%) rotate(${washi.rotation}deg)`,
                            width: '60px',
                            height: '18px',
                            backgroundColor: washi.color.bg,
                            backgroundImage: washi.patternSvg || undefined,
                            borderLeft: `1px solid ${washi.color.border}`,
                            borderRight: `1px solid ${washi.color.border}`,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                          }}
                        />
                      );
                    })()}

                    {/* Image zone - ratio Polaroid */}
                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {/* Overlay rose au hover */}
                      <div className="absolute inset-0 bg-[#E8469E] opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center p-4 pointer-events-none">
                        <p
                          className="text-white text-center text-sm"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {project.categoryLabel}
                        </p>
                      </div>

                      {/* Bouton cœur */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleLike(project.id);
                        }}
                        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-md hover:scale-110 z-30"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-all ${
                            likedProjects.has(project.id)
                              ? "fill-[#E8469E] text-[#E8469E]"
                              : "text-[#7A6F5D]"
                          }`}
                        />
                      </button>
                    </div>
                    
                    {/* Zone blanche en bas du Polaroid avec texte manuscrit */}
                    <div className="pt-5 text-center">
                      <p className="polaroid-handwriting">
                        {project.name}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA — Notification Alert Style */}
        <div className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F5] to-[#F9F0EC]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-md mx-auto px-6 relative"
          >
            {/* Decorative sparkles */}
            <span className="absolute -top-5 -left-3 text-yellow-400 text-2xl animate-pulse pointer-events-none select-none">✦</span>
            <span className="absolute -bottom-5 -right-3 text-yellow-400 text-xl animate-pulse pointer-events-none select-none">✦</span>

            {/* Outer pink shell */}
            <div className="rounded-2xl bg-gradient-to-b from-[#F4A0C0] to-[#E8469E] p-[6px] shadow-[0_8px_30px_rgba(232,70,158,0.3)]">
              {/* Inner white alert box */}
              <div className="bg-white rounded-xl border-[2.5px] border-[#3D3027] overflow-hidden">
                {/* Title bar */}
                <div className="bg-gradient-to-r from-[#F8D7E8] to-[#FBEAF2] border-b-[2.5px] border-[#3D3027] px-5 py-3 flex items-center justify-between">
                  <span
                    className="text-[#3D3027] tracking-wider text-xs"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 700, letterSpacing: '0.15em' }}
                  >
                    UN PROJET EN TÊTE ?
                  </span>
                  <span className="text-[#3D3027] text-xs border border-[#3D3027] w-5 h-5 flex items-center justify-center">
                    ✕
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 py-8 text-center">
                  <h2
                    className="text-2xl md:text-3xl text-[#3D3027] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    ✨ Un projet similaire en tête ? ✨
                  </h2>
                  <p
                    className="text-[#9B8B7E] text-sm md:text-base"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Discutons ensemble de la façon dont<br />
                    je peux vous aider à atteindre vos objectifs !
                  </p>
                </div>

                {/* Buttons row */}
                <div className="flex border-t-[2.5px] border-[#3D3027]">
                  <Link
                    to="/contact"
                    className="flex-1 py-4 text-center text-[#E8469E] text-sm tracking-wider hover:bg-[#FDF2F7] transition-colors"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600, letterSpacing: '0.1em' }}
                  >
                    Me contacter 💌
                  </Link>
                  <div className="w-[2.5px] bg-[#3D3027]" />
                  <Link
                    to="/projects"
                    className="flex-1 py-4 text-center text-[#9B8B7E] text-sm tracking-wider hover:bg-[#F5F1ED] transition-colors"
                    style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600, letterSpacing: '0.1em' }}
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