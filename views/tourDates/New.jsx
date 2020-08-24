const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

const headerTitle = 'New Tour Date'; 

class New extends React.Component {
    render(){
        return (
            <Layout>
            <Header
            title={headerTitle}
            ></Header>
            <div>
                <form style={{color: 'white'}} action='/tourDates' method='POST'>
                    <fieldset class='form-group col-md-6'>
                        <legend>Tour Info</legend>
                        <label for='date'>Date</label>
                        <input class='date form-control' type='text' name='date'/><br/>
                        <label for='venue'>Venue</label>
                        <input class='venue form-control' type='text' name='venue'/><br/>
                        <label for='city'>City</label>
                        <input class='city form-control' type='text' name='city'/><br/>
                        <label for='img'>Venue Image URL</label>
                        <input class='img form-control' type='text' name='img'/><br/>
                        <input class='submitButton btn btn-primary btn-sm' type='submit' name='' value='Create TourDate Entry'/>
                    </fieldset>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = New; 