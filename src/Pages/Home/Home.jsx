import React from 'react';
import AddPost from '../../Components/AddPost/AddPost';
import Posts from '../../Components/Posts/Posts';
// import Stories from '../../Components/Stories/Stories';

import './Home.scss';

function Home() {
  return (
    <div className='home'>
     {/* <Stories /> */}
     <AddPost />
     <Posts />
    </div>
  )
}

export default Home
