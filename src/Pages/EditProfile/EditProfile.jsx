import { toast } from "react-toastify";
import useAuth from "../../Hook/useAuth";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const {user, updateUser} = useAuth()
    const navigate =  useNavigate()
    // update user
    const handelUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateUser(name, photo)
        .then(() => {
            toast.success('Profile updated successfully')
            navigate('/')
        })
        .then(err => toast.error(err.message))
    }
  return (
    <div className="py-16">
        <div className="flex gap-10 justify-center flex-col items-center">
            <h1 className="text-5xl">Name: <span className="font-bold">{user?.displayName}</span></h1>
            <img className="w-80 rounded-xl" src={user?.photoURL}></img>
        </div>
      <form onSubmit={handelUpdateUser} className="card-body max-w-2xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="name"
            placeholder="Type your update Name"
            name="name"
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
            placeholder="Give your updated picture URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-black hover:text-black">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
