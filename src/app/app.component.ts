import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, AppTabsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
}
