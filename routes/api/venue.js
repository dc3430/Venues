const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');


router.get('/venue', venueController.getAllVenues)
router.get('/venue/:id', venueController.getOneVenue);

router.post('/venue', venueController.createVenue)
router.put('/venue/:id', venueController.updateVenue)
router.delete('/venue/:id', venueController.deleteVenue)
// router.get('/venue/:id/edit', venueController.editVenue)

module.exports = router;