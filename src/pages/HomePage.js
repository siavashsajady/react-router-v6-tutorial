import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <section>
      <h1>The Home Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
};

export default HomePage;
