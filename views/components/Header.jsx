const React = require('react'); 

// const headerStyle = {

// }

class Header extends React.Component {
    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subTitle}</h3>
                <p>{this.props.subText}</p>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Tour Dates</li>
                        <li>Albums</li>
                    </ul>
                </nav>
            </header>           
        )
    }
}

module.exports = Header; 