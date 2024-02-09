import React, { useState } from "react";
import axios from "axios";
export default function SignUpPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDeafult();
    try {
        const response = await axios.post("/signup", user);
        console.log(response.data);
      } catch (error) {
        console.error("Signup failed:", error);    
  };
}
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="name"
          placeholder="Enter name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
