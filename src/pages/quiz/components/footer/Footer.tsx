import React from "react";

interface IFooter {
  number_of_questions: number;
  current_question: number;
}

const Footer = (props: IFooter) => {
  return (
    <div className="absolute bottom-4">
      <p>
        {props.current_question + 1} of {props.number_of_questions} questions
      </p>
    </div>
  );
};

export default Footer;
