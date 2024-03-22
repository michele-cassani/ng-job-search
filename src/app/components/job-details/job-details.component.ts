import { Component } from '@angular/core';
import { JobDetailsInterface } from '../../interfaces/jobs.interfaces';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  job: JobDetailsInterface | null = null;

  constructor(route: ActivatedRoute, private jobService: JobsService) {
    const jobId = route.snapshot.paramMap.get('id');
    if (jobId) {
      this.getJobDetails(jobId)
    }
  }

  getJobDetails(jobId: string) {
    this.jobService.getJobById(jobId).subscribe((job) => {
      this.job = job;
    });
  }
}
