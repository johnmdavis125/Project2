const React = require('react'); 
const Layout = require('../components/Layout.jsx'); 
const Header = require('../components/Header.jsx'); 

const headerTitle = 'Your Band Name Here';
const headerSubTitle = 'Optional Sub-text Here';
// const headerText = '';

class Index extends React.Component {
    render(){
        const { mainPics } = this.props; 
        // img 
        return (
            <Layout>
            <Header 
            title={headerTitle}
            subTitle={headerSubTitle}
            // subText={headerText}
            >
            </Header>
            <div>
            <a href='/mainPics/new'>Add Pictures</a>
            <ul>
                {
                    mainPics.map((mainPic, i)=>{
                        return (
                            <div>
                                <img src={mainPic.img}/><br/>

                                <form action={`/mainPics/${mainPic._id}?_method=DELETE`} method='POST'>
                                    <input type='submit' value='Delete image'/>
                                </form>

                            </div>
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