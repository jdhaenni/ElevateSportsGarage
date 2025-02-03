import React, { useState } from "react";

const ServiceItem = ({ service, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: service.name,
    description: service.description,
    price: service.price,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setEditForm({
      name: service.name,
      description: service.description,
      price: service.price,
    });
    setIsEditing(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (onUpdate) {
      await onUpdate(service._id, editForm);
      setIsEditing(false);
    }
  };

  return (
    <div className="service-item">
      {isEditing ? (
        <form onSubmit={handleSave}>
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
          <p>Price: ${service.price}</p>

          {/** If the user isAdmin, show the edit/delete buttons **/}
          {isAdmin && (
            <>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={() => onDelete(service._id)}>Delete</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
