import {Hours} from '../models/hours.schema.js';





export async function getHours(req,res) {
  try {
     const hours = await Hours.find({})
      res.send(hours)
  } catch (error) {
    console.log(error)
  }
}

export async function updateHours (req, res) {
  try {
   
    const { id } = req.params

   
    const {monday,tuesday,wednesday,thursday,friday,saturday,sunday} = req.body

   
    const hours = await Hours.find({})


   
   hours.monday = monday
   hours.tuesday = tuesday
   hours.wednesday = wednesday
   hours.thursday = thursday
   hours.friday = friday
   hours.saturday = saturday
   hours.sunday = sunday

    // save the post
    await hours.save()

    // send the success response
    res.status(200).json(hours)
  } catch (error) {
    console.log(error)
  }
}




  
   
  


