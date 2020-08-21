const express = require('express'); 
const router = express.Router(); 
const mainPic = require('../models/mainPicsModel.js'); 
const MainPic = require('../models/mainPicsModel.js');

// RESTful Routes
// Index (GET)
router.get('/', (req, res)=>{
    MainPic.find({}, (error, allMainPics)=>{
        res.render('mainPics/Index', {
            mainPics: allMainPics
        })
    }) ;
});

// New (GET)
router.get('/new', (req, res)=>{
    res.render('mainPics/New'); 
}); 

// Delete (delete override post)

// Update (put override post)

// Create (post)
router.post('/', (req, res)=>{
    MainPic.create(req.body, (error, createdMainPic)=>{
        res.redirect('/mainPics'); 
    });
});


// Edit (GET)

// Show (GET)

module.exports = router; 