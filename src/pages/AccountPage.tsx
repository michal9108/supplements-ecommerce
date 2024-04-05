import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserIcon from "@/shared/UserIcon";
import H2 from "@/shared/H2";
import { useLocalStorage } from "@/scenes/cart/useLocalStorage";
import axios from 'axios';


import { useEffect, useState } from "react";

export default function Account() {



  const navigate = useNavigate();


  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };


  
const storedUserData = JSON.parse(localStorage.getItem('userCredentials') || '{}');

  

  return (
    <div className="w-full  flex flex-col h-screen bg-white-900  justify-center items-center text-black-900">
      <h2 className=" uppercase mt-8 text-xl font-bold leading-9 tracking-tight text-gray-900">
        ACCOUNT
      </h2>
      <section className="flex flex-row">
        <span>
          <UserIcon />
        </span>
        <span className="flex flex-col text-black-900 gap-2">
          {/* {token && <p>User is logged in with token: {token}</p>} */}
          <div></div>
          <h3>Username:</h3>
          <h4>{storedUserData.username}</h4>
          
          <h4>?</h4>

        </span>
      </section>

      <section>
        <h3 className="text-2xl text-black-900">Your Orders</h3>
      </section>

      <button className="text-3xl text-black-900" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}
