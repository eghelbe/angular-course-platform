export interface ExampleProject {
    id: string;        // 'memory-game'
    title: string;     // 'Memory Game'
    description?: string;
    path: string;      // 'examples/memory-game/'
  }
  
  export interface ExampleCategory {
    categoryId: string;     // 'games'
    categoryTitle: string;  // 'משחקים'
    projects: ExampleProject[];
  }