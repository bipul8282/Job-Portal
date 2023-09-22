import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../redux/action';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [user,setUser] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    try{
      e.preventDefault();
    dispatch(login(formData));
    
    const setUser = localStorage.setItem("user", JSON.stringify(user));
    console.log("user")
    navigate('/home')
    } catch(error){
      console.error(error)
    } 
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;