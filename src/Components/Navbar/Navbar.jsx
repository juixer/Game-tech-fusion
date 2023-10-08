import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  // use context
  const { user, userSignOut } = useAuth();
  // user LogOut
  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((err) => toast.error(err.message));
  };
  const navlinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      {
        user ? <><li>
        <NavLink to={"/blog"}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to={'/editProfile'}>Edit Profile</NavLink>
      </li></> : ''
      }

      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </li>
    </>
  );
  return (
    <div
      className="navbar bg-base-100"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-sm md:text-2xl ">
          GameTechFusion
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl px-1 space-x-4">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <h1 className="text-center font-bold">{user?.displayName}</h1>
              <hr></hr>
              <li>
                <a className="flex mt-2 justify-center" onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-sm bg-black text-white hover:text-black">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
