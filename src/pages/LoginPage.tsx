import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(`${import.meta.env.VITE_URL}/register`).then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await axios.post(`${import.meta.env.VITE_URL}/login`, {
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
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          onSubmit={handleLogin}
        >
          {/*Username Input */}
          <label>Username</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          {/* Password Input */}
          <label>Password</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          {/* Button */}
          <button
            className="w-[200px] h-[50px] border hover:bg-teal-900"
            type="submit"
          >
            Login
          </button>
          <div className="text-center">You don't have account? 
          <Link to='/signup'>
          <div  className="text-center">Sign up here</div>
          </Link>
        </div>
        </form>
        
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
        <h2 className="text-3xl text-white ">Login</h2>
      </div>
    </div>
  );
}
