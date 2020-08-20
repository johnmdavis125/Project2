const React = require('react'); 

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>New Tour Date Page</h1>
                <form action='/tourDates' method='POST'>
                    <label for='date'>Date</label>
                    <input class='date' type='text' name='date'/><br/>
                    <label for='venue'>Venue</label>
                    <input class='venue' type='text' name='venue'/><br/>
                    <label for='city'>City</label>
                    <input class='city' type='text' name='city'/><br/>
                    <label for='img'>Venue Image URL</label>
                    <input class='img' type='text' name='img'/><br/>
                    <input class='submitButton' type='submit' name='' value='Create TourDate Entry'/>
                </form>
            </div>
        )
    }
}

module.exports = New; 