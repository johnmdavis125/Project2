const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

// Carousel
let currentImgIndex = 0; // iterates with each 'create'
// let highestIndex = imgArray.length -1; 

// Data to pass into Header
const headerTitle = 'Welcome to Band Builder';
const headerSubTitle = 'Customize - Share - Rock On';
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
            {/* <a href='/mainPics/new'>Add Pictures</a> */}

                <div className='carousel-button previous'>
                    <span className='carousel-control-prev-icon'></span>
                </div>

                <div className='carousel-images'>
                    {/* <ul> */}
                        {
                            mainPics.map((mainPic, i)=>{
                                return (
                                    
                                    <div key={i}>

                                        <img style={{maxWidth: '900px', minHeight: '200px'}} class='carouselImage' src={mainPic.img}/><br/>
                                        
                                        <div class='d-flex justify-content-around'>
                                        <form action={`/mainPics/${mainPic._id}?_method=DELETE`} method='POST'>
                                            <input class='btn btn-outline-light btn-sm' type='submit' value='Delete Image'/>
                                        </form>

                                        <a class='btn btn-outline-light btn-sm' href='/mainPics/new'>Add Image</a>
                                        </div>
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