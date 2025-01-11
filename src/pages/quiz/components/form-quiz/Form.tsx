import Button from "@shared/components/button/Button";
import { IQuizData } from "@shared/models/types/quiz";
import React from "react";

interface IQuizForm {
  question_data: IQuizData | undefined;
  count: number;
  save_answer: (answer: string) => void;
}

const Form = ({ question_data, count, save_answer }: IQuizForm) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-lg font-light">Question {count + 1}</p>
      <h2 className="text-3xl font-bold">{question_data?.question}</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {question_data?.options.map((answer, index) => (
          <Button
            variant="primary"
            key={index}
            onClick={() => save_answer(answer)}
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Form;
