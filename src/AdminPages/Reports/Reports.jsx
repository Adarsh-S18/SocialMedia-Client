import React from 'react'
import MUIDataTable from "mui-datatables";

function Reports() {
    const columns = ["Date", "UserName", "Email", "Actions"];
    const data = [
        ["Hacker123", "User123", "I will hack your spectrum account", <button style={{ width: '100px', borderRadius: '10px', height: "30px", color: 'white', backgroundColor: 'red', borderColor: 'red' }}>Take action</button>] ,
        ["Hacker123", "User123", "I will hack your spectrum account", <button style={{ width: '100px', borderRadius: '10px', height: "30px", color: 'white', backgroundColor: 'red', borderColor: 'red' }}>Take action</button>],
        ["Hacker123", "User123", "I will hack your spectrum account", <button style={{ width: '100px', borderRadius: '10px', height: "30px", color: 'white', backgroundColor: 'red', borderColor: 'red' }}>Take action</button>],
    ];
    const options = {
        filterType: "dropdown",
        responsive: "scroll"
    };
    return (
        <div className='users'>
            <div className='header'>
                <span>Reports</span>
            </div>
            <div className='usertable'>
                <MUIDataTable data={data} columns={columns} options={options} />
            </div>
        </div>
    )
}

export default Reports