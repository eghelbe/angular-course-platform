import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lesson-viewer',
  imports: [],
  templateUrl: './lesson-viewer.component.html',
  styleUrl: './lesson-viewer.component.scss'
})
export class LessonViewerComponent implements OnInit, AfterViewInit, OnDestroy {
  lessonUrl: SafeResourceUrl | null = null;
  lessonFound = false;
  private sub?: Subscription;

  @ViewChild('lessonFrame')
  iframe?: ElementRef<HTMLIFrameElement>;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const track = params.get('track');
      const slug = params.get('slug');

      if (!track || !slug) {
        this.lessonFound = false;
        this.lessonUrl = null;
        return;
      }

      const path = `lessons/${track}/${slug}.html`;

      this.http.get(path, { responseType: 'text' }).subscribe({
        next: (content) => {
          // 🛡️ מונעים fallback של Angular
          if (content.includes('<app-root')) {
            this.lessonFound = false;
            this.lessonUrl = null;
            return;
          }

          this.lessonUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl(path);
          this.lessonFound = true;
        },
        error: () => {
          this.lessonFound = false;
          this.lessonUrl = null;
        }
      });
    });
  }

ngAfterViewInit() {
  window.addEventListener('message', this.onMessage);
}

  ngOnDestroy() {
    this.sub?.unsubscribe();
    window.removeEventListener('message', this.onMessage);
  }

  private onMessage = (event: MessageEvent) => {
    if (!this.iframe) return;

    if (event.data?.type === 'lesson-height') {
      this.iframe.nativeElement.style.height =
        `${event.data.height}px`;
    }
  };
}
