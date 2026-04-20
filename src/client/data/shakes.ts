export interface Shake {
  id: string;
  name: string;
  coverAsset?: string;
  date: string;
  duree: string;
  description: string;
  objectif: string;
  composition: string[];
  ventes: string;
  impact: string[];
}

export const shakesList: Shake[] = [
  {
    id: 'smarties-party-shake',
    name: 'Smarties Party Shake',
    coverAsset: 'shakes/smarties-party-shake.png',
    date: 'Mars 2024',
    duree: '1 mois',
    description:
      "Un milkshake festif et coloré inspiré des célèbres bonbons Smarties, conçu pour apporter une touche de gaieté et de nostalgie gourmande. Ce shake ludique et Instagram-friendly cible particulièrement les familles et les enfants.",
    objectif:
      "Créer un produit viral sur les réseaux sociaux grâce à son aspect visuel coloré et attractif, tout en capitalisant sur la nostalgie des bonbons d'enfance pour toucher un public intergénérationnel.",
    composition: [
      'Base de glace vanille premium',
      'Lait entier onctueux',
      'Smarties écrasés mélangés dans le shake',
      'Chantilly généreuse',
      'Smarties entiers en topping',
      'Sauce chocolat en décoration',
    ],
    ventes: '850+ shakes vendus',
    impact: [
      'Forte viralité sur Instagram et TikTok',
      'Augmentation de 40% du trafic en boutique pendant le mois',
      'Engagement client élevé avec partages photos',
      'Demandes de retour du produit les mois suivants',
    ],
  },
  {
    id: 'dolce-vita-shake',
    name: 'Dolce Vita Shake',
    coverAsset: 'shakes/dolce-vita-shake.png',
    date: 'Juin 2024',
    duree: '1 mois',
    description:
      "Un milkshake raffiné inspiré de l'élégance italienne, associant la douceur de la glace vanille à la richesse du café et des saveurs méditerranéennes. Une expérience premium pensée pour les adultes en quête de sophistication.",
    objectif:
      'Proposer une alternative haut de gamme ciblant une clientèle adulte et élargir le positionnement de LGM au-delà des produits uniquement destinés aux enfants.',
    composition: [
      'Glace vanille artisanale',
      'Espresso corsé',
      'Amaretti écrasés',
      'Chantilly mascarpone',
      'Copeaux de chocolat noir',
      'Poudre de cacao',
    ],
    ventes: '720+ shakes vendus',
    impact: [
      'Repositionnement réussi vers une clientèle adulte',
      'Panier moyen en hausse de 25%',
      'Excellents retours sur la qualité et le raffinement',
      "Création d'une image premium pour la marque",
    ],
  },
  {
    id: 'popshake',
    name: 'Popshake',
    coverAsset: 'shakes/popshake.png',
    date: 'Avril 2024',
    duree: '1 mois',
    description:
      'Un milkshake explosif inspiré des pop-corn caramélisés, alliant textures croquantes et saveurs sucrées-salées. Une expérience sensorielle originale qui surprend et ravit les papilles.',
    objectif:
      'Proposer une saveur audacieuse et différenciante pour créer la surprise et stimuler la curiosité des clients habitués aux parfums plus classiques.',
    composition: [
      'Glace caramel beurre salé',
      'Lait malté',
      'Pop-corn caramélisé mixé',
      'Chantilly vanille',
      'Pop-corn caramélisé entier en topping',
      'Filet de caramel',
    ],
    ventes: '680+ shakes vendus',
    impact: [
      'Concept original générant buzz et curiosité',
      'Forte attractivité auprès des 15-25 ans',
      'Contenus créatifs partagés sur les réseaux sociaux',
      'Différenciation réussie par rapport à la concurrence',
    ],
  },
  {
    id: 'monstershake',
    name: 'Monstershake',
    coverAsset: 'shakes/monstershake.png',
    date: 'Octobre 2024',
    duree: '1 mois',
    description:
      "Un milkshake spectaculaire spécialement conçu pour Halloween, avec un visuel terrifiant et gourmand. Surmonté de décorations monstrueuses, ce shake géant est pensé pour l'effet « wow » et le partage sur les réseaux sociaux.",
    objectif:
      "Capitaliser sur l'événement Halloween pour créer un produit à forte valeur ajoutée, hautement instagrammable, et renforcer la présence de la marque pendant cette période festive.",
    composition: [
      'Glace chocolat noir intense',
      'Lait chocolaté',
      'Brownie écrasé',
      'Chantilly noire (colorant alimentaire)',
      'Décoration monstre en pâte à sucre',
      'Bonbons Halloween variés',
      'Sauce chocolat coulante',
    ],
    ventes: '950+ shakes vendus',
    impact: [
      'Record de ventes pour un shake signature',
      'Viralité exceptionnelle sur TikTok et Instagram',
      'Augmentation de 60% du trafic en boutique en octobre',
      'Demande client pour reproduire le concept à Noël',
    ],
  },
  {
    id: 'sneakyshake',
    name: 'Sneakyshake',
    coverAsset: 'shakes/sneakyshake.png',
    date: 'Août 2024',
    duree: '1 mois',
    description:
      "Un milkshake mystérieux et ludique avec une saveur surprise révélée uniquement après achat. Cette approche marketing joue sur la curiosité et l'effet de surprise pour créer l'engagement.",
    objectif:
      "Créer un mécanisme d'engagement et de gamification autour du produit, en transformant l'achat en expérience interactive et surprenante.",
    composition: [
      'Saveur mystère variant chaque semaine',
      'Glace artisanale du parfum du jour',
      'Ingrédients secrets',
      'Chantilly colorée selon la saveur',
      'Toppings surprise',
      'Étiquette révélant la composition après achat',
    ],
    ventes: '790+ shakes vendus',
    impact: [
      'Fort engagement et retours clients pour deviner la saveur',
      "Création de suspense et d'attente sur les réseaux sociaux",
      'Clients réguliers revenant tester les nouvelles saveurs',
      "Concept innovant qui renforce l'image créative de LGM",
    ],
  },
  {
    id: 'xmas-shake',
    name: "Xmas'shake",
    coverAsset: 'shakes/xmas-shake.png',
    date: 'Décembre 2024',
    duree: '1 mois',
    description:
      "Un milkshake féerique aux saveurs de Noël, combinant épices chaudes, pain d'épices et décoration festive. Ce shake incarne la magie des fêtes de fin d'année et crée une ambiance conviviale et chaleureuse.",
    objectif:
      'Capitaliser sur la période festive de Noël pour proposer un produit saisonnier premium qui célèbre les traditions et renforce le lien émotionnel avec les clients.',
    composition: [
      'Glace vanille aux épices de Noël',
      'Lait chaud parfumé cannelle',
      "Morceaux de pain d'épices",
      'Chantilly à la vanille bourbon',
      'Biscuits de Noël décorés',
      'Poudre de cannelle et étoiles en sucre',
    ],
    ventes: '1100+ shakes vendus',
    impact: [
      'Record absolu de ventes pour un shake signature',
      'Ambiance festive renforcée en boutique',
      'Clientèle fidèle revenue spécifiquement pour ce produit',
      "Excellent ambassadeur de la marque pendant les fêtes",
    ],
  },
];

export const shakesById: Record<string, Shake> = Object.fromEntries(
  shakesList.map((s) => [s.id, s]),
);
