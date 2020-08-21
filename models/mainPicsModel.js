const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Create Schema 
const mainPicSchema = new Schema({
    img: {type: String, required: true}
}, {timestamps: true}
); 

// Create model from Schema
const MainPic = mongoose.model('mainPic', mainPicSchema); 

// Export TourDate Model
module.exports = MainPic; 