import { LessonTrack } from '../models/lesson-model';

export const LESSON_TRACKS: LessonTrack[] = [
  {
    id: 'html',
    title: 'HTML & CSS',
    lessons: [
      {
        slug: 'class-1-html',
        title: 'שיעור 1 — HTML: תגיות ותחביר',
        file: 'lessons/html/class-1-html.html'
      },
      {
        slug: 'class-2-css-basics',
        title: 'שיעור 2 — CSS: עיצוב בסיסי ו־Box Model',
        file: 'lessons/css/class-2-css-basics.html'
      },
      {
        slug: 'class-3-flex',
        title: 'שיעור 3 — CSS Flexbox (Flex Container)',
        file: 'lessons/html/class-3-flex.html'
      }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    lessons: []
  },
  {
    id: 'angular',
    title: 'Angular',
    lessons: []
  }
];