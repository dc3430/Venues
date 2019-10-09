const Venue = require('../models/venue');

module.exports = {
    createVenue,
    updateVenue,
    deleteVenue,
    getAllVenues,
    getOneVenue,
};

function createVenue(req, res) {
    const venue = Venue.create(req.body);
    res.status(201).json(venue);
}

function updateVenue(req, res) {
    Venue.findOne({ _id: req.body.id, deletedAt: null }).exec(function (err, venue) {
        venue.note = req.body.note
        venue.save();
        res.status(200).json(venue);
    });
}

function deleteVenue(req, res) {
    Venue.findOne({ _id: req.body.venueId, deletedAt: null }).then(function (err, venue) {
        venue.deletedAt = new Date();
        venue.save();
        res.status(200).json(venue);
    });
}

function getAllVenues(req, res) {
    Venue.find({ venueId: req.params.id, deletedAt: null }).then(function (venues) {
        res.status(200).json(venues);
    });
}

function getOneVenue(req, res) {
    Venue.findOne({ _id: req.body.venueId}).then(function (err, venue) {
        res.status(200).json(venue);
    });
}