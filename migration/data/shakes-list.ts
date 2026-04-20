// Seed data: shake list extracted from src/app/pages/ShakeDuMoment.tsx (main branch).
// Full details (description, objectif, composition, ventes, impact) in ShakeDetail.tsx.

export interface ShakeIndex {
  id: string;
  name: string;
  coverAsset?: string;
}

export const shakesList: ShakeIndex[] = [
  { id: 'smarties-party-shake', name: 'Smarties Party Shake', coverAsset: 'shakes/smarties-party-shake.png' },
  { id: 'dolce-vita-shake',     name: 'Dolce Vita Shake',     coverAsset: 'shakes/dolce-vita-shake.png' },
  { id: 'popshake',             name: 'Popshake',             coverAsset: 'shakes/popshake.png' },
  { id: 'monstershake',         name: 'Monstershake',         coverAsset: 'shakes/monstershake.png' },
  { id: 'sneakyshake',          name: 'Sneakyshake',          coverAsset: 'shakes/sneakyshake.png' },
  { id: 'xmas-shake',           name: "Xmas'shake",           coverAsset: 'shakes/xmas-shake.png' },
];
