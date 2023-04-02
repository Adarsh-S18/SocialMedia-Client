import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';
import axios from '../../axios';

function Navbar() {

  const [userData, setUserData] = useState('');
  const [searchWord, setSearchWord] = useState("")
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get(`/users`)
      .then(({ data }) => setUserData(data))
      .catch((error) => console.log(error))
  }, [])


  const handleChange = async (e) => {
    const searchWord = e.target.value
    setSearchWord(searchWord)
    const newFilter = await userData.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase());
    })
    newFilter && setFilteredData(newFilter);
  }


  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>Spectrum</span>
        </Link>


        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" value={searchWord} onChange={handleChange} placeholder='Search here...' />
          {searchWord && (
            <div className="absolute top-[-11rem] bg-gray-300 md:w-4/12  rounded-2xl mt-56">
              <ul className="relative">
                {filteredData.length > 0 ? (
                  filteredData.map((user) => (
                    <Link
                      to={`/profile/${user._id}`}
                      onClick={() => setSearchWord("")}
                      key={user._id}
                      className="flex flex-wrap gap-2  items-center p-3 hover:bg-amber-300 border-b  border-gray-200"
                    >
                      <img
                        src={user?.profilePicture}
                        alt={user?.username}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <p>{user?.username}</p>
                    </Link>
                  ))
                ) : (
                  <li className="p-3 hover:bg-gray-500 border-b rounded-b-lg border-gray-200">
                    No results found
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className='mmm'>
          {/* {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : < DarkModeOutlinedIcon onClick={toggle} />} */}
        </div>
        {/* <div className="right">
          <Link to='/profile/id' style={{ textDecoration: 'none' }}>
            <div className="user">
              <img src={currentUser.profilepic} alt='sd' />
              <span>{currentUser.name}</span>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
