import type { RouteObject } from 'react-router';
import { RootLayout } from './root';
import { Placeholder } from './pages/Placeholder';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ShakeDuMoment } from './pages/ShakeDuMoment';
import { IglooProjects } from './pages/IglooProjects';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <Placeholder title="À propos" /> },
      { path: 'projects', element: <Projects /> },
      { path: 'project/:category/:projectId', element: <Placeholder title="Projet" /> },
      { path: 'shake-du-moment', element: <ShakeDuMoment /> },
      { path: 'shake/:shakeId', element: <Placeholder title="Shake" /> },
      { path: 'igloo-projects', element: <IglooProjects /> },
      { path: 'project/igloo/:projectId', element: <Placeholder title="Projet Igloo" /> },
      { path: 'contact', element: <Placeholder title="Contact" /> },
      { path: '*', element: <Placeholder title="Page introuvable" /> },
    ],
  },
];
