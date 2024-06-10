
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js'

dotenv.config();

const app = express();
const PORT = 3000;

  mongoose.set('strictQuery' , false);

const connect = async () =>{
      try{
         await mongoose.connect(process.env.MONGO_URL);
         console.log("MongoDB is connected");
      }catch(err){
         console.log("MongoDB database connection failed");
      }
}

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/tours' ,tourRoute )

app.listen(PORT, (error) =>{
    connect();
    console.log("Server is Successfully Running",  PORT);
 }
);