import React, { useContext, useState } from 'react'
// import TextField from '@mui/material/TextField';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
import FormInput from '../../Components/FormInput/FormInput';
import axios from '../../axios'
import Swal from 'sweetalert2';


function Register() {
    const navigate = useNavigate()
    const [values, setValues] = useState({ username: "", email: "", password: "", confirmPassword: "" })
    const { config } = useContext(AuthContext)
    const [error, setError] = useState(false);

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        }, {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        }, {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Include at least 1 letter, number and special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        }, {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ]

    const { confirmPassword, ...others } = values;
    let details = others

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/auth/register`, details, config)
                .then((response) => {
                    console.log("Signup SUCCESS", response);
                    
                    Swal.fire({
                        text: 'A Verification mail has been sent to the registered email address.',
                        timer: 3000,
                        icon:'success',
                        showConfirmButton: true    
                      });
                    navigate('/login');
                }).catch((err) => {
                    console.log(err);
                    err.response.data.error ? setError(err.response.data.error) : setError(err.response.data)
                })
        } catch (error) {
            alert(error.response.data)
            setError(true)
            console.log(error)
        }
        console.log(error)
        if (error) {
            Swal.fire({
                title: "Error!",
                text: `${error}`,
                icon: "error",
                confirmButtonText: "Ok",
            })
            navigate('/signup')
        }
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className='main-login'>
                <div className='sub-login'>
                    <div className='maiinbox'>
                        <div className='subbbox'>
                            <div className='secsubbox'>
                                <h2>Register</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className='fields'>
                                        {inputs.map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={values[input.name]}
                                                onChange={onChange}
                                            />
                                        ))}
                                    </div>
                                    <span className="error">{error && error}</span>
                                    <div className='buttonssub'>
                                        <button className='loggbut' type='submit'>Register</button>
                                    </div>
                                </form>
                            </div>
                            <div className='firstsubbox'>
                                <div className='doo'>
                                    <p>Explore the world of<br>
                                    </br>Spectrum !</p>
                                </div>
                                <img alt='img' src='https://img.freepik.com/free-vector/messenger-concept-illustration_114360-860.jpg?w=900&t=st=1672242360~exp=1672242960~hmac=74c08dc7685760dfeb7515bc2ffe57330ae6df021e11ef2f949c5a33e764048a'>
                                </img>
                                <div className='dooo'>
                                    <p>The currency of real networking is not greed<br></br> but generosity.Expand and Explore yournetwork through<br></br>  Spectrum !</p>
                                </div>
                                <p>Already in the Spectrum universe ?</p>
                                <div className='butt'>
                                    <Link to='/login'><button className='regbut'>Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

