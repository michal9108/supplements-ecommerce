import React, { useState } from "react";
import axios from "axios";

export default function LogInPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const loginUser = async  (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("/login", user);
        console.log(response.data);
      } catch (error) {
        console.error("Login failed:", error);
      }
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
