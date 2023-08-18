import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React,{useState,useEffect,useContext} from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { DisputeContext } from '../helper/context';
import { Link,useNavigate } from 'react-router-dom';
import icon from '../asset/icon.png'

const Header=()=>{

    const [showlogout,setShowlogout]=useState(false)
    const context=useContext(DisputeContext)
    const navigate=useNavigate()
    const handleIconClick = () => {
        setShowlogout(!showlogout);
      };
    const handleLogout=()=>{
        
        context.setLogin(false)
        context.setCurrentBranch('')
        context.setCurrentUser('')
        localStorage.setItem('login', 'false');
        localStorage.setItem('currentUser','')
        localStorage.setItem('currentBranch','')

      
      
      navigate('/login')
    }
    const handleUser=() =>{
        context.setColor(6)
        navigate('/user')
    }
    return(
        // ${context.login?'visible':'invisible'}
        <nav class={`bg-green-500 rounded  m-4  text-center p-4 flex flex-row justify-between h-1/10 ${context.login?'visible':'invisible'} `}>
            {/* <img src={icon} class = 'h-10' lt="lldk" ></img> */}
            <div class = 'flex px-2'>
            <img src={icon} class = 'h-10 px-2' lt="lldk"  ></img>
            <h1 class = 'px-2 pt-2'>POS DISPUTE MANAGEMENT SYSTEM</h1>
            </div>
            
            <div class="relative  "><button onClick={handleIconClick} class = 'pt-2'><span class = 'p-2'>{context.currentUser}</span><ManageAccountsIcon /> {showlogout?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</button>
                {showlogout && (
                    <ul class="absolute z-50 bg-white  rounded  flex flex-col align-end p-2   right-0">
                    <li onClick={handleUser} class='border-2 border-red rounded px-2 cursor-pointer' >User</li>
                    <li onClick={handleLogout} class='border-2 border-red rounded mt-1 px-2 cursor-pointer  '>Logout</li>
                    
                </ul>)}</div>
        </nav>
    )

}

export default Header