import React from 'react'
import { fetchAllServices } from '../api/ServicesApi'
import { useEffect,useState } from 'react'


export default function Admin() {
 const [services,setServices] = useState([])

   useEffect(() => {
    const fetchServices = async ()=>{
      const data = await fetchAllServices()
      setServices(data)
    }
    fetchServices()
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
        return(
        <li key = {service._id}>
          <p>
            {service.name}<br></br>
            {service.price}
          </p>
        </li>)
      })}
      </ul>
    </div>
  )
}
