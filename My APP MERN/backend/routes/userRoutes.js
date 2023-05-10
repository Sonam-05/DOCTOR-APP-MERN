const express = require('express');
const { getUserDataCtrl } = require('../controllers/userControllers');
const { markAllReadCtrl } = require('../controllers/userControllers');
const { bookAppointmentCtrl } = require('../controllers/userControllers');
// const { userProfileDataCtrl } = require('../controllers/userControllers');
// const { bookingAvailabilityCtrl } = require('../controllers/userControllers');
const { deleteAllReadCtrl } = require('../controllers/userControllers');
const { applyDoctorCtrl } = require('../controllers/userControllers');
const { loginCtrl } = require('../controllers/userControllers');
const { registerCtrl } = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//register Route
router.post('/register', registerCtrl);

//login Route
router.post('/login', loginCtrl);

//getUserData route
router.post('/getUserData', authMiddleware , getUserDataCtrl)

router.post('/applyDoctor', authMiddleware, applyDoctorCtrl)

//markAllRead router
router.post('/markAllRead', authMiddleware, markAllReadCtrl);

//deleteAllRead router
router.post('/deleteAllReadNotification', authMiddleware, deleteAllReadCtrl)

//bookAppointment router
router.post('/book-appointment', authMiddleware, bookAppointmentCtrl)

//bookingAvailability router
// router.post('/booking-availability', authMiddleware, bookingAvailabilityCtrl)

// userProfileData router
// router.post('/userProfileData', authMiddleware, userProfileDataCtrl)

//home-page-book-appointment route
// router.get('/home-page-book-appointment', /homePageBookAppointmentCtrl)

module.exports = router;
