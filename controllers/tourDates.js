const express = require('express'); 
const router = express.Router(); 
const TourDate = require('../models/tourDatesModel.js'); 

// RESTful Routes
// Index (GET)
router.get('/', (req, res)=>{
    TourDate.find({}, (error, allTourDates)=>{
        // res.send('Hello this is the index page'); 
        res.render('tourDates/Index', {
            tourDates: allTourDates
        });
    });
});

// New (GET)
router.get('/new', (req, res)=>{
    res.render('tourDates/New'); 
    // res.send('This is the new page'); 
});

// Delete (delete Override POST)

// Update (POST Override PUT)

// Create (POST)
router.post('/', (req, res)=>{
    TourDate.create(req.body, (error, createdTourDate)=>{
        res.redirect('/tourDates'); 
    });
});

// Edit (GET)

// Show (GET)


module.exports = router; 