const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Create Schema 
const tourDateSchema = new Schema({
    date: String,
    venue: String,
    city: String,
    img: String
}, {timestamps: true}
); 

// Create model from Schema
const TourDate = mongoose.model('TourDate', tourDateSchema); 

// Export TourDate Model
module.exports = TourDate; 