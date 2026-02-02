import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LessonService } from '../../core/services/lesson.service';
import { LessonTrack } from '../../core/models/lesson-model';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  tracks: LessonTrack[];

  constructor(private lessonService: LessonService) {
    this.tracks = this.lessonService.getTracks();
  }
}
