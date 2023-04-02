
// import { useContext, useEffect, useState } from "react";
// import axios from "../../axios";
// import { AuthContext } from "../../Context/authContext";
// import "./conversation.css";

// export default function Conversation({ conversation, currentUser}) {
//   const [user, setUser] = useState(null);
//   const {config} = useContext(AuthContext)
//   useEffect(() => {
//     let friendId = conversation.members.find((m) => m !== currentUser._id);
//     const getUser = async () => {
//       try {
//         const res = await axios.get("/users/" + friendId,config);
//         console.log(res,"mm")
//         setUser(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getUser();
//   }, [currentUser, conversation]);

//   return (
//     <div className="conversation hover:bg-slate-400 rounded-full">
//       <img
//         className="conversationImg"
//         src={
//           user?.profilePicture
//             ? user.profilePicture
//             :"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
//         }
//         alt=""
//       />
//       <span className="conversationName">{user?.email}</span>
//     </div>
//   );
// }


// // export default function Conversation({ conversation, currentUser, req }) {
// //   const [user, setUser] = useState(null);
// //   const { config } = useContext(AuthContext)

// //   useEffect(() => {
// //     alert("hi");
// //     let friendId = "";
// //     if (req) {
// //       friendId = conversation.members.find((m) => m !== currentUser._id);
// //       console.log("else part", friendId);
// //     }
// //     else {
// //       friendId = conversation._id
// //     }

// //     const getUser = async () => {
// //       try {
// //         const res = await axios.get("/users/" + friendId, config);
// //         // setUser(res.data);
// //         return res.data

// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //    const datares= getUser();
// //    setUser(datares)
   
// //   }, [currentUser, conversation]);
// // console.log("dhsjhdfhjfds",user);
// //   return (
// //     <div className="conversation hover:bg-slate-400 rounded-full">
// //       <img
// //         className="conversationImg"
// //         src={
// //           user?.profilePicture
// //             ? user.profilePicture
// //             : "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
// //         }
// //         alt=""
// //       />
// //       <span className="conversationName">{user?.username}</span>
// //     </div>
// //   );
// // }



import { useContext, useEffect, useState } from "react";
import axios from "../../axios";
import { AuthContext } from "../../Context/authContext";
import "./conversation.css";

export default function Conversation({ conversation, currentUser}) {
  const [user, setUser] = useState(null);
  const {config} = useContext(AuthContext)

  useEffect(() => {
    let friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log("hi",friendId)
    const getUser = async () => {
      try {
        const res = await axios.get("/users/" + friendId,config);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation hover:bg-slate-400 rounded-full">
      <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? user.profilePicture
            :"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        }
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}
