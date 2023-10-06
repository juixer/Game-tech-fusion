import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";

const LogIn = () => {
    // use auth fuctions
    const {googleLogin, githubLogin} = useAuth()
    
    // handle google login
    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            toast.success('login successful')
        })
        .catch((err) => {
            toast.error(err.message)
        })
    }
    // handle github login
    const handleGithubLogin = () => {
        githubLogin()
        .then(() => {
            toast.success('login successful')
        })
        .catch((err) => {
            toast.error(err.message)
        })
    }

    
  return (
    <div className="py-10 lg:py-20">
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <h1 className="text-center font-bold mb-10 text-3xl">Log In</h1>
      <form className="card-body max-w-2xl mx-auto">
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
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-black hover:text-black">Login</button>
        </div>
      </form>
      <div className="max-w-2xl mx-auto">
            <h1 className="text-center mb-3">Or <br></br>LogIn With</h1>
            <hr className="mx-20" />
            <div className="flex justify-center gap-10">
                <button onClick={handleGoogleLogin} className="my-5 text-4xl btn text-white bg-black hover:text-black"><FaGoogle/></button>
                <button onClick={handleGithubLogin} className="my-5 text-4xl btn text-white bg-black hover:text-black"><FaGithub/></button>
            </div>
            <hr className="mx-20" />
            <h1 className="text-center mt-3">Do not have an Account? <Link to={'/register'}><span className="text-indigo-600 font-bold">Register</span></Link></h1>
        </div>
    </div>
  );
};

export default LogIn;
