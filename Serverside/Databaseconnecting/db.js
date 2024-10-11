const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.mongodb_URL;


// mongoose.connect(MONGO_URL, 
//     { useNewUrlParser: true, useUnifiedTopology: true }
// ).then(
//     () => {
//         console.log('Connected to database');
//     }
// ).catch((err) => {
//     console.log('Error connecting to database ' + err);
// })

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;