import lgmLogo from "figma:asset/d166bc4f2e9fdeccc7d7dbe37f3844170aa9554f.png";
import yventlyLogo from "figma:asset/d9a08129f82af1836be7c2475968b39cb4b0fc34.png";
import ednLogo from "figma:asset/8c9e7e5498802e138264b8b6f34748dfcc40c273.png";
import ednReelImage from "figma:asset/e174974c4e7dbd0a17201a509c3b39c02c1f0a23.png";
import egcImage from "figma:asset/c56b86f0586875a0c51dcb73b41311e7d06e89ba.png";
import nespressoLogo from "figma:asset/8c288ded686a661c8fd6f67553cfda258dedd865.png";
import interviewImage from "figma:asset/bd39b9700bd8f9db7e99b6b76c647211ce0aba17.png";
import vaianaLegoAffiche from "figma:asset/17ecc61da37b11ef8e4c673b0b146f62c1e6f023.png";
import proxiteAffiche from "figma:asset/6afe75601959cf54f9449841ffc973291f5a5cda.png";
import billieEilishPizzaHut from "figma:asset/43cbe75e11ce01e5dda050dc7867440cd482b8bb.png";
import telemagPlusLogo from "figma:asset/09a670443481ee906e27fe0708be80f0029bf599.png";
import iglooLogo from "figma:asset/e49787d2a3ddce1b14ee2402ae29e60b607ba7c9.png";
import shakeDuMoment from "figma:asset/16c2f4364cb7e4b0799d67d8c4b1cbaac312eaf6.png";
import patisserieHalloween from "figma:asset/37817afc7460ce96b40c5830981396f6bb2e5b85.png";
import patisserieStValentin from "figma:asset/756ef591b3bf3385504c8008f2f53a17c10415fd.png";
import videDressingAffiche from "figma:asset/4ba7af402dacafac27dba955d80e207952c9be5a.png";
import animalShowAffiche from "figma:asset/a4abc1bfa91e70368a34e186ef25afe703d07393.png";
import porscheSoireeImage from "figma:asset/bf288ec4a759a228c97a30807cb71ce162dbc8de.png";
import pardonVisuel1 from "figma:asset/f72e9a53854d449ddedbd6022d4cede206d44801.png";
import pardonVisuel2 from "figma:asset/e4ccc21719b3028ab5cf8993085da2489757fb1b.png";
import fairePartMariageImage from "figma:asset/385c25ca7194305eb532f4392d25e4f79875c971.png";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Target, Lightbulb, CheckCircle2, Heart, Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router";
import { useState, useCallback, useEffect } from "react";
import { Pushpin, pushpinColors } from "@/app/components/Pushpin";
import { ImageIcon } from "lucide-react";

interface SubProject {
  id: string;
  name: string;
  image?: string;
}

interface ProjectData {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  image?: string;
  date: string;
  client: string;
  objectif: string;
  contexte: string;
  cibles: string[];
  solution: string;
  resultats: string[];
  subProjects?: SubProject[];
  gallery?: string[];
  presentation?: string;
  instagram?: string;
  visuels?: { src: string; label?: string }[];
}

