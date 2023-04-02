import React from 'react'
import TextField from '@mui/material/TextField';
import './AdminLogin.css'



function AdminLogin() {
    return (
        <div className='mainframe'>
            <div className='back'>
                <div className='backgroundd'>
                    <div className='mmm'>
                        <img className='imagee' src='https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?w=740&t=st=1672323446~exp=1672324046~hmac=147a0f5234a63c2630cf18c5dfeb470091692f65503cdd14eb8f40a068b6b9e5' alt='images'></img>
                    </div>
                    <div className='logpage'>
                        <h2>Welcome Back Admin ! </h2>
                        <img src='https://img.freepik.com/premium-vector/mafia-man-character-covering-his-eyes-with-hat_23-2148475194.jpg' alt='is'></img>
                        <div className='formm'>
                            <TextField className='formmm' id="standard-basic" label="Email" variant="standard" />
                        </div>
                        <div className='formm'>
                            <TextField className='formmm' id="standard-basic" label="Password" variant="standard" />
                        </div>
                        <div className='butt'>
                          <button className='bu' type='submit' >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminLogin
