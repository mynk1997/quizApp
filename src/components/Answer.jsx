/* eslint-disable react/prop-types */

import { useState } from "react";

const Answer = ({ correctAnswer, incorrectAnswers }) => {
  console.log(correctAnswer, incorrectAnswers);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const handleResult = () => {
    selectedAnswer===correctAnswer?console.log("Answer is correct"):console.log("Answer is incorrect");
  };

  return (
    <div>
      <ol>
        <li
          value={correctAnswer}
          onClick={(e) => {
            setSelectedAnswer(e.target.value);
            handleResult();
          }}
        >
          {correctAnswer}
        </li>
        {incorrectAnswers?.map((incorrectAnswer, index) => {
          return (
            <li key={index} value={incorrectAnswer}>
              {incorrectAnswer}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Answer;
