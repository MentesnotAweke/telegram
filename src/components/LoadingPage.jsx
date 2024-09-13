// components/LoadingPage.jsx
import React from "react";

const LoadingPage = () => {
  return (
    <div className="bg-black w-screen h-screen flex items-center justify-center">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-500 fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="..." />
          <path d="..." />
        </svg>
      </div>
    </div>
  );
};

export default LoadingPage;
