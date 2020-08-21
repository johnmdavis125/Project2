const express = require('express'); 
const Album = require('../models/albumsModel');
const router = express.Router(); 
// const Album = require('..models/albumsModel.js'); 

// RESTful Routes
// Index (GET)
router.get('/', (req, res)=>{
    Album.find({}, (error, allAlbums)=>{
        res.render('albums/Index', {
            albums: allAlbums
        });
    });
});

// New (GET)
router.get('/new', (req, res)=>{
    res.render('albums/New'); 
});

// Delete (DELETE override POST)


// Update (PUT override POST)


// Create (POST)


// Edit (GET)


// Show (GET)


module.exports = router; 