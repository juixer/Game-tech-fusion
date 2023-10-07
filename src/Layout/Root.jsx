import { Outlet, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";
import { InfinitySpin } from "react-loader-spinner";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        {navigation.state === "loading" ? (
          <div className="flex justify-center py-64">
            <InfinitySpin width="200" color="#000000" />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Root;
