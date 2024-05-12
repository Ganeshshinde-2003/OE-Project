import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);


  const api = axios.create({
    withCredentials: false, // You can set this to true if you need to send cookies with your requests
    baseURL: 'http://13.233.166.44:1999/api', // Replace 'YOUR_BACKEND_BASE_URL' with the actual base URL of your backend API
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const postData = {
      fullName:name,
      email,
      password,
      mainPassword:password,
      role,
    };

    try {
      const response = api.post('/users/signup/new', postData)
      .then((response) => {
        console.log('Response:', response.data);
      });

      if (response.sussess) {
        console.log('');
        toast.sussess("Signup successfully...");

      } else {
        console.error('Signup failed');

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
  <div className="mt-10 input-container w-[85vw] h-[40vh] md:h-[58vh] md:w-[50vw] card glow">
      <label className="md:text-3xl text-xl font-bold">Sign Up/Register</label>
        <form onSubmit={handleSubmit} className="mt-2 flex flex-col justify-between items-center w-4/5">
          <div className="w-full md:flex-row flex-col flex items-start md:items-center justify-between mb-6">
            <div className="md:text-xl mr-3">Name:</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-1 md:w-3/4 mt-1 md:mt-0  md:h-10 w-100 md:p-5 p-2 border rounded flex-1"
            />
          </div>
          <div className="w-full md:flex-row flex-col flex items-start md:items-center justify-between mb-6">
            <div className="md:text-xl mr-3">Email:</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="h-1 md:w-3/4 mt-1 md:mt-0  md:h-10 w-100 md:p-5 p-2 border rounded flex-1"
            />
          </div>
          <div className="w-full md:flex-row flex-col flex items-start md:items-center justify-between mb-6">
            <div className="md:text-xl mr-3">Password:</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="h-1 md:w-3/4 mt-1 md:mt-0  md:h-10 w-100 md:p-5 p-2 border rounded flex-1"
            />
          </div>
          <div className="w-full md:flex-row flex-col flex items-start md:items-center justify-between mb-6">
            <div className="md:text-xl mr-3">Role:</div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="h-1 md:w-3/4 mt-1 md:mt-0  md:h-10 w-100 md:p-5 p-2 border rounded flex-1"
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? 'bg-gray-400' : 'bg-gray-100 hover:bg-gray-300'
            } text-black w-full  flex items-center justify-center text-xl font-bold`}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Sign In</Link>
        </div>
    </div>
    </div>
  );
}

export default Signup;
