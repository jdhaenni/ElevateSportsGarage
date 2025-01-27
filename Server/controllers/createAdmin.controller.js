import {Admin} from '../models/admin.schema.js';
import bcrypt from 'bcryptjs'

const SALT_ROUNDS = 10;

export async function createAdmin(req,res) {
    console.log(req.body)
    const{user, password} = req.body
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
 
    const admin = new Admin({
        user,
        password:hashedPassword
    })
    
    res.send('User Created Succesfully')
    await admin.save();
}