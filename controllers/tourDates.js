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
router.delete('/:id', (req, res)=>{
    TourDate.findByIdAndDelete(req.params.id, (error, foundTourDate)=>{
        res.redirect('/tourDates'); 
    });
});

// Update (PUT override POST)
router.put('/:id', (req, res)=>{
    TourDate.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel)=>{
        res.redirect('/tourDates'); 
    });
});


// Create (POST)
router.post('/', (req, res)=>{
    TourDate.create(req.body, (error, createdTourDate)=>{
        res.redirect('/tourDates'); 
    });
});

// Edit (GET)
router.get('/:id/edit', (req, res)=>{
    TourDate.findById(req.params.id, (error, foundTourDate)=>{
        res.render('tourDates/Edit', {
            tourDate: foundTourDate
        });
    });
});

// Show (GET)


module.exports = router; 