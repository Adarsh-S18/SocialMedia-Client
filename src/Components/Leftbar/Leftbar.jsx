import React, { useContext } from 'react'
import './Leftbar.scss'
import HomeIcon from '@mui/icons-material/Home';
// import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import LogoutIcon from '@mui/icons-material/Logout';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { AuthContext } from '../../Context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




function Leftbar() {
  const { currentUser , setcurrentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to logout?",

      showCancelButton: true,
      confirmButtonText: "Yes",

      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        setcurrentUser(false);
        navigate("/login");
      } else if (result.isDenied) {
      }
    });
  };




  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <Link to={"/profile/" + currentUser._id} style={{ textDecoration: 'none' }}>
            <div className="user">
              <img src={currentUser.profilePicture || "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"} alt='sd' />
              <span>{currentUser.username}</span>
            </div>
          </Link>

          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <HomeIcon className='hii' />
              <span>Home</span>
            </div>
          </Link>

          <Link to={'/friends/'+currentUser._id} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <GroupsIcon />
              <span>Friends</span>
            </div>
          </Link>

          <Link to='/messages' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <MarkChatUnreadIcon />
              <span>Messages</span>
            </div>
          </Link>
          <hr style={{ marginTop: "40px" }}></hr>
          <div className="item" style={{cursor:"pointer"}} onClick={() => {
            handleLogout()
          }}>
            <LogoutIcon />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
