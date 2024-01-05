import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import QuizBody from "./QuizBody";
import TestResult from "./TestResult";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
    path:'/',
    element:<Menu/>
  },{
    path:"/quizbody/:quizIndex",
    element:<QuizBody/>
  },{
    path:"/result/",
    element:<TestResult/>
  }
]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
