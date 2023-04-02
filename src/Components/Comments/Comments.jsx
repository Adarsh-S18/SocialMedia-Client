import React, { useContext, useState } from 'react'
import './Comments.scss'
import { AuthContext } from '../../Context/authContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '../../axios'
// import Swal from 'sweetalert2'
import ReactTimeago from 'react-timeago'
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";



function Comments({ post }) {
  const { currentUser } = useContext(AuthContext)
  const [desc, setDesc] = useState("");
  const queryClient = useQueryClient()

  const sortedComments = post.comments.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const mutation = useMutation(
    (newComment) => {
      return axios.put(`/posts/${post._id}/comment`, newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  )

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick(event);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: desc,
      profilePic: currentUser.profilePicture,
      name: currentUser.username,
    };
    mutation.mutate(newComment);
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture  ||  "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"} alt="" />
        <input
          type="text"
          placeholder="Comment your thoughts!"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {sortedComments.map((comment) => (
        <div className="comment" key={comment._id}>
          <img src={comment.profilePic ||  "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"} alt="" />
          <div className="c_container">
            <div className="arrow">
              <div className="osuter"></div>
              <div className="isnner"></div>
            </div>
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.comment}</p>
            </div>
          </div>
          <span className="date">
            <ReactTimeago date={comment.createdAt} locale="en-US" />
          </span>

        </div>
      ))}
    </div>
  )
}

export default Comments