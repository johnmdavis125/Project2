const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

const headerTitle = 'New Gallery Image'; 

class New extends React.Component {
    render(){
        return (
            <Layout>
            <Header
            title={headerTitle}
            ></Header>
            <div>
                <form style={{color: 'white'}} action='/mainPics' method='POST'>
                    <fieldset class='form-group col-md-6'>
                        <legend>New Image Info</legend>
                        <label for='img'>Img URL</label>
                        <input class='img form-control' type='text' name='img'/><br/>
                        <input class='submitButton btn btn-primary btn-sm' type='submit' name='' value='Upload New Image'/>
                    </fieldset>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = New; 