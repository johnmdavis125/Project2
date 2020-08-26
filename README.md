# Project2 - Band Builder

###### Site Link: 
+ Heroku: https://jdbandbuilder.herokuapp.com/mainPics
+ GitHub: https://github.com/johnmdavis125/Project2

### Application Description
Band Builder is a web application designed for an up-and-coming local band to customize and share their own website, to include an image gallery, upcoming tour dates, and of course their music. 

### User Stories
+ Band wants to share images of their last gig on the main page
+ Band wants to post their upcoming tour dates and allow fans to buy tickets
+ Band wants to let their fans listen to their music

### Technologies Used
+ Node.js w/Express, Mongoose, and JSX
+ MongoDB
+ MVC File Structure
+ 7 RESTful routes / Full CRUD
+ jQuery
+ Heroku App
+ Bootstrap

### Approach 
##### Summary
+ Band Builder is a full CRUD application, utilizing all 7 RESTful routes

##### Resources (x3)
+ mainPics (Carousel Images on main page), tourDates, and albums
+ RESTful Routes per resource
    + mainPics: Index, New, Delete, Create
    + tourDates: Index, New, Delete, Update, Create, Edit, Show (x7 - MVP)
    + albums: Index, New, Delete, Update, Create, Edit

##### Components (x2)
+ Layout & Header
  + Layout: Used to link each site page with jQuery, Bootstrap, & public/static files, as well as set global baseline styling
  + Header: Used to customize page titles & set an identical navbar on each page

##### Lessons Learned
+ Investing time learning a front-end framework really well can save you mountains of time later on...on the to-do list
+ The freedom JSX gives for location of css, etc is awesome
    + Caveat: planning/organizing where your css will be located is time well spent
+ Wireframing needs to be more robust to include mobile layout

##### Unsolved Problems/Future Features
+ Admin authentication
+ Button to Buy Tickets
+ Dynamic Form for Albums per user input
+ Gallery container collapses if no images
+ Gallery container needs a fixed height
+ How to populate multiple resources per page
+ How to more efficiently use components (i.e. forms)


