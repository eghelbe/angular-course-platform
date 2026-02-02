import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell/app-shell.component';
import { HomeComponent } from './pages/home/home.component';
import { LessonViewerComponent } from './pages/lessons/lesson-viewer/lesson-viewer.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', component: HomeComponent },

      { path: 'lesson/:track/:slug', component: LessonViewerComponent },

      { path: 'examples', component: ExamplesComponent },

      { path: 'showcase', component: ShowcaseComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];
