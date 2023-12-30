/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import "./App.css";

import QuizContext from "./utils/quizContext";
import { getQuizzes } from "./data/quizzes";
import Body from "./components/Body";

function App() {
  const [quizIndex, setQuizIndex] = useState(-1);
  const [quiz, setQuiz] = useState([]);

  const fetchData = async () => {
    const data = await getQuizzes();
    console.log(data);
    setQuiz(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (quiz?.length === 0) return "Loading...";

  return (
    <QuizContext.Provider value={{ quizIndex: quizIndex, setQuizIndex, quiz }}>
      <>
        <Body />
      </>
    </QuizContext.Provider>
  );
}

export default App;
