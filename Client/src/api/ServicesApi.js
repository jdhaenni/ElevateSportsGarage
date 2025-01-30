import AuthService from "./AuthService";

// fetch all services
export const fetchAllServices = async () => {
  // async function
  const response = await AuthService.get("/services"); // wait for the response
  return response.data; // return the data
};

// fetch a single service by id
export const fetchService = async (id) => {
  // async function
  const response = await AuthService.get(`/services/${id}`); // wait for the response
  return response.data; // return the data
};

// create a new service (available only to admin)
export const createService = async (serviceData) => {
  const response = await AuthService.post("/services", serviceData); // wait for the response
  return response.data;
};

// update an existing service (available only to admin)
export const updateService = async (id, serviceData) => {
  const response = await AuthService.put(`/services/${id}`, serviceData); // wait for the response
  return response.data;
};

// delete an existing service (available only to admin)
export const deleteService = async (id) => {
  await AuthService.delete(`/services/${id}`); // wait for the response
};
