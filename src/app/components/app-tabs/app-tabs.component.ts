import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app-tabs.component.html',
  styleUrl: './app-tabs.component.css'
})
export class AppTabsComponent {

}
