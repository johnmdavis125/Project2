const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

const headerTitle = 'Albums'

class Index extends React.Component {
    render(){
        const { albums } = this.props; 
        // albumTitle, img, song1title (thru 10), song1length (thru 10);
        return (
        <Layout>
        <Header
        title={headerTitle}
        ></Header> 
        <div style={{color: 'white'}}>
            {/* <h1>albums Index Page</h1> */}
            {/* <a href='/albums/new'>Add New Song Info!</a> */}
           
            <div>
                {
                    albums.map((album, i)=>{
                        return (
                        <div class='container text-center' style={{marginTop: '20px', backgroundColor: 'black'}}>
                                    <h2 style={{marginBottom: '20px'}}>{album.albumTitle}</h2>
                            
                            <div class='row d-flex align-items-center'>
                            
                                <div class='col-lg-4 col-md-9 col-sm-12'>
                                    <img style={{minWidth: '200px', maxWidth: '350px', maxHeight: '350px', borderRadius: '10px', border: '2px solid white'}} src={album.img}/>
                                </div>
                                    

                                <div class='col-lg-6 col-md-9 col-sm-12'>
                                    <div class='row'>
                                        <div class='col-md-6 col-sm-6'>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song1title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song2title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song3title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song4title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song5title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song6title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song7title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song8title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song9title}</h5>
                                            <h5 style={{margin: '0', padding: '0 0 5px 0'}}>{album.song10title}</h5>
                                        </div>
                                        <div class='col-md-6 col-sm-6'>
                                            <audio controls class='audioPlayer'><source src={album.song1file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song2file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song3file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song4file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song5file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song6file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song7file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song8file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song9file} type='audio/mp3'></source></audio>
                                            <audio controls class='audioPlayer'><source src={album.song10file} type='audio/mp3'></source></audio>
                                        </div>
                                    </div>
                                </div>

                            </div>
                               
                                <a class='btn btn-light btn-sm' style={{marginTop: '20px'}} href={`/albums/${album._id}/edit`}>Edit Album</a>

                                <form action={`/albums/${album._id}?_method=DELETE`} method='POST'>
                                    <input class='btn btn-dark btn-sm' type='submit' value='Delete Album'/>
                                </form>

                                <a class='btn btn-light btn-sm' href='/albums/new'>Add New Album!</a>
                        </div>         
                    
                       
                        )
                    })
                 
                }
              
            </div>
        </div>
        </Layout>
        )
    }
}

module.exports = Index; 