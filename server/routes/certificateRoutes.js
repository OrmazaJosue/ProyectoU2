const express = require('express');
const router = express.Router();
const certificateControllers = require('../controllers/certificateControllers');

// Route for creating a new certificate request
router.post('/requests', certificateControllers.createCertificateRequest);

// Route for retrieving all certificate requests
router.get('/requests', certificateControllers.getAllRequests);

// Route for generating a new certificate (updating the pending Certificate Request)
router.put('/create/:_id', certificateControllers.generateCertificate);

// Route for retrieving all certificates
router.get('/all', certificateControllers.getAllCertificates);

// Route for rejecting a certificate
router.delete('/reject/:_id', certificateControllers.rejectCertificateRequest);

module.exports = router;