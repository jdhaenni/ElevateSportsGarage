import React from 'react'
import AdminServices from '../components/admin/AdminServices'
import AdminReviews from '../components/admin/AdminReviews'
import './Admin.css'
import AdminHours from '../components/admin/AdminHours'
import AdminContacts from '../components/admin/AdminContacts'




export default function Admin () {
  return (
    <div className='container'>
      <AdminServices />
      <AdminReviews />
      <AdminContacts />
      <AdminHours />
      
      
    </div>
  )
}
