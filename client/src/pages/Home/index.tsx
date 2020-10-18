import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-2xl">Simple Chat Room</div>

        <div className="mt-5">
          <Link
            to="/login"
            className="bg-red-600 mr-5 px-5 py-2 text-white uppercase font-semibold"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-red-600 mr-5 px-5 py-2 text-white uppercase font-semibold"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
