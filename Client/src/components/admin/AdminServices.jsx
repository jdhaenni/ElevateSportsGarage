import React from 'react'
import { useState, useEffect } from 'react'
import {
  fetchAllServices,
  fetchService,
  createService,
  updateService,
  deleteService
} from '../../api/ServicesApi'
import axios from 'axios'

export default function AdminServices () {
  const [services, setServices] = useState([])
  useEffect(() => {
    const fetchServices = async () => {
      const data = await fetchAllServices()
      setServices(data)
    }
    fetchServices()
  }, [])
  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  })
  const [createServiceIMG, setCreateServiceIMG] = useState(null)

  const handleServiceSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', createServiceIMG)
    formData.append('upload_preset', 'ESGimg')
    setCreateServiceIMG(null)

    try {
      if (createServiceIMG != null) {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlcaybqqy/image/upload',
          formData
        )
        const { secure_url } = response.data
        console.log(secure_url)
        setServiceFormData(prevData => ({
          ...prevData,
          image: secure_url
        }))
      }
      const newService = await createService(serviceFormData)
     
           
     
         if (newService) {
           // Reset the form data after successful submission
           setServiceFormData({
            name: '',
            description: '',
            price: '',
            image: ''
           });
          
           const data = await fetchAllServices()
           
           setServices(data)}
           else {
             throw new Error('Failed to create the Service.');
           }
    } catch (error) {
      console.log(error)
    }
    
  }
  const deleteServiceButton = async e => {
    await deleteService(e.target.name)
    const data = await fetchAllServices()
    setServices(data)
  }
  const handleServiceChange = e => {
    setServiceFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      <div className='services'>
        <h1>SERVICES</h1>
        <br></br>
        NEW SERVICE<br></br>
        <form></form>{' '}
        <form onSubmit={handleServiceSubmit}>
          <label>Service Name</label>
          <br></br>
          <input
            type='text'
            name='name'
            value={serviceFormData.name}
            onChange={handleServiceChange}
          ></input>
          <br></br>
          <label>Description</label>
          <br></br>
          <input
            type='text'
            name='description'
            value={serviceFormData.description}
            onChange={handleServiceChange}
          ></input>
          <br></br>
          <label>Price</label>
          <br></br>
          <input
            type='text'
            name='price'
            value={serviceFormData.price}
            onChange={handleServiceChange}
          ></input>
          <br></br>
          <label htmlFor='image'>Image</label>
          <input
            type='file'
            name='image'
            id='image'
            onChange={event => {
              setCreateServiceIMG(event.target.files[0])
            }}
          />
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
