import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-md">
        <img
          src="https://www.aufscheinen.com/404.gif"
          alt="Page not found"
          style={{ width: "700px" }} 
        />
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="px-4 py-1 bg-black text-yellow-300 text-center rounded"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;