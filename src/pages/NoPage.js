import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NoPage;
