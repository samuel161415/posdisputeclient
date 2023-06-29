import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React,{useState,useEffect} from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header=()=>{

    const [showlogout,setShowlogout]=useState(false)
    const handleIconClick = () => {
        setShowlogout(!showlogout);
      };
    const handleLogout=()=>{

    }
    return(
        <nav class=' bg-lime-500 rounded  m-4  text-center p-4 flex flex-row justify-between h-1/10 '>
            <h1>POS DISPUTE MANAGEMENT SYSTEM</h1>
            <div class="relative"><button onClick={handleIconClick}><ManageAccountsIcon /> {showlogout?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</button>
                {showlogout && (
                    <ul class="absolute bg-white  rounded flex flex-col justify-start p-2">
                    <li onClick={handleLogout} class='border-2 border-red rounded px-2' >User</li>
                    <li onClick={handleLogout} class='border-2 border-red rounded mt-1 px-2 '>Logout</li>
                </ul>)}</div>
        </nav>
    )

}

export default Header