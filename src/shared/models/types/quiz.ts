export interface IQuizResponse {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuizData {
  question: string;
  options: string[];
  correct_answer: string;
}