const projectsData: Record<string, ProjectData> = {
  // Le Monde de la Glace
  "lgm": {
    id: "lgm",
    name: "LGM",
    category: "monde-glace",
    categoryLabel: "Le Monde de la Glace",
    image: lgmLogo,
    date: "2024",
    client: "Le Monde de la Glace",
    instagram: "https://www.instagram.com/lgm_leglaciermoderne",
    presentation: "L.G.M. – Le Glacier Moderne est une franchise de glaciers artisanaux implantée à La Réunion depuis plusieurs décennies. Sur l'île, ce sont plusieurs points de vente qui proposent des glaces et sorbets artisanaux aux parfums variés, disponibles à la fois sur place ou à emporter. LGM est reconnu pour son savoir‑faire artisanal et sa capacité à offrir une pause gourmande dans différentes villes de l'île, avec des boutiques réparties dans plusieurs communes réunionnaises.",
    objectif: "Créer une identité visuelle forte et mémorable pour la marque LGM (Le Glacier Moderne), reflétant l'univers gourmand et raffiné des glaces artisanales.",
    contexte: "LGM souhaitait se démarquer dans le secteur compétitif de la glacerie artisanale à La Réunion en développant une image de marque professionnelle et attractive.",
    cibles: ["Consommateurs locaux", "Touristes", "Familles"],
    solution: "Conception d'un logo emblématique avec les lèvres rouges, création d'une charte graphique complète incluant couleurs, typographies et éléments visuels. Déploiement sur tous les supports de communication.",
    resultats: [
      "Identité visuelle reconnaissable et mémorable",
      "Augmentation de la visibilité de la marque",
      "Cohérence sur tous les supports de communication",
      "Renforcement de l'image premium de la marque"
    ],
    subProjects: [
      { id: "shake-du-moment", name: "Shake du moment", image: shakeDuMoment },
      { id: "crepes", name: "Crêpes" },
      { id: "calendrier-avent", name: "Calendrier de l'avent" },
      { id: "parfums-occasion", name: "Parfums d'occasion" }
    ],
    // ✏️ Importe tes visuels en haut du fichier puis ajoute-les ici :
    // import visuelLgm1 from "figma:asset/ton-fichier.png";
    // visuels: [{ src: visuelLgm1, label: "Légende optionnelle" }],
    visuels: [],
  },
  "rafaello": {
    id: "rafaello",
    name: "Rafaello",
    category: "monde-glace",
    categoryLabel: "Le Monde de la Glace",
    date: "2024",
    client: "Le Monde de la Glace",
    instagram: "https://www.instagram.com/rafaello_run",
    objectif: "Promouvoir le nouveau parfum de glace Rafaello à travers une campagne visuelle gourmande et engageante.",
    contexte: "Lancement d'un nouveau parfum inspiré de la célèbre confiserie, nécessitant une communication ciblée pour séduire les amateurs de saveurs raffinées.",
    cibles: ["Amateurs de glaces", "Familles", "Touristes"],
    solution: "Création de visuels appétissants pour les réseaux sociaux, mise en place d'une stratégie de contenu avec photos produit et storytelling autour du parfum.",
    resultats: [
      "Forte engagement sur les réseaux sociaux",
      "Augmentation des ventes du parfum",
      "Création d'une communauté de fans du produit",
      "Succès de la campagne de lancement"
    ],
    // ✏️ Visuels Rafaello — importe tes images et ajoute-les ici
    visuels: [],
  },
  "igloo": {
    id: "igloo",
    name: "L'Igloo",
    category: "monde-glace",
    categoryLabel: "Le Monde de la Glace",
    image: iglooLogo,
    date: "2024",
    client: "Le Monde de la Glace",
    instagram: "https://www.instagram.com/igloo.leffet.glace",
    presentation: "L'Igloo est un glacier historique de Saint‑Denis, ouvert depuis 1988, qui fait partie des adresses gourmandes les plus anciennes de la ville. Réputé pour ses glaces artisanales, ses vacherins et autres desserts glacés, il propose un large choix de parfums traditionnels et de coupes savoureuses. L'établissement dispose de plusieurs salles et d'un espace snack, ce qui en fait un lieu de pause rafraîchissante incontournable pour les familles et amis au cœur du centre‑ville.",
    objectif: "Développer la communication digitale et l'identité visuelle de L'Igloo, glacier historique de Saint‑Denis.",
    contexte: "Besoin de créer un événement marquant et une expérience client mémorable autour de l'univers glacé de la marque.",
    cibles: ["Familles", "Amateurs de glaces", "Touristes"],
    solution: "Conception d'une campagne visuelle et événementielle autour du thème de l'igloo, création de contenus photos et vidéos pour documenter l'expérience.",
    resultats: [
      "Événement viral sur les réseaux sociaux",
      "Couverture médiatique locale",
      "Expérience client unique et mémorable",
      "Renforcement de l'identité de marque"
    ],
    subProjects: [
      { id: "buches-de-noel", name: "Bûches de Noël" },
      { id: "patisserie-halloween", name: "Pâtisserie d'Halloween", image: patisserieHalloween },
      { id: "tagliatelle-crepes", name: "Tagliatelle de crêpes" },
      { id: "patisserie-st-valentin", name: "Pâtisserie St Valentin", image: patisserieStValentin },
      { id: "crepe-epinard", name: "Crêpe épinard" },
      { id: "trend", name: "Trend" }
    ],
    // ✏️ Visuels L'Igloo — importe tes images et ajoute-les ici
    visuels: [],
  },
  "pandas": {
    id: "pandas",
    name: "Pandas",
    category: "monde-glace",
    categoryLabel: "Le Monde de la Glace",
    date: "2024",
    client: "Le Monde de la Glace",
    objectif: "Créer une campagne ludique et attachante autour du thème des pandas pour séduire une clientèle familiale.",
    contexte: "Volonté de créer un produit et une communication adaptés aux familles avec enfants, tout en conservant l'identité premium de la marque.",
    cibles: ["Familles", "Enfants"],
    solution: "Développement d'une gamme visuelle mignonne et attractive avec des illustrations de pandas, création de contenus adaptés pour toucher les parents et les enfants.",
    resultats: [
      "Forte attraction auprès des familles",
      "Contenus viraux sur les réseaux sociaux",
      "Augmentation du trafic en point de vente",
      "Création d'une mascotte identifiable"
    ],
    // ✏️ Visuels Pandas — importe tes images et ajoute-les ici
    visuels: [],
  },
  
  // École du Numérique
  "collab-improbable": {
    id: "collab-improbable",
    name: "Collab improbable – Billie Eilish x Pizza Hut",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: billieEilishPizzaHut,
    date: "2024",
    client: "École du Numérique (exercice pédagogique)",
    presentation: "Dans le cadre d'un exercice pédagogique en stratégie de communication, il m'a été demandé d'imaginer une collaboration fictive et inattendue entre un artiste musical contemporain et une marque. J'ai choisi la collaboration entre Billie Eilish, artiste vegan et engagée, et Pizza Hut, marque internationale de restauration rapide. Le caractère paradoxal repose sur l'image éthique et engagée de l'artiste face à l'image industrielle, souvent associée à la malbouffe, de la marque. Cette opposition constituait un territoire créatif fort, permettant de construire une stratégie originale autour d'une pizza vegan édition limitée.",
    objectif: "Produire différents livrables stratégiques et créatifs : mapping de positionnement, moodboard, copy stratégie, landing page, design d'une pochette d'album et création d'un produit dérivé — le tout autour d'une collaboration fictive crédible entre Billie Eilish et Pizza Hut.",
    contexte: "L'exercice exigeait de créer un partenariat crédible malgré le paradoxe entre les deux univers, de respecter les valeurs de Billie Eilish (��thique, environnement, inclusion), de concevoir des livrables visuels cohérents entre eux malgré des identités très éloignées, et de produire plusieurs supports variés (print, digital, produit, branding) dans un temps limité. Les acteurs analysés incluaient Billie Eilish (artiste internationale engagée dans le véganisme), Pizza Hut (en recherche de renouvellement d'image), leurs fans et consommateurs respectifs, ainsi qu'un benchmark de collaborations artistiques existantes.",
    cibles: ["Fans de Billie Eilish", "Consommateurs de Pizza Hut", "Jeunes engagés (véganisme, environnement)", "Amateurs de pop culture"],
    solution: "Méthodologie en 4 phases : 1) Veille exploratoire — analyse détaillée de l'artiste (style, couleurs, valeurs) et de Pizza Hut (positionnement, identité visuelle), benchmark de collaborations existantes via Instagram, TikTok, sites officiels et articles spécialisés. 2) Construction stratégique — mapping de positionnement, définition des cibles croisées, moodboard et copy stratégie complète (problématique, promesse, ton, preuves, message). 3) Création et production — pochette d'album dark-pop, pizza vegan édition limitée avec boîte personnalisée, landing page promotionnelle, mockups et visuels produits. 4) Mise en cohérence visuelle de l'ensemble avec une charte graphique ad hoc. Outils utilisés : Photoshop, Illustrator, Canva, Google Workspace.",
    resultats: [
      "Pochette d'album fictive Billie Eilish x Pizza Hut",
      "Pizza vegan édition limitée + boîte personnalisée",
      "Landing page de présentation du concept",
      "Moodboard et charte graphique complète",
      "Synthèse justificative et copy stratégie",
      "Maîtrise des compétences du Bloc 2 : veille opérationnelle et création de contenus",
      "Cohérence globale stratégie → création → production validée"
    ],
    // ✏️ Visuels Collab improbable — importe tes images et ajoute-les ici
    visuels: [],
  },
  "reel-edn": {
    id: "reel-edn",
    name: "Reel EDN",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: ednReelImage,
    date: "2024",
    client: "École du Numérique",
    objectif: "Produire des reels dynamiques et engageants pour promouvoir l'École du Numérique sur les réseaux sociaux.",
    contexte: "Besoin de contenus vidéo courts et percutants pour attirer de nouveaux étudiants et valoriser la vie étudiante.",
    cibles: ["Étudiants", "Parents", "Jeunes"],
    solution: "Création de reels créatifs mettant en scène la vie à l'école, montage vidéo rythmé, utilisation des tendances TikTok/Instagram.",
    resultats: [
      "Augmentation de la portée organique",
      "Engagement élevé des audiences cibles",
      "Renforcement de l'image moderne de l'école",
      "Maîtrise des formats vidéo courts"
    ],
    // ✏️ Visuels Reel EDN — importe tes images et ajoute-les ici
    visuels: [],
  },
  "proxite": {
    id: "proxite",
    name: "PROXITÉ",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: proxiteAffiche,
    date: "2024",
    client: "Association Proxité",
    objectif: "Créer une série d'affiches de prévention pour sensibiliser un large public, notamment les jeunes, à cinq thématiques clés : l'alcool, la drogue, la cigarette, les écrans et la conduite dangereuse.",
    contexte: "Dans le cadre d'une campagne de sensibilisation fictive menée avec l'association Proxité, nous avons conçu une série d'affiches de prévention abordant cinq thématiques clés : l'alcool, la drogue, la cigarette, les écrans et la conduite dangereuse. L'objectif était de toucher un large public, notamment les jeunes, en adoptant un ton accessible et percutant.",
    cibles: ["Jeunes", "Adolescents", "Parents"],
    solution: "Nous avons opté pour des visuels minimalistes, mettant en scène des personnages en forme de bonhommes bâtons engageant des dialogues courts et efficaces. Ce choix graphique permet une identification immédiate et une mémorisation rapide du message, tout en créant une proximité avec le public cible.",
    resultats: [
      "Campagne de prévention impactante et mémorable",
      "Visuels minimalistes facilement partageables sur les réseaux sociaux",
      "Tone of voice accessible touchant efficacement les jeunes",
      "Messages de prévention clairs et percutants",
      "Maîtrise de la communication engagée et responsable"
    ],
    // ✏️ Visuels PROXITÉ — importe tes images et ajoute-les ici
    visuels: [],
  },
  "pardon": {
    id: "pardon",
    name: "Pardon! Création – Collection \"Lava Flow\"",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    date: "2025",
    client: "Pardon! Création (exercice fictif)",
    objectif: "Promouvoir la sortie de la nouvelle collection Lava Flow, attirer l'attention grâce à un visuel fort, donner envie de découvrir la collection et mettre en valeur l'univers graphique et décalé de la marque.",
    contexte: "Ce projet a été réalisé dans le cadre d'un exercice fictif en BTS Communication. L'objectif était de concevoir des supports publicitaires pour la marque réunionnaise Pardon! Création à l'occasion du lancement de sa nouvelle collection Printemps / Été 2025 intitulée « Lava Flow ». Cette collection s'inspire des éruptions du Piton de la Fournaise et reprend des couleurs et motifs évoquant la lave et l'énergie volcanique. Il fallait imaginer une communication visuelle capable d'attirer l'attention et de promouvoir cette nouvelle collection.",
    cibles: [
      "Jeunes adultes et adultes (20–50 ans) intéressés par la mode",
      "Personnes attirées par des vêtements originaux et colorés",
      "Habitants de La Réunion sensibles à la culture locale",
      "Touristes cherchant un souvenir inspiré de l'île",
      "Clients fidèles de la marque"
    ],
    solution: "Création d'une publicité visuelle inspirée de l'univers volcanique : mannequin portant une robe aux motifs inspirés de la lave, illustration d'un volcan en éruption en arrière-plan, slogan « Votre garde-robe entre en éruption ». Intégration du logo Pardon!, mention de la nouvelle collection disponible, visuels de plusieurs produits (robe, sac, accessoires) et court texte expliquant l'inspiration. Couleurs dominantes : rouge, orange et noir, en rappel de la lave et de l'énergie volcanique.",
    resultats: [
      "Visuel impactant et facilement identifiable",
      "Univers graphique cohérent avec le thème volcanique",
      "Mise en avant claire de la nouvelle collection",
      "Communication qui attire l'attention et suscite la curiosité"
    ],
    visuels: [
      { src: pardonVisuel1, label: "Affiche collection Lava Flow" },
      { src: pardonVisuel2, label: "Visuel promotionnel Lava Flow" },
    ],
  },
  "pantoufle-pepere": {
    id: "pantoufle-pepere",
    name: "La pantoufle à pépère",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    date: "2024",
    client: "École du Numérique",
    objectif: "Créer une campagne humoristique et décalée autour d'un concept inattendu pour démontrer la créativité.",
    contexte: "Projet libre permettant d'explorer des territoires de communication non conventionnels avec humour et second degré.",
    cibles: ["Public général", "Étudiants", "Jeunes"],
    solution: "Conception d'une identité visuelle décalée, création de contenus humoristiques pour les réseaux sociaux, ton de voix unique.",
    resultats: [
      "Démonstration de polyvalence créative",
      "Maîtrise des codes de l'humour en communication",
      "Capacité à sortir des sentiers battus",
      "Projet mémorable et différenciant"
    ],
    // ✏️ Visuels La pantoufle à pépère — importe tes images et ajoute-les ici
    visuels: [],
  },
  "affiche-film-fictive": {
    id: "affiche-film-fictive",
    name: "Affiche de film fictive",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: vaianaLegoAffiche,
    date: "2024",
    client: "École du Numérique",
    objectif: "Créer une affiche de film fictive en détournant l'univers de Vaiana en style LEGO.",
    contexte: "Création d'une affiche fictive en détournant l'univers de Vaiana en style LEGO. Composition sur Photoshop avec intégration de 3 personnages principaux, éléments exotiques, travail des ombres et des effets pour un rendu réaliste.",
    cibles: ["Public général", "Étudiants", "Jeunes"],
    solution: "Utilisation de Photoshop pour créer un univers LEGO tropical avec personnages Vaiana, Maui et Pua, intégration d'éléments naturels (palmiers, océan, plage), travail minutieux des ombres et des reflets pour un rendu photoréaliste.",
    resultats: [
      "Affiche créative et originale mêlant deux univers",
      "Maîtrise de Photoshop et des techniques de photomanipulation",
      "Rendu photoréaliste des personnages LEGO",
      "Composition visuelle harmonieuse et immersive"
    ],
    // ✏️ Visuels Affiche de film fictive — importe tes images et ajoute-les ici
    visuels: [],
  },
  "remise-diplomes-egc": {
    id: "remise-diplomes-egc",
    name: "Soirée remise des diplômes EGC",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: egcImage,
    date: "2024",
    client: "EGC Réunion",
    objectif: "Créer l'identité visuelle et la communication pour la soirée de remise des diplômes de l'EGC.",
    contexte: "Événement majeur nécessitant une communication élégante et professionnelle pour célébrer la réussite des diplômés.",
    cibles: ["Diplômés", "Familles", "Invités"],
    solution: "Design d'invitations, création de visuels pour les réseaux sociaux, supports de communication pour l'événement, couverture photo/vidéo.",
    resultats: [
      "Événement réussi et mémorable",
      "Communication professionnelle et élégante",
      "Satisfaction des organisateurs et participants",
      "Expérience complète en communication événementielle"
    ],
    // ✏️ Visuels Soirée EGC — importe tes images et ajoute-les ici
    visuels: [],
  },
  "newsletter-nespresso": {
    id: "newsletter-nespresso",
    name: "Newsletter Nespresso",
    category: "ecole-numerique",
    categoryLabel: "École du Numérique",
    image: nespressoLogo,
    date: "2024",
    client: "École du Numérique",
    objectif: "Concevoir une newsletter élégante et engageante pour Nespresso, mettant en valeur l'univers premium de la marque.",
    contexte: "Projet académique visant à créer une communication digitale haut de gamme pour une marque de luxe, en respectant son identité et ses codes visuels.",
    cibles: ["Clients Nespresso", "Amateurs de café", "Jeunes"],
    solution: "Création d'une newsletter responsive avec mise en page sophistiquée, intégration de visuels premium, rédaction de contenus engageants et appels à l'action efficaces.",
    resultats: [
      "Newsletter au design épuré et élégant",
      "Respect des codes de la marque Nespresso",
      "Maîtrise de la mise en page email responsive",
      "Capacité à créer du contenu premium"
    ],
    // ✏️ Visuels Newsletter Nespresso — importe tes images et ajoute-les ici
    visuels: [],
  },
  
  // Télémag Plus
  "realisation-interview": {
    id: "realisation-interview",
    name: "Réalisation d'interview",
    category: "telemag-plus",
    categoryLabel: "Télémag Plus",
    image: interviewImage,
    date: "2024",
    client: "Télémag Plus",
    objectif: "Réaliser des interviews professionnelles de qualité pour la plateforme Télémag Plus, en mettant en avant des personnalités inspirantes de La Réunion.",
    contexte: "Télémag Plus souhaitait développer un format d'interview impactant pour valoriser les acteurs locaux et créer du contenu engageant pour leur audience.",
    cibles: ["Audience Télémag Plus", "Personnalités locales", "Amateurs de culture"],
    solution: "Préparation des interviews, conduite d'entretiens approfondis, captation vidéo et photo, montage et post-production, diffusion sur les plateformes digitales de Télémag Plus.",
    resultats: [
      "Interviews de qualité professionnelle",
      "Mise en valeur des personnalités locales",
      "Contenu engageant pour l'audience Télémag Plus",
      "Maîtrise complète du processus d'interview",
      "Développement de compétences en journalisme"
    ],
    // ✏️ Visuels Réalisation d'interview — importe tes images et ajoute-les ici
    visuels: [],
  },
  "soiree-caritative-porsche": {
    id: "soiree-caritative-porsche",
    name: "Soirée caritative Porsche",
    category: "telemag-plus",
    categoryLabel: "Télémag Plus",
    date: "2024",
    client: "Télémag Plus",
    objectif: "Assurer la couverture médiatique complète d'une soirée caritative prestigieuse organisée par Porsche, en capturant l'élégance de l'événement et son impact social.",
    contexte: "Porsche organisait une soirée caritative exclusive réunissant personnalités influentes, clients VIP et médias locaux pour lever des fonds au profit d'une cause sociale importante à La Réunion. L'événement nécessitait une couverture médiatique professionnelle pour maximiser sa visibilité et son impact.",
    cibles: ["Audience Télémag Plus", "Personnalités influentes", "Clients VIP"],
    solution: "Couverture complète de l'événement avec captation photo et vidéo haute qualité, interviews des participants et organisateurs, création de contenus pour les réseaux sociaux en temps réel, montage vidéo récapitulatif de la soirée, articles de fond mettant en avant les valeurs de l'événement et son impact caritatif.",
    resultats: [
      "Couverture médiatique complète et professionnelle",
      "Mise en valeur de l'engagement social de Porsche",
      "Contenus viraux sur les réseaux sociaux",
      "Visibilité maximale pour la cause caritative",
      "Renforcement de l'image de marque premium",
      "Expérience complète en journalisme événementiel haut de gamme"
    ],
    // ✏️ Visuels Soirée caritative Porsche — importe tes images et ajoute-les ici
    visuels: [porscheSoireeImage],
  },
  
  // Yvently
  "soiree-corporate": {
    id: "soiree-corporate",
    name: "Organisation soirée corporate pour un client",
    category: "yvently",
    categoryLabel: "Yvently",
    image: yventlyLogo,
    date: "2024",
    client: "Client corporate via Yvently",
    objectif: "Organiser et communiquer autour d'une soirée corporate haut de gamme pour renforcer la cohésion d'équipe.",
    contexte: "Client corporate souhaitant organiser un événement professionnel mémorable avec une communication digitale avant, pendant et après l'événement.",
    cibles: ["Équipe client", "Partenaires", "Fournisseurs"],
    solution: "Création de l'identité visuelle de l'événement, stratégie de communication digitale, couverture live sur les réseaux sociaux, contenus photos/vidéos.",
    resultats: [
      "Événement réussi avec retours clients excellents",
      "Communication digitale efficace et engageante",
      "Couverture complète de l'événement",
      "Renforcement de la relation client"
    ],
    // ✏️ Visuels Soirée corporate — importe tes images et ajoute-les ici
    visuels: [],
  },
  "event-branding": {
    id: "event-branding",
    name: "Branding événementiel",
    category: "yvently",
    categoryLabel: "Yvently",
    date: "2024",
    client: "Yvently",
    objectif: "Développer des identités visuelles fortes et cohérentes pour divers événements organisés par Yvently.",
    contexte: "Besoin de créer des univers visuels uniques pour chaque événement tout en maintenant la signature Yvently.",
    cibles: ["Public général", "Étudiants", "Jeunes"],
    solution: "Conception de chartes graphiques événementielles, création de logos temporaires, design de supports variés (affiches, flyers, réseaux sociaux).",
    resultats: [
      "Identités événementielles mémorables",
      "Cohérence visuelle sur tous les supports",
      "Reconnaissance de la marque Yvently",
      "Portfolio riche d'événements variés"
    ],
    // ✏️ Visuels Branding événementiel — importe tes images et ajoute-les ici
    visuels: [],
  },
  "campagne-event": {
    id: "campagne-event",
    name: "Campagne réseaux sociaux événement",
    category: "yvently",
    categoryLabel: "Yvently",
    date: "2024",
    client: "Yvently",
    objectif: "Créer et déployer des campagnes réseaux sociaux percutantes pour promouvoir les événements Yvently.",
    contexte: "Nécessité de générer du buzz et maximiser la participation aux événements via une présence sociale forte.",
    cibles: ["Public général", "Étudiants", "Jeunes"],
    solution: "Stratégie de contenu avant/pendant/après événement, création de visuels attractifs, stories, reels, posts engageants.",
    resultats: [
      "Augmentation significative de la visibilité",
      "Taux d'engagement élevé",
      "Succès des événements promus",
      "Croissance de la communauté Yvently"
    ],
    // ✏️ Visuels Campagne réseaux sociaux — importe tes images et ajoute-les ici
    visuels: [],
  },
  "invitation-design": {
    id: "invitation-design",
    name: "Design invitations premium",
    category: "yvently",
    categoryLabel: "Yvently",
    date: "2024",
    client: "Yvently",
    objectif: "Créer des invitations digitales et physiques premium pour les événements haut de gamme.",
    contexte: "Les clients Yvently recherchent des invitations élégantes et sophistiquées qui reflètent le standing de leurs événements.",
    cibles: ["Invités", "Partenaires", "Fournisseurs"],
    solution: "Design d'invitations sur-mesure alliant élégance et modernité, formats digitaux interactifs et versions imprimées luxueuses.",
    resultats: [
      "Invitations au rendu exceptionnel",
      "Satisfaction client maximale",
      "Renforcement du positionnement premium",
      "Maîtrise du design print et digital"
    ],
    // ✏️ Visuels Design invitations premium — importe tes images et ajoute-les ici
    visuels: [],
  },
  "faire-part-mariage": {
    id: "faire-part-mariage",
    name: "Faire-part de mariage digital sur mesure",
    category: "yvently",
    categoryLabel: "Yvently",
    image: fairePartMariageImage,
    date: "2024",
    client: "Couple de futurs mariés via Yvently",
    presentation: "Ce projet consistait à concevoir un faire-part de mariage entièrement digital et personnalisé, pensé comme une véritable expérience interactive pour les invités. À l'heure où les codes du mariage se réinventent, ce faire-part sur mesure allie élégance, modernité et praticité, tout en reflétant l'univers unique du couple.",
    objectif: "Concevoir un faire-part de mariage digital interactif, élégant et personnalisé, capable de remplacer le faire-part papier traditionnel tout en offrant une expérience mémorable aux invités.",
    contexte: "Un couple souhaitait se démarquer avec un faire-part moderne, écoresponsable et à leur image. Ils voulaient un support digital facilement partageable (WhatsApp, email, réseaux sociaux) qui intègre toutes les informations pratiques du mariage tout en véhiculant l'émotion et l'esthétique de leur union. Le brief incluait un univers visuel romantique et raffiné, avec des tons doux et une typographie élégante.",
    cibles: ["Invités du mariage (famille, amis proches, collègues)", "Couple de futurs mariés", "Témoins et organisateurs"],
    solution: "Création d'un faire-part digital animé et interactif comprenant : une page d'accueil avec les prénoms du couple et la date du mariage en typographie élégante, une section storytelling retraçant leur histoire d'amour, les informations pratiques (lieu, horaires, dress code, hébergements), un formulaire RSVP intégré pour confirmer sa présence, une galerie photo du couple, et un compteur animé jusqu'au jour J. Le tout conçu avec une charte graphique sur mesure (palette de couleurs douces, motifs floraux, animations subtiles) et optimisé pour mobile. Outils utilisés : Canva, Figma, Photoshop.",
    resultats: [
      "Faire-part digital élégant et entièrement personnalisé",
      "Expérience utilisateur fluide et intuitive sur mobile",
      "Réduction de l'empreinte écologique par rapport au papier",
      "Facilité de partage via liens et réseaux sociaux",
      "Retours enthousiastes des invités et du couple",
      "Démonstration de compétences en design digital et UX"
    ],
    // ✏️ Visuels Faire-part de mariage — importe tes images et ajoute-les ici
    visuels: [],
  },
  "soiree-april": {
    id: "soiree-april",
    name: "Organisation de la soirée de fin d'année – April",
    category: "yvently",
    categoryLabel: "Yvently",
    date: "2024",
    client: "April",
    presentation: "Organisation complète de la soirée de fin d'année de l'entreprise April, le 19 décembre. De la recherche du lieu à la décoration finale, chaque détail a été pensé pour offrir une expérience festive et mémorable à l'ensemble des collaborateurs, tout en reflétant l'image professionnelle de l'entreprise.",
    objectif: "Organiser une soirée de fin d'année conviviale et élégante pour les collaborateurs. Assurer la coordination de tous les prestataires et éléments logistiques. Créer une identité visuelle cohérente pour les invitations et la décoration. Proposer une expérience personnalisée à chaque invité avec des éléments souvenirs.",
    contexte: "J'ai été chargée de mettre en œuvre la soirée de fin d'année de l'entreprise April, en coordonnant tous les aspects de l'événement. Contraintes : trouver un lieu adapté à l'ensemble des participants et au style de l'événement, gérer la logistique sonore et technique avec le prestataire sono, concevoir une décoration complète et harmonieuse sur place, produire des éléments personnalisés pour chaque collaborateur (boules de Noël personnalisées).",
    cibles: ["Collaborateurs de l'entreprise April"],
    solution: "Recherche et coordination : sélection et réservation du lieu, identification et coordination du prestataire sono pour l'animation musicale. Création graphique et invitations : conception du visuel des invitations en respectant l'identité de l'entreprise, diffusion aux collaborateurs. Décoration et personnalisation : mise en place complète de la décoration sur place (mobilier, éclairage, éléments festifs), création de boules de Noël personnalisées pour chaque employé en tant que souvenir unique. Gestion le jour J : supervision du déroulement de la soirée, coordination avec le prestataire sono, vérification de la décoration et des animations. Outils mobilisés : Canva (création du visuel des invitations et maquettes de décoration), coordination directe avec les prestataires et suivi logistique sur place.",
    resultats: [
      "Soirée de fin d'année réussie, chaleureuse et festive",
      "Chaque collaborateur est reparti avec un souvenir personnalisé",
      "Mise en valeur de la capacité à organiser des événements complets et soignés",
      "Compétences mobilisées : gestion de projet événementiel, création graphique, coordination de prestataires, organisation sur site, personnalisation d'objets"
    ],
    // ✏️ Visuels Soirée April — importe tes images et ajoute-les ici
    visuels: [],
  },

  // Divers
  "animal-show": {
    id: "animal-show",
    name: "Animal Show",
    category: "divers",
    categoryLabel: "Divers",
    date: "2025",
    client: "Animal Show – Salon Animalier (Parc du Colosse, Saint-André)",
    presentation: "Animal Show est un salon animalier réunionnais qui s'est déroulé du 7 au 11 mai au Parc du Colosse à Saint-André. L'événement rassemble passionnés, éleveurs, associations et professionnels du monde animal autour d'expositions, d'animations et de stands dédiés aux animaux de compagnie, oiseaux, reptiles et bien plus encore.",
    objectif: "Promouvoir l'Animal Show auprès du public cible en augmentant la notoriété et l'engagement sur les réseaux sociaux. Créer du contenu visuel attractif et cohérent avec l'identité de l'événement. Attirer un maximum de visiteurs et encourager la participation familiale. Gérer la communication avant et pendant l'événement, y compris les annonces, les portraits d'animaux et les interactions avec les internautes.",
    contexte: "Dans le cadre de mon rôle en communication événementielle, j'ai été chargée de concevoir et de gérer la communication digitale de l'événement Animal Show. Le salon ciblait principalement les familles, les enfants et les passionnés d'animaux, avec une présence sur les réseaux sociaux pour maximiser la visibilité avant et pendant l'événement. Contraintes : respect de l'identité visuelle et du ton destiné aux familles, publication régulière et programmée, création de contenu adapté à différents formats (posts statiques, carrousels, stories), capacité d'adaptation rapide face aux changements.",
    cibles: ["Familles", "Enfants", "Passionnés d'animaux", "Éleveurs", "Associations"],
    solution: "Stratégie de contenu et planification : identification du public cible, définition des types de contenus à publier, création d'un calendrier éditorial pour planifier les publications avant et pendant l'événement. Création de visuels attractifs : réalisation de portraits d'animaux pour promouvoir les différentes attractions, conception de visuels et d'affiches pour annoncer les activités, horaires et zones de l'événement, mise en valeur des informations clés de manière claire et ludique. Animation des réseaux sociaux : publication des contenus selon le calendrier éditorial, gestion des interactions avec le public (réponses aux questions, encouragement au partage, mise en avant des participants), ajustement des contenus en fonction des retours et de l'engagement observé. Outils mobilisés : Canva (création des visuels et affiches), Meta Business Suite (programmation et publication sur Instagram et Facebook, suivi des performances).",
    resultats: [
      "Communication digitale cohérente et attractive avant et pendant l'événement",
      "Engagement et attraction du public cible sur les réseaux sociaux",
      "Valorisation des activités et des animaux présents au salon",
      "Expérience digitale interactive et visuellement agréable pour les visiteurs",
      "Compétences mobilisées : communication digitale, marketing événementiel, conception graphique, gestion de réseaux sociaux, planification éditoriale, réactivité face aux imprévus"
    ],
    visuels: [animalShowAffiche],
  },
  "vide-dressing": {
    id: "vide-dressing",
    name: "Vide dressing",
    category: "divers",
    categoryLabel: "Divers",
    date: "2024",
    client: "Projet personnel",
    objectif: "Organiser et communiquer autour d'un vide-dressing attractif et convivial.",
    contexte: "Organisation d'un événement de vide-dressing nécessitant une communication visuelle engageante pour attirer un maximum de participants.",
    cibles: ["Jeunes adultes", "Amateurs de mode", "Public local"],
    solution: "Création de visuels promotionnels pour les réseaux sociaux, gestion de la communication en amont de l'événement.",
    resultats: [
      "Bonne participation à l'événement",
      "Communication visuelle efficace",
      "Expérience en organisation événementielle"
    ],
    visuels: [videDressingAffiche],
  }
};

