import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e: any) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/hello", {
        email,
        password,
      })
      .then((res) => alert(`submitted`))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="w-1/3 p-5 mx-auto shadow rounded my-10">
        <h1 className="text-2xl">Register</h1>
        <div>
          <form onSubmit={registerUser}>
            <div className="w-full my-4">
              <input
                className="w-full p-2 border focus:outline-none"
                type="text"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                autoComplete="false"
                autoFocus={true}
              />
            </div>
            <div>
              <input
                className="w-full p-2 border"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name=""
                placeholder="Enter Password"
              />
            </div>
            <div className="my-5">
              <button
                className="bg-red-600 text-white px-5 py-2 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
