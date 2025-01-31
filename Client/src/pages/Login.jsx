import React from 'react'

import { useEffect,useState } from 'react'


export default function Admin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
});
 



  return (
    <div>
      <form>
        <label>User Name</label><br></br>
        <input type='text' name = 'user' value = {formData.user}></input><br></br>
        <label>Password</label><br></br>
        <input type='password' name = 'password' value = {formData.password}></input><br></br>
        <button type='submit'>Login</button>
      </form>
      
      
    </div>
  )
}
