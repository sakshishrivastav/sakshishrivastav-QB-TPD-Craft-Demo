
const express = require('express');
const router = express.Router();
const { saveMedal, getMedals } = require('../controllers/medalsController');

router.get('/medals', getMedals);

router.post('/medals', saveMedal);
module.exports = router;
