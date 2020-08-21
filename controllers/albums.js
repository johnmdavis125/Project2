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
router.delete('/:id', (req, res)=>{
    Album.findByIdAndDelete(req.params.id, (error, foundAlbum)=>{
        res.redirect('/albums'); 
    });
});

// Update (PUT override POST)
router.put('/:id', (req, res)=>{
    Album.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel)=>{
        res.redirect('/albums'); 
    });
});

// Create (POST)
router.post('/', (req, res)=>{
    Album.create(req.body, (error, createdAlbum)=>{
        res.redirect('/albums'); 
    });
});

// Edit (GET)
router.get('/:id/edit', (req, res)=>{
    Album.findById(req.params.id, (error, foundAlbum)=>{
        res.render('albums/Edit', {
            album: foundAlbum
        });
    });
});

// Show (GET)
    // N/A

module.exports = router; 