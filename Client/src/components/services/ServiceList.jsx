import React, { useEffect, useState } from "react";
import {
  fetchAllServices,
  createService,
  updateService,
  deleteService,
} from "../api/servicesApi";
import ServiceItem from "../components/Services/ServiceItem";
import BookingButton from "../components/Booking/BookingButton";
import "../styles/services.css";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getAllServices = async () => {
      const fetchedServices = await fetchAllServices();
      setServices(fetchedServices);
    };
    getAllServices();
  }, []);

  const handleCreate = async (service) => {
    await createService(service);
    setServices(await fetchAllServices());
  };

  const handleUpdate = async (id, updatedService) => {
    await updateService(id, updatedService);
    setServices(await fetchAllServices());
  };

  const handleDelete = async (id) => {
    await deleteService(id);
    setServices(await fetchAllServices());
  };

  return (
    <div className="services-page">
      <h1>Our Training & Batting Cage Services</h1>
      <p>Check out our available training packages and book your session.</p>
      <div className="service-list">
        {services.map((service) => (
          <ServiceItem
            key={service._id}
            service={service}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div className="booking-section">
        <h3>Book a Training Session</h3>
        <p>Choose a package that suits you and book online.</p>
        <BookingButton />
      </div>
    </div>
  );
};

export default ServiceList;
