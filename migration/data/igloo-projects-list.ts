// Seed data: Igloo project list extracted from src/app/pages/IglooProjects.tsx.

export interface IglooProjectIndex {
  id: string;
  name: string;
  coverAsset?: string;
}

export const iglooProjectsList: IglooProjectIndex[] = [
  { id: 'buches-de-noel',        name: 'Bûches de Noël',         coverAsset: 'igloo-projects/buches-noel.png' },
  { id: 'patisserie-halloween',  name: "Pâtisserie d'Halloween", coverAsset: 'igloo-projects/patisserie-halloween.png' },
  { id: 'tagliatelle-crepes',    name: 'Tagliatelle de crêpes',  coverAsset: 'igloo-projects/tagliatelle-crepes.png' },
  { id: 'patisserie-st-valentin', name: 'Pâtisserie St Valentin', coverAsset: 'igloo-projects/patisserie-st-valentin.png' },
  { id: 'crepe-epinard',         name: 'Crêpe épinard' },
  { id: 'trend',                 name: 'Trend' },
];
