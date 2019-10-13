const Venue = require('../models/venue');

module.exports = {
    createVenue,
    updateVenue,
    deleteOne,
    getAllVenues,
    getOneVenue,
    editVenue,
    showVenue,
};

function createVenue(req, res) {
    const venue = Venue.create(req.body);
    res.status(201).json(venue);
}

function updateVenue(req, res) {
    Venue.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, venue) {
        if(err) {
            console.log(err)
            res.status(500).json(err)
        } else {
            res.status(200).json(venue);
        }
    });
}

function deleteOne(req, res) {
    Venue.deleteOne({ _id: req.params.id }).then(function (err, venue) {
        res.status(200).json(venue);
    });
}

// async function deleteOne(req, res) {
//     const deletedVenue = await Venue.findByIdAndRemove(req.params.id);
//     res.status(200).json(deletedVenue);
// }

function getAllVenues(req, res) {
    try {
        Venue.find({}).then(function(venue) {
            res.status(200).json(venue);
        });
    } catch (err) {
        console.log(err)
    }
}

function getOneVenue(req, res) {
    Venue.findById(req.params.id)
    .then(function (venue){
        res.status(200).json(venue)
    })
    .catch(err => {
        res.status(500).json({"message": "something went wrong"})
    });
}

function editVenue(req, res) {
    Venue.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(venue) {
      res.status(200).json(venue);
    });
  }

function showVenue(req, res) {
    Venue.findById(req.params.id).then(function(venue) {
        res.status(200).json(venue);
    });
}