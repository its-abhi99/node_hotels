const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

//Set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

//Get the default connection
//Mongoose maintains a default connection object representing the mongoDB connection.

const db = mongoose.connection;

//Define event listeners for database connection


db.on('connected', ()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err) =>{
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongodB disconnected');
});

module.exports = db;