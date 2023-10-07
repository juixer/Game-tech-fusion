import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  // navigate
  const navigate = useNavigate();

  // useContext
  const { createUser, updateUser } = useAuth();

  // handleRegister
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const photo = e.target.photo.value;
    const checkbox = e.target.checkbox.checked;

    // conditional validation
    if (password !== confirmPassword) {
      toast.error("Password does not matched");
    } else if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])/.test(password)) {
      toast.error("Password does not match the requirements");
    } else if (checkbox === false) {
      toast.error("Please accept our terms and conditions");
    }

    // create user
    createUser(email, password)
      .then(() => {
        toast.success("User created successfully");
        // update user
        updateUser(name, photo)
          .then(() => {})
          .catch((err) => {
            toast.error(err.message);
          });
        navigate("/");
      })
      .then((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div
      className="py-10"
      data-aos="fade-up-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1 className="text-center font-bold mb-10 text-3xl">Register</h1>
      <form onSubmit={handleRegister} className="card-body max-w-2xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
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

        <div className="flex items-center gap-5 mt-5">
          <input
            type="checkbox"
            name="checkbox"
            className="checkbox checkbox-black"
          />
          <p className="label-text">
            I read and agree with{" "}
            <span className="text-indigo-600 font-bold">
              terms & conditions
            </span>
          </p>
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
