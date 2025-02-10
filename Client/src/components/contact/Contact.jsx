import React, { useState } from 'react'
import { createContact } from '../../api/ContactsApi'
import './Contact.css'

export default function Contact () {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    body: ''
  })

  const handleContactSubmit = async e => {
    e.preventDefault()

    try {
      createContact(contactFormData)

      setContactFormData({
        name: '',
        email: '',
        body: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleContactChange = e => {
    setContactFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='contact-container'>
      Contact Us!<br></br>

      <form></form>{' '}
      <form onSubmit={handleContactSubmit}>
        <label className='name'>Name</label>
        <br></br>
        <input
          type='text'
          name='name'
          value={contactFormData.name}
          onChange={handleContactChange}
        ></input>
        <br></br>
        <label className='email'>Email</label>
        <br></br>
        <input
          type='email'
          name='email'
          value={contactFormData.email}
          onChange={handleContactChange}
        ></input>
        <br></br>
        <label className='message'>Message</label>
        <br></br>
        <input
        className='body'
          type='text'
          name='body'
          value={contactFormData.body}
          onChange={handleContactChange}
        ></input>
        <br></br>
        <button type='submit'>Send!</button>
      </form>
    </div>
  )
}
