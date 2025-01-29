import React, { useEffect, useState } from "react";
import {
  fetchService,
  fetchAllServices,
  updateService,
  deleteService,
} from "../../api/ServicesApi";

import ServiceItem from "./ServiceItem";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getAllServices = async () => {
      const fetchedServices = await fetchAllServices();
      setServices(fetchedServices);
    };
    getAllServices();
  }, []);

  const fetchSingleService = async (id) => {
    const service = await fetchService(id);
    console.log(service);
  };

  const handleUpdateService = async (id, serviceData) => {
    await updateService(id, serviceData);
    fetchAllServices();
  };

  const handleDeleteService = async (id) => {
    await deleteService(id);
    fetchAllServices();
  };

  return (
    <div>
      {services.map((service) => (
        <ServiceItem
          key={service._id}
          service={service}
          onUpdateService={handleUpdateService}
          onDeleteService={handleDeleteService}
        />
      ))}
    </div>
  );
};

export default ServiceList;
