// require the library
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/hospital_api');

//acquire the connection (to check if it successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error in connecting to db'));

// up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to database');
});
