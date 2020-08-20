const express = require('express'); 
const router = express.Router(); 

// RESTful Routes
// Index (GET)
router.get('/', (req, res)=>{
    res.send('Hello World!'); 
});

module.exports = router; 