const express = require('express'); 
const router = express.Router(); 
const mainPic = require('../models/mainPicsModel.js'); 

// RESTful Routes
// Index (GET)
router.get('/', (req, res)=>{
    res.send('Hello World, this is my mainPic index'); 
})

// New (GET)

// Delete (delete override post)

// Update (put override post)

// Create (post)

// Edit (GET)

// Show (GET)

module.exports = router; 