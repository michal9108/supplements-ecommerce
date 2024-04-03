import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/shared/AuthForm";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const fetchUsers = () => {
    axios
      .get("https://server-be-node-express-mongo.fly.dev/register")
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleLogin = async (username, password, navigate) => {
    try {
      const response = await axios.post(
        "https://server-be-node-express-mongo.fly.dev/login",
        {
          username,
          password,
        },
      );
      const token = response.data.token;
      alert("Login succesful");
      fetchUsers();
      navigate("/");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password, navigate);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          LOG IN
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
            >
              Log In
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {/* <>
              Already a user?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-primary-300 hover:text-primary-300"
              >
                Log in
              </Link>
            </>
         
            <>
              You don't have an account ?{" "}
              <Link
                to="/signup"
                className="font-semibold leading-6 text-primary-300 hover:text-primary-300"
              >
                Sign up here
              </Link>
            </> */}
        </p>
      </div>
    </div>
  );
}
