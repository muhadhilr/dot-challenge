import React, { useEffect, useState } from "react";
import Form from "./form-quiz/Form";
import { FetchQuiz } from "@shared/services/quiz/quizServices";
import { IQuizData } from "@shared/models/types/quiz";
import Footer from "./footer/Footer";
import Timer from "./timer/Timer";
import Loader from "@shared/components/loader/Loader";
import { useNavigate } from "react-router-dom";

const QuizContainer = () => {
  const [data, setData] = useState<IQuizData[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>(() => {
    const savedAnswers = localStorage.getItem("answers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (!localStorage.getItem("question")) {
        try {
          await FetchQuiz();
          setData(JSON.parse(localStorage.getItem("question") || ""));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setData(JSON.parse(localStorage.getItem("question") || ""));
        setAnswers(JSON.parse(localStorage.getItem("answers") || ""));
        setCount(parseInt(localStorage.getItem("count") || "0"));
        setLoading(false);
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

    if (count >= data.length - 1) {
      navigate("/result");
    }

    localStorage.setItem("count", String(count + 1));
  };

  const handleBack = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      navigate("/");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="h-screen flex flex-col justify-center items-center p-2">
      <Form
        question_data={data[count]}
        count={count}
        save_answer={(answer: string) => saveAnswer(answer, count)}
      />
      <Footer
        number_of_questions={data.length}
        current_question={count}
        handle_back={handleBack}
      />
      <Timer />
    </section>
  );
};

export default QuizContainer;
