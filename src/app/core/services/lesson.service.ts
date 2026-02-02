import { Injectable } from '@angular/core';
import { LESSON_TRACKS } from '../data/lesson-data';
import { LessonItem, LessonTrack } from '../models/lesson-model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  getTracks(): LessonTrack[] {
    return LESSON_TRACKS;
  }

  getTrack(id: string): LessonTrack | undefined {
    return LESSON_TRACKS.find(t => t.id === id);
  }

  getLesson(trackId: string, slug: string): LessonItem | undefined {
    return this.getTrack(trackId)?.lessons.find(l => l.slug === slug);
  }
}
