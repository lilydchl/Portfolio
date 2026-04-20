// Seed data: project list extracted from src/app/pages/Projects.tsx (main branch).
// This is only the INDEX data (id, name, category, categoryLabel, coverAsset).
// Full detail data (objectif, contexte, cibles, solution, resultats, visuels, subProjects, etc.)
// is in src/app/pages/ProjectDetail.tsx on main — to be ported during Phase 6
// via `git show main:src/app/pages/ProjectDetail.tsx`.
//
// The `coverAsset` field references the new semantic path under src/assets/ (see asset-map.json).

export type Category = 'monde-glace' | 'ecole-numerique' | 'yvently' | 'telemag-plus' | 'divers';

export interface ProjectIndex {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  coverAsset?: string;
}

export const projectsList: ProjectIndex[] = [
  // Le Monde de la Glace
  { id: 'lgm',                     name: 'Lgm',                                                       category: 'monde-glace',    categoryLabel: 'Le Monde de la Glace', coverAsset: 'projects/monde-glace/lgm-logo.png' },
  { id: 'rafaello',                name: 'Rafaello',                                                  category: 'monde-glace',    categoryLabel: 'Le Monde de la Glace', coverAsset: 'projects/monde-glace/rafaello-logo.png' },
  { id: 'igloo',                   name: "L'igloo",                                                   category: 'monde-glace',    categoryLabel: 'Le Monde de la Glace', coverAsset: 'projects/monde-glace/igloo-logo.png' },
  { id: 'pandas',                  name: 'Pandas',                                                    category: 'monde-glace',    categoryLabel: 'Le Monde de la Glace', coverAsset: 'projects/monde-glace/pandas-logo.png' },
  // École du Numérique
  { id: 'collab-improbable',       name: 'Collab improbable – Billie Eilish x Pizza Hut',             category: 'ecole-numerique', categoryLabel: 'École du Numérique',  coverAsset: 'projects/ecole-numerique/billie-eilish-pizzahut.png' },
  { id: 'reel-edn',                name: 'Reel edn',                                                  category: 'ecole-numerique', categoryLabel: 'École du Numérique',  coverAsset: 'projects/ecole-numerique/reel-edn-cover.png' },
  { id: 'proxite',                 name: 'Proxité',                                                   category: 'ecole-numerique', categoryLabel: 'École du Numérique',  coverAsset: 'projects/ecole-numerique/proxite-affiche.png' },
  { id: 'pardon',                  name: 'Pardon! – Lava Flow',                                       category: 'ecole-numerique', categoryLabel: 'École du Numérique',  coverAsset: 'projects/ecole-numerique/pardon-cover.png' },
  { id: 'pantoufle-pepere',        name: 'La pantoufle à pépère',                                     category: 'ecole-numerique', categoryLabel: 'École du Numérique' },
  { id: 'affiche-film-fictive',    name: 'Affiche de film fictive',                                   category: 'ecole-numerique', categoryLabel: 'École du Numérique',  coverAsset: 'projects/ecole-numerique/vaiana-lego-affiche.png' },
  { id: 'remise-diplomes-egc',     name: 'Soirée remise des diplômes egc',                            category: 'ecole-numerique', categoryLabel: 'École du Numérique',  coverAsset: 'projects/ecole-numerique/remise-diplomes-cover.png' },
  { id: 'newsletter-nespresso',    name: 'Newsletter nespresso',                                      category: 'ecole-numerique', categoryLabel: 'École du Numérique',  coverAsset: 'projects/ecole-numerique/nespresso-logo.png' },
  // Yvently
  { id: 'soiree-corporate',        name: 'Organisation soirée corporate pour un client',              category: 'yvently',        categoryLabel: 'Yvently',              coverAsset: 'projects/yvently/soiree-corporate.jpg' },
  { id: 'faire-part-mariage',      name: 'Faire part de mariage digital sur mesure',                  category: 'yvently',        categoryLabel: 'Yvently',              coverAsset: 'projects/yvently/faire-part-mariage.png' },
  { id: 'soiree-april',            name: "Organisation de la soirée de fin d'année – April",          category: 'yvently',        categoryLabel: 'Yvently',              coverAsset: 'projects/yvently/soiree-april-cover.png' },
  // Télémag Plus
  { id: 'realisation-interview',   name: "Réalisation d'interview",                                   category: 'telemag-plus',   categoryLabel: 'Télémag Plus',         coverAsset: 'projects/telemag-plus/interview-april-cover.jpg' },
  { id: 'soiree-caritative-porsche', name: 'Soirée caritative Porsche',                               category: 'telemag-plus',   categoryLabel: 'Télémag Plus',         coverAsset: 'projects/telemag-plus/porsche-soiree-new.jpg' },
  // Divers
  { id: 'animal-show',             name: 'Animal show',                                               category: 'divers',         categoryLabel: 'Divers',               coverAsset: 'projects/divers/animal-show-egc.jpg' },
  { id: 'vide-dressing',           name: 'Vide dressing',                                             category: 'divers',         categoryLabel: 'Divers',               coverAsset: 'projects/divers/vide-dressing-affiche.png' },
];

