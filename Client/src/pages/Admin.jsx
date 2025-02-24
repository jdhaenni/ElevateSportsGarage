import React from 'react'
import AdminServices from '../components/admin/AdminServices'
import AdminReviews from '../components/admin/AdminReviews'
import './Admin.css'
import AdminHours from '../components/admin/AdminHours'
import AdminContacts from '../components/admin/AdminContacts'




export default function Admin () {

  return (
    
    <div className='container'>
      <div className='side-bar'><ul>
          <li >
            Services
          </li>
          <li >
           Reviews
          </li>
          <li >
            Contacts
          </li>
          <li>
            Products
          </li>
          <li>
            Hours
          </li>
        </ul></div>
        <div className='display-container'>
      <AdminServices className="services"/>
      <AdminReviews className="reviews" />
      <AdminContacts className="contacts" />
      <AdminHours  />
      </div>
      
      
    </div>
  )
}
