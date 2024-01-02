import { useContext, useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import Result from "./Result";
import Title from "./Title";
import QuizContext from "../utils/quizContext";
import { Link } from "react-router-dom";

const QuizBody = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState("");

  const { quizIndex, quiz } = useContext(QuizContext);

  const handleQuestionIndexPrevious = () => {
    setResult("")
    setQuestionIndex(questionIndex - 1);
  };
  const handleQuestionIndexNext = () => {
    setResult("")

    setQuestionIndex(questionIndex + 1);
  };

  if (quizIndex === -1)
    return (
      <>
        <Link to={"/"}>
          <button>Go Back</button>
        </Link>
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
        } setResult={setResult}
      />
      <Result result={result} />
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
