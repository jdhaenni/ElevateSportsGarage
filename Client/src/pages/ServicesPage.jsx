import React, { useEffect, useState } from "react";
import { fetchAllServices } from "../api/services.api";
import ServiceItem from "../components/ServiceItem";
import "../ServicesPage.css";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchAllServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    loadServices();
  }, []);

  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        Check out our training packages, batting cages, and more.
      </p>

      <div className="services-list">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
