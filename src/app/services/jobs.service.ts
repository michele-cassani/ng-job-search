import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { JobDetailsInterface, JobListInterface } from '../interfaces/jobs.interfaces';

@Injectable()
export class JobsService {

  public favoriteJobs: BehaviorSubject<JobListInterface[]> = new BehaviorSubject<JobListInterface[]>([]);

  constructor(private http: HttpClient) {
  }

  getJobs() {
    return this.http.get<JobListInterface[]>(`/jobs`);
  }

  getJobById(jobId: string) {
    return this.http.get<JobDetailsInterface>(`/jobs/${ jobId }`)
  }

  toggleFavorite(job: JobListInterface | undefined) {
    if (job) {
      let currentList = this.favoriteJobs.getValue();
      if (currentList.some(f => f.id === job.id)) {
        currentList = currentList.filter(f => f.id !== job.id);
      } else {
        currentList.push(job);
      }
      this.favoriteJobs.next(currentList);
    }
  }
}
