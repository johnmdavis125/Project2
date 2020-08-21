const React = require('react'); 

class Edit extends React.Component {
    render(){
        const { _id, albumTitle, img, song1title, song2title, song3title, song4title, song5title, song6title, song7title, song8title, song9title, song10title, song1length, song2length, song3length, song4length, song5length, song6length, song7length, song8length, song9length, song10length} = this.props.album; 
        return (
            <div>
                <h1>Edit Page</h1>
                <form action={`/albums/${_id}?_method=PUT`} method='POST'>

                <label for='albumTitle'>Album Title</label>
                <input class='albumTitle' type='text' name='albumTitle' defaultValue={albumTitle}/><br/>
                <label for='img'>Album Cover Img URL</label>
                <input class='img' type='text' name='img' defaultValue={img}/><br/>
                
                <label for='song1title'>Song 1 Title</label>
                <input class='song1title' type='text' name='song1title' defaultValue={song1title}/><br/>
                <lable for='song1length'>Song 1 Length</lable>
                <input class='song1length' type='text' name='song1length' defaultValue={song1length}/><br/>

                <label for='song2title'>Song 2 Title</label>
                <input class='song2title' type='text' name='song2title' defaultValue={song2title}/><br/>
                <lable for='song2length'>Song 2 Length</lable>
                <input class='song2length' type='text' name='song2length' defaultValue={song2length}/><br/>

                <label for='song3title'>Song 3 Title</label>
                <input class='song3title' type='text' name='song3title' defaultValue={song3title}/><br/>
                <lable for='song3length'>Song 3 Length</lable>
                <input class='song3length' type='text' name='song3length' defaultValue={song3length}/><br/>

                <label for='song4title'>Song 4 Title</label>
                <input class='song4title' type='text' name='song4title' defaultValue={song4title}/><br/>
                <lable for='song4length'>Song 4 Length</lable>
                <input class='song4length' type='text' name='song4length' defaultValue={song4length}/><br/>

                <label for='song5title'>Song 5 Title</label>
                <input class='song5title' type='text' name='song5title' defaultValue={song5title}/><br/>
                <lable for='song5length'>Song 5 Length</lable>
                <input class='song5length' type='text' name='song5length' defaultValue={song5length}/><br/>

                <label for='song6title'>Song 6 Title</label>
                <input class='song6title' type='text' name='song6title' defaultValue={song6title}/><br/>
                <lable for='song6length'>Song 6 Length</lable>
                <input class='song6length' type='text' name='song6length' defaultValue={song6length}/><br/>

                <label for='song7title'>Song 7 Title</label>
                <input class='song7title' type='text' name='song7title' defaultValue={song7title}/><br/>
                <lable for='song7length'>Song 7 Length</lable>
                <input class='song7length' type='text' name='song7length' defaultValue={song7length}/><br/>

                <label for='song8title'>Song 8 Title</label>
                <input class='song8title' type='text' name='song8title' defaultValue={song8title}/><br/>
                <lable for='song8length'>Song 8 Length</lable>
                <input class='song8length' type='text' name='song8length' defaultValue={song8length}/><br/>

                <label for='song9title'>Song 9 Title</label>
                <input class='song9title' type='text' name='song9title' defaultValue={song9title}/><br/>
                <lable for='song9length'>Song 9 Length</lable>
                <input class='song9length' type='text' name='song9length' defaultValue={song9length}/><br/>

                <label for='song10title'>Song 10 Title</label>
                <input class='song10title' type='text' name='song10title' defaultValue={song10title}/><br/>
                <lable for='song10length'>Song 10 Length</lable>
                <input class='song10length' type='text' name='song10length' defaultValue={song10length}/><br/>

                <input class='submitButton' type='submit' name='' value='Update Album'/>
                </form>
            </div>
        )
    }
}

module.exports = Edit; 