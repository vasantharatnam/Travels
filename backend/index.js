
const express = require('express');
const cors  = require('cors');
const cookieParser = require('cookie-parser');
const  mongoose = require('mongoose');
const dotenv = require('dotenv');

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


app.listen(PORT, (error) =>{
    connect();
    console.log("Server is Successfully Running",  PORT);
 }
);