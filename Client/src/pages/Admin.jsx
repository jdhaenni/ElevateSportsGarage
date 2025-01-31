import React from 'react'
import { fetchAllServices } from '../api/ServicesApi'
import { useEffect,useState } from 'react'
export default function Admin() {
 const [services,setServices] = useState([])
   useEffect(() => {
  	const data = fetchAllServices();
    setServices(data)
  },[])
  console.log(services)
  return (
    <div>
      <form>
        <label>User Name</label><br></br>
        <input type='text'></input><br></br>
        <label>Password</label><br></br>
        <input type='text'></input><br></br>
        <button type='submit'>Login</button>
      </form>
      <ul>
      {services.map((service)=>{
        <li>
          <p>
            {service}
          </p>
        </li>
      })}
      </ul>
    </div>
  )
}
