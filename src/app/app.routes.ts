import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'experiences',
    loadChildren: () => import('./experience/experience.routes').then(c => c.routes),
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.routes').then(c => c.SkillsRoutes)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./projects/projects.routes').then(c => c.routes)
  },
  {
    path: 'education',
    loadChildren: () => import('./education/education.routes').then(c => c.educationRoutes)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
