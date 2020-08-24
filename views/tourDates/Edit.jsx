const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

const headerTitle = 'Edit Tour Date';

class Edit extends React.Component {
    render(){
        const { _id, date, venue, city, img} = this.props.tourDate; 
        return (
            <Layout>
            <Header
            title={headerTitle}
            ></Header>
            <div>
                <form style={{color: 'white'}} action={`/tourDates/${_id}?_method=PUT`} method='POST'>
                    <fieldset class='form-group col-md-6'>
                        <label for='date'>Date</label>
                        <input class='date form-control' type='text' name='date' defaultValue={date}/><br/>
                        <label for='venue'>Venue</label>
                        <input class='venue form-control' type='text' name='venue' defaultValue={venue}/><br/>
                        <label for='city'>City</label>
                        <input class='city form-control' type='text' name='city' defaultValue={city}/><br/>
                        <label for='img'>Venue Image URL</label>
                        <input class='img form-control' type='text' name='img' defaultValue={img}/><br/>
                        <input class='submitButton btn btn-primary btn-sm' type='submit' name='' value='Edit TourDate Entry'/>
                    </fieldset>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = Edit; 