import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('./feature/job-search/job-search.module').then((m) => m.JobSearchModule)
}];
