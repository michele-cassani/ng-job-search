import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { JobListInterface } from '../../interfaces/jobs.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit, OnDestroy {

  jobsList: JobListInterface[] = [];

  private jobsSubscriber: Subscription | null = null;

  constructor(private jobService: JobsService) {
  }

  ngOnInit() {
    this.jobsSubscriber = this.jobService.getJobs().subscribe((jobList) => {
      this.jobsList = jobList;
    });
  }

  ngOnDestroy() {
    this.jobsSubscriber?.unsubscribe();
  }
}
