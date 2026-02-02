export interface LessonItem {
  slug: string;
  title: string;
  file: string;
}

export interface LessonTrack {
  id: string;
  title: string;
  lessons: LessonItem[];
}
