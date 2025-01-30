import React, { useState } from "react";

const ServiceForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCreate(formData);
    setFormData({ name: "", description: "", price: "" });
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <h2>Add New Service</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Service Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Service Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default ServiceForm;
