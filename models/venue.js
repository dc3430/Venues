var mongoose = require('mongoose');

var venueSchema = new mongoose.Schema({
    venueType: String,
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

module.exports = mongoose.model('Venue', venueSchema);