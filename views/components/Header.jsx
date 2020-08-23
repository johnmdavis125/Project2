const React = require('react'); 

const headerStyle = {
  backgroundImage: `url('../images/header.jpeg')`, 
  backgroundSize: 'cover',
  color: 'white',
  textShadow: '2px 2px rgb(46,42,42)',
  margin: '0',
  padding: '5% 0 100px 0'
}


class Header extends React.Component {
    render(){
        return (
            <div>
            <header class='d-flex flex-column justify-content-center align-items-center' style={headerStyle}>
                <h1>{this.props.title}</h1>
                <h4 style={{margin: 0, padding: 0}}>{this.props.subTitle}</h4>
            </header>    
                <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                    <a style={{color:'gray'}}className='navbar-brand' href="">BB</a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navBar'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navBar'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a className='nav-link' href='/mainPics'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/tourDates">Tour Dates</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/albums">Albums</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            // </header>           
        )
    }
}

module.exports = Header; 