require("dotenv").config()
const express = require("express");
const bodyParser = require('body-parser');

const connectDB = require('./Databaseconnecting/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

const PORT =  process.env.port || 5000;


connectDB()
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.get('/',(req,res)=>{
    res.send("Server is running");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);

})