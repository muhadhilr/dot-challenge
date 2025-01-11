import { IQuizResponse } from "@shared/models/types/quiz";
import axios from "axios";

export const FetchQuiz = async (): Promise<void> => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_QUIZ_URL);
    if (response.status === 200) {
      const questions = response.data.results.map(
        (question: IQuizResponse) => ({
          question: question.question,
          options: question.incorrect_answers.concat(question.correct_answer),
          correct_answer: question.correct_answer,
        })
      );
      localStorage.setItem("question", JSON.stringify(questions));
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
