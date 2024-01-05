
import { Link } from "react-router-dom";

const Menu = () => {

  return (
    <div>
      <h2>Select your Quiz</h2>
      <div>
        <Link to={"/quizbody/"+0}>
          <button
          >
            HTML Quiz
          </button>
        </Link>
        <Link to={"/quizbody/"+1}>
          <button
          >
            CSS Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
