import React, { useEffect, useState } from "react";
import Form from "./form-quiz/Form";
import { FetchQuiz } from "@shared/services/quiz/quizServices";
import { IQuizData } from "@shared/models/types/quiz";
import Footer from "./footer/Footer";

const QuizContainer = () => {
  const [data, setData] = useState<IQuizData[]>([]);
  const [answers, setAnswers] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (!localStorage.getItem("question")) {
        try {
          await FetchQuiz();
          setData(JSON.parse(localStorage.getItem("question") || ""));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setData(JSON.parse(localStorage.getItem("question") || ""));
        setAnswers(JSON.parse(localStorage.getItem("answers") || ""));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  const saveAnswer = (answer: string, count: number) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [count]: answer,
    }));
    setCount(count + 1);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <Form
        question_data={data[count]}
        count={count}
        save_answer={(answer: string) => saveAnswer(answer, count)}
      />
      <Footer number_of_questions={data.length} current_question={count} />
    </section>
  );
};

export default QuizContainer;
