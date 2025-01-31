import AuthService from "./AuthService";

// fetch all services
export const fetchAllServices = async () => {
  try {
     const response = await AuthService.get("/services");
    response => response.json
  return response.data;
  }
  catch (error) {
    
  }
};

// fetch a single service by id
export const fetchService = async (id) => {
  const response = await AuthService.get(`/services/${id}`);
  return response.data;
};

// create a new service (available only to admin)
export const createService = async (serviceData) => {
  const response = await AuthService.post("/services", serviceData);
  return response.data;
};

// update an existing service (available only to admin)
export const updateService = async (id, serviceData) => {
  const response = await AuthService.put(`/services/${id}`, serviceData);
  return response.data;
};

// delete an existing service (available only to admin)
export const deleteService = async (id) => {
  await AuthService.delete(`/services/${id}`);
};
