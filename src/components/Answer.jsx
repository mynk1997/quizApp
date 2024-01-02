/* eslint-disable react/prop-types */

import {  useState } from "react";

const Answer = ({ correctAnswer, incorrectAnswers,setResult }) => {
  console.log(correctAnswer, incorrectAnswers);
  const [selectedAnswer, setSelectedAnswer] = useState();
console.log(selectedAnswer)
  const handleResult = () => {
    selectedAnswer === correctAnswer
      ? setResult("Answer is correct")
      : setResult("Answer is incorrect");
  };

  return (
    <div>
      <ol>
        <li
          value={correctAnswer}
          onClick={() => {
            setSelectedAnswer(correctAnswer);
            handleResult();
          }}
        >
          {correctAnswer}
        </li>
        {incorrectAnswers?.map((incorrectAnswer, index) => {
          return (
            <li
              onClick={() => {
                setSelectedAnswer(incorrectAnswer);
                handleResult();
              }}
              key={index}
              value={incorrectAnswer}
            >
              {incorrectAnswer}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Answer;
