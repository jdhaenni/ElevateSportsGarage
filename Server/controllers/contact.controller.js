import {Contact} from '../models/admin.schema.js';


export async function postContact(req,res) {
    
    const{name,email,body} = req.body
    
 
    const contact = new Contact({
        name,
        email,
        body
    })
    
    
    try {
        await admin.save();
    res.send('Contact Sent Succesfully')
    } catch (error) {
        console.log(error)
    }
}

export async function deleteContact (req, res) {
    try {
      // get the id from the request params
      const { id } = req.params
  
      // find the service by id
      const contact= await Contact.findById(id)
  
      // validation
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        })
      }
  
      // delete the post
      await Contact.findByIdAndDelete(id)
  
      // send the success response
      res.status(200).json({
        success: true,
        message: 'contact deleted successfully'
      })
    } catch (error) {
      console.log(error)
    }
  
   
  }
  


