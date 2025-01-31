import React from 'react'
import { fetchAllServices } from '../api/ServicesApi'
import { useState,useEffect } from 'react'

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
