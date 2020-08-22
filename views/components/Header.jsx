const React = require('react'); 

const headerStyle = {
  backgroundImage: `url('../images/header.jpeg')`,
  color: 'grey'
}

class Header extends React.Component {
    render(){
        return (
            <header style={headerStyle}>
                <h3>{this.props.title}</h3>
                <h6>{this.props.subTitle}</h6>
                <p>{this.props.subText}</p>
                
                <nav className='navbar navbar-expand-sm navbar-light bg-dark'>
                    <a style={{color:'gray'}}className='navbar-brand' href="">BB</a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navBar'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navBar'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='/mainPics'>Home</a>
                        </li>
                        <li className='nav-item active'>
                            <a className='nav-link' href="/tourDates">Tour Dates</a>
                        </li>
                        <li className='nav-item active'>
                            <a className='nav-link' href="/albums">Albums</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>           
        )
    }
}

module.exports = Header; 