import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>this is home page</h1>
      <Nav />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
