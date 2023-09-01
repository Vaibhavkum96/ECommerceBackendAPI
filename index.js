const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Invoking the .env File for MONGODB URL and JWT Connection
dotenv.config();

//Calling for the MongoDb Connection.
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DbConnected")).catch((err)=> console.log(err));

app.listen(process.env.PORT || 5000,()=> {
    console.log("Connected To Backend!")
})