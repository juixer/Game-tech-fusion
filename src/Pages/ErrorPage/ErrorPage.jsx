import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className="text-center mt-64">
            <h1 className="text-9xl">{error.status}</h1>
            <h1 className="text-5xl mb-3">{error.statusText}</h1>
            <h1 className="text-2xl">{error.error.message}</h1>
        </div>
    );
};

export default ErrorPage;