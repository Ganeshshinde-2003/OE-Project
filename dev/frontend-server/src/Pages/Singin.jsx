import React, { useState } from 'react';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const api = axios.create({
    withCredentials: false,
    baseURL: 'http://13.233.166.44:1999/api',
  });

 const handleSignIn = async (e) => {
  e.preventDefault();
  setLoading(true);
    const postData = {
      email,
      password,
    };

    try {
      const response = await api.post('/users/login', postData);

      if (response.data.success) {
       console.log('Signin successfully...');
       navigate('/home');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    } finally {
      setLoading(false);
    }
};


  return (
    <div>
      <div className="heading text-nowrap font-black text-4xl absolute left-1/2 top-40 md:top-40 md:text-6xl">
        deployfor.me 🚀
      </div>
      <div className="input-container w-[85vw] h-[40vh] md:h-[45vh] md:w-[50vw] card glow">
        <label className="md:text-3xl text-xl font-bold">Sign In</label>
        <div className="flex flex-col justify-between items-center w-4/5">
          <div className="w-full md:flex-row flex-col flex items-start md:items-center justify-between mb-6">
            <div className="md:text-xl mr-3">Username</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
              className="h-1 md:w-3/4 mt-1 md:mt-0  md:h-10 w-100 md:p-5 p-2 border rounded flex-1"
            />
          </div>
          <div className="w-full md:flex-row flex-col flex items-start md:items-center justify-between mb-6">
            <div className="md:text-xl mr-3">Password: </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your password"
              className="h-1 md:w-3/4 mt-1 md:mt-0  md:h-10 w-100 md:p-5 p-2 border rounded flex-1"
            />
          </div>
          <button
            onClick={handleSignIn}
            disabled={loading}
            className={`${
              loading ? 'bg-gray-400' : 'bg-gray-100 hover:bg-gray-300'
            } text-black w-full  flex items-center justify-center text-xl font-bold`}
          >
            Sign In
          </button>
        </div>
        <div className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
