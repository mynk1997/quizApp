import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import QuizBody from "./QuizBody";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
    path:'/',
    element:<Menu/>
  },{
    path:"/quizbody",
    element:<QuizBody/>
  }
]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
