export interface IglooProject {
  id: string;
  name: string;
  coverAsset?: string;
  date: string;
  client: string;
  objectif: string;
  contexte: string;
  solution: string;
  resultats: string[];
}

export const iglooProjectsList: IglooProject[] = [
  {
    id: 'buches-de-noel',
    name: 'Bûches de Noël',
    coverAsset: 'igloo-projects/buches-noel.png',
    date: 'Décembre 2024',
    client: "L'Igloo - Le Monde de la Glace",
    objectif:
      'Créer une communication visuelle attractive pour promouvoir les bûches glacées de Noël et stimuler les ventes durant la période des fêtes.',
    contexte:
      "Les fêtes de fin d'année représentent une période stratégique pour L'Igloo. Les bûches glacées sont des produits phares qui nécessitent une communication premium pour se démarquer dans un marché concurrentiel.",
    solution:
      "Conception d'un visuel gourmand mettant en avant la Bûche Caramel Peanuts avec photo professionnelle, mise en valeur des ingrédients premium (meringues, cacahuètes caramélisées, coulis), création d'une mise en scène appétissante avec le logo Glacier Artisan, diffusion sur les réseaux sociaux et en point de vente.",
    resultats: [
      'Visuels attractifs et appétissants',
      'Mise en valeur du savoir-faire artisanal',
      'Augmentation des commandes de bûches',
      "Renforcement de l'image premium de L'Igloo",
      'Engagement élevé sur les réseaux sociaux',
    ],
  },
  {
    id: 'patisserie-halloween',
    name: "Pâtisserie d'Halloween",
    coverAsset: 'igloo-projects/patisserie-halloween.png',
    date: 'Octobre 2024',
    client: "L'Igloo - Le Monde de la Glace",
    objectif:
      "Créer un dessert glacé spectaculaire et effrayant pour Halloween, accompagné d'une communication visuelle impactante pour attirer une clientèle jeune et créer le buzz.",
    contexte:
      "Halloween est devenu un événement commercial majeur à La Réunion. L'Igloo souhaitait se démarquer avec une création originale et mémorable qui génère du bouche-à-oreille et de l'engagement sur les réseaux sociaux.",
    solution:
      "Création du 'Cerveau Givré', un dessert glacé trompe-l'œil en forme de cerveau avec coulis rouge sang, développement d'un packaging noir premium avec main squelettique, conception de visuels chocs pour les réseaux sociaux, création du logo 'CERVEAU GIVRÉ - TROMPE L'OEIL', campagne digitale complète avec teasers et révélation.",
    resultats: [
      'Création virale sur les réseaux sociaux',
      'Rupture de stock du produit',
      'Couverture médiatique locale',
      "Renforcement de l'image innovante de L'Igloo",
      'Acquisition de nouveaux clients jeunes',
      'Plus de 500 partages sur Instagram',
    ],
  },
  {
    id: 'tagliatelle-crepes',
    name: 'Tagliatelle de crêpes',
    coverAsset: 'igloo-projects/tagliatelle-crepes.png',
    date: '2024',
    client: "L'Igloo - Le Monde de la Glace",
    objectif:
      "Promouvoir une création pâtissière originale qui marie tradition (crêpes) et innovation (présentation en tagliatelles) pour attirer une clientèle gourmande à la recherche de nouveauté.",
    contexte:
      "Dans un marché saturé de desserts classiques, L'Igloo cherchait à se différencier avec des créations innovantes qui surprennent et séduisent. Les Tagliatelles Gourmandes représentent cette approche créative de la pâtisserie glacée.",
    solution:
      "Photo professionnelle mettant en valeur la présentation unique en tagliatelles de crêpes, mise en scène avec boule de glace vanille, fraises fraîches et billes d'Oréo, création d'un visuel appétissant avec prix attractif (8,90€), intégration du logo Glacier Artisan pour renforcer l'identité de marque, diffusion sur Instagram, Facebook et en point de vente.",
    resultats: [
      'Visuel très engageant sur les réseaux sociaux',
      "Produit signature de L'Igloo",
      'Excellentes ventes du produit',
      'Demandes de clients pour des variantes',
      "Renforcement de l'image créative et innovante",
      'Partages organiques par les clients',
    ],
  },
  {
    id: 'patisserie-st-valentin',
    name: 'Pâtisserie St Valentin',
    coverAsset: 'igloo-projects/patisserie-st-valentin.png',
    date: 'Février 2024',
    client: "L'Igloo - Le Monde de la Glace",
    objectif:
      "Créer une gamme de desserts glacés romantiques pour la Saint-Valentin et développer une communication visuelle qui capture l'essence de cette fête de l'amour.",
    contexte:
      "La Saint-Valentin est une opportunité commerciale majeure pour les glaciers artisanaux. L'Igloo devait proposer des créations à la fois esthétiques et gourmandes qui séduisent les couples et génèrent des ventes.",
    solution:
      "Création des 'Magnums St Valentin' en forme de cœur rouge pailleté avec cœur blanc vanille au centre, développement d'un packaging élégant avec bâtonnets en bois, conception de visuels romantiques mettant en avant le caractère artisanal, campagne sur les réseaux sociaux avec hashtags #StValentin #AmourGlacé, proposition de packs cadeaux pour couples.",
    resultats: [
      'Succès commercial majeur pour la Saint-Valentin',
      'Visuels très partagés sur Instagram',
      'Commandes anticipées record',
      "Création d'un produit récurrent chaque année",
      'Renforcement du positionnement premium',
      'Fidélisation de la clientèle couple',
    ],
  },
  {
    id: 'crepe-epinard',
    name: 'Crêpe épinard',
    date: '2024',
    client: "L'Igloo - Le Monde de la Glace",
    objectif:
      "Développer une offre salée innovante pour diversifier le menu de L'Igloo et attirer une clientèle à la recherche d'options déjeuner saines et originales.",
    contexte:
      "L'Igloo, traditionnellement connu pour ses desserts glacés, souhaitait élargir son offre avec des créations salées qui permettent d'attirer des clients tout au long de la journée, pas seulement pour le dessert.",
    solution:
      "Création d'une crêpe salée à l'épinard avec garniture gourmande, développement de visuels appétissants pour la communication digitale, mise en avant du caractère frais et sain du produit, intégration dans le menu avec un positionnement 'pause déjeuner', campagne de lancement sur les réseaux sociaux.",
    resultats: [
      "Diversification réussie de l'offre",
      'Nouvelles occasions de consommation',
      'Acquisition de nouveaux segments de clientèle',
      'Augmentation du panier moyen',
      'Image de marque plus complète',
    ],
  },
  {
    id: 'trend',
    name: 'Trend',
    date: '2024',
    client: "L'Igloo - Le Monde de la Glace",
    objectif:
      "Créer des contenus courts et viraux inspirés des dernières tendances des réseaux sociaux pour augmenter la visibilité de L'Igloo auprès d'une audience jeune et connectée.",
    contexte:
      "Les réseaux sociaux évoluent constamment avec de nouvelles tendances virales (Reels, TikTok, challenges). L'Igloo devait s'adapter à ces formats pour rester pertinent et toucher les millennials et la Génération Z.",
    solution:
      "Veille active des tendances sur Instagram, TikTok et Facebook, adaptation des formats populaires (transitions, ASMR, behind-the-scenes) au contexte de L'Igloo, création de Reels courts et percutants montrant la préparation des desserts, participation à des challenges viraux, utilisation de musiques trending, collaboration avec des micro-influenceurs locaux.",
    resultats: [
      'Croissance significative de l\'audience jeune',
      'Augmentation de 300% des vues sur les Reels',
      'Plusieurs contenus viraux avec +10k vues',
      'Renforcement de la présence digitale',
      "Modernisation de l'image de marque",
      'Acquisition de nouveaux clients via les réseaux sociaux',
    ],
  },
];

export const iglooProjectsById: Record<string, IglooProject> = Object.fromEntries(
  iglooProjectsList.map((p) => [p.id, p]),
);
