const React = require('react'); 

class Edit extends React.Component {
    render(){
        const { _id, date, venue, city, img} = this.props.tourDate; 
        return (
            <div>
                <h1>Edit Page</h1>
                <form action={`/tourDates/${_id}?_method=PUT`} method='POST'>
                    <label for='date'>Date</label>
                    <input class='date' type='text' name='date' defaultValue={date}/><br/>
                    <label for='venue'>Venue</label>
                    <input class='venue' type='text' name='venue' defaultValue={venue}/><br/>
                    <label for='city'>City</label>
                    <input class='city' type='text' name='city' defaultValue={city}/><br/>
                    <label for='img'>Venue Image URL</label>
                    <input class='img' type='text' name='img' defaultValue={img}/><br/>
                    <input class='submitButton' type='submit' name='' value='Edit TourDate Entry'/>
                </form>
            </div>
        )
    }
}

module.exports = Edit; 