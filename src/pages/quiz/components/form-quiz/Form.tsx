import Button from "@shared/components/button/Button";
import { IQuizData } from "@shared/models/types/quiz";
import React, { useEffect, useState } from "react";
import he from "he";

interface IQuizForm {
  question_data: IQuizData | undefined;
  count: number;
  save_answer: (answer: string) => void;
}

const Form = ({ question_data, count, save_answer }: IQuizForm) => {
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("answers") || "[]");
    if (data) {
      setAnswers(data);
    }
  }, [save_answer]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-lg font-light">Question {count + 1}</p>
      <h2 className="text-2xl text-center md:text-3xl font-bold">
        {question_data ? he.decode(question_data.question) : ""}
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-8">
        {question_data?.options.map((answer, index) =>
          answers[count] === answer ? (
            <Button
              variant="secondary"
              key={index}
              onClick={() => save_answer(answer)}
            >
              {answer}
            </Button>
          ) : (
            <Button
              variant="primary"
              key={index}
              onClick={() => save_answer(answer)}
            >
              {answer}
            </Button>
          )
        )}
      </div>
      {count === 4 && (
        <p className="text-center mt-4 text-red-700 font-semibold text-sm md:text-lg">
          You have reached the end of the quiz. <br />If you click an answer, it will
          be automatically submitted.
        </p>
      )}
    </div>
  );
};

export default Form;
