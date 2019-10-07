const Event = require('../models/event');

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents,
    getOneEvent,
};

function createEvent(req, res) {
    let event = new Event({
        eventType: req.body.eventType,
        date: req.body.date,
        note: req.body.note,
        userId: req.body.userId,
        venueId: req.body.venueId,
    });

    event.save();
    res.status(200).json(event);
}

function updateEvent(req, res) {
    Event.findOne({ _id: req.body.id, deletedAt: null }).exec(function (err, event) {
        event.note = req.body.note
        event.save();
        res.status(200).json(event);
    });
}

function deleteEvent(req, res) {
    Event.findOne({ _id: req.body.eventId, deletedAt: null }).then(function (err, event) {
        event.deletedAt = new Date();
        event.save();
        res.status(200).json(event);
    });
}

function getAllEvents(req, res) {
    Event.find({ venueId: req.params.id, deletedAt: null }).then(function (events) {
        res.status(200).json(events);
    });
}

function getOneEvent(req, res) {
    Event.findOne({ _id: req.body.eventId}).then(function (err, event) {
        res.status(200).json(event);
    });
}