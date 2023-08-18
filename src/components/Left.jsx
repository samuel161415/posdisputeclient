import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import React, { useContext, useState,createContext  } from 'react';
import { DisputeContext } from "../helper/context";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Left=()=>{
     const context=useContext(DisputeContext)
    //  console.log('current left user',context.currentBranch);
     const [showMenu, setShowMenu] = useState(false)
     
    const handleClick=(path)=>{
        // console.log('yes i am cliked and path is ',path);
       context.setPath(path)
    }
    const handleBackColor=(val)=>{
        context.setColor(val)
    }
    const handleDropDown = (color) =>{
        context.setColor(color)
        setShowMenu(!showMenu)

    }
     console.log('showmenu',showMenu);
    return(
        // ${context.login?'visible':'invisible'}
        <div class={` w-1/5 mx-4 p-2 rounded  ${context.login?'visible':'invisible'}`}>
            <header class='p-5 w-full bg-green-500 rounded-t'>Options</header>
            <ul class=''>

                <li key='1' class={`border-t-2 p-3 m-3 text-left hover:bg-blue-500 ${context.color===1?'bg-blue-200':'bg-white'}`} onClick={(e)=>handleBackColor(1)}><Link to={'/'}><button class='w-full h-full text-left'>Requested</button></Link></li>
                <li key='2' class={`border-t-2 p-3 m-3 text-left hover:bg-blue-500 ${context.color===2?'bg-blue-200':'bg-white'}`} onClick={(e)=>handleBackColor(2)}><Link to={'/pending'}><button class=' w-full h-full text-left'>Pending</button></Link></li>
                <li key='3' class={`border-t-2 p-3 m-3 text-left hover:bg-blue-500 ${context.color===3?'bg-blue-200':'bg-white'}`} onClick={(e)=>handleBackColor(3)}><Link to={'/completed'}><button class=' w-full h-full text-left'>Completed</button></Link></li>
                <li key='4' class={`border-t-2 p-3 m-3 text-left hover:bg-blue-500 ${context.color===4?'bg-blue-200':'bg-white'}`} onClick={(e)=>handleBackColor(4)}><Link to={'/declined'}><button class=' w-full h-full text-left'>Declined</button></Link></li>
                <li key='5' class={`border-t-2 p-3 m-3 text-left hover:bg-blue-500 ${context.color===5?'bg-blue-200':'bg-white'}`} onClick={(e)=>handleBackColor(5)}><Link to={'/invalid'}><button class=' w-full h-full text-left'>Invalid</button></Link></li>

            {context.currentBranch && context.currentBranch !== 'AR_TEAM' && <li key='7' class={`border-t-2 p-3 m-3 text-left ${context.color===7?'bg-blue-200':'bg-white'} `} onClick={(e)=>handleBackColor(7)}><Link to={'/input'}><button class='w-full h-full text-left'>Create Request</button></Link></li>}
                
                {context.currentBranch === 'AR_TEAM' &&(<li key='' class={`border-t-2 p-3 m-3 text-left hover:bg-blue-500 ${context.color===6?'bg-blue-200':'bg-white'}`} onClick={(e)=>{handleDropDown(6)}}><button class=' w-full h-full text-left'>User {!showMenu && <ArrowDropDownIcon />}{showMenu && <ArrowDropUpIcon />}</button></li>)}
                {context.currentBranch === 'AR_TEAM' && showMenu && (<div class = 'flex flex-col  w-3/4 m-auto'>
                    <Link to={'/add'}><button class = 'border-t-2 p-3 text-start hover:bg-blue-500'>Add User</button></Link>
                    <Link to={'/update'} ><button class = 'border-t-2 p-3 text-start hover:bg-blue-500'>Update User</button></Link>
                </div>)}
            </ul>
         
          
        </div>
    )

}

export default Left