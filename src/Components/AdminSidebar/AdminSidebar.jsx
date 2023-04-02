import React from 'react'
import './AdminSidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Link } from 'react-router-dom';

function AdminSidebar() {
    return (
        <div className='leftBar'>
            <div className="container">
                <div className="menu">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div className="user">
                            <span>Spectrum</span>
                        </div>
                    </Link>
                    <Link to='/dashboard' style={{textDecoration:'none',color:'white'}}>
                    <div className="item">
                        <HomeIcon />
                        <span>Dashboard</span>
                    </div>
                    </Link>
                    <Link to='/dashboard/allusers' style={{textDecoration:'none',color:'white'}}>
                    <div className="item">
                        <GroupsIcon />
                        <span>Users</span>
                    </div>
                    </Link>
                    <Link to='/dashboard/allposts' style={{textDecoration:'none',color:'white'}}>
                    <div className="item">
                       <FileCopyIcon />
                        <span>Posts</span>
                    </div>
                    </Link>
                    <Link to='/dashboard/reports' style={{textDecoration:'none',color:'white'}}>
                    <div className="item" >
                        <NotificationsActiveRoundedIcon />
                        <span>Reports</span>
                    </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
