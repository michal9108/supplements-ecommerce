import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import AuthForm from "@/shared/AuthForm";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(import.meta.env.VITE_URL +'/register').then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await axios.post(import.meta.env.VITE_URL + '/login', {
        username,
        password,
      });
      const token = resp.data.token;
      alert("Login succesful");
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login failed:", error);
    }
  };
  return (
    <AuthForm
    title="Log In"
    buttonText="Login"
    handleSubmit={handleLogin}
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
  />
  );
  
}
