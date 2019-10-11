const express = require('express');
const router = express.Router();
const venuesCtrl = require('../../controllers/venues');


router.get('/', venuesCtrl.getAllVenues);
router.post('/', venuesCtrl.createVenue);
router.get('/:id', venuesCtrl.getOneVenue);

router.put('/:id', venuesCtrl.updateVenue);
router.delete('/:id', venuesCtrl.deleteOne);
router.put('/:id/edit', venuesCtrl.editVenue);

module.exports = router;

