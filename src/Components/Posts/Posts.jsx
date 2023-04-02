import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
import { useQuery } from "@tanstack/react-query"
import axios from '../../axios';
import Post from '../PostActions/Post';

const Posts = ({ userId }) => {
  const navigate = useNavigate()
  const [err, setErr] = useState(false);
  const { config, setcurrentUser } = useContext(AuthContext)
  const { isLoading, error, data } = useQuery(["posts"], () =>
    axios.get(userId ? `posts/profile/${userId}` : "posts/timeline/all", config).then((res) => {
      const sortedPost = res.data.length > 2
        ? res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        : res.data;
      return sortedPost || [];
    })
      .catch((e) => {
        console.log(e);
        setErr(e.response?.data + "Please re-login");
        setcurrentUser(false)
        navigate('/login')
      })
  )

  return (
    <div className='posts'>
      {error ? (
        <span onClick={() => { window.location.replace("/login"); }} style={{ cursor: "pointer" }} >
          {err}
        </span>)
        : isLoading ? ("Loading...") :
          (data.length === 0 ? 
            <div>
              <img style={{marginLeft:"110px"}} src='https://media.tenor.com/tErPDtf_1SsAAAAi/mafumafu-ghost.gif' />
              <h3 style={{textAlign:"center", fontSize:"20px" ,marginTop:"10px",fontWeight:"600",color:"red",fontFamily:"initial"}}>No Post found!</h3>
            </div> 
          
          :(data.map((post) =>
              <Post post={post} key={post._id} />)
            ))}
    </div>
  )
}

export default Posts



