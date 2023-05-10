const doctorModel = require("../models/doctorModel");
const colors = require('colors');

const getDoctorInfoCtrl = async (req, res) => {
    try{
        const doctor = await doctorModel.findOne({userId : req.body.userId});
        res.status(200).send({success : true, message : 'Doctor data fetched successfully', data : doctor});
    }catch(error){
        console.log(error);
        res.status(500).send({success : true, message : `getDoctorInfo api issue ${error.message}`.bgRed.white, error})
    }
}

//updateDoctorProfile Controller
const updateDoctorProfileCtrl = async (req, res) => {
    try{
        const doctor = await doctorModel.findOneAndUpdate({userId : req.body.userId}, req.body);
        await doctor.save();
        res.status(200).send({success : true, message : 'Doctor Profile Updated Successfully', data : doctor})
    }catch(error){
        console.log(error);
        res.status(500).send({success : false, message : `updateDoctorProfile api issue ${error.message}`.bgRed.white, error})
    }
}

//getAllDoctors Controller
const getAllDoctorsCtrl = async (req, res) => {
    try{
        const doctors = await doctorModel.find({status : 'approve'});
        res.status(200).send({success : true, message : 'Doctors List', data : doctors})
    }catch(error){
        console.log(error);
        res.status(500).send({success : false, message : `getAllDoctors api issue ${error.message}`.bgRed.white, error})
    }
}

//homePageGetAllDoctors Controller
const homePageGetAllDoctorsCtrl = async (req, res) => {
    try{
        const doctors = await doctorModel.find({status : 'approve'});
        res.status(200).send({success : true, message : 'Doctors List', data : doctors})
    }catch(error){
        console.log(error);
        res.status(500).send({success : false, message : `getAllDoctors api issue ${error.message}`.bgRed.white, error})
    }
}


//getDoctorById Controller
const getDoctorByIdCtrl = async (req, res) => {
    try{
        const doctor = await doctorModel.findOne({_id : req.body.doctorId});
        res.status(200).send({success : true, message : 'Doctor for appointment!', data : doctor})
    }catch(error){
        console.log(error);
        res.status(500).send({success : false, message : `getDoctorById api issue ${error.message}`.bgRed.white, error})
    }
}

//homePageGetDoctorByIdCtrl Controller
const homePageGetDoctorByIdCtrl = async (req, res) => {
    try{
        const doctor = await doctorModel.findOne({_id : req.body.doctorId});
        res.status(200).send({success : true, message : 'Doctor for appointment!', data : doctor})
    }catch(error){
        console.log(error);
        res.status(500).send({success : false, message : `getDoctorById api issue ${error.message}`.bgRed.white, error})
    }
}

module.exports = {getDoctorInfoCtrl, updateDoctorProfileCtrl, getAllDoctorsCtrl, homePageGetAllDoctorsCtrl, getDoctorByIdCtrl, homePageGetDoctorByIdCtrl}