import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/authContext';
import './Rightbar.scss'
import axios from '../../axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { async } from 'react-input-emoji';

function Rightbar() {
  const queryClient = useQueryClient();
  const { currentUser, setcurrentUser, config } = useContext(AuthContext)
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    const getAllUsers = (async () => {
      axios.get(`users/`, config).then((users) => {
        setAllUsers(users.data)
      }, [])
    })
    getAllUsers()
  }, [])

  const { isLoading, error, data } = useQuery(["suggestions"], () =>
    axios.get(`users/`, config).then((res) => {
      const users = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setAllUsers(users)
      return res.data;
    })
  );


  const follow = async (userId) => {
    await axios.put(`users/${userId}/follow`, { userId: currentUser._id }, config)
    Swal.fire({
      text: 'You have followed the user.',
      timer: 1000,
      icon: 'success',
      showConfirmButton: false
    });

    setcurrentUser(prev => {
      prev.following.push(userId); let following = prev.following;
      console.log(following, userId);
      return { ...currentUser, following };
    })
    await axios.get(`/conversations/find/${currentUser._id}/${userId}`, config).then(async (response) => {
      if (response.data == null) {
        await axios.post(
          `/conversations/`, { senderId: currentUser._id, receiverId: userId }, config)
      }
    })
    console.log(userId);
    queryClient.invalidateQueries(["user"]);
    queryClient.invalidateQueries(["suggestions"]);
    queryClient.invalidateQueries(["posts"]);
  }

  return (

    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>New users</span>
          {allUsers.map(user => (
            currentUser.username != user.username && !user.followers.includes(currentUser._id) && <div className="user" key={user._id}>
              <div className="userInfo" key={user._id} >
                <Link
                  to={`/profile/${user._id}`}>
                  <img src={user.profilePicture || "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"} />
                </Link>
                <Link to={`/profile/${user._id}`} style={{ textDecoration: "none" }}>
                  <span>{user.username}</span>
                </Link>
              </div>
              <div className="buttons">
                {!user.followers.includes(currentUser._id) ?
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded' onClick={() => follow(user._id)} >Follow</button> :
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded' >Dismiss</button>}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>

    // <div className='rightBar'>
    //   <div className="container">
    //     <div className="item">
    //       <span>Suggestions For You</span>
    //       <div className="user">
    //         <div className="userInfo">
    //           <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' />
    //           <span>Virat </span>
    //         </div>
    //         <div className="buttons">
    //           <button>Follow</button>
    //           <button>Dismiss</button>
    //         </div>
    //       </div>
    //       <div className="user">
    //         <div className="userInfo">
    //           <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' />
    //           <span>Virat </span>
    //         </div>
    //         <div className="buttons">
    //           <button>Follow</button>
    //           <button>Dismiss</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <span>Latest Activities</span>
    //       <div className="user">
    //         <div className="userInfo">
    //           <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' /><p><span>Virat </span>changed their profile picture</p>

    //         </div>
    //         <span>1 min ago</span>
    //       </div>
    //       <div className="user">
    //         <div className="userInfo">
    //           <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' />
    //           <p><span>Virat </span>changed their profile picture</p>
    //         </div>
    //         <span>1 min ago</span>
    //       </div>
    //       <div className="user">
    //         <div className="userInfo">
    //           <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' />
    //           <p><span>Virat </span>changed their profile picture</p>
    //         </div>
    //         <span>1 min ago</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Rightbar
