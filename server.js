import express from 'express'
const app = express()
import cors from 'cors'
const app = express ()
const PORT = process.env.port || 8000

//midlewares
app.use(morgan("dev")); //logs all the incoming req information 
//app.use(helmet()) // setting default security headers to protect some attacks
app.use(cors()) //allow cross origin resources
app.use(express.json()); //convert income data in the req.body

//MongoDB connect 
import {connectDB} from 'connectDB'
connectDB();

app.use("*", (req, res) =>{
  res.json({
message: 
  });
})