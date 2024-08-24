// mongoose.connection.js
const mongoose = require('mongoose');
require('dotenv').config();
const { PORT, MONGO_URL, DB_NAME } = process.env;

mongoose.connect(MONGO_URL);

mongoose.connection.on('error', () => {
    console.log("DB connection error");
});

mongoose.connection.on('connected', () => {
    console.log('DB connection successfully');
});

module.exports = mongoose;
