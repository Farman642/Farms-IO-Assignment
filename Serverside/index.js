require("dotenv").config()
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./Databaseconnecting/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

const PORT =  process.env.port || 5000;

app.use(cors());
connectDB()

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);


app.get('/',(req,res)=>{
    res.send("Server is running");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);

})