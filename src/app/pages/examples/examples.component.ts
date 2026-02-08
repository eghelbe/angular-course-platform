import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ExampleService } from '../../core/services/example.service';
import { ExampleProject } from '../../core/models/examples-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-examples',
  imports: [],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss'
})
export class ExamplesComponent implements OnInit, OnDestroy {
  activeProject: ExampleProject | null = null;
  safeIframeUrl: SafeResourceUrl | null = null;
  projectFound = false;

  constructor(
    private route: ActivatedRoute,
    private exampleService: ExampleService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    window.addEventListener('message', this.onMessage);

    this.route.paramMap.subscribe(params => {
      const projectId = params.get('project');

      if (!projectId) {
        this.clear();
        return;
      }

      const project = this.exampleService.findProjectById(projectId);
      if (!project) {
        this.clear();
        return;
      }

      this.checkProjectExists(project);
    });
  }

  private checkProjectExists(project: ExampleProject) {
    const indexPath = `${project.path}index.html`;

    this.http.get(indexPath, { responseType: 'text' }).subscribe({
      next: (response) => {
        if (response.includes('<title>AngularCoursePlatform</title>')) {
          this.clear();
          return;
        }
        
        // ✔️ קיים
        this.activeProject = project;
        this.safeIframeUrl =
          this.sanitizer.bypassSecurityTrustResourceUrl(project.path);
        this.projectFound = true;
      },
      error: () => {
        // ❌ לא קיים
        this.clear();
      }
    });
  }

  private clear() {
    this.activeProject = null;
    this.safeIframeUrl = null;
    this.projectFound = false;
  }

    ngOnDestroy(): void {
    window.removeEventListener('message', this.onMessage);
  }

  private onMessage = (event: MessageEvent) => {
    if (event.data?.type === 'iframe-height') {
      const iframe = document.getElementById('examples-iframe') as HTMLIFrameElement | null;
      if (iframe) {
        iframe.style.height = `${event.data.height}px`;
      }
    }
  };
}
