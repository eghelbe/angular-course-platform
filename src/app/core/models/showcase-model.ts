export interface ShowcaseProject {
    id: string;
    title: string;
    studentName: string;
    path: string;   // נתיב יחסי ל-public
  }
  
  export interface ShowcaseGrade {
    gradeId: string;       // grade-7
    gradeTitle: string;    // כיתה ז'
    projects: ShowcaseProject[];
  }
  
  export interface ShowcaseSemester {
    semesterId: string;     // semester-a
    semesterTitle: string;  // מחצית א'
    grades: ShowcaseGrade[];
  }
  
  export interface ShowcaseYear {
    yearId: string;         // 5786-2025-2026
    yearTitle: string;      // תשפ"ו (2025–2026)
    semesters: ShowcaseSemester[];
  }