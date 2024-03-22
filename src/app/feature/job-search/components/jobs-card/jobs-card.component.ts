import { Component, Input, OnInit } from '@angular/core';
import { JobListInterface } from '../../interfaces/jobs.interfaces';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs-card',
  templateUrl: './jobs-card.component.html',
  styleUrl: './jobs-card.component.css'
})
export class JobsCardComponent implements OnInit {
  @Input() job?: JobListInterface;
  @Input() favorite: boolean = true;

  isFavorite: boolean = false;

  constructor(private jobService: JobsService) {
  }

  ngOnInit() {
    this.jobService.favoriteJobs.subscribe((favorites) => {
      this.isFavorite = favorites.some(f => f.id === this.job?.id);
    });
  }

  favoriteClick() {
    this.jobService.toggleFavorite(this.job);
  }
}
