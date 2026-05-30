export type Category = 'monde-glace' | 'ecole-numerique' | 'yvently' | 'telemag-plus' | 'divers';

export interface SubProject {
  id: string;
  name: string;
  coverAsset?: string;
}

export interface Visuel {
  asset: string;
  label?: string;
}

export interface ClientRequest {
  senderName: string;
  senderRole: string;
  company?: string;
  date: string;
  intro: string;
  items: { label: string; value: string }[];
  outro?: string;
}

export interface Project {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  coverAsset?: string;
  date: string;
  client: string;
  presentation?: string;
  objectif: string;
  contexte: string;
  cibles: string[];
  solution: string | string[];
  resultats: string[];
  instagram?: string;
  subProjects?: SubProject[];
  visuels?: Visuel[];
  preuves?: Visuel[];
  invitationUrl?: string;
  clientRequest?: ClientRequest;
}

export const projectsList: Project[] = [
  {
    id: 'lgm',
    name: 'LGM',
    category: 'monde-glace',
    categoryLabel: 'Le Monde de la Glace',
    coverAsset: 'projects/monde-glace/lgm-logo.png',
    date: '2024',
    client: 'Le Monde de la Glace',
    instagram: 'https://www.instagram.com/lgm_leglaciermoderne',
    presentation:
      "L.G.M. – Le Glacier Moderne est une franchise de glaciers artisanaux implantée à La Réunion depuis plusieurs décennies. Sur l'île, ce sont plusieurs points de vente qui proposent des glaces et sorbets artisanaux aux parfums variés, disponibles à la fois sur place ou à emporter. LGM est reconnu pour son savoir‑faire artisanal et sa capacité à offrir une pause gourmande dans différentes villes de l'île, avec des boutiques réparties dans plusieurs communes réunionnaises.",
    objectif:
      "Créer une identité visuelle forte et mémorable pour la marque LGM (Le Glacier Moderne), reflétant l'univers gourmand et raffiné des glaces artisanales.",
    contexte:
      "LGM souhaitait se démarquer dans le secteur compétitif de la glacerie artisanale à La Réunion en développant une image de marque professionnelle et attractive.",
    cibles: ['Consommateurs locaux', 'Touristes', 'Familles'],
    solution:
      "Conception d'un logo emblématique avec les lèvres rouges, création d'une charte graphique complète incluant couleurs, typographies et éléments visuels. Déploiement sur tous les supports de communication.",
    resultats: [
      'Identité visuelle reconnaissable et mémorable',
      'Augmentation de la visibilité de la marque',
      'Cohérence sur tous les supports de communication',
      "Renforcement de l'image premium de la marque",
    ],
    subProjects: [
      { id: 'shake-du-moment', name: 'Shake du moment', coverAsset: 'shakes/dolce-vita-shake.png' },
      { id: 'crepes', name: 'Crêpes' },
      { id: 'calendrier-avent', name: "Calendrier de l'avent" },
      { id: 'parfums-occasion', name: "Parfums d'occasion" },
    ],
  },
  {
    id: 'rafaello',
    name: 'Rafaello',
    category: 'monde-glace',
    categoryLabel: 'Le Monde de la Glace',
    coverAsset: 'projects/monde-glace/rafaello-logo.png',
    date: '2024',
    client: 'Le Monde de la Glace',
    instagram: 'https://www.instagram.com/rafaello_run',
    objectif:
      'Promouvoir le nouveau parfum de glace Rafaello à travers une campagne visuelle gourmande et engageante.',
    contexte:
      "Lancement d'un nouveau parfum inspiré de la célèbre confiserie, nécessitant une communication ciblée pour séduire les amateurs de saveurs raffinées.",
    cibles: ['Amateurs de glaces', 'Familles', 'Touristes'],
    solution:
      "Création de visuels appétissants pour les réseaux sociaux, mise en place d'une stratégie de contenu avec photos produit et storytelling autour du parfum.",
    resultats: [
      'Forte engagement sur les réseaux sociaux',
      'Augmentation des ventes du parfum',
      "Création d'une communauté de fans du produit",
      'Succès de la campagne de lancement',
    ],
  },
  {
    id: 'igloo',
    name: "L'Igloo",
    category: 'monde-glace',
    categoryLabel: 'Le Monde de la Glace',
    coverAsset: 'projects/monde-glace/igloo-logo.png',
    date: '2024',
    client: 'Le Monde de la Glace',
    instagram: 'https://www.instagram.com/igloo.leffet.glace',
    presentation:
      "L'Igloo est un glacier historique de Saint‑Denis, ouvert depuis 1988, qui fait partie des adresses gourmandes les plus anciennes de la ville. Réputé pour ses glaces artisanales, ses vacherins et autres desserts glacés, il propose un large choix de parfums traditionnels et de coupes savoureuses. L'établissement dispose de plusieurs salles et d'un espace snack, ce qui en fait un lieu de pause rafraîchissante incontournable pour les familles et amis au cœur du centre‑ville.",
    objectif:
      "Développer la communication digitale et l'identité visuelle de L'Igloo, glacier historique de Saint‑Denis.",
    contexte:
      "Besoin de créer un événement marquant et une expérience client mémorable autour de l'univers glacé de la marque.",
    cibles: ['Familles', 'Amateurs de glaces', 'Touristes'],
    solution:
      "Conception d'une campagne visuelle et événementielle autour du thème de l'igloo, création de contenus photos et vidéos pour documenter l'expérience.",
    resultats: [
      'Événement viral sur les réseaux sociaux',
      'Couverture médiatique locale',
      'Expérience client unique et mémorable',
      "Renforcement de l'identité de marque",
    ],
    subProjects: [
      { id: 'buches-de-noel', name: 'Bûches de Noël' },
      { id: 'patisserie-halloween', name: "Pâtisserie d'Halloween", coverAsset: 'igloo-projects/patisserie-halloween.png' },
      { id: 'tagliatelle-crepes', name: 'Tagliatelle de crêpes' },
      { id: 'patisserie-st-valentin', name: 'Pâtisserie St Valentin', coverAsset: 'igloo-projects/patisserie-st-valentin.png' },
      { id: 'crepe-epinard', name: 'Crêpe épinard' },
      { id: 'trend', name: 'Trend' },
    ],
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'monde-glace',
    categoryLabel: 'Le Monde de la Glace',
    coverAsset: 'projects/monde-glace/pandas-logo.png',
    date: '2024',
    client: 'Le Monde de la Glace',
    objectif:
      "Créer une campagne ludique et attachante autour du thème des pandas pour séduire une clientèle familiale.",
    contexte:
      "Volonté de créer un produit et une communication adaptés aux familles avec enfants, tout en conservant l'identité premium de la marque.",
    cibles: ['Familles', 'Enfants'],
    solution:
      "Développement d'une gamme visuelle mignonne et attractive avec des illustrations de pandas, création de contenus adaptés pour toucher les parents et les enfants.",
    resultats: [
      'Forte attraction auprès des familles',
      'Contenus viraux sur les réseaux sociaux',
      'Augmentation du trafic en point de vente',
      "Création d'une mascotte identifiable",
    ],
  },
  {
    id: 'collab-improbable',
    name: 'Collab improbable – Billie Eilish x Pizza Hut',
    category: 'ecole-numerique',
    categoryLabel: 'École du Numérique',
    coverAsset: 'projects/ecole-numerique/billie-eilish-pizzahut.png',
    date: '2024',
    client: 'École du Numérique (exercice pédagogique)',
    presentation:
      "Dans le cadre d'un exercice pédagogique en stratégie de communication, il m'a été demandé d'imaginer une collaboration fictive et inattendue entre un artiste musical contemporain et une marque. J'ai choisi la collaboration entre Billie Eilish, artiste vegan et engagée, et Pizza Hut, marque internationale de restauration rapide. Le caractère paradoxal repose sur l'image éthique et engagée de l'artiste face à l'image industrielle, souvent associée à la malbouffe, de la marque. Cette opposition constituait un territoire créatif fort, permettant de construire une stratégie originale autour d'une pizza vegan édition limitée.",
    objectif:
      "Produire différents livrables stratégiques et créatifs : mapping de positionnement, moodboard, copy stratégie, landing page, design d'une pochette d'album et création d'un produit dérivé — le tout autour d'une collaboration fictive crédible entre Billie Eilish et Pizza Hut.",
    contexte:
      "L'exercice exigeait de créer un partenariat crédible malgré le paradoxe entre les deux univers, de respecter les valeurs de Billie Eilish (éthique, environnement, inclusion), de concevoir des livrables visuels cohérents entre eux malgré des identités très éloignées, et de produire plusieurs supports variés (print, digital, produit, branding) dans un temps limité. Les acteurs analysés incluaient Billie Eilish (artiste internationale engagée dans le véganisme), Pizza Hut (en recherche de renouvellement d'image), leurs fans et consommateurs respectifs, ainsi qu'un benchmark de collaborations artistiques existantes.",
    cibles: ['Fans de Billie Eilish', 'Consommateurs de Pizza Hut', 'Jeunes engagés (véganisme, environnement)', 'Amateurs de pop culture'],
    solution: [
      "Veille exploratoire — analyse détaillée de l'artiste (style, couleurs, valeurs) et de Pizza Hut (positionnement, identité visuelle), benchmark de collaborations existantes via Instagram, TikTok, sites officiels et articles spécialisés.",
      'Construction stratégique — mapping de positionnement, définition des cibles croisées, moodboard et copy stratégie complète (problématique, promesse, ton, preuves, message).',
      "Création et production — pochette d'album dark-pop, pizza vegan édition limitée avec boîte personnalisée, landing page promotionnelle, mockups et visuels produits.",
      'Mise en cohérence visuelle de l\'ensemble avec une charte graphique ad hoc.',
      'Outils utilisés : Photoshop, Illustrator, Canva, Google Workspace.',
    ],
    resultats: [
      "Pochette d'album fictive Billie Eilish x Pizza Hut",
      'Pizza vegan édition limitée + boîte personnalisée',
      'Landing page de présentation du concept',
      'Moodboard et charte graphique complète',
      'Synthèse justificative et copy stratégie',
      'Maîtrise des compétences du Bloc 2 : veille opérationnelle et création de contenus',
      'Cohérence globale stratégie → création → production validée',
    ],
  },
  {
    id: 'reel-edn',
    name: 'Reel EDN',
    category: 'ecole-numerique',
    categoryLabel: 'École du Numérique',
    coverAsset: 'projects/ecole-numerique/reel-edn-cover.png',
    date: '2024',
    client: 'École du Numérique',
    objectif:
      "Produire des reels dynamiques et engageants pour promouvoir l'École du Numérique sur les réseaux sociaux.",
    contexte:
      "Besoin de contenus vidéo courts et percutants pour attirer de nouveaux étudiants et valoriser la vie étudiante.",
    cibles: ['Étudiants', 'Parents', 'Jeunes'],
    solution:
      "Création de reels créatifs mettant en scène la vie à l'école, montage vidéo rythmé, utilisation des tendances TikTok/Instagram.",
    resultats: [
      'Augmentation de la portée organique',
      'Engagement élevé des audiences cibles',
      "Renforcement de l'image moderne de l'école",
      'Maîtrise des formats vidéo courts',
    ],
  },
  {
    id: 'proxite',
    name: 'PROXITÉ',
    category: 'ecole-numerique',
    categoryLabel: 'École du Numérique',
    coverAsset: 'projects/ecole-numerique/proxite-affiche.png',
    date: '2024',
    client: 'Association Proxité',
    objectif:
      "Créer une série d'affiches de prévention pour sensibiliser un large public, notamment les jeunes, à cinq thématiques clés : l'alcool, la drogue, la cigarette, les écrans et la conduite dangereuse.",
    contexte:
      "Dans le cadre d'une campagne de sensibilisation fictive menée avec l'association Proxité, nous avons conçu une série d'affiches de prévention abordant cinq thématiques clés : l'alcool, la drogue, la cigarette, les écrans et la conduite dangereuse. L'objectif était de toucher un large public, notamment les jeunes, en adoptant un ton accessible et percutant.",
    cibles: ['Jeunes', 'Adolescents', 'Parents'],
    solution:
      "Nous avons opté pour des visuels minimalistes, mettant en scène des personnages en forme de bonhommes bâtons engageant des dialogues courts et efficaces. Ce choix graphique permet une identification immédiate et une mémorisation rapide du message, tout en créant une proximité avec le public cible.",
    resultats: [
      'Campagne de prévention impactante et mémorable',
      'Visuels minimalistes facilement partageables sur les réseaux sociaux',
      'Tone of voice accessible touchant efficacement les jeunes',
      'Messages de prévention clairs et percutants',
      'Maîtrise de la communication engagée et responsable',
    ],
  },
  {
    id: 'pardon',
    name: 'Pardon! Création – Collection "Lava Flow"',
    category: 'ecole-numerique',
    categoryLabel: 'École du Numérique',
    coverAsset: 'projects/ecole-numerique/pardon-cover.png',
    date: '2025',
    client: 'Pardon! Création (exercice fictif)',
    objectif:
      "Promouvoir la sortie de la nouvelle collection Lava Flow, attirer l'attention grâce à un visuel fort, donner envie de découvrir la collection et mettre en valeur l'univers graphique et décalé de la marque.",
    contexte:
      "Ce projet a été réalisé dans le cadre d'un exercice fictif en BTS Communication. L'objectif était de concevoir des supports publicitaires pour la marque réunionnaise Pardon! Création à l'occasion du lancement de sa nouvelle collection Printemps / Été 2025 intitulée « Lava Flow ». Cette collection s'inspire des éruptions du Piton de la Fournaise et reprend des couleurs et motifs évoquant la lave et l'énergie volcanique. Il fallait imaginer une communication visuelle capable d'attirer l'attention et de promouvoir cette nouvelle collection.",
    cibles: [
      'Jeunes adultes et adultes (20–50 ans) intéressés par la mode',
      'Personnes attirées par des vêtements originaux et colorés',
      'Habitants de La Réunion sensibles à la culture locale',
      "Touristes cherchant un souvenir inspiré de l'île",
      'Clients fidèles de la marque',
    ],
    solution:
      "Création d'une publicité visuelle inspirée de l'univers volcanique : mannequin portant une robe aux motifs inspirés de la lave, illustration d'un volcan en éruption en arrière-plan, slogan « Votre garde-robe entre en éruption ». Intégration du logo Pardon!, mention de la nouvelle collection disponible, visuels de plusieurs produits (robe, sac, accessoires) et court texte expliquant l'inspiration. Couleurs dominantes : rouge, orange et noir, en rappel de la lave et de l'énergie volcanique.",
    resultats: [
      'Visuel impactant et facilement identifiable',
      'Univers graphique cohérent avec le thème volcanique',
      'Mise en avant claire de la nouvelle collection',
      "Communication qui attire l'attention et suscite la curiosité",
    ],
    visuels: [
      { asset: 'projects/ecole-numerique/pardon-visuel-1.png', label: 'Affiche collection Lava Flow' },
      { asset: 'projects/ecole-numerique/pardon-visuel-2.png', label: 'Visuel promotionnel Lava Flow' },
    ],
  },
  {
    id: 'affiche-film-fictive',
    name: 'Affiche de film fictive',
    category: 'ecole-numerique',
    categoryLabel: 'École du Numérique',
    coverAsset: 'projects/ecole-numerique/vaiana-lego-affiche.png',
    date: '2024',
    client: 'École du Numérique',
    objectif: "Créer une affiche de film fictive en détournant l'univers de Vaiana en style LEGO.",
    contexte:
      "Création d'une affiche fictive en détournant l'univers de Vaiana en style LEGO. Composition sur Photoshop avec intégration de 3 personnages principaux, éléments exotiques, travail des ombres et des effets pour un rendu réaliste.",
    cibles: ['Public général', 'Étudiants', 'Jeunes'],
    solution:
      "Utilisation de Photoshop pour créer un univers LEGO tropical avec personnages Vaiana, Maui et Pua, intégration d'éléments naturels (palmiers, océan, plage), travail minutieux des ombres et des reflets pour un rendu photoréaliste.",
    resultats: [
      'Affiche créative et originale mêlant deux univers',
      'Maîtrise de Photoshop et des techniques de photomanipulation',
      'Rendu photoréaliste des personnages LEGO',
      'Composition visuelle harmonieuse et immersive',
    ],
  },
  {
    id: 'remise-diplomes-egc',
    name: 'Soirée remise des diplômes EGC',
    category: 'ecole-numerique',
    categoryLabel: 'École du Numérique',
    coverAsset: 'projects/ecole-numerique/remise-diplomes-cover.png',
    date: '2024',
    client: 'EGC Réunion',
    objectif:
      "Créer l'identité visuelle et la communication pour la soirée de remise des diplômes de l'EGC.",
    contexte:
      'Événement majeur nécessitant une communication élégante et professionnelle pour célébrer la réussite des diplômés.',
    cibles: ['Diplômés', 'Familles', 'Invités'],
    solution:
      "Design d'invitations, création de visuels pour les réseaux sociaux, supports de communication pour l'événement, couverture photo/vidéo.",
    resultats: [
      'Événement réussi et mémorable',
      'Communication professionnelle et élégante',
      'Satisfaction des organisateurs et participants',
      'Expérience complète en communication événementielle',
    ],
  },
  {
    id: 'newsletter-nespresso',
    name: 'Newsletter Nespresso',
    category: 'ecole-numerique',
    categoryLabel: 'École du Numérique',
    coverAsset: 'projects/ecole-numerique/nespresso-logo.png',
    date: '2024',
    client: 'École du Numérique',
    objectif:
      "Concevoir une newsletter élégante et engageante pour Nespresso, mettant en valeur l'univers premium de la marque.",
    contexte:
      "Projet académique visant à créer une communication digitale haut de gamme pour une marque de luxe, en respectant son identité et ses codes visuels.",
    cibles: ['Clients Nespresso', 'Amateurs de café', 'Jeunes'],
    solution:
      "Création d'une newsletter responsive avec mise en page sophistiquée, intégration de visuels premium, rédaction de contenus engageants et appels à l'action efficaces.",
    resultats: [
      'Newsletter au design épuré et élégant',
      'Respect des codes de la marque Nespresso',
      'Maîtrise de la mise en page email responsive',
      'Capacité à créer du contenu premium',
    ],
  },
  {
    id: 'realisation-interview',
    name: "Réalisation d'interview",
    category: 'telemag-plus',
    categoryLabel: 'Télémag Plus',
    coverAsset: 'projects/telemag-plus/interview-april-cover.jpg',
    date: '2024',
    client: 'Télémag Plus',
    objectif:
      'Réaliser des interviews professionnelles de qualité pour la plateforme Télémag Plus, en mettant en avant des personnalités inspirantes de La Réunion.',
    contexte:
      "Télémag Plus souhaitait développer un format d'interview impactant pour valoriser les acteurs locaux et créer du contenu engageant pour leur audience.",
    cibles: ['Audience Télémag Plus', 'Personnalités locales', 'Amateurs de culture'],
    solution:
      "Préparation des interviews, conduite d'entretiens approfondis, captation vidéo et photo, montage et post-production, diffusion sur les plateformes digitales de Télémag Plus.",
    resultats: [
      'Interviews de qualité professionnelle',
      'Mise en valeur des personnalités locales',
      "Contenu engageant pour l'audience Télémag Plus",
      "Maîtrise complète du processus d'interview",
      'Développement de compétences en journalisme',
    ],
  },
  {
    id: 'soiree-caritative-porsche',
    name: 'Soirée caritative Porsche',
    category: 'telemag-plus',
    categoryLabel: 'Télémag Plus',
    coverAsset: 'projects/telemag-plus/porsche-soiree-new.jpg',
    date: '2024',
    client: 'Télémag Plus',
    objectif:
      "Assurer la couverture médiatique complète d'une soirée caritative prestigieuse organisée par Porsche, en capturant l'élégance de l'événement et son impact social.",
    contexte:
      "Porsche organisait une soirée caritative exclusive réunissant personnalités influentes, clients VIP et médias locaux pour lever des fonds au profit d'une cause sociale importante à La Réunion. L'événement nécessitait une couverture médiatique professionnelle pour maximiser sa visibilité et son impact.",
    cibles: ['Audience Télémag Plus', 'Personnalités influentes', 'Clients VIP'],
    solution:
      "Couverture complète de l'événement avec captation photo et vidéo haute qualité, interviews des participants et organisateurs, création de contenus pour les réseaux sociaux en temps réel, montage vidéo récapitulatif de la soirée, articles de fond mettant en avant les valeurs de l'événement et son impact caritatif.",
    resultats: [
      'Couverture médiatique complète et professionnelle',
      "Mise en valeur de l'engagement social de Porsche",
      'Contenus viraux sur les réseaux sociaux',
      'Visibilité maximale pour la cause caritative',
      "Renforcement de l'image de marque premium",
      'Expérience complète en journalisme événementiel haut de gamme',
    ],
    visuels: [{ asset: 'projects/telemag-plus/porsche-soiree-original.png' }],
  },
  {
    id: 'soiree-corporate',
    name: 'Organisation soirée corporate pour un client',
    category: 'yvently',
    categoryLabel: 'Yvently',
    coverAsset: 'projects/yvently/soiree-corporate.jpg',
    date: '2024',
    client: 'Client corporate via Yvently',
    objectif:
      "Organiser et communiquer autour d'une soirée corporate haut de gamme pour renforcer la cohésion d'équipe.",
    contexte:
      'Client corporate souhaitant organiser un événement professionnel mémorable avec une communication digitale avant, pendant et après l\'événement.',
    cibles: ['Équipe client', 'Partenaires', 'Fournisseurs'],
    solution:
      "Création de l'identité visuelle de l'événement, stratégie de communication digitale, couverture live sur les réseaux sociaux, contenus photos/vidéos.",
    resultats: [
      'Événement réussi avec retours clients excellents',
      'Communication digitale efficace et engageante',
      "Couverture complète de l'événement",
      'Renforcement de la relation client',
    ],
  },
  {
    id: 'faire-part-mariage',
    name: 'Faire-part de mariage digital sur mesure',
    category: 'yvently',
    categoryLabel: 'Yvently',
    coverAsset: 'projects/yvently/faire-part-mariage.png',
    date: '2024',
    client: 'Couple de futurs mariés via Yvently',
    presentation:
      "Ce projet consistait à concevoir un faire-part de mariage entièrement digital et personnalisé, pensé comme une véritable expérience interactive pour les invités. À l'heure où les codes du mariage se réinventent, ce faire-part sur mesure allie élégance, modernité et praticité, tout en reflétant l'univers unique du couple.",
    objectif:
      'Concevoir un faire-part de mariage digital interactif, élégant et personnalisé, capable de remplacer le faire-part papier traditionnel tout en offrant une expérience mémorable aux invités.',
    contexte:
      "Un couple souhaitait se démarquer avec un faire-part moderne, écoresponsable et à leur image. Ils voulaient un support digital facilement partageable (WhatsApp, email, réseaux sociaux) qui intègre toutes les informations pratiques du mariage tout en véhiculant l'émotion et l'esthétique de leur union. Le brief incluait un univers visuel romantique et raffiné, avec des tons doux et une typographie élégante.",
    cibles: ['Invités du mariage (famille, amis proches, collègues)', 'Couple de futurs mariés', 'Témoins et organisateurs'],
    solution:
      "Création d'un faire-part digital animé et interactif comprenant : une page d'accueil avec les prénoms du couple et la date du mariage en typographie élégante, une section storytelling retraçant leur histoire d'amour, les informations pratiques (lieu, horaires, dress code, hébergements), un formulaire RSVP intégré pour confirmer sa présence, une galerie photo du couple, et un compteur animé jusqu'au jour J. Le tout conçu avec une charte graphique sur mesure (palette de couleurs douces, motifs floraux, animations subtiles) et optimisé pour mobile. Outils utilisés : Canva, Figma, Photoshop.",
    resultats: [
      'Faire-part digital élégant et entièrement personnalisé',
      'Expérience utilisateur fluide et intuitive sur mobile',
      "Réduction de l'empreinte écologique par rapport au papier",
      'Facilité de partage via liens et réseaux sociaux',
      'Retours enthousiastes des invités et du couple',
      'Démonstration de compétences en design digital et UX',
    ],
    invitationUrl: 'https://omen-lift-01201595.figma.site/',
  },
  {
    id: 'soiree-april',
    name: "Organisation de la soirée de fin d'année – April",
    category: 'yvently',
    categoryLabel: 'Yvently',
    coverAsset: 'projects/yvently/soiree-april-cover.png',
    date: '2024',
    client: 'April',
    presentation:
      "Organisation complète de la soirée de fin d'année de l'entreprise April, le 19 décembre. De la recherche du lieu à la décoration finale, chaque détail a été pensé pour offrir une expérience festive et mémorable à l'ensemble des collaborateurs, tout en reflétant l'image professionnelle de l'entreprise.",
    objectif:
      "Organiser une soirée de fin d'année conviviale et élégante pour les collaborateurs. Assurer la coordination de tous les prestataires et éléments logistiques. Créer une identité visuelle cohérente pour les invitations et la décoration. Proposer une expérience personnalisée à chaque invité avec des éléments souvenirs.",
    contexte:
      "J'ai été chargée de mettre en œuvre la soirée de fin d'année de l'entreprise April, en coordonnant tous les aspects de l'événement. Contraintes : trouver un lieu adapté à l'ensemble des participants et au style de l'événement, gérer la logistique sonore et technique avec le prestataire sono, concevoir une décoration complète et harmonieuse sur place, produire des éléments personnalisés pour chaque collaborateur (boules de Noël personnalisées).",
    cibles: ["Collaborateurs de l'entreprise April"],
    solution:
      "Recherche et coordination : sélection et réservation du lieu, identification et coordination du prestataire sono pour l'animation musicale. Création graphique et invitations : conception du visuel des invitations en respectant l'identité de l'entreprise, diffusion aux collaborateurs. Décoration et personnalisation : mise en place complète de la décoration sur place (mobilier, éclairage, éléments festifs), création de boules de Noël personnalisées pour chaque employé en tant que souvenir unique. Gestion le jour J : supervision du déroulement de la soirée, coordination avec le prestataire sono, vérification de la décoration et des animations. Outils mobilisés : Canva (création du visuel des invitations et maquettes de décoration), coordination directe avec les prestataires et suivi logistique sur place.",
    resultats: [
      "Soirée de fin d'année réussie, chaleureuse et festive",
      'Chaque collaborateur est reparti avec un souvenir personnalisé',
      'Mise en valeur de la capacité à organiser des événements complets et soignés',
      "Compétences mobilisées : gestion de projet événementiel, création graphique, coordination de prestataires, organisation sur site, personnalisation d'objets",
    ],
    preuves: [
      {
        asset: 'projects/yvently/soiree-april-demande-client.jpg',
        label: 'Demande initiale du client — April',
      },
    ],
  },
  {
    id: 'animal-show',
    name: 'Animal Show',
    category: 'divers',
    categoryLabel: 'Divers',
    coverAsset: 'projects/divers/animal-show-egc.jpg',
    date: '2025',
    client: 'Animal Show – Salon Animalier (Parc du Colosse, Saint-André)',
    presentation:
      "Animal Show est un salon animalier réunionnais qui s'est déroulé du 7 au 11 mai au Parc du Colosse à Saint-André. L'événement rassemble passionnés, éleveurs, associations et professionnels du monde animal autour d'expositions, d'animations et de stands dédiés aux animaux de compagnie, oiseaux, reptiles et bien plus encore.",
    objectif:
      "Promouvoir l'Animal Show auprès du public cible en augmentant la notoriété et l'engagement sur les réseaux sociaux. Créer du contenu visuel attractif et cohérent avec l'identité de l'événement. Attirer un maximum de visiteurs et encourager la participation familiale. Gérer la communication avant et pendant l'événement, y compris les annonces, les portraits d'animaux et les interactions avec les internautes.",
    contexte:
      "Dans le cadre de mon rôle en communication événementielle, j'ai été chargée de concevoir et de gérer la communication digitale de l'événement Animal Show. Le salon ciblait principalement les familles, les enfants et les passionnés d'animaux, avec une présence sur les réseaux sociaux pour maximiser la visibilité avant et pendant l'événement. Contraintes : respect de l'identité visuelle et du ton destiné aux familles, publication régulière et programmée, création de contenu adapté à différents formats (posts statiques, carrousels, stories), capacité d'adaptation rapide face aux changements.",
    cibles: ['Familles', 'Enfants', "Passionnés d'animaux", 'Éleveurs', 'Associations'],
    solution:
      "Stratégie de contenu et planification : identification du public cible, définition des types de contenus à publier, création d'un calendrier éditorial pour planifier les publications avant et pendant l'événement. Création de visuels attractifs : réalisation de portraits d'animaux pour promouvoir les différentes attractions, conception de visuels et d'affiches pour annoncer les activités, horaires et zones de l'événement, mise en valeur des informations clés de manière claire et ludique. Animation des réseaux sociaux : publication des contenus selon le calendrier éditorial, gestion des interactions avec le public (réponses aux questions, encouragement au partage, mise en avant des participants), ajustement des contenus en fonction des retours et de l'engagement observé. Outils mobilisés : Canva (création des visuels et affiches), Meta Business Suite (programmation et publication sur Instagram et Facebook, suivi des performances).",
    resultats: [
      "Communication digitale cohérente et attractive avant et pendant l'événement",
      'Engagement et attraction du public cible sur les réseaux sociaux',
      'Valorisation des activités et des animaux présents au salon',
      'Expérience digitale interactive et visuellement agréable pour les visiteurs',
      'Compétences mobilisées : communication digitale, marketing événementiel, conception graphique, gestion de réseaux sociaux, planification éditoriale, réactivité face aux imprévus',
    ],
    visuels: [{ asset: 'projects/divers/animal-show-affiche.png' }],
  },
  {
    id: 'vide-dressing',
    name: 'Vide dressing',
    category: 'divers',
    categoryLabel: 'Divers',
    coverAsset: 'projects/divers/vide-dressing-affiche.png',
    date: '2024',
    client: 'Projet personnel',
    objectif: 'Organiser et communiquer autour d\'un vide-dressing attractif et convivial.',
    contexte:
      "Organisation d'un événement de vide-dressing nécessitant une communication visuelle engageante pour attirer un maximum de participants.",
    cibles: ['Jeunes adultes', 'Amateurs de mode', 'Public local'],
    solution:
      "Création de visuels promotionnels pour les réseaux sociaux, gestion de la communication en amont de l'événement.",
    resultats: [
      "Bonne participation à l'événement",
      'Communication visuelle efficace',
      'Expérience en organisation événementielle',
    ],
    visuels: [{ asset: 'projects/divers/vide-dressing-affiche.png' }],
  },
];

