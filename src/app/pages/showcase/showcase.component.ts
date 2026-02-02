import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { computed } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShowcaseService } from '../../core/services/showcase.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit, OnDestroy {
  readonly activeProject;

  safeIframeUrl = computed<SafeResourceUrl | null>(() => {
    const p = this.activeProject();
    if (!p) return null;

    return this.sanitizer.bypassSecurityTrustResourceUrl(p.path);
  });

  constructor(
    private route: ActivatedRoute,
    private showcaseService: ShowcaseService,
    private sanitizer: DomSanitizer
  ) {
    this.activeProject = this.showcaseService.activeProject;
  }

  ngOnInit(): void {
    window.addEventListener('message', this.onMessage);
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('project');

      if (!projectId) {
        this.showcaseService.clearProject();
        return;
      }

      const project =
        this.showcaseService.findProjectById(projectId);

      if (project) {
        this.showcaseService.selectProject(project);
      } else {
        this.showcaseService.clearProject();
      }
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.onMessage);
  }

  private onMessage = (event: MessageEvent) => {
    if (event.data?.type === 'iframe-height') {
      const iframe = document.getElementById('showcase-iframe') as HTMLIFrameElement | null;
      if (iframe) {
        iframe.style.height = `${event.data.height}px`;
      }
    }
  };
}
