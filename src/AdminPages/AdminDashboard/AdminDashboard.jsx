import React from 'react'
import './AdminDashboard.scss'

function AdminDashboard() {
    return (
        <div className='dashboard'>
            <div className='main'>
                <div className="box1">
                    <div className="content">
                        <span>Total Users</span>
                        <h1>89 </h1>
                    </div>
                </div>
                <div className="box2">
                    <div className="content">
                        <span>Total Posts</span>
                        <h1>910</h1>
                    </div>
                </div>
                <div className="box3">
                    <div className="content">
                        <span>Total Likes</span>
                        <h1>98760</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
