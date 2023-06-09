import { useState } from "react";
import "./Update.scss";
import FormInput from "../FormInput/FormInput";
import Swal from 'sweetalert2'
import { useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import axios from "../../axios";

const Update = ({ setOpenUpdate, user }) => {
  const { currentUser, setcurrentUser, config } = useContext(AuthContext)
  const [values, setValues] = useState({
    username: user.username,
    email: user.email,
    city: user.city,
    desc: user.desc,
    password: null,
    confirmPassword: null,
  }); 
  const [error, setError] = useState(false);
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: `${user.username}`,
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: `${user.email}` ,
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true
    }
    ,
    {
      id: 3,
      name: "city",
      type: "text",
      placeholder: `${user?.city || "Enter your city"}` ,
      errorMessage: "Enter your city!",
      label: "City"
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: `${user?.desc || "Your description.."}`,
      errorMessage: "Set your bio",
      label: "Bio"
    }
  ];
  const queryClient = useQueryClient();

  let details = values
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/users/${user._id}`, details, config).then((response) => {
        console.log('before update', currentUser);
        setcurrentUser({ ...currentUser, city: details.city, username: details.username, desc: details.desc })
        setOpenUpdate(false)
        console.log("after update", currentUser);
        queryClient.invalidateQueries(["user"]);
      }).catch((err) => {
        console.log(err, "hello");
        err.response.data.error ? setError(err.response.data.error) : setError(err.response.data)

      })
    } catch (error) {
      setError(error.response.data)
      console.log(error);
    }
    console.log(error);
    if (error) {
      Swal.fire({
        title: 'Error!',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: 'ok'
      })
    }

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <span className="error">{error && error}</span>
            <button>Update</button>
          </form>
        </div>

        <button className="close" onClick={() => setOpenUpdate(false)}>
           X Close
        </button>
      </div>
    </div>
  );
}
export default Update
