


import React from 'react'
import MUIDataTable from "mui-datatables";
import './AllUsers.scss'
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

function AllUsers() {


    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: pink[600],
            '&:hover': {
                backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: pink[600],
        },
    }));
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const columns = ["Name", "Email", "MobileNumber", "Block User"];
    const data = [
        ["User123", "user123@gmail.com", "1234567899", <PinkSwitch {...label}  />],
        ["User123", "user123@gmail.com", "1234567899", <PinkSwitch {...label}  />],
        ["User123", "user123@gmail.com", "1234567899", <PinkSwitch {...label}  />],
       
    ];

    const options = {
        filterType: "dropdown",
        responsive: "scroll"
    };

    return (
        <div className='users'>
            <div className='header'>
                <span>Users</span>
            </div>
            <div className='usertable'>
                <MUIDataTable data={data} columns={columns} options={options} />
            </div>
        </div>
    )
}

export default AllUsers






