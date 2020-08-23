const express = require('express'); 
const router = express.Router(); 
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
router.delete('/:id', (req, res)=>{
    MainPic.findByIdAndDelete(req.params.id, (error, foundMainPic)=>{
        res.redirect('/mainPics'); 
    });
});

// Update (put override post)
    // N/A

// Create (post)
let imageCount = 0;
router.post('/', (req, res)=>{
    MainPic.create(req.body, (error, createdMainPic)=>{
        res.redirect('/mainPics'); 
        console.log('hello hi'); 
        
        const addByOne = ()=>{
        imageCount += 1; 
        console.log(`this is imageCount ${imageCount}`);     
        }
        
        addByOne(); 
    });
});

// Edit (GET)
    // N/A

// Show (GET)
    // N/A

module.exports = router; 