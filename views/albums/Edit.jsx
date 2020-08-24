const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

const headerTitle = 'Edit Album'; 

class Edit extends React.Component {
    render(){
        const { _id, albumTitle, img, song1title, song2title, song3title, song4title, song5title, song6title, song7title, song8title, song9title, song10title, song1file, song2file, song3file, song4file, song5file, song6file, song7file, song8file, song9file, song10file} = this.props.album; 
        return (
            <Layout>
            <Header
            title={headerTitle}
            ></Header>
            <div>
                <form style={{color: 'white'}} action={`/albums/${_id}?_method=PUT`} method='POST'>
                <fieldset class='form-group col-md-6'>
                    <legend>Album Info</legend>
                    <label for='albumTitle'>Album Title</label>
                    <input class='form-control albumTitle' type='text' name='albumTitle' defaultValue={albumTitle}/><br/>
                    <label for='img'>Album Cover Img URL</label>
                    <input class='form-control img' type='text' name='img' defaultValue={img}/><br/>
                </fieldset>                

                <fieldset>
                <legend>Song Info</legend>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song1title'>Song 1 Title</label>
                        <input class='form-control song1title' type='text' name='song1title' defaultValue={song1title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song1file'>Song 1 File</label>
                        <input class='form-control song1file' type='text' name='song1file' defaultValue={song1file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song2title'>Song 2 Title</label>
                        <input class='form-control song1title' type='text' name='song2title' defaultValue={song2title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song2file'>Song 2 File</label>
                        <input class='form-control song2file' type='text' name='song2file' defaultValue={song2file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song3title'>Song 3 Title</label>
                        <input class='form-control song3title' type='text' name='song3title' defaultValue={song3title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song3file'>Song 3 File</label>
                        <input class='form-control song3file' type='text' name='song3file' defaultValue={song3file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song4title'>Song 4 Title</label>
                        <input class='form-control song4title' type='text' name='song4title' defaultValue={song4title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song4file'>Song 4 File</label>
                        <input class='form-control song4file' type='text' name='song4file' defaultValue={song4file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song5title'>Song 5 Title</label>
                        <input class='form-control song5title' type='text' name='song5title' defaultValue={song5title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song5file'>Song 5 File</label>
                        <input class='form-control song5file' type='text' name='song5file' defaultValue={song5file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song6title'>Song 6 Title</label>
                        <input class='form-control song6title' type='text' name='song6title' defaultValue={song6title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song6file'>Song 6 File</label>
                        <input class='form-control song6file' type='text' name='song6file' defaultValue={song6file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song7title'>Song 7 Title</label>
                        <input class='form-control song7title' type='text' name='song7title' defaultValue={song7title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song7file'>Song 7 File</label>
                        <input class='form-control song7file' type='text' name='song7file' defaultValue={song7file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song8title'>Song 8 Title</label>
                        <input class='form-control song8title' type='text' name='song8title' defaultValue={song8title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song8file'>Song 8 File</label>
                        <input class='form-control song8file' type='text' name='song8file' defaultValue={song8file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song9title'>Song 9 Title</label>
                        <input class='form-control song9title' type='text' name='song9title' defaultValue={song9title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song9file'>Song 9 File</label>
                        <input class='form-control song9file' type='text' name='song9file' defaultValue={song9file}/>
                    </div>
                </div>
               
                <div class='form-row'>
                    <div class='form-group col-md-3'>
                        <label for='song10title'>Song 10 Title</label>
                        <input class='form-control song10title' type='text' name='song10title' defaultValue={song10title}/>
                    </div>
                    <div class='form-group col-md-3'>
                        <label for='song10file'>Song 10 File</label>
                        <input class='form-control song10file' type='text' name='song10file' defaultValue={song10file}/>
                    </div>
                </div>

                <input class='submitButton btn btn-primary btn-sm' type='submit' name='' value='Update Album'/>
                </fieldset>
            </form>
            </div>
            </Layout>
        )
    }
}

module.exports = Edit; 