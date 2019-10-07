var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    eventType: String,
    date: Date,
    userId: String,
    venueId: String,
    note: String,
    deletedAt: {
        type: Date,
        default: null,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);