/* eslint-disable react/prop-types */

import { useCallback, useState } from "react";
import { shuffle } from "../utils/shuffle";

const Answer = ({
  correctAnswer,
  incorrectAnswers,
  setResult,
  result,
  questionIndex,
}) => {
  console.log(correctAnswer, incorrectAnswers);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const options = useCallback(shuffle([correctAnswer, ...incorrectAnswers]), [
    questionIndex,
  ]);
  console.log(options);
  const handleResult = (answer, index) => {
    setSelectedAnswer(index);
    answer === correctAnswer
      ? setResult("Answer is correct")
      : setResult("Answer is incorrect");
  };

  return (
    <div>
      <ol>
        {options?.map((option, index) => {
          return (
            <li
              onClick={() => {
                handleResult(option, index);
              }}
              key={index}
              value={option}
              disabled={result.length != 0}
              style={{
                backgroundColor:
                  selectedAnswer == index && result != 0
                    ? option == correctAnswer
                      ? "green"
                      : "red"
                    : "rgb(36, 36, 36)",
              }}
            >
              {option}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Answer;
