import React from 'react'
import { useState, useEffect } from 'react'
import {
  fetchAllServices,
  fetchService,
  createService,
  updateService,
  deleteService
} from '../../api/ServicesApi'

export default function AdminServices() {
  const [services, setServices] = useState([])
    useEffect(() => {
      const fetchServices = async () => {
        const data = await fetchAllServices()
        setServices(data)
      }
      fetchServices()
    }, [services])
     const [serviceFormData, setServiceFormData] = useState({
        name: '',
        description: '',
        price: ''
      })

        const handleServiceSubmit = async e => {
          e.preventDefault()
      
          try {
         
      
      
            createService(serviceFormData)
            setServiceFormData({
              name: '',
              description: '',
              price: ''
            })
          } catch (error) {
            console.log(error)
          }
        }  
        const deleteServiceButton = async e => {
          deleteService(e.target.name)
        }
        const handleServiceChange = (e) => {
          setServiceFormData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
          }));
        };

  return (
    <div>
      <div className='services'>
      <h1>SERVICES</h1><br></br>
      NEW SERVICE<br></br>
      <form></form> <form onSubmit={handleServiceSubmit}>
        <label>Service Name</label><br></br>
        <input type='text' name = 'name' value = {serviceFormData.name} onChange={handleServiceChange}></input><br></br>
        <label>Description</label><br></br>
        <input type='text' name = 'description' value = {serviceFormData.description} onChange={handleServiceChange}></input><br></br>
        <label>Price</label><br></br>
        <input type='text' name = 'price' value = {serviceFormData.price} onChange={handleServiceChange}></input><br></br>
        <button type='submit'>Create New Service</button>
      </form>
      
      
      <br></br>
      <ul>
        {services.map(service => {
          return (
            <li key={service._id}>
              <p>
                {service.name}
                <br></br>
                {service.description}
                <br></br>
                {service.price}
                <br></br>
                <button>UPDATE</button>
                <br></br>
                <button name={service._id} onClick={deleteServiceButton}>
                  DELETE
                </button>
                <br></br>
              </p>
            </li>
          )
        })}
      </ul>
      </div>
    </div>
  )
}
