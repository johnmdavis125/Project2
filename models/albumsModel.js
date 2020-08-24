const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Create Schema
const albumSchema = new Schema({
    albumTitle: String,
    img: String,
    song1title: String,
    song2title: String,
    song3title: String, 
    song4title: String, 
    song5title: String,
    song6title: String, 
    song7title: String,
    song8title: String,
    song9title: String,
    song10title: String,
    song1length: String,
    song2length: String,
    song3length: String, 
    song4length: String, 
    song5length: String,
    song6length: String, 
    song7length: String,
    song8length: String,
    song9length: String,
    song10length: String,
    song1file: String,
    song2file: String,
    song3file: String,
    song4file: String,
    song5file: String,
    song6file: String, 
    song7file: String,
    song8file: String,
    song9file: String,
    song10file: String
}, {timestamps: true}
);

const Album = mongoose.model('Album', albumSchema); 

module.exports = Album; 