const React = require('react'); 

class Index extends React.Component {
    render(){
        const { tourDates } = this.props; 
        // date, city, venue, img
        return (
            <div>
                <h1>This is the tourDates Index Page</h1>
                <a href='/tourDates/new'>Add a New Tour Date Here</a>
                <ul>
                    {
                        tourDates.map((tourDate, i)=>{
                            return (
                                <>
                                <img src={tourDate.img}/><br/>
                                <li>
                                    <a href={`tourDates/${tourDate._id}`}>{tourDate.date}</a><br/>
                                    {tourDate.venue}<br/>
                                    {tourDate.city}<br/>

                                    <form action={`/tourDates/${tourDate._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value='Delete Entry'/>
                                    </form>

                                    <a href={`/tourDates/${tourDate._id}/edit`}>Edit</a>
                                </li>
                                </>
                            )
                        })                        
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index; 