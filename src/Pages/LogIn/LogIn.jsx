import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const LogIn = () => {
  const location = useLocation();
  // show password
  const [showPassword, setShowPassword] = useState(true);
  // use auth fuctions
  const { googleLogin, githubLogin, userLogIn } = useAuth();

  // navigate
  const navigate = useNavigate();

  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login successful");
        navigate(location.state ? location?.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // handle github login
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Login successful");
        navigate(location.state ? location?.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // userLOgin
  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogIn(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate(location.state ? location?.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };
  // handleshow password
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div
      className="py-10 lg:py-20"
      data-aos="fade-up-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <h1 className="text-center font-bold mb-10 text-3xl">Log In</h1>
      <form onSubmit={handleUserLogin} className="card-body max-w-2xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type your email address"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex items-center">
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Type your password"
              className="input w-full input-bordered"
              required
            />
            <span onClick={handleShowPassword} className="-ml-8 text-xl">{showPassword? <FaEye/> : <FaEyeSlash/>}</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-black hover:text-black">
            Login
          </button>
        </div>
      </form>
      <div className="max-w-2xl mx-auto -mt-5">
        <h1 className="text-center mb-3">
          Or <br></br>LogIn With
        </h1>
        <hr className="mx-20" />
        <div className="flex justify-center gap-10">
          <button
            onClick={handleGoogleLogin}
            className="my-5 text-4xl btn text-white bg-black hover:text-black"
          >
            <FaGoogle />
          </button>
          <button
            onClick={handleGithubLogin}
            className="my-5 text-4xl btn text-white bg-black hover:text-black"
          >
            <FaGithub />
          </button>
        </div>
        <hr className="mx-20" />
        <h1 className="text-center mt-3">
          Do not have an Account?{" "}
          <Link to={"/register"}>
            <span className="text-indigo-600 font-bold">Register</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LogIn;
