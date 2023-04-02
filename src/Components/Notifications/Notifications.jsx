import React from 'react'
import './Notifications.scss'

function Notifications() {
    return (
        <div className='friend'>
            <div className='menu'>
                <h2>Notifications</h2>
                <div className='items'>
                    <img src='https://i.pinimg.com/564x/d5/fa/43/d5fa43524afd8e1f1a300feddc4db8d3.jpg' alt=''></img>
                    <span>User 009 </span><p>liked your photo</p>
                </div>
                <div className='items'>
                    <img src='https://i.pinimg.com/564x/d5/fa/43/d5fa43524afd8e1f1a300feddc4db8d3.jpg' alt=''></img>
                    <span>User 009 </span><p>accepted your friend request</p>
                </div>
                <div className='items'>
                    <img src='https://i.pinimg.com/564x/d5/fa/43/d5fa43524afd8e1f1a300feddc4db8d3.jpg' alt=''></img>
                    <span>User 009 </span><p>sent you a friend request</p>
                    <div className='buttons'>
                        <button className='buttonss'>Accept</button>
                        <button className='reject'>Reject</button>
                    </div>
                </div>
                <div className='items'>
                    <img src='https://i.pinimg.com/564x/d5/fa/43/d5fa43524afd8e1f1a300feddc4db8d3.jpg' alt=''></img>
                    <span>User 009 </span><p>sent you a friend request</p>
                    <div className='buttons'>
                        <button className='buttonss'>Accept</button>
                        <button className='reject'>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications