import React from "react";
import { useState, useEffect } from "react";
import {
  fetchAllServices,
  fetchService,
  createService,
  updateService,
  deleteService,
} from "../../api/ServicesApi";
import axios from "axios";

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [serviceFormData, setServiceFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [createServiceIMG, setCreateServiceIMG] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await fetchAllServices();
      setServices(data);
    };
    fetchServices();
  }, []);

  const handleServiceSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = serviceFormData.image;

      // Only upload image if one was selected
      if (createServiceIMG != null) {
        const formData = new FormData();
        formData.append("file", createServiceIMG);
        formData.append("upload_preset", "ESGimg");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dlcaybqqy/image/upload",
          formData
        );
        imageUrl = response.data.secure_url;
        console.log("Image uploaded:", imageUrl);
      }

      // Create a new object with all form data and the image URL
      const serviceDataToSubmit = {
        ...serviceFormData,
        image: imageUrl,
      };

      // Create the service with the complete data
      const newService = await createService(serviceDataToSubmit);

      if (newService) {
        // Reset the form data after successful submission
        setServiceFormData({
          name: "",
          description: "",
          price: "",
          image: "",
        });
        setCreateServiceIMG(null);

        // Fetch updated services list
        const data = await fetchAllServices();
        setServices(data);
      } else {
        throw new Error("Failed to create the Service.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteServiceButton = async (e) => {
    await deleteService(e.target.name);
    const data = await fetchAllServices();
    setServices(data);
  };

  const handleServiceChange = (e) => {
    setServiceFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="services">
        <h1>SERVICES</h1>
        <br></br>
        NEW SERVICE<br></br>
        <form onSubmit={handleServiceSubmit}>
          <label>Service Name</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={serviceFormData.name}
            onChange={handleServiceChange}
            required
          ></input>
          <br></br>
          <label>Description</label>
          <br></br>
          <input
            type="text"
            name="description"
            value={serviceFormData.description}
            onChange={handleServiceChange}
            required
          ></input>
          <br></br>
          <label>Price</label>
          <br></br>
          <input
            type="text"
            name="price"
            value={serviceFormData.price}
            onChange={handleServiceChange}
            required
          ></input>
          <br></br>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={(event) => {
              setCreateServiceIMG(event.target.files[0]);
            }}
          />
          <button type="submit">Create New Service</button>
        </form>
        <br></br>
        <ul>
          {services.map((service) => {
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
            );
          })}
        </ul>
      </div>
    </div>
  );
}
