import express from 'express';
const app = express()
const port = 3000
import dotenv from 'dotenv';
dotenv.config();
import {connect} from './config/database.js'

import cors from 'cors'


connect();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



