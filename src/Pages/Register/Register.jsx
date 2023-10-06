import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="py-10">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1 className="text-center font-bold mb-10 text-3xl">Register</h1>
      <form className="card-body max-w-2xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="name"
            placeholder="Type your name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Picture</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Give your picture URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex items-center gap-5 mt-5">
          <input
              type="checkbox"
              className="checkbox checkbox-black"
            />
            <p className="label-text">I read and agree with <span className="text-indigo-600 font-bold">terms & conditions</span></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-black hover:text-black">
            Register
          </button>
        </div>
        <div>
          <hr className="mx-16" />
          <h1 className="text-center mt-3">
            Already have an Account?{" "}
            <Link to={"/register"}>
              <span className="text-indigo-600 font-bold">Log In</span>
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Register;
