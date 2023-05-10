const feedbackModel = require("../models/feedbackModel")
const colors = require('colors')

//feedback Controller
const feedbackCtrl = async (req, res) => {
    try{
        const newFeedback = new feedbackModel(req.body);
        await newFeedback.save();
        res.status(200).send({success : true, message : 'Feedback Submitted Successfully'})
    }catch(error){
        console.log(error);
        res.status(500).send({success : false, message : `feedback api issue ${error.message}`.bgRed.white, error})
    }
}

//getAllFeedbacks Controller
const getAllFeedbacksCtrl = async (req, res) => {
    try{
        const allFeedbacks = await feedbackModel.find({});
        res.status(200).send({success : true, message : 'Feedbacks fetched successfully', data : allFeedbacks});
    }catch(error){
        console.log(error);
        res.status(500).send({success : false, message : `getAllFeedbacks api issue ${error.message}`.bgRed.white, error})
    }
}

module.exports = {feedbackCtrl, getAllFeedbacksCtrl}