import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { InfinitySpin } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if (loading){
        <div className="flex justify-center py-64">
            <InfinitySpin width="200" color="#000000" />
          </div>
    }
    if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children
};

export default PrivateRoute;