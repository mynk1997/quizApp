import { useContext } from "react";
import QuizContext from "../utils/quizContext";
import { Link } from "react-router-dom";

const Menu = () => {
  const { setQuizIndex } = useContext(QuizContext);

  return (
    <div>
      <h2>Select your Quiz</h2>
      <div>
        <Link to={"/quizbody"}>
          <button
            onClick={() => {
              setQuizIndex(0);
            }}
          >
            HTML Quiz
          </button>
        </Link>
        <Link to={"/quizbody"}>
          <button
            onClick={() => {
              setQuizIndex(1);
            }}
          >
            CSS Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
