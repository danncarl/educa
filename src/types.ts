export interface Activity {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  ageRange: string;
  grade: string;
  bnccCode?: string;
  objectives: string[];
  coverColor: string;
  iconName: string;
  pagesCount: number;
  difficulty: "Fácil" | "Médio" | "Difícil";
  worksheetType: string;
}
