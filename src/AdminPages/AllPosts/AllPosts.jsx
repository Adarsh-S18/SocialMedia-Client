import React from 'react'
import MUIDataTable from "mui-datatables";

function AllPosts() {
    const columns = ["Date", "UserName", "Email", "Actions"];
    const data = [
        ["01-12-2022", "user123", "user@gmail.com", <button style={{width:'100px',borderRadius:'10px',height:"30px",color:'white',backgroundColor:'red',borderColor:'red'}}>Delete Post</button>],
        ["01-12-2022", "user123", "user@gmail.com",  <button style={{width:'100px',borderRadius:'10px',height:"30px",color:'white',backgroundColor:'red',borderColor:'red'}}>Delete Post</button>],
        ["01-12-2022", "user123", "user@gmail.com",  <button style={{width:'100px',borderRadius:'10px',height:"30px",color:'white',backgroundColor:'red',borderColor:'red'}}>Delete Post</button>],      
    ];
    const options = {
        filterType: "dropdown",
        responsive: "scroll"
    };
  return (
        <div className='users'>
            <div className='header'>
                <span>Posts</span>
            </div>
            <div className='usertable'>
                <MUIDataTable data={data} columns={columns} options={options} />
            </div>
        </div>
  )
}

export default AllPosts