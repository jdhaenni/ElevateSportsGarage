import React, { useState } from 'react'

const ServiceItem = ({ service, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: service.name,
    description: service.description,
    price: service.price
  })
}
