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
                                <div class='card text-center' style={{minWidth: '300px', width: '40%', margin: '5px auto 0 auto', backgroundColor: 'black', color: 'white', border: '2px solid gray'}}>
                                <img class='card-img-top' src={tourDate.img}/>
                                {/* <div class='card-img-top' style={{backgroundImage: `url(${tourDate.img}`}}>{tourDate.date}</div> */}
                                <div class='card-body' style={{backgroundColor: 'black', padding: '0'}}>
                                    <p class='card-text' style={{margin: '0'}}>{tourDate.venue}</p>
                                    <p class='card-text' style={{margin: '0'}}>{tourDate.city}</p>

                                    <a class='card-title btn btn-primary btn-sm' href={`tourDates/${tourDate._id}`}>{tourDate.date}</a><br/>
                                    

                                    <form action={`/tourDates/${tourDate._id}?_method=DELETE`} method='POST'>
                                        <input class='btn btn-dark btn-sm' type='submit' value='Delete Entry'/>
                                    </form>

                                    {/* <a href={`/tourDates/${tourDate._id}/edit`}>Edit</a> */}
                                </div>
                                </div>
                            )
                        })                        
                    }
                <a style={{marginTop: '20px'}} class='btn btn-light btn-sm' href='/tourDates/new'>Add New Date</a>
            </div>
            
            </Layout>
        )
    }
}

module.exports = Index; 