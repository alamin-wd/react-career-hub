import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mx-auto mt-48 text-center">

            <h2 className="text-7xl mb-4">404</h2>
            <h2>Opps! There was an error</h2>

            <Link className="hover:underline" to="/">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;