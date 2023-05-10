const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    remark : {
        type : String,
        required : true
    }
}, {timeStamps : true})

const feedbackModel = mongoose.model('feeds', feedbackSchema);
module.exports = feedbackModel