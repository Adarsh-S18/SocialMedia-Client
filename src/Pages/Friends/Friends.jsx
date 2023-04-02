import React, { useEffect, useState } from 'react'
import './Friends.scss'
import axios from '../../axios';
import { useParams } from 'react-router-dom';

function Friends() {
    const [friends, setFriends] = useState([])
    const { id } = useParams()
    const userId = id;

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const response = await axios.get(`/users/friends/${userId}`)
                console.log(response.data)
                setFriends(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFriends()
    }, [userId]);

    return (
        <div className='friends'>
            <div className='menu'>
                <h2>Friends List</h2>
                {friends.map((friend) => (
                    <div className='items'>
                        <div key={friend._id} />
                        <img src={friend.profilePicture} alt=''></img>
                        <span>{friend.username}</span>
                        {/* <button>Unfriend</button> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Friends