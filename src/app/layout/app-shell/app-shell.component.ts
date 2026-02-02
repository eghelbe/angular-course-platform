import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-app-shell',
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss'
})
export class AppShellComponent {
  sidebarOpen = false;
  isMax1000 = signal(false);

  constructor(private bp: BreakpointObserver){
    this.bp.observe('(max-width: 1000px)').subscribe(state => {
      this.isMax1000.set(state.matches);
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebarOnMobile() {
    if (window.innerWidth < 900) {
      this.sidebarOpen = false;
    }
  }
}
