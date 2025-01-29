import React, { useState } from "react";

const ServiceItem = ({ service, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: service.name,
    description: service.description,
    price: service.price,
  });

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => setIsEditing(false);

  return (
    <li>
      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onUpdate(service._id, editForm);
            setIsEditing(false);
          }}
        >
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          />
          <textarea
            value={editForm.description}
            onChange={(e) =>
              setEditForm({ ...editForm, description: e.target.value })
            }
          />
          <input
            type="text"
            value={editForm.price}
            onChange={(e) =>
              setEditForm({ ...editForm, price: e.target.value })
            }
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Price: {service.price}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(service._id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default ServiceItem;
