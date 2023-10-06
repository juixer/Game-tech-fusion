import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";

const Root = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
