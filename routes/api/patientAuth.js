const express = require('express');
const router = express.Router();
const auth = require('../../middleware/patientAuth');

const User = require('../../models/Patient');

// @route   GET api/adminAuth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const patient = await Patient.findById(req.patient.id).select('-password');
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
