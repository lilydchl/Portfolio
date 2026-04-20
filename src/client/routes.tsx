import type { RouteObject } from 'react-router';
import { RootLayout } from './root';
import { Placeholder } from './pages/Placeholder';
import { Home } from './pages/Home';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <Placeholder title="À propos" /> },
      { path: 'projects', element: <Placeholder title="Réalisations" /> },
      { path: 'project/:category/:projectId', element: <Placeholder title="Projet" /> },
      { path: 'shake-du-moment', element: <Placeholder title="Shake du moment" /> },
      { path: 'shake/:shakeId', element: <Placeholder title="Shake" /> },
      { path: 'igloo-projects', element: <Placeholder title="Projets Igloo" /> },
      { path: 'project/igloo/:projectId', element: <Placeholder title="Projet Igloo" /> },
      { path: 'contact', element: <Placeholder title="Contact" /> },
      { path: '*', element: <Placeholder title="Page introuvable" /> },
    ],
  },
];
