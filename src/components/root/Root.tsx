import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Root = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto my-4">
        <Header></Header>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Root;
