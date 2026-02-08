import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-r from-red-100 via-pink-100 to-purple-100 flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you are looking for doesn’t exist. It might have been removed or you may have mistyped the URL.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
