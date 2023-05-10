const express = require('express');
const { getDoctorInfoCtrl, updateDoctorProfileCtrl, getAllDoctorsCtrl, getDoctorByIdCtrl, homePageGetAllDoctorsCtrl, homePageGetDoctorByIdCtrl } = require('../controllers/doctorControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//getDoctorInfo route
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoCtrl);

//updateDoctorProfile route
router.post('/updateDoctorProfile', authMiddleware, updateDoctorProfileCtrl)

//getAllDoctors route
router.get('/getAllDoctors', authMiddleware, getAllDoctorsCtrl)

//homePageGetAllDoctors route
router.get('/homePageGetAllDoctors', homePageGetAllDoctorsCtrl)

//getDoctorById route
router.post('/getDoctorById', authMiddleware, getDoctorByIdCtrl)

//homePageGetDoctorById route
router.post('/homePageGetDoctorById', homePageGetDoctorByIdCtrl)

module.exports = router;
