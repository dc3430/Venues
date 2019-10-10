const express = require('express');
const router = express.Router();
const venuesCtrl = require('../../controllers/venues');


// router.get('/venue', venuesCtrl.getAllVenues)
// router.get('/venue/:id', venuesCtrl.getOneVenue);

router.post('/venue', venuesCtrl.createVenue)
// router.put('/venue/:id', venuesCtrl.updateVenue)
// router.delete('/venue/:id', venuesCtrl.deleteVenue)
// router.get('/venue/:id/edit', venueController.editVenue)

module.exports = router;

