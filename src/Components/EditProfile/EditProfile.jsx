import React, { useContext } from 'react'
import { AuthContext } from '../../Context/authContext'
import './EditProfile.scss'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function EditProfile() {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className='editprofile'>
            <div className='container'>
                <h2>Edit Profile</h2>
                <div className='personal'>

                    <div className='imagee'>
                        <img src={currentUser.profilepic} alt='' />
                        <div className='icon'>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera /><span> Change Picture</span>
                            </IconButton>
                        </div>
                    </div>
                    <div className='elements'>
                        <div className='divide'>
                            <div className='mainelements'>
                                <TextField className='infield' id="standard-basic" InputLabelProps={{ style: { fontSize: 15 } }} label="First Name" variant="standard" value={currentUser.name} />
                            </div>
                            <div className='mainelements'>
                                <TextField className='infield' id="standard-basic" InputLabelProps={{ style: { fontSize: 15 } }} label="Last Name" variant="standard" value={currentUser.lname} />
                            </div>
                        </div>
                        <div className='divide'>
                            <div className='mainelements'>
                                <TextField className='infield' id="standard-basic" InputLabelProps={{ style: { fontSize: 15 } }} label="Mobile Number" variant="standard" value={currentUser.email} />
                            </div>
                            <div className='mainelements'>
                                <TextField className='infield' id="standard-basic" InputLabelProps={{ style: { fontSize: 15 } }} label="Email" variant="standard" value={currentUser.mobile} />
                            </div>
                        </div>
                        <div className='divide'>
                            <div className='mainelements'>
                                <TextField className='infield' id="standard-basic" InputLabelProps={{ style: { fontSize: 15 } }} label="Dummy" variant="standard" defaultValue='Dummy' />
                            </div>
                            <div className='mainelements'>
                                <TextField className='infield' id="standard-basic" InputLabelProps={{ style: { fontSize: 15 } }} label="Dummy" variant="standard" defaultValue='Dummy' />
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='singlebut'>
                            <Link to='/profile/:id'>
                            <button className='but'>Close</button>
                            <button className='butt'>Save</button>
                            </Link>
                        </div>
                       
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