export const projectsById: Record<string, Project> = Object.fromEntries(
  projectsList.map((p) => [p.id, p]),
);

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
    description:
      "Le Monde de la Glace est une entreprise réunionnaise spécialisée dans la fabrication artisanale de glaces et de sorbets, créée en 2002 et basée au Port. Elle développe et fournit une large gamme de produits glacés, notamment des crèmes glacées et des sorbets tropicaux sous sa propre marque et la marque Panda's, distribués en dizaine de points de vente répartis sur plusieurs enseignes à La Réunion. L'entreprise fournit également une multitude de revendeurs locaux, ce qui en fait un acteur majeur de l'univers des desserts glacés sur l'île.\n\nL.G.M. – Le Glacier Moderne est une franchise de glaciers artisanaux implantée à La Réunion depuis plusieurs décennies, avec plusieurs points de vente proposant des glaces et sorbets artisanaux aux parfums variés, disponibles sur place ou à emporter.\n\nL'Igloo est un glacier historique de Saint‑Denis, ouvert depuis 1988, réputé pour ses glaces artisanales, ses vacherins et autres desserts glacés. L'établissement dispose de plusieurs salles et d'un espace snack, ce qui en fait un lieu de pause rafraîchissante incontournable au cœur du centre‑ville.",
    points: ['7 points de vente LGM', "L'enseigne emblématique IGLOO", "RAFFAELLO et PANDA'S"],
    cibles: ['Familles et enfants', 'Jeunes adultes (18-35 ans)', 'Touristes à La Réunion', 'Amateurs de glaces artisanales'],
    logoAsset: 'categories/monde-glace-logo.png',
  },
  {
    id: 'ecole-numerique',
    label: 'École du Numérique',
    description:
      "L'École du Numérique (974) forme aux métiers du digital et propose des parcours en alternance pour développer des compétences en développement, marketing digital et cybersécurité. L'école met l'accent sur l'immersion professionnelle et les projets concrets, afin de préparer des talents opérationnels pour le marché réunionnais.",
    points: ['Formation en communication digitale', 'Projets créatifs et innovants', 'Préparation aux métiers du digital'],
    cibles: ['Futurs étudiants (post-bac)', 'Étudiants en reconversion', "Parents d'élèves", 'Entreprises partenaires'],
    logoAsset: 'projects/ecole-numerique/edn-logo.png',
  },
  {
    id: 'yvently',
    label: 'Yvently',
    description:
      "Yvently est une entreprise qui propose à la fois des services de communication et des prestations événementielles. Elle accompagne les entreprises dans leur communication à travers la création de contenus et de supports visuels, et propose également des services événementiels pour les particuliers et les professionnels. Cela inclut la location de mobilier, la mise en place de décorations, ainsi que l'organisation et la coordination d'événements avec la gestion des différents prestataires.",
    points: ['Services de communication et création de contenus', "Organisation et coordination d'événements", 'Location de mobilier et décoration', 'Gestion de prestataires'],
    cibles: ['Entreprises', 'Particuliers', 'Professionnels', "Organisateurs d'événements"],
    logoAsset: 'projects/yvently/yvently-logo.png',
  },
  {
    id: 'telemag-plus',
    label: 'Télémag Plus',
    description:
      "Télémag Plus est un magazine réunionnais qui propose un guide des programmes TV mais aussi des articles variés sur l'actualité locale. Il met en avant des initiatives réunionnaises, des talents, des projets, ainsi que des sujets de société, culture et divertissement. Son objectif est d'informer et de valoriser les acteurs et dynamiques de l'île auprès d'un large public.",
    points: ['Guide des programmes TV', "Articles sur l'actualité locale", 'Mise en avant des talents réunionnais', 'Sujets société, culture et divertissement'],
    cibles: ['Grand public réunionnais', 'Talents et acteurs locaux', 'Passionnés de culture locale', 'Téléspectateurs'],
    logoAsset: 'projects/telemag-plus/telemag-plus-logo.png',
  },
];
