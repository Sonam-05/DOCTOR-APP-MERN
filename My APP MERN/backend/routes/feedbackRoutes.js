const express = require('express');
const { feedbackCtrl, getAllFeedbacksCtrl } = require('../controllers/feedbackController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//feedback route
router.post('/feedback', authMiddleware, feedbackCtrl)

//getAllFeedbacks route
router.get('/getAllFeedbacks', getAllFeedbacksCtrl)

module.exports = router;