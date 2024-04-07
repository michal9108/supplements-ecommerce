import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserIcon from "@/shared/UserIcon";
import H2 from "@/shared/H2";
import { useLocalStorage } from "@/scenes/cart/useLocalStorage";
import axios from "axios";

import { useEffect, useState } from "react";

export default function Account() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const storedUserData = JSON.parse(
    localStorage.getItem("userCredentials") || "{}",
  );

  return (
    <div className="w-full  flex flex-col h-screen bg-white-900  justify-center items-center text-black-900 gap-4">
      <h2 className=" uppercase mt-8 text-xl font-bold leading-9 tracking-tight text-gray-900">
        ACCOUNT
      </h2>
      <span>
          <UserIcon />
        </span>
      <section className="flex flex-row">
      
        <span className="flex flex-col text-black-900 gap-2">
          <p className="text-bold ">Username:{storedUserData.username}</p>
        </span>
      </section>

      {/* <section>
        <h3 className="text-2xl text-black-900">Your Orders</h3>
      </section> */}

      <Link
        to="/signin"
        onClick={handleSignOut}
        className=" no-underline rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        Sign Out
      </Link>
    </div>
  );
}
