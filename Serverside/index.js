require("dotenv").config()
const express = require("express");
const connectDB = require('./Databaseconnecting/db');




const app = express();

const PORT =  process.env.port || 5000;


connectDB()
app.get('/',(req,res)=>{
    res.send("Server is running");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);

})