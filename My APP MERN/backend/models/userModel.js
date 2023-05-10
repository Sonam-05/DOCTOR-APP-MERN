const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Username is required']
    },
    email : {
        type : String,
        required : [true, 'Email is required']
    },
    password : {
        type : String,
        required : [true, 'Password is required']
    }, 
    isAdmin : {
        type : Boolean,
        default : false,
    },
    isDoctor : {
        type : Boolean, 
        default : false
    },
    notification : {
        type : Array,
        default : []
    },
    seennotification : {
        type : Array,
        default : []
    }
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
