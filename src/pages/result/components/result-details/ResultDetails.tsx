import React from "react";

interface IResultDetail {
  correct: number;
  incorrect: number;
}

const ResultDetails = (props: IResultDetail) => {
  return (
    <section className="space-y-6 p-6 md:p-12 ring-1 ring-gray-700 rounded-xl backdrop-blur">
      <h1 className="text-5xl font-bold text-center leading-tight tracking-wide">
        Quiz Results
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-xl">
        <div className="space-y-2">
          <p>Correct Answers</p>
          <p>Incorrect Answers</p>
          <p>Total Score</p>
        </div>
        <div className="text-end space-y-2">
          <p>{props.correct}</p>
          <p>{props.incorrect}</p>
          <p>{props.correct * 20}</p>
        </div>
      </div>
    </section>
  );
};

export default ResultDetails;
