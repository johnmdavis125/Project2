const React = require('react'); 

// Styling
// const container = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
// }

class Carousel extends React.Component {
    render(){
        return (
        <div className='container'>
            <div className="carousel-container">

              <div className="carousel-button previous">
                <span className="lnr lnr-chevron-left"></span>
              </div>

              <div className="carousel-images">
                {this.props.children}
              </div>

              <div className="carousel-button next">
                <span className="lnr lnr-chevron-right"></span>
              </div>
            </div>
        </div>
        )
    }
}

// $('.container').css('display', 'flex'); 



// module.exports = Carousel; 