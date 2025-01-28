import express from 'express';
const app = express()
const port = 3000
import dotenv from 'dotenv';
dotenv.config();
import {connect} from './config/database.js'
import AdminRoute from './routes/admin.route.js'
import ServicesRoute from './routes/services.route.js'
import cors from 'cors'


connect();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', AdminRoute)
app.use('/', ServicesRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



