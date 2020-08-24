const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

// const headerTitle = `${this.props.tourDate.venue} - ${this.props.tourDate.date}`; 

class Show extends React.Component {
    render(){
        const { _id, date, venue, city, img} = this.props.tourDate; 
        return (
            <Layout>
            <Header
            title={venue}
            subTitle={date}
            ></Header>
            <div class='d-flex flex-column align-items-center'>
            <div class='card text-center' style={{minWidth: '300px', width: '60%', margin: '10px auto 0 auto', backgroundColor: 'black', color: 'rgb(230,230,230)'}}>
        
                <img class='card-img-top' src={img}/>
                <h4 class='card-title'>{venue}</h4>
                <h4 class='card-text'>{city}</h4>
                <h4>{date}</h4>

                <a class='btn btn-primary btn-sm'href='#'>Buy Tickets!</a><br/>

                <a class='btn btn-light btn-sm' href={`/tourDates/${_id}/edit`}>Edit</a><br/>

                <a class='btn btn-dark btn-sm'href='/tourDates'>Back to Tour Dates</a>
            
            </div>
            </div>
            </Layout>
        )
    }
}

module.exports = Show; 