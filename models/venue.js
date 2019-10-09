var mongoose = require('mongoose');

var venueSchema = new mongoose.Schema({
    name: String,
    location: String,
    style: String,
    budget: Number,
    ratinglevel: String,    
}, {
    timestamps: true
});

module.exports = mongoose.model('Venue', venueSchema);

// name: 'Country Club',
// location: 'Dallas',
// style: 'Formal',
// budget: '$3,000.00',
// ratingLevel: '5'