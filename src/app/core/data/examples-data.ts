import { ExampleCategory } from '../models/examples-model';

export const EXAMPLES: ExampleCategory[] = [
  {
    categoryId: 'games',
    categoryTitle: 'משחקים',
    projects: [
      {
        id: 'Volfied',
        title: 'Volfied',
        path: 'examples/volfied/'
      },
      {
        id: 'memory-game',
        title: 'Memory Game',
        path: 'examples/memory-game/'
      },
      {
        id: 'chess',
        title: 'Chess',
        path: 'examples/chess/'
      },
      {
        id: 'snake',
        title: 'Snake',
        path: 'examples/snake/'
      }
    ]
  }
];