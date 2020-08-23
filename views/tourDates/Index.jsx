const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

const headerTitle = 'Upcoming Tour Dates';

class Index extends React.Component {
    render(){
        const { tourDates } = this.props; 
        // date, city, venue, img
        return (
            <Layout>
            <Header
            title={headerTitle}
            ></Header>
            <div class='d-flex flex-column align-items-center'>              
                    {
                        tourDates.map((tourDate, i)=>{
                            return (
                                <div class='card text-center' style={{minWidth: '300px', width: '40%', margin: '5px auto 0 auto', backgroundColor: 'black'}}>
                                <img class='card-img-top' src={tourDate.img}/>
                                {/* <div class='card-img-top' style={{backgroundImage: `url(${tourDate.img}`}}>{tourDate.date}</div> */}
                                <div class='card-body' style={{backgroundColor: 'black'}}>
                                    <a class='card-title btn btn-dark btn-sm' href={`tourDates/${tourDate._id}`}>{tourDate.date}</a><br/>
                                    {/* {tourDate.venue}<br/>
                                    {tourDate.city}<br/> */}

                                    

                                    {/* <form action={`/tourDates/${tourDate._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value='Delete Entry'/>
                                    </form> */}

                                    {/* <a href={`/tourDates/${tourDate._id}/edit`}>Edit</a> */}
                                </div>
                                </div>
                            )
                        })                        
                    }
                <a href='/tourDates/new'>Add New Date</a>
            </div>
            
            </Layout>
        )
    }
}

module.exports = Index; 