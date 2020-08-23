const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 
const Carousel = require('../components/Carousel.jsx'); 
// Carousel
let currentImgIndex = 0; // iterates with each 'create'
// let highestIndex = imgArray.length -1; 

// Data to pass into Header
const headerTitle = 'Your Band Name Here';
const headerSubTitle = 'Optional Sub-text Here';
let imageCounter = 0; 

class Index extends React.Component {
    render(){
        const { mainPics } = this.props; 
        console.log(mainPics);      

        imageCounter = 0; 
        // $(()=>{
        // console.log($); 
        // console.log('hello world'); 
        // })

        return (
            <Layout>
            <Header 
            title={headerTitle}
            subTitle={headerSubTitle}
            ></Header>
            <div className='carousel-container'>
            <a href='/mainPics/new'>Add Pictures</a>

                <div className='carousel-button previous'>
                    <span className='carousel-control-prev-icon'></span>
                </div>

                <div className='carousel-images'>
                    {/* <ul> */}
                        {
                            mainPics.map((mainPic, i)=>{
                                return (
                                    
                                    <div key={i}>

                                        <img src={mainPic.img}/><br/>

                                        <form action={`/mainPics/${mainPic._id}?_method=DELETE`} method='POST'>
                                            <input type='submit' value='Delete image'/>
                                        </form>

                                    </div>
                                )
                            })
                        }
                    {/* </ul> */}
                </div>

                <div className='carousel-button next'>
                    <span className='carousel-control-next-icon'></span>
                </div>

            </div>
            </Layout>
        )
    }
}



module.exports = Index; 