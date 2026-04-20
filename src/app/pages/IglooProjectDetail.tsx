import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import patisserieHalloween from "figma:asset/37817afc7460ce96b40c5830981396f6bb2e5b85.png";
import patisserieStValentin from "figma:asset/756ef591b3bf3385504c8008f2f53a17c10415fd.png";
import tagliattellesCrepes from "figma:asset/ac9019658f28be3c9b85319e001a240c3d770948.png";
import buchesNoel from "figma:asset/5c3d282d4dd2604b837895906998827d508ced4e.png";

interface IglooProjectInfo {
  id: string;
  name: string;
  image?: string;
  date: string;
  client: string;
  objectif: string;
  contexte: string;
  solution: string;
  resultats: string[];
}

const iglooProjectsData: Record<string, IglooProjectInfo> = {
  "buches-de-noel": {
    id: "buches-de-noel",
    name: "Bûches de Noël",
    image: buchesNoel,
    date: "Décembre 2024",
    client: "L'Igloo - Le Monde de la Glace",
    objectif: "Créer une communication visuelle attractive pour promouvoir les bûches glacées de Noël et stimuler les ventes durant la période des fêtes.",
    contexte: "Les fêtes de fin d'année représentent une période stratégique pour L'Igloo. Les bûches glacées sont des produits phares qui nécessitent une communication premium pour se démarquer dans un marché concurrentiel.",
    solution: "Conception d'un visuel gourmand mettant en avant la Bûche Caramel Peanuts avec photo professionnelle, mise en valeur des ingrédients premium (meringues, cacahuètes caramélisées, coulis), création d'une mise en scène appétissante avec le logo Glacier Artisan, diffusion sur les réseaux sociaux et en point de vente.",
    resultats: [
      "Visuels attractifs et appétissants",
      "Mise en valeur du savoir-faire artisanal",
      "Augmentation des commandes de bûches",
      "Renforcement de l'image premium de L'Igloo",
      "Engagement élevé sur les réseaux sociaux"
    ]
  },
  "patisserie-halloween": {
    id: "patisserie-halloween",
    name: "Pâtisserie d'Halloween",
    image: patisserieHalloween,
    date: "Octobre 2024",
    client: "L'Igloo - Le Monde de la Glace",
    objectif: "Créer un dessert glacé spectaculaire et effrayant pour Halloween, accompagné d'une communication visuelle impactante pour attirer une clientèle jeune et créer le buzz.",
    contexte: "Halloween est devenu un événement commercial majeur à La Réunion. L'Igloo souhaitait se démarquer avec une création originale et mémorable qui génère du bouche-à-oreille et de l'engagement sur les réseaux sociaux.",
    solution: "Création du 'Cerveau Givré', un dessert glacé trompe-l'œil en forme de cerveau avec coulis rouge sang, développement d'un packaging noir premium avec main squelettique, conception de visuels chocs pour les réseaux sociaux, création du logo 'CERVEAU GIVRÉ - TROMPE L'OEIL', campagne digitale complète avec teasers et révélation.",
    resultats: [
      "Création virale sur les réseaux sociaux",
      "Rupture de stock du produit",
      "Couverture médiatique locale",
      "Renforcement de l'image innovante de L'Igloo",
      "Acquisition de nouveaux clients jeunes",
      "Plus de 500 partages sur Instagram"
    ]
  },
  "tagliatelle-crepes": {
    id: "tagliatelle-crepes",
    name: "Tagliatelle de crêpes",
    image: tagliattellesCrepes,
    date: "2024",
    client: "L'Igloo - Le Monde de la Glace",
    objectif: "Promouvoir une création pâtissière originale qui marie tradition (crêpes) et innovation (présentation en tagliatelles) pour attirer une clientèle gourmande à la recherche de nouveauté.",
    contexte: "Dans un marché saturé de desserts classiques, L'Igloo cherchait à se différencier avec des créations innovantes qui surprennent et séduisent. Les Tagliatelles Gourmandes représentent cette approche créative de la pâtisserie glacée.",
    solution: "Photo professionnelle mettant en valeur la présentation unique en tagliatelles de crêpes, mise en scène avec boule de glace vanille, fraises fraîches et billes d'Oréo, création d'un visuel appétissant avec prix attractif (8,90€), intégration du logo Glacier Artisan pour renforcer l'identité de marque, diffusion sur Instagram, Facebook et en point de vente.",
    resultats: [
      "Visuel très engageant sur les réseaux sociaux",
      "Produit signature de L'Igloo",
      "Excellentes ventes du produit",
      "Demandes de clients pour des variantes",
      "Renforcement de l'image créative et innovante",
      "Partages organiques par les clients"
    ]
  },
  "patisserie-st-valentin": {
    id: "patisserie-st-valentin",
    name: "Pâtisserie St Valentin",
    image: patisserieStValentin,
    date: "Février 2024",
    client: "L'Igloo - Le Monde de la Glace",
    objectif: "Créer une gamme de desserts glacés romantiques pour la Saint-Valentin et développer une communication visuelle qui capture l'essence de cette fête de l'amour.",
    contexte: "La Saint-Valentin est une opportunité commerciale majeure pour les glaciers artisanaux. L'Igloo devait proposer des créations à la fois esthétiques et gourmandes qui séduisent les couples et génèrent des ventes.",
    solution: "Création des 'Magnums St Valentin' en forme de cœur rouge pailleté avec cœur blanc vanille au centre, développement d'un packaging élégant avec bâtonnets en bois, conception de visuels romantiques mettant en avant le caractère artisanal, campagne sur les réseaux sociaux avec hashtags #StValentin #AmourGlacé, proposition de packs cadeaux pour couples.",
    resultats: [
      "Succès commercial majeur pour la Saint-Valentin",
      "Visuels très partagés sur Instagram",
      "Commandes anticipées record",
      "Création d'un produit récurrent chaque année",
      "Renforcement du positionnement premium",
      "Fidélisation de la clientèle couple"
    ]
  },
  "crepe-epinard": {
    id: "crepe-epinard",
    name: "Crêpe épinard",
    date: "2024",
    client: "L'Igloo - Le Monde de la Glace",
    objectif: "Développer une offre salée innovante pour diversifier le menu de L'Igloo et attirer une clientèle à la recherche d'options déjeuner saines et originales.",
    contexte: "L'Igloo, traditionnellement connu pour ses desserts glacés, souhaitait élargir son offre avec des créations salées qui permettent d'attirer des clients tout au long de la journée, pas seulement pour le dessert.",
    solution: "Création d'une crêpe salée à l'épinard avec garniture gourmande, développement de visuels appétissants pour la communication digitale, mise en avant du caractère frais et sain du produit, intégration dans le menu avec un positionnement 'pause déjeuner', campagne de lancement sur les réseaux sociaux.",
    resultats: [
      "Diversification réussie de l'offre",
      "Nouvelles occasions de consommation",
      "Acquisition de nouveaux segments de clientèle",
      "Augmentation du panier moyen",
      "Image de marque plus complète"
    ]
  },
  "trend": {
    id: "trend",
    name: "Trend",
    date: "2024",
    client: "L'Igloo - Le Monde de la Glace",
    objectif: "Créer des contenus courts et viraux inspirés des dernières tendances des réseaux sociaux pour augmenter la visibilité de L'Igloo auprès d'une audience jeune et connectée.",
    contexte: "Les réseaux sociaux évoluent constamment avec de nouvelles tendances virales (Reels, TikTok, challenges). L'Igloo devait s'adapter à ces formats pour rester pertinent et toucher les millennials et la Génération Z.",
    solution: "Veille active des tendances sur Instagram, TikTok et Facebook, adaptation des formats populaires (transitions, ASMR, behind-the-scenes) au contexte de L'Igloo, création de Reels courts et percutants montrant la préparation des desserts, participation à des challenges viraux, utilisation de musiques trending, collaboration avec des micro-influenceurs locaux.",
    resultats: [
      "Croissance significative de l'audience jeune",
      "Augmentation de 300% des vues sur les Reels",
      "Plusieurs contenus viraux avec +10k vues",
      "Renforcement de la présence digitale",
      "Modernisation de l'image de marque",
      "Acquisition de nouveaux clients via les réseaux sociaux"
    ]
  }
};

