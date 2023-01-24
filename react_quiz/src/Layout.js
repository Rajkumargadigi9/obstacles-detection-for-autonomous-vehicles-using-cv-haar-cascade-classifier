import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h2>Quizz App</h2>
      <Outlet />
    </>
  );
};

export default Layout;
