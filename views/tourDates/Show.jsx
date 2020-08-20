const React = require('react'); 

class Show extends React.Component {
    render(){
        const { date, venue, city, img} = this.props.tourDate; 
        return (
            <div>
                <h1>Tour Date Show Page</h1>
                <img src={img}/>
                <h4>{date}</h4>
                <h4>{venue}</h4>
                <h4>{city}</h4>

                <a href='/tourDates'>Back to Tour Dates</a>
            </div>
        )
    }
}

module.exports = Show; 