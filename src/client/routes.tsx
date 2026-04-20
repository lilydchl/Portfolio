import type { RouteObject } from 'react-router';
import { RootLayout } from './root';
import { Placeholder } from './pages/Placeholder';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { ShakeDuMoment } from './pages/ShakeDuMoment';
import { ShakeDetail } from './pages/ShakeDetail';
import { IglooProjects } from './pages/IglooProjects';
import { IglooProjectDetail } from './pages/IglooProjectDetail';
import { Contact } from './pages/Contact';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'project/igloo/:projectId', element: <IglooProjectDetail /> },
      { path: 'project/:category/:projectId', element: <ProjectDetail /> },
      { path: 'shake-du-moment', element: <ShakeDuMoment /> },
      { path: 'shake/:shakeId', element: <ShakeDetail /> },
      { path: 'igloo-projects', element: <IglooProjects /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Placeholder title="Page introuvable" /> },
    ],
  },
];
