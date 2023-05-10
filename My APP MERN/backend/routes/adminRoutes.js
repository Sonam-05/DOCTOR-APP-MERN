const express = require('express');
const { getAllUsersCtrl, getAllDoctorsCtrl, approveDoctorCtrl } = require('../controllers/adminControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//getAllUsers router
router.post('/getAllUsers', authMiddleware, getAllUsersCtrl);

//getAllDoctors route
router.post('/getAllDoctors', authMiddleware, getAllDoctorsCtrl);

//approveDoctor route
router.post('/approveDoctor', authMiddleware, approveDoctorCtrl)

module.exports = router;