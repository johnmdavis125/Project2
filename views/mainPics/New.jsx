const React = require('react'); 

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>New Gallery Image</h1>
                <form action='/mainPics' method='POST'>
                    <label for='img'>Img URL</label>
                    <input class='img' type='text' name='img'/><br/>
                    <input class='submitButton' type='submit' name='' value='Upload New Image'/>
                </form>
            </div>
        )
    }
}

module.exports = New; 