import React, { useState, useEffect } from "react";

import {
  fetchAllServices,
  createService,
  updateService,
  deleteService,
} from "../api/ServicesApi";

//child components
import ServiceItem from "../components/services/ServiceItem";
import ServiceForm from "../components/services/ServiceForm";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkUserRole();
    loadServices();
  }, []);

  const checkUserRole = () => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setIsAdmin(true);
    }
  };

  // Load all services
  const loadServices = async () => {
    try {
      const data = await fetchAllServices();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // Create a new service
};
