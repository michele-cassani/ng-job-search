import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsFavoritesComponent } from './components/jobs-favorites/jobs-favorites.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsCardComponent } from './components/jobs-card/jobs-card.component';
import { JobsService } from './services/jobs.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: `/jobs-list`,
    pathMatch: 'full'
  },
  {
    path: 'jobs-list',
    component: JobsListComponent
  },
  {
    path: 'favorites-list',
    component: JobsFavoritesComponent
  },
  {
    path: 'jobs-list/:id',
    component: JobDetailsComponent
  }
];

@NgModule({
  declarations: [
    JobsListComponent,
    JobsFavoritesComponent,
    JobDetailsComponent,
    JobsCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    JobsService
  ]
})
export class JobSearchModule {
}
