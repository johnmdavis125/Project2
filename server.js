// Dependencies
require('dotenv').config(); 

const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const methodOverride = require('method-override'); 

// Constants
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(express.static('public')); 
app.use(express.urlencoded({extended: false})); 
app.set('view engine', 'jsx'); 
app.engine('jsx', require('express-react-views').createEngine()); 
app.use(methodOverride('_method')); 

// Mongo Cxn
const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}); 
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo'); 
});

// Controller Wiring
const tourDatesController = require('./controllers/tourDates.js'); 
app.use('/tourDates', tourDatesController); 


// Default route:
app.get('/', (req, res) => {
    res.redirect('/tourDates');
  });

// Listen
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
}); 