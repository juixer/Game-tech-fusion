import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate('/')
    }
    return (
        <div className="text-center mt-64">
            <h1 className="text-9xl">{error.status}</h1>
            <h1 className="text-5xl mb-3">{error.statusText}</h1>
            <h1 className="text-2xl">{error.error.message}</h1>
            <button onClick={handleGoBack} className="btn bg-black text-white hover:text-black mt-5">GO HOme</button>
        </div>
    );
};

export default ErrorPage;