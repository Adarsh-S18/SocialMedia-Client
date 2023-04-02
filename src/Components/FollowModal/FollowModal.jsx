import { useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import './FollowModal.css'
import axios from "../../axios";
import { Link, useParams } from "react-router-dom";

function FollowModal({ setIsOpen2, allUsers, ofUser, followings }) {
    const users = allUsers.allUsers;
    const queryClient = useQueryClient();
    const { currentUser, setcurrentUser, config } = useContext(AuthContext)
    const altImg = "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png";

    const modalHandler = () => {
        setIsOpen2(false)
        queryClient.invalidateQueries(["user"])
    }

    const { id } = useParams();
    const userId = id;
    const unfollowuser = async (e, unuser) => {
        e.preventDefault();
        console.log(currentUser._id);
        return await axios
            .put(`users/${unuser}/unfollow`, {}, config)
            .then(() => {
                
                setcurrentUser((prev) => {
                    const index = prev.following.indexOf(userId);
                    if (index > -1 && prev.following.includes(userId)) {
                        prev.following.splice(index, 1);
                        console.log(prev.following, "das");
                    }
                    let followings = prev.following;
                    return { ...currentUser, followings };
                });
            });
    }
    return (
        <div className="modalBackground" onClick={() => {
            setIsOpen2();
        }}>
            <div className="modalContainer animate-slideleft">
                <div className="titleCloseBtn">
                    <button onClick={() => setIsOpen2()}>
                        X
                    </button>
                </div>
                <div className="title">
                    {followings ?
                        <h1>People {ofUser.username} follows</h1>
                        : <h1>People following {ofUser.username} </h1>}
                </div>

                <div className="body overflow-x-auto">

                    {followings ? users.map(user => (
                        user?.followers?.includes(ofUser._id) && <div className="user">
                            <div className="userInfoc flex items-center justify-between mt-5 hover:bg-slate-300  rounded-full" key={user._id} onClick={() => modalHandler()} >
                                <div className="flex items-center justify-start">
                                    <Link
                                        to={`/profile/${user._id}`}>
                                        <img className="rounded-full w-20 h-20 object-cover" src={user.profilePicture || altImg} />
                                    </Link>
                                    <Link to={`/profile/${user._id}`}>
                                        <span className="font-bold ml-10 text-xl hover:from-stone-300">{user.username}</span>
                                    </Link>
                                </div>
                                {currentUser._id === userId ? <button style={{ marginBottom: "20px", marginRight: "10px", borderRadius: "20px", fontSize: "12px", color: "yellow", backgroundColor: "black" }} onClick={(e) => unfollowuser(e, user._id)}>Unfollow</button> : ''}
                            </div>
                        </div>
                    )) :
                        users.map(user => (
                            user.following.includes(ofUser._id) && <div className="user">
                                <div className="userInfo flex items-center mt-5 hover:bg-gray-300 rounded-full" key={user._id} onClick={() => modalHandler()} >
                                    <Link
                                        to={`/profile/${user._id}`}>
                                        <img className="rounded-full w-20 h-20 object-cover" src={user.profilePicture || altImg} />
                                    </Link>
                                    <Link to={`/profile/${user._id}`}>
                                        <span className="font-bold ml-10 text-xl hover:from-stone-300">{user.username}</span>
                                    </Link>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="footer">
                </div>
            </div>
        </div>
    );
}

export default FollowModal;
