import AuthService from "./AuthService";

export const getContacts = async () => {
    try {
       const response = await AuthService.get("/contacts");
      
    return response.data;
    }
    catch (error) {
      console.log(error)
    }
  };

  export const deleteContact = async (id) => {
   try {
    await AuthService.delete(`/contacts/${id}`);
   } catch (error) {
    console.log(error)
   } 
  };
  
  