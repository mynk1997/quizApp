import { useContext, useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import Result from "./Result";
import Title from "./Title";
import QuizContext from "../utils/quizContext";
import { Link } from "react-router-dom";

const QuizBody = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const { quizIndex, quiz } = useContext(QuizContext);

  const handleQuestionIndexPrevious = () => {
    setQuestionIndex(questionIndex - 1);
  };
  const handleQuestionIndexNext = () => {
    setQuestionIndex(questionIndex + 1);
  };
  console.log(quizIndex);
  console.log(quiz);
  if (quizIndex === -1)
    return (
      <>
        <Link to={"/"}>
          <button>Go Back</button>
        </Link>{" "}
        <p>Select a Quiz</p>
      </>
    );
  return (
    <div>
      <Link to={"/"}>
        <button>Go Back</button>
      </Link>
      <Title title={quiz[quizIndex]?.title} />
      <Question question={quiz[quizIndex]?.questions[questionIndex]?.text} />
      <Answer
        correctAnswer={quiz[quizIndex]?.questions[questionIndex]?.correctAnswer}
        incorrectAnswers={
          quiz[quizIndex]?.questions[questionIndex]?.incorrectAnswers
        }
      />
      <Result />
      {questionIndex > 0 && (
        <button onClick={handleQuestionIndexPrevious}>Previous</button>
      )}

      {questionIndex != quiz[quizIndex].questions.length - 1 && (
        <button onClick={handleQuestionIndexNext}>Next</button>
      )}
    </div>
  );
};

export default QuizBody;
