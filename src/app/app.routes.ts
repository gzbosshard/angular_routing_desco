import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'feature1',
    loadChildren: () =>
      import('./feature1/feature1.module').then((m) => m.Feature1Module),
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./feature2/feature2.module').then((m) => m.Feature2Module),
  },
  { path: '', redirectTo: '/feature1/page1', pathMatch: 'full' },
  { path: '**', redirectTo: '/feature1/page1' },
];
