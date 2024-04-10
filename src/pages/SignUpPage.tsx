import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";

import H2 from "../shared/H2";
=======
import { useNavigate} from "react-router-dom";
import AuthForm from "@/shared/AuthForm";
>>>>>>> main

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
<<<<<<< HEAD
    axios
      .get("https://server-be-node-express-mongo.fly.dev/register")
      .then((res) => {
        console.log(res.data);
      });
=======
    axios.get(import.meta.env.VITE_URL + "/register").then((res) => {
      console.log(res.data);
    });
>>>>>>> main
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    axios
<<<<<<< HEAD
      .post("https://server-be-node-express-mongo.fly.dev/register", {
=======
      .post(import.meta.env.VITE_URL + "/register", {
>>>>>>> main
        email,
        username,
        password,
      })
      .then(() => {
        alert("Registration succesfull");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      })
      .catch((error) => {
        console.error("Unable to register user", error);
      });
  };
  return (
<<<<<<< HEAD
    <div className="flex min-h-full flex-1 bg-white-100 ">
      <div className="relative  w-0 flex-1 hidden  sm:block  ">
        <img
          className="absolute inset-0 h-full w-full object-cover "
          src="https://lh3.googleusercontent.com/d/197izRjD8OVhUqpn-jtnO28OlKfupzulu"
          alt="sa"
        />
        <div className="absolute  bottom-20 left-1/3  px-1  w-1/2 text-start list-none text-primary-100 ">
          <h2 className=" text-2xl uppercase font-bold ">Track your orders</h2>
          <p className="text-md font-medium">
            Keep track the status of your orders
          </p>
        </div>
      </div>
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
              Sign Up
            </h2>
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
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="  block w-full rounded-md border-2 py-1.5 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6  border-black-900"
                    />
                  </div>
                </div>

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

                <button
                  type="submit"
                  className=" uppercase flex w-full justify-center rounded-md bg-orange-600 px-3 py-3 text-xl font-bold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Sign Up
                </button>

                <div className="flex items-center justify-center flex-col">
                <div className="flex items-center">
                    <p>Already a user?</p>
                  </div>
                  <div className="flex items-center">
                    <Link
                      to="/signin"
                      className="uppercase no-underline font-semibold leading-6 text-orange-600 hover:text-black-900"
                    >
                      Log in
                    </Link>
                  </div>
                 
                </div>
              </form>
            </div>

            <span className="mt-2"></span>
          </div>
        </div>
      </div>
    </div>
=======
    <AuthForm
      title="Sign up to your new account"
      buttonText="Sign up"
      handleSubmit={handleSubmit}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
>>>>>>> main
  );
}
