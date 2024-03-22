import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobListInterface } from '../../interfaces/jobs.interfaces';
import { Subscription } from 'rxjs';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs-favorites',
  templateUrl: './jobs-favorites.component.html',
  styleUrl: './jobs-favorites.component.css'
})
export class JobsFavoritesComponent implements OnInit, OnDestroy {

  jobsList: JobListInterface[] = [];

  private jobsSubscriber: Subscription | null = null;

  constructor(private jobService: JobsService) {
  }

  ngOnInit() {
    this.jobsSubscriber = this.jobService.favoriteJobs.subscribe((jobList) => {
      this.jobsList = jobList;
    });
  }

  ngOnDestroy() {
    this.jobsSubscriber?.unsubscribe();
  }
}
