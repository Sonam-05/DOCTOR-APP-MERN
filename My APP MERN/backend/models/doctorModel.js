const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId : {
        type : String,
    },
    firstName : {
        type : String,
        required : [true, 'First name is required']
    },
    lastName : {
        type : String,
        required : [true, 'Last name us required']
    },
    email : {
        type : String,
        required : [true, 'Email is required']
    },
    contact : {
        type : String,
        required : [true, 'Contact is required']
    },
    address : {
        type : String,
        required : [true, 'Contact number is required']
    },
    website : {
        type : String
    },
    specialization : {
        type : String,
        required : [true, 'Specialization is required']
    },
    experience : {
        type : String,
        required : [true, 'Experience number is required']
    },
    consultationFee : {
        type : String,
        required : [true, 'ConsultationFee is required']
    },
    timings : {
        type : Object,
        required : [true, 'Timings are required']
    },
    status : {
        type : String,
        default : 'pending'
    }
}, {timestamps : true});

const doctorModel = mongoose.model('doctors', doctorSchema);
module.exports = doctorModel;