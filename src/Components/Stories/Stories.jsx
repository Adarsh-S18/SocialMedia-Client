import React, { useContext } from 'react'
import { AuthContext } from '../../Context/authContext';
import './Stories.scss'


function Stories() {
    const {currentUser} = useContext(AuthContext);
    //Temporary DATA
    const stories = [
        {
          id: 1,
          name: "Virat Kohli",
          img: "https://images.pexels.com/photos/4059426/pexels-photo-4059426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          name: "Virat Kohli",
          img: "https://images.pexels.com/photos/4059426/pexels-photo-4059426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          name: "Virat Kohli",
          img: "https://images.pexels.com/photos/4059426/pexels-photo-4059426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        
        
      ];
  return (
    <div className='stories'>
         <div className="story">
            <img src={currentUser.profilepic} alt=''/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map(story =>(
        <div className="story" key={story.id}>
            <img src={story.img} alt=''/>
            <span>{story.name}</span>
        </div>
      ))}
    </div> 
  )
}

export default Stories
