import React, { useState } from 'react'

const ServiceItem = ({ service, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: service.name,
    description: service.description,
<<<<<<< HEAD
    price: service.price
  })
}
=======
    price: service.price,
  });
>>>>>>> 52968f00488fac71f779530085d4ac4efcb1bd40
