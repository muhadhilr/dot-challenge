import React from "react";

interface IFooter {
  number_of_questions: number;
  current_question: number;
  handle_back: () => void;
}

const Footer = (props: IFooter) => {
  return (
    <div className="absolute bottom-4 flex gap-4">
      <p>
        {props.current_question + 1} of {props.number_of_questions} questions
      </p>
      |
      <p className="cursor-pointer hover:underline" onClick={props.handle_back}>
        Previous
      </p>
    </div>
  );
};

export default Footer;
