import FeedItem from "../components/FeedItem"

function Feed(){
    return (
        <div>
            <h1>This is Feed</h1>
            <FeedItem 
                title = "pasta" 
                description="boil pasta and make sauce"
                author = "Danielle"
                date = "7.1.23"
                catagory = "Dairy" />
        </div>
    )
    
}

export default Feed