import React, { useContext, useState } from 'react'
import './Login.css'
// import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../Components/FormInput/FormInput';
import { AuthContext } from '../../Context/authContext';
import Swal from 'sweetalert2';



function Login() {

  const [values, setValues] = useState({ email: "", password: "" });
  const [err, setErr] = useState(false)
  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password is not valid!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  let details = values
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(details).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Successfully logged into Spectrum!',
          confirmButtonText:'Continue',  
          customClass: {
            title: 'custom-title-class'
          }
        })
        navigate('/')
      })
    } catch (error) {
      console.log(error,"sad")
      setErr(error.response.data)
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='main-login'>
      <div className='sub-login'>
        <div className='mainbox'>
          <div className='subbox'>
            <div className='firstsubbox'>
              <div className='doo'>
                <p>Explore the world of<br>
                </br>Spectrum !</p>
              </div>
              <img alt='img' src='https://img.freepik.com/premium-vector/smiling-multicultural-millennial-crowd-people_316839-2158.jpg?w=900'>
              </img>
              <div className='dooo'>
                <p>The currency of real networking is not greed<br></br> but generosity.Expand and Explore yournetwork through<br></br>  Spectrum !</p>
              </div>
              <p>Don't have an account?</p>
              <div className='butt'>
                <Link to='/signup'><button className='regbut'>Register</button></Link>
              </div>
            </div>


            <div className='seccsubbox'>
              <h2>Login</h2>
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
                <div className="error"> {err && err}</div>


                <div className='buttonsub'>
                  <button className='logbut' type='submit'>Login</button>
                </div>
              </form>
              <div className='forgot'>
                <u>Forgot Password?</u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
