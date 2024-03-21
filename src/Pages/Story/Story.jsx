import React from 'react'
import StoryViewer from '../../Components/StoryComponent/StoryViewer'

function Story() {
    let stories = [
        { image: "https://images.pexels.com/photos/19594010/pexels-photo-19594010/free-photo-of-woman-wearing-a-jacket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { image: "https://images.pexels.com/photos/17991284/pexels-photo-17991284/free-photo-of-empty-seats-on-ferry.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { image: "https://images.pexels.com/photos/17993401/pexels-photo-17993401/free-photo-of-young-woman-walking-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { image: "https://images.pexels.com/photos/19175643/pexels-photo-19175643/free-photo-of-woman-in-coat-standing-by-wall-in-tunnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { image: "https://images.pexels.com/photos/14573513/pexels-photo-14573513.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    ]
    return (
        <div>
            <StoryViewer stories={stories} />
        </div>
    )
}

export default Story
