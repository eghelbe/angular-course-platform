import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LessonService } from '../../core/services/lesson.service';
import { LessonTrack } from '../../core/models/lesson-model';
import { ExampleService } from '../../core/services/example.service';
import { ShowcaseService } from '../../core/services/showcase.service';
import { ShowcaseYear } from '../../core/models/showcase-model';
import { ExampleCategory } from '../../core/models/examples-model';

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
  showcases: ShowcaseYear[];
  examples: ExampleCategory[];

  constructor(
    private lessonService: LessonService,
    private showcaseService: ShowcaseService,
    private exmapleService: ExampleService
  ) {
    this.tracks = this.lessonService.getTracks();
    this.showcases = this.showcaseService.getShowcases();
    this.examples = this.exmapleService.getExamples();
  }
}
