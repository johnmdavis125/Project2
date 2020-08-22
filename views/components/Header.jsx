const React = require('react'); 
const { urlencoded } = require('express');

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
                
                <nav class='navbar navbar-expand-sm navbar-light bg-dark'>
                    <a style={{color:'gray'}}class='navbar-brand' href="">BB</a>
                    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navBar'>
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse' id='navBar'>
                    <ul class='navbar-nav ml-auto'>
                        <li class='nav-item active'>
                            <a class='nav-link' href='/mainPics'>Home</a>
                        </li>
                        <li class='nav-item active'>
                            <a class='nav-link' href="/tourDates">Tour Dates</a>
                        </li>
                        <li class='nav-item active'>
                            <a class='nav-link' href="/albums">Albums</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>           
        )
    }
}

module.exports = Header; 