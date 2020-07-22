const mongoose = require('mongoose');

// create a schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'First Name is required'
    },
    lastname: {
        type: String,
        required: 'Last Name is required',
        unique: true
    },
    email: {
        type: String,
        required: 'Email is required',
        unique: true
    },
    address: {
        type: String,
        required: 'Address is required',
        unique: true
    },
    dateofbirth: {
        type: Date,
        required: 'DOB is required'
    },
    mobilenumber: {
        type: Number,
        required: 'Mobile is required',
        default: false,
        unique: true
    }
});

// compile the schema into a model which gives a class
mongoose.model('User', userSchema);