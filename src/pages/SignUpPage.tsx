import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function SignUpPage() {
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])


  const fetchUsers = () => {
    axios
      .get('http://localhost:3000/register')
      .then((res) => {
        //console.log(res.data)
      })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/register', { email, username, password })
      .then(() => {
        alert('Registration succesfull')
        setEmail('')
        setUsername('')
        setPassword('')
        fetchUsers()
        navigate('/')

      })
      .catch((error) => {
        console.error("error occured during signup", error);
      });
  }
  return (
    <div className='w-full h-screen flex'>
    <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
        <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
        onSubmit={handleSubmit}>
            {/* Email Input */}
            <label>Email</label>
            <br />
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
             {/*Username Input */}
             <label>Username</label>
            <br />
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
            <br />
            <br />
             {/* Password Input */}
             <label>Password</label>
            <br />
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            {/* Button */}
            <button className='w-[200px] h-[50px] border hover:bg-teal-900'
            type='submit'>Sign Up</button>
            <div className="text-center">Already have account? 
          <Link to='/login'>
          <div  className="text-center">Login here</div>
          </Link>
        </div>
        </form>
    </div>
    <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
        <h2 className='text-3xl text-white'>Sign Up</h2>
    </div>
</div>
  );
}
