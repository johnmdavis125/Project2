const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

const headerTitle = 'Albums Index Page'

class Index extends React.Component {
    render(){
        const { albums } = this.props; 
        // albumTitle, img, song1title (thru 10), song1length (thru 10);
        return (
        <Layout>
        <Header
        title={headerTitle}
        ></Header> 
        <div>
            {/* <h1>albums Index Page</h1> */}
            {/* <a href='/albums/new'>Add New Song Info!</a> */}
               
            <ul>
                {
                    albums.map((album, i)=>{
                        return (
                            <>
                                <img src={album.img}/><br/>
                                <h4>{album.albumTitle}</h4>
                                <li>
                                    {album.song1title}{album.song1length}<br/>
                                    {album.song2title}{album.song2length}<br/>
                                    {album.song3title}{album.song3length}<br/>
                                    {album.song4title}{album.song4length}<br/>
                                    {album.song5title}{album.song5length}<br/>
                                    {album.song6title}{album.song6length}<br/>
                                    {album.song7title}{album.song7length}<br/>
                                    {album.song8title}{album.song8length}<br/>
                                    {album.song9title}{album.song9length}<br/>
                                    {album.song10title}{album.song10length}<br/>
                                    <a href='/albums/new'>Add New Album!</a>

                                    <form action={`/albums/${album._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value='Delete Album'/>
                                    </form>

                                    <a href={`/albums/${album._id}/edit`}>Edit</a>
                                </li>
                            </>
                        )
                    })

                }

            </ul>
        </div>
        </Layout>
        )
    }
}

module.exports = Index; 

