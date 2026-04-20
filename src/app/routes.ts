import { createBrowserRouter } from "react-router";
import { Home } from "@/app/pages/Home";
import { About } from "@/app/pages/About";
import { Projects } from "@/app/pages/Projects";
import { Contact } from "@/app/pages/Contact";
import { ProjectDetail } from "@/app/pages/ProjectDetail";
import { ShakeDuMoment } from "@/app/pages/ShakeDuMoment";
import { ShakeDetail } from "@/app/pages/ShakeDetail";
import { IglooProjects } from "@/app/pages/IglooProjects";
import { IglooProjectDetail } from "@/app/pages/IglooProjectDetail";
import { RootLayout } from "@/app/components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "project/:category/:projectId", Component: ProjectDetail },
      { path: "shake-du-moment", Component: ShakeDuMoment },
      { path: "shake/:shakeId", Component: ShakeDetail },
      { path: "igloo-projects", Component: IglooProjects },
      { path: "project/igloo/:projectId", Component: IglooProjectDetail },
      { path: "contact", Component: Contact },
    ],
  },
]);