export function IglooProjectDetail() {
  const { projectId } = useParams();
  const project = projectId ? iglooProjectsData[projectId] : null;

  if (!project) {
    return (
        <div className="min-h-screen bg-[#F5F1ED] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#D4A5A5] mb-4" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Projet non trouvé
            </h1>
            <Link to="/igloo-projects" className="text-[#E8469E] hover:underline" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Retour aux projets L'Igloo
            </Link>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-[#F5F1ED]">
        {/* Header avec image */}
        <div className="relative bg-gradient-to-br from-[#E8E5E0] to-[#F5F3F0] pb-20">
          <div className="max-w-7xl mx-auto px-8 pt-12">
            {/* Bouton retour */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/igloo-projects"
                className="inline-flex items-center gap-2 text-[#7A6F5D] hover:text-[#E8469E] transition-colors mb-8"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour aux projets L'Igloo</span>
              </Link>
            </motion.div>

            {/* Titre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center space-y-6 mb-12"
            >
              <h1
                className="text-6xl font-bold"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "#D4A5A5",
                }}
              >
                {project.name}
              </h1>
              <p
                className="text-sm tracking-widest text-[#9B8B7E] font-medium"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                L'IGLOO • LE MONDE DE LA GLACE
              </p>
            </motion.div>

            {/* Image principale */}
            {project.image && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-5xl mx-auto"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Informations du projet */}
        <div className="max-w-5xl mx-auto px-8 py-20">
          {/* Infos clés */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3
                className="text-sm tracking-widest text-[#E8469E] font-semibold mb-3"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                DATE
              </h3>
              <p
                className="text-[#7A6F5D] text-lg"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {project.date}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3
                className="text-sm tracking-widest text-[#E8469E] font-semibold mb-3"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                CLIENT
              </h3>
              <p
                className="text-[#7A6F5D] text-lg"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {project.client}
              </p>
            </div>
          </motion.div>

          {/* Objectif */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2
              className="text-3xl font-bold text-[#D4A5A5] mb-6"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Objectif
            </h2>
            <p
              className="text-[#7A6F5D] text-lg leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {project.objectif}
            </p>
          </motion.div>

          {/* Contexte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2
              className="text-3xl font-bold text-[#D4A5A5] mb-6"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Contexte
            </h2>
            <p
              className="text-[#7A6F5D] text-lg leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {project.contexte}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2
              className="text-3xl font-bold text-[#D4A5A5] mb-6"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Solution
            </h2>
            <p
              className="text-[#7A6F5D] text-lg leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {project.solution}
            </p>
          </motion.div>

          {/* Résultats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#E8469E] to-[#D4307E] p-12 rounded-3xl shadow-2xl"
          >
            <h2
              className="text-3xl font-bold text-white mb-8"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Résultats
            </h2>
            <ul className="space-y-4">
              {project.resultats.map((resultat, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                  <p
                    className="text-white text-lg"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {resultat}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA pour voir d'autres projets */}
        <div className="bg-gradient-to-br from-[#E8E5E0] to-[#F5F3F0] py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-8 text-center space-y-8"
          >
            <h2
              className="text-5xl font-bold text-[#D4A5A5]"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Découvrez mes autres projets
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/igloo-projects"
                className="inline-block px-12 py-5 bg-[#E8469E] text-white text-xs tracking-widest hover:bg-[#D4307E] transition-colors rounded-full shadow-lg hover:shadow-xl font-semibold"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                AUTRES PROJETS L'IGLOO
              </Link>
              <Link
                to="/projects"
                className="inline-block px-12 py-5 bg-white text-[#E8469E] text-xs tracking-widest hover:bg-[#F5F1ED] transition-colors rounded-full shadow-lg hover:shadow-xl font-semibold"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                TOUTES MES RÉALISATIONS
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
  );
}