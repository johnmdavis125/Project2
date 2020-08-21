const React = require('react'); 

class Index extends React.Component {
    render(){
        const { mainPics } = this.props; 
        // img 
        return (
            <div>
                <h1>Welcome To Your New Website! (mainPics Index page)</h1>
                <a href='/mainPics/new'>Add Pictures</a>

                <h3>It's time to take it to the next level</h3>
                <p>Use the Nav Bar and associated links to enter images for your home page gallery, upcoming tour dates, and even upload your new songs for all your fans to enjoy!</p>

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
        )
    }
}

module.exports = Index; 