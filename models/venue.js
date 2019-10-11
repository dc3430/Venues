var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var venueSchema = new Schema({
    name: String,
    location: String,
    style: String,
    budget: String,
    ratinglevel: String,
    note: String,    
}, {
    timestamps: true
});

module.exports = mongoose.model('Venue', venueSchema);

// name: 'Country Club',
// location: 'Dallas',
// style: 'Formal',
// budget: '$3,000.00',
// ratingLevel: '5'