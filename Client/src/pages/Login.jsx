import React from 'react'
import { loginAdmin } from '../api/LoginApi';
import {useState } from 'react'


export default function Admin() {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formData)
  try {

      const token = await loginAdmin(formData);
      

      localStorage.setItem("token", token);

      
      console.log(token)
      // navigate("/protected");
  } catch (error) {
      console.log(error);
      
  }
};

 
const handleChange = (e) => {
  setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
  }));
};



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label><br></br>
        <input type='text' name = 'user' value = {formData.user} onChange={handleChange}></input><br></br>
        <label>Password</label><br></br>
        <input type='password' name = 'password' value = {formData.password} onChange={handleChange}></input><br></br>
        <button type='submit'>Login</button>
      </form>
      
      
    </div>
  )
}
