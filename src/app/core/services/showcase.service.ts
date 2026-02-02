import { Injectable, signal } from '@angular/core';
import { SHOWCASE_YEARS } from '../data/showcase-data';
import { ShowcaseProject, ShowcaseYear } from '../models/showcase-model';

@Injectable({ providedIn: 'root' })
export class ShowcaseService {
  // Data
  readonly years: ShowcaseYear[] = SHOWCASE_YEARS;

  // Accordion state (owned by sidebar)
  readonly openYearId = signal<string | null>(null);
  readonly openSemesterId = signal<string | null>(null);
  readonly openGradeId = signal<string | null>(null);

  // Selection (owned by sidebar, consumed by viewer)
  readonly activeProject = signal<ShowcaseProject | null>(null);

  getShowcases(): ShowcaseYear[] {
    return SHOWCASE_YEARS;
  }

  findProjectById(projectId: string): ShowcaseProject | null {
    for (const year of this.years) {
      for (const semester of year.semesters) {
        for (const grade of semester.grades) {
          const project = grade.projects.find(
            p => p.id === projectId
          );

          if (project) {
            return project;
          }
        }
      }
    }

    return null;
  }

  toggleYear(yearId: string) {
    this.openYearId.update(cur => (cur === yearId ? null : yearId));
    this.openSemesterId.set(null);
    this.openGradeId.set(null);
  }

  toggleSemester(semesterId: string) {
    this.openSemesterId.update(cur => (cur === semesterId ? null : semesterId));
    this.openGradeId.set(null);
  }

  toggleGrade(gradeId: string) {
    this.openGradeId.update(cur => (cur === gradeId ? null : gradeId));
  }

  selectProject(project: ShowcaseProject) {
    this.activeProject.set(project);
  }

  clearProject() {
    this.activeProject.set(null);
  }
}