export interface CategoryInfo {
  id: Category;
  label: string;
  description: string;
  points: string[];
  cibles: string[];
  logoAsset: string;
}

export const categoriesInfo: CategoryInfo[] = [
  {
    id: 'monde-glace',
    label: 'Le Monde de la Glace',
    description: "Le Monde de la Glace est une entreprise réunionnaise spécialisée dans la fabrication artisanale de glaces et de sorbets, créée en 2002 et basée au Port. Elle développe et fournit une large gamme de produits glacés, notamment des crèmes glacées et des sorbets tropicaux sous sa propre marque et la marque Panda's, distribués en dizaine de points de vente répartis sur plusieurs enseignes à La Réunion. L'entreprise fournit également une multitude de revendeurs locaux, ce qui en fait un acteur majeur de l'univers des desserts glacés sur l'île.\n\nL.G.M. – Le Glacier Moderne est une franchise de glaciers artisanaux implantée à La Réunion depuis plusieurs décennies, avec plusieurs points de vente proposant des glaces et sorbets artisanaux aux parfums variés, disponibles sur place ou à emporter.\n\nL'Igloo est un glacier historique de Saint‑Denis, ouvert depuis 1988, réputé pour ses glaces artisanales, ses vacherins et autres desserts glacés. L'établissement dispose de plusieurs salles et d'un espace snack, ce qui en fait un lieu de pause rafraîchissante incontournable au cœur du centre‑ville.",
    points: ['7 points de vente LGM', "L'enseigne emblématique IGLOO", "RAFFAELLO et PANDA'S"],
    cibles: ['Familles et enfants', 'Jeunes adultes (18-35 ans)', 'Touristes à La Réunion', 'Amateurs de glaces artisanales'],
    logoAsset: 'categories/monde-glace-logo.png',
  },
  {
    id: 'ecole-numerique',
    label: 'École du Numérique',
    description: "L'École du Numérique (974) forme aux métiers du digital et propose des parcours en alternance pour développer des compétences en développement, marketing digital et cybersécurité. L'école met l'accent sur l'immersion professionnelle et les projets concrets, afin de préparer des talents opérationnels pour le marché réunionnais.",
    points: ['Formation en communication digitale', 'Projets créatifs et innovants', 'Préparation aux métiers du digital'],
    cibles: ['Futurs étudiants (post-bac)', 'Étudiants en reconversion', "Parents d'élèves", 'Entreprises partenaires'],
    logoAsset: 'projects/ecole-numerique/edn-logo.png',
  },
  {
    id: 'yvently',
    label: 'Yvently',
    description: "Yvently est une entreprise qui propose à la fois des services de communication et des prestations événementielles. Elle accompagne les entreprises dans leur communication à travers la création de contenus et de supports visuels, et propose également des services événementiels pour les particuliers et les professionnels. Cela inclut la location de mobilier, la mise en place de décorations, ainsi que l'organisation et la coordination d'événements avec la gestion des différents prestataires.",
    points: ['Services de communication et création de contenus', "Organisation et coordination d'événements", 'Location de mobilier et décoration', 'Gestion de prestataires'],
    cibles: ['Entreprises', 'Particuliers', 'Professionnels', "Organisateurs d'événements"],
    logoAsset: 'projects/yvently/yvently-logo.png',
  },
  {
    id: 'telemag-plus',
    label: 'Télémag Plus',
    description: "Télémag Plus est un magazine réunionnais qui propose un guide des programmes TV mais aussi des articles variés sur l'actualité locale. Il met en avant des initiatives réunionnaises, des talents, des projets, ainsi que des sujets de société, culture et divertissement. Son objectif est d'informer et de valoriser les acteurs et dynamiques de l'île auprès d'un large public.",
    points: ['Guide des programmes TV', "Articles sur l'actualité locale", 'Mise en avant des talents réunionnais', 'Sujets société, culture et divertissement'],
    cibles: ['Grand public réunionnais', 'Talents et acteurs locaux', 'Passionnés de culture locale', 'Téléspectateurs'],
    logoAsset: 'projects/telemag-plus/telemag-plus-logo.png',
  },
];
