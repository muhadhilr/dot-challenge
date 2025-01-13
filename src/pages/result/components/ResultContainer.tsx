import React, { useEffect, useState } from "react";
import ResultDetails from "./result-details/ResultDetails";
import Button from "@shared/components/button/Button";
import { useNavigate } from "react-router-dom";

const ResultContainer = () => {
  const [data, setData] = useState({
    correct: 0,
    incorrect: 0,
  });

  useEffect(() => {
    const storedAnswers = localStorage.getItem("answers");
    const storedQuestions = localStorage.getItem("question");

    if (storedAnswers && storedQuestions) {
      try {
        const answers: Record<string, string> = JSON.parse(storedAnswers);
        const questions: { correct_answer: string }[] =
          JSON.parse(storedQuestions);

        const correct = questions.reduce((count, question, index) => {
          const userAnswer = answers[index.toString()];
          if (userAnswer && userAnswer === question.correct_answer) {
            return count + 1;
          }
          return count;
        }, 0);

        setData({
          correct: correct,
          incorrect: Object.keys(answers).length - correct,
        });
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    } else {
      console.warn("No answers or questions found in localStorage");
      setData({ correct: 0, incorrect: 0 });
    }
  }, []);

  const navigate = useNavigate();
  const handleHome = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <ResultDetails correct={data?.correct} incorrect={data?.incorrect} />
      <Button variant="primary" onClick={() => handleHome()}>
        Return to Home
      </Button>
    </main>
  );
};

export default ResultContainer;
