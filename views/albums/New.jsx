const React = require('react'); 

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>New Album Page</h1>

                <form action='/albums' method='POST'>
                <label for='albumTitle'>Album Title</label>
                <input class='albumTitle' type='text' name='albumTitle'/><br/>
                <label for='img'>Album Cover Img URL</label>
                <input class='img' type='text' name='img'/><br/>
                
                <label for='song1title'>Song 1 Title</label>
                <input class='song1title' type='text' name='song1title'/><br/>
                <lable for='song1length'>Song 1 Length</lable>
                <input class='song1length' type='text' name='song1length'/><br/>

                <label for='song2title'>Song 2 Title</label>
                <input class='song2title' type='text' name='song2title'/><br/>
                <lable for='song2length'>Song 2 Length</lable>
                <input class='song2length' type='text' name='song2length'/><br/>

                <label for='song3title'>Song 3 Title</label>
                <input class='song3title' type='text' name='song3title'/><br/>
                <lable for='song3length'>Song 3 Length</lable>
                <input class='song3length' type='text' name='song3length'/><br/>

                <label for='song4title'>Song 4 Title</label>
                <input class='song4title' type='text' name='song4title'/><br/>
                <lable for='song4length'>Song 4 Length</lable>
                <input class='song4length' type='text' name='song4length'/><br/>

                <label for='song5title'>Song 5 Title</label>
                <input class='song5title' type='text' name='song5title'/><br/>
                <lable for='song5length'>Song 5 Length</lable>
                <input class='song5length' type='text' name='song5length'/><br/>

                <label for='song6title'>Song 6 Title</label>
                <input class='song6title' type='text' name='song6title'/><br/>
                <lable for='song6length'>Song 6 Length</lable>
                <input class='song6length' type='text' name='song6length'/><br/>

                <label for='song7title'>Song 7 Title</label>
                <input class='song7title' type='text' name='song7title'/><br/>
                <lable for='song7length'>Song 7 Length</lable>
                <input class='song7length' type='text' name='song7length'/><br/>

                <label for='song8title'>Song 8 Title</label>
                <input class='song8title' type='text' name='song8title'/><br/>
                <lable for='song8length'>Song 8 Length</lable>
                <input class='song8length' type='text' name='song8length'/><br/>

                <label for='song9title'>Song 9 Title</label>
                <input class='song9title' type='text' name='song9title'/><br/>
                <lable for='song9length'>Song 9 Length</lable>
                <input class='song9length' type='text' name='song9length'/><br/>

                <label for='song10title'>Song 10 Title</label>
                <input class='song10title' type='text' name='song10title'/><br/>
                <lable for='song10length'>Song 10 Length</lable>
                <input class='song10length' type='text' name='song10length'/><br/>



                </form>
            </div>
        )
    }
}

module.exports = New; 