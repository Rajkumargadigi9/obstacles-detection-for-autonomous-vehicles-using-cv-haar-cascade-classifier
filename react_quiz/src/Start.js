import { Outlet, Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <Link to="/Quiz">
        <button className="start_button">
          <b>Start Quiz </b>
        </button>
      </Link>
    </>
  );
};

export default Start;