export function ProjectDetail() {
  const { category, projectId } = useParams<{ category: string; projectId: string }>();
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const project = projectId ? projectsData[projectId] : null;
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
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const toggleLike = (subProjectId: string) => {
    const newLiked = new Set(likedProjects);
    if (newLiked.has(subProjectId)) {
      newLiked.delete(subProjectId);
    } else {
      newLiked.add(subProjectId);
    }
    setLikedProjects(newLiked);
  };

  if (!project) {
    return (
        <div className="min-h-screen bg-[#F5F1ED] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Projet non trouvé
            </h1>
            <Link to="/projects" className="text-[#E8469E] hover:underline" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Retour aux réalisations
            </Link>
          </div>
        </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#F5F1ED]">
        {/* En-tête avec bouton retour */}
        <div className="relative bg-[#F5F1ED] pt-10 md:pt-16 pb-4">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[#2D2D2D] hover:text-[#E8469E] transition-colors text-sm md:text-base"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                <span>Retour aux réalisations</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
          {/* Rectangle de présentation principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="overflow-hidden relative">
              {/* Punaises décoratives */}
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
                {/* Colonne gauche : infos */}
                <div className="flex-1">
                  <span
                    className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#E8469E] text-white rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-5"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {project.categoryLabel}
                  </span>
                  <h1
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
                    style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
                  >
                    {project.name}
                  </h1>
                  <div className="space-y-2 md:space-y-3 text-sm md:text-base text-[#9B8B7E] mb-6" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    <div className="flex items-center gap-2 md:gap-3">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#E8469E] flex-shrink-0" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-[#E8469E] flex-shrink-0" />
                      <span>Client: {project.client}</span>
                    </div>
                  </div>
                  {/* Texte de présentation */}
                  {project.presentation && (
                    <p
                      className="text-[#2D2D2D] leading-relaxed mb-5"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {project.presentation}
                    </p>
                  )}
                  {project.instagram && (
                    <a
                      href={project.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#E8469E] to-[#F0C8D8] text-white text-xs tracking-widest rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <Instagram className="w-4 h-4" />
                      VOIR SUR INSTAGRAM
                    </a>
                  )}
                </div>

                {/* Colonne droite : image/logo */}
                {project.image && (
                  <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-[#F8D7E8] p-6 flex items-center justify-center shadow-xl">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Instagram link for projects without presentation */}
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E8469E] to-[#F0C8D8] text-white text-xs tracking-widest rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <Instagram className="w-4 h-4" />
                VOIR SUR INSTAGRAM
              </a>
            </motion.div>
          )}

          {/* ═══════════ MES VISUELS — Galerie Polaroïd ═══════════ */}
          {project.visuels && project.visuels.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              {/* Titre section */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E8B5D4]/50" />
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-6 h-6 text-[#E8469E]" />
                  <h2
                    className="text-2xl md:text-4xl font-bold text-center"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#1A1A1A" }}
                  >
                    Mes visuels
                  </h2>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E8B5D4]/50" />
              </div>

              {/* Grille Polaroïd */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {project.visuels.map((visuel, index) => {
                  const rotations = [-2.5, 1.8, -1.2, 3, -0.8, 2.2];
                  const rotation = rotations[index % rotations.length];
                  const pinColorsArr = [pushpinColors.rose, pushpinColors.roseClaire, pushpinColors.corail, pushpinColors.or, pushpinColors.rouge];
                  const pinColor = pinColorsArr[index % pinColorsArr.length];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, rotate: rotation }}
                      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="group"
                    >
                      <motion.div
                        className="relative bg-white p-4 pb-14 shadow-xl cursor-pointer"
                        style={{ transform: `rotate(${rotation}deg)` }}
                        onClick={() => openLightbox(index)}
                        whileHover={{
                          y: -10,
                          scale: 1.04,
                          rotate: 0,
                          transition: { duration: 0.3 },
                        }}
                      >
                        {/* Punaise en haut au centre */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                          <Pushpin
                            color={pinColor}
                            size={24}
                            style={{ transform: `rotate(${(index * 7) % 15 - 7}deg)` }}
                          />
                        </div>

                        {/* Image */}
                        <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                          <img
                            src={visuel.src}
                            alt={visuel.label || `${project.name} - Visuel ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Légende manuscrite */}
                        {visuel.label && (
                          <div className="pt-4 text-center">
                            <p
                              className="text-[#1A1A1A] text-sm"
                              style={{ fontFamily: "'Homemade Apple', cursive" }}
                            >
                              {visuel.label}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Placeholder visuels vides — message discret pour le développement */}
          {(!project.visuels || project.visuels.length === 0) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="border-2 border-dashed border-[#E8B5D4]/40 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center">
                <ImageIcon className="w-12 h-12 text-[#E8B5D4]/50 mx-auto mb-4" />
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#C4B5A5" }}
                >
                  Mes visuels
                </h3>
                <p
                  className="text-[#C4B5A5] text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Les visuels de ce projet seront bientôt disponibles.
                </p>
              </div>
            </motion.div>
          )}

          {/* Contexte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4A5A5] rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2
                className="text-2xl md:text-4xl font-bold"
                style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
              >
                Contexte
              </h2>
            </div>
            <p
              className="text-base md:text-lg text-[#2D2D2D] leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {project.contexte}
            </p>
          </motion.div>

          {/* Objectifs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E8469E] rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2
                className="text-2xl md:text-4xl font-bold"
                style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
              >
                Objectifs
              </h2>
            </div>
            <p
              className="text-base md:text-lg text-[#2D2D2D] leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {project.objectif}
            </p>
          </motion.div>

          {/* Cibles */}
          {project.cibles && project.cibles.length > 0 && (
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
                <h2
                  className="text-2xl md:text-4xl font-bold"
                  style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
                >
                  Cibles
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.cibles.map((cible, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border"
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      background: 'rgba(255, 214, 232, 0.25)',
                      borderColor: 'rgba(232, 70, 158, 0.25)',
                      color: '#1A1A1A',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E8469E]" />
                    {cible}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E8B5D4] rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2
                className="text-2xl md:text-4xl font-bold"
                style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
              >
                Solution
              </h2>
            </div>
            <p
              className="text-base md:text-lg text-[#2D2D2D] leading-relaxed"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              {project.solution}
            </p>
          </motion.div>

          {/* Résultats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E8469E] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2
                className="text-2xl md:text-4xl font-bold"
                style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
              >
                Résultats
              </h2>
            </div>
            <ul className="space-y-4">
              {project.resultats.map((resultat, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#E8469E] flex-shrink-0 mt-1" />
                  <span
                    className="text-base md:text-lg text-[#2D2D2D]"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {resultat}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Sous-projets (uniquement pour LGM) */}
          {project.subProjects && project.subProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2
                className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
                style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
              >
                {project.id === "lgm" ? "Projets LGM" : project.id === "igloo" ? "Projets L'Igloo" : "Projets"}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {project.subProjects.map((subProject, index) => {
                  // Vérifier si c'est le projet "Shake du moment" ou un projet Igloo cliquable
                  const isShakeDuMoment = subProject.id === "shake-du-moment";
                  const isIglooProject = project.id === "igloo";
                  const isClickable = isShakeDuMoment || isIglooProject;
                  
                  return (
                    <motion.div
                      key={subProject.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      {isShakeDuMoment ? (
                        // Shake du moment est cliquable et redirige vers sa page
                        <Link to="/shake-du-moment">
                          <motion.div 
                            className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square group"
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Image / Logo */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                              {subProject.image && (
                                <img
                                  src={subProject.image}
                                  alt={subProject.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                              
                              {/* Overlay rose avec nom du projet au hover */}
                              <div className="absolute inset-0 bg-[#E8469E] opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center p-6 z-10 pointer-events-none">
                                <h3
                                  className="text-white text-center font-semibold text-lg"
                                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                                >
                                  {subProject.name}
                                </h3>
                              </div>

                              {/* Bouton cœur */}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleLike(subProject.id);
                                }}
                                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 z-30 group-hover:opacity-0"
                              >
                                <Heart
                                  className={`w-4 h-4 transition-all ${
                                    likedProjects.has(subProject.id)
                                      ? "fill-[#E8469E] text-[#E8469E]"
                                      : "text-[#2D2D2D]"
                                  }`}
                                />
                              </button>
                            </div>
                          </motion.div>
                        </Link>
                      ) : isIglooProject ? (
                        // Tous les projets Igloo redirigent vers la page igloo-projects
                        <Link to="/igloo-projects">
                          <motion.div 
                            className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square group"
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Image / Logo */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                              {subProject.image && (
                                <img
                                  src={subProject.image}
                                  alt={subProject.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                              
                              {/* Overlay rose avec nom du projet au hover */}
                              <div className="absolute inset-0 bg-[#E8469E] opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center p-6 z-10 pointer-events-none">
                                <h3
                                  className="text-white text-center font-semibold text-lg"
                                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                                >
                                  {subProject.name}
                                </h3>
                              </div>

                              {/* Bouton cœur */}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleLike(subProject.id);
                                }}
                                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 z-30 group-hover:opacity-0"
                              >
                                <Heart
                                  className={`w-4 h-4 transition-all ${
                                    likedProjects.has(subProject.id)
                                      ? "fill-[#E8469E] text-[#E8469E]"
                                      : "text-[#2D2D2D]"
                                  }`}
                                />
                              </button>
                            </div>
                          </motion.div>
                        </Link>
                      ) : (
                        // Autres sous-projets (non cliquables)
                        <motion.div 
                          className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square group"
                          whileHover={{ y: -5, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Image / Logo */}
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                            {subProject.image && (
                              <img
                                src={subProject.image}
                                alt={subProject.name}
                                className="w-full h-full object-cover"
                              />
                            )}
                            
                            {/* Overlay rose avec nom du projet au hover */}
                            <div className="absolute inset-0 bg-[#E8469E] opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center p-6 z-10 pointer-events-none">
                              <h3
                                className="text-white text-center font-semibold text-lg"
                                style={{ fontFamily: "'Work Sans', sans-serif" }}
                              >
                                {subProject.name}
                              </h3>
                            </div>

                            {/* Bouton cœur */}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleLike(subProject.id);
                              }}
                              className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 z-30 group-hover:opacity-0"
                            >
                              <Heart
                                className={`w-4 h-4 transition-all ${
                                  likedProjects.has(subProject.id)
                                    ? "fill-[#E8469E] text-[#E8469E]"
                                    : "text-[#2D2D2D]"
                                }`}
                              />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Galerie d'images */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2
                className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
                style={{ fontFamily: "'Work Sans', sans-serif", color: "#1A1A1A" }}
              >
                Galerie
              </h2>
              
              {/* Grille masonry responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((imageUrl, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                    whileHover={{ y: -8 }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={`${project.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay avec numéro au hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6">
                        <span 
                          className="text-white text-sm font-semibold"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          Image {index + 1} / {project.gallery.length}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
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

      {/* ═══════════ LIGHTBOX ═══════════ */}
      {lightboxIndex !== null && visuels[lightboxIndex] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Nav previous */}
          {visuels.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 md:left-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Image container */}
          <motion.div
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Polaroid frame */}
            <div className="bg-white p-3 md:p-5 pb-14 md:pb-16 shadow-2xl">
              <img
                src={visuels[lightboxIndex].src}
                alt={visuels[lightboxIndex].label || `Visuel ${lightboxIndex + 1}`}
                className="max-h-[70vh] max-w-[85vw] md:max-w-[75vw] object-contain"
              />
              {visuels[lightboxIndex].label && (
                <p
                  className="absolute bottom-4 md:bottom-5 left-0 right-0 text-center text-[#1A1A1A] text-sm md:text-base"
                  style={{ fontFamily: "'Homemade Apple', cursive" }}
                >
                  {visuels[lightboxIndex].label}
                </p>
              )}
            </div>

            {/* Counter */}
            <span
              className="mt-4 text-white/70 text-sm"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {lightboxIndex + 1} / {visuels.length}
            </span>
          </motion.div>

          {/* Nav next */}
          {visuels.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </motion.div>
      )}
    </>
  );
}