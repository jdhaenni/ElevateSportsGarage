import AuthService from "./AuthService"; // import the apiClient

// GET: fetch all services
export const fetchAllServices = async () => {
  // async function
  const response = await AuthService.get("/services"); // wait for the response
  return response.data; // return the data
};

// GET: fetch a single service by id
export const fetchService = async (id) => {
  // async function
  const response = await AuthService.get(`/services/${id}`); // wait for the response
  return response.data; // return the data
};

// POST: create a new service (available only to admin)
export const createService = async (serviceData) => {
  const response = await AuthService.post("/services", serviceData); // wait for the response
  return response.data;
};

// PUT: update an existing service (available only to admin)
export const updateService = async (id, serviceData) => {
  const response = await AuthService.put(`/services/${id}`, serviceData); // wait for the response
  return response.data;
};

// DELETE: delete an existing service (available only to admin)
export const deleteService = async (id) => {
  await AuthService.delete(`/services/${id}`); // wait for the response
};
