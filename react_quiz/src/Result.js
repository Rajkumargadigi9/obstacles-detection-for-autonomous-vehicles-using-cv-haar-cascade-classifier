import { Outlet, Link } from "react-router-dom";
import { count } from "./components/Question";

const Result = () => {
  console.log(count);

  return (
    <>
      <h1>You have answered {count} / 5 Correctly</h1>
      <Link to="/">
        <button id="start"><b>Start Quiz</b></button>
      </Link>
    </>
  );
};

export default Result;
