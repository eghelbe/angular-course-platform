import { Injectable } from '@angular/core';
import { EXAMPLES } from '../data/examples-data';
import { ExampleCategory, ExampleProject } from '../models/examples-model';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  getExamples(): ExampleCategory[] {
    return EXAMPLES;
  }

  findProjectById(projectId: string): ExampleProject | null {
    for (const category of EXAMPLES) {
      const project = category.projects.find(p => p.id === projectId);
      if (project) return project;
    }
    return null;
  }
}