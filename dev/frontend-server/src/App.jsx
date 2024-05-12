import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import { Navigate,  Route, Routes } from 'react-router-dom';

import Signin from './Pages/Singin.jsx';
import Signup from './Pages/Signup.jsx';
import HomePage from './Pages/Home.jsx';
import './App.css';

const isLoggedIn = () => {
  // Implement your authentication logic here
  // For example, check if the user has a valid token or session
  return false; // Return true if logged in, false otherwise
};

// PrivateRoute component to render either the component or redirect to login
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
  )} />
);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
