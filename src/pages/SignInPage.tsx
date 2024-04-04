import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "@/shared/AuthForm";

export default function SignIn() {
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
    <div className="flex min-h-full flex-1 bg-white-100 ">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 ">
        <div className="mx-auto w-full max-w-sm lg:w-96 text-center">
          <div>
            <span className="w-full flex justify-center">
              <img
                className="h-20 w-auto "
                src="https://lh3.googleusercontent.com/d/1P2aYR54JOw38LFZaRX81C0tU1u6JZ7T-"
                alt="BB"
              />
            </span>
            <h2 className=" uppercase mt-8 text-xl font-bold leading-9 tracking-tight text-gray-900">
              Sign In
            </h2>
            <p className="mt-2 text-sm leading-6 text-black-500">
              Not a member?{" "}
              <Link
                to="/signup"
                className="uppercase font-bold no-underline text-orange-600 hover:text-orange-500"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form
                onSubmit={handleSubmit}
                action="#"
                method="POST"
                className="space-y-6"
              >
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
                      className="  block w-full rounded-md border-2 py-1.5 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6  border-black-900"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className=" block w-full rounded-md border-2 py-1.5 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6  border-black-900"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-black-600 focus:ring-black-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-black-700"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className=" uppercase flex w-full justify-center rounded-md bg-orange-600 px-3 py-3 text-xl font-bold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-0 flex-1 hidden  sm:block  ">
        <img
          className="absolute inset-0 h-full w-full object-cover "
          src="https://lh3.googleusercontent.com/d/1RPEZMU1FA-TnIgyzlR8-nrhzzQx9x92R"
          alt="sa"
        />
        <div className="absolute  bottom-1/4  left-1/3  px-1  w-1/2 text-start list-none text-primary-100 ">
          <h2 className=" text-2xl uppercase font-bold ">Shop your Way</h2>
          <p className="text-md font-medium">
            Discover the latest launches and be the first to get notifications
            for new drops
          </p>
        </div>
      </div>
    </div>
  );
}
