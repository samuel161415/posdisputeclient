import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React,{useState,useEffect,useContext} from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { DisputeContext } from '../helper/context';
import { Link,useNavigate } from 'react-router-dom';

const Header=()=>{

    const [showlogout,setShowlogout]=useState(false)
    const context=useContext(DisputeContext)
    const navigate=useNavigate()
    const handleIconClick = () => {
        setShowlogout(!showlogout);
      };
    const handleLogout=()=>{
        console.log('clicked');
      navigate('/')
    }
    return(
        // ${context.login?'visible':'invisible'}
        <nav class={`bg-lime-500 rounded  m-4  text-center p-4 flex flex-row justify-between h-1/10 `}>
            <h1>POS DISPUTE MANAGEMENT SYSTEM</h1>
            <div class="relative "><button onClick={handleIconClick}><ManageAccountsIcon /> {showlogout?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</button>
                {showlogout && (
                    <ul class="absolute z-50 bg-white  rounded flex flex-col justify-start p-2">
                    <li  class='border-2 border-red rounded px-2 cursor-pointer' >User</li>
                    <li onClick={handleLogout} class='border-2 border-red rounded mt-1 px-2 cursor-pointer '>Logout</li>
                    
                </ul>)}</div>
        </nav>
    )

}

export default Header