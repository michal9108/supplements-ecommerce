import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import AuthForm from "@/shared/AuthForm";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("https://server-be-node-express-mongo.fly.dev/register").then((res) => {
      console.log(res.data);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://server-be-node-express-mongo.fly.dev/register", {
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
        navigate("/");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        console.error("Unable to register user", error);
      });
  };
  return (
    <AuthForm
      title="Sign up to your new account"
      buttonText="Sign up"
      handleSubmit={handleSubmit}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
}
