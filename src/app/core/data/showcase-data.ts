// src/app/data/showcase-data.ts

import { ShowcaseYear } from '../models/showcase-model';

export const SHOWCASE_YEARS: ShowcaseYear[] = [
  {
    yearId: '5786-2025-2026',
    yearTitle: 'שנת לימודים תשפ"ו (2025–2026)',
    semesters: [
      {
        semesterId: 'semester-a',
        semesterTitle: 'מחצית א׳',
        grades: [
          {
            gradeId: 'grade-7',
            gradeTitle: 'כיתה ז׳',
            projects: [
              {
                id: 'snir-counter-app',
                title: 'Counter App',
                studentName: 'שניר',
                path: 'showcase/5786-2025-2026/semester-a/grade-7/snir-counter-app/'
              }
            ]
          }
        ]
      }
    ]
  }
];
