import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import React, { useContext, useState,createContext  } from 'react';
import { DisputeContext } from "../helper/context";
const Left=()=>{
     const context=useContext(DisputeContext)
     
    const handleClick=(path)=>{
        console.log('yes i am cliked and path is ',path);
       context.setPath(path)
    }
    const handleBackColor=(val)=>{
        context.setColor(val)
    }
    return(
        // ${context.login?'visible':'invisible'}
        <div class={` w-1/5 mx-4 rounded `}>
            <header class='p-5 w-full bg-yellow-500 rounded-t'>Options</header>
            <ul class=''>
                <li class={`border-t-2 p-3 m-3 text-left bg-${context.color==1?'gray-400':'white'}`} onClick={(e)=>handleBackColor(1)}><Link to={'/'}><button class='w-full h-full text-left'>Requested</button></Link></li>
                <li class={`border-t-2 p-3 m-3 text-left bg-${context.color==7?'gray-400':'white'}`} onClick={(e)=>handleBackColor(7)}><Link to={'/input'}><button class='w-full h-full text-left'>Create Request</button></Link></li>
                <li class={`border-t-2 p-3 m-3 text-left bg-${context.color==2?'gray-400':'white'}`} onClick={(e)=>handleBackColor(2)}><Link to={'/pending'}><button class=' w-full h-full text-left'>Pending</button></Link></li>
                <li class={`border-t-2 p-3 m-3 text-left bg-${context.color==3?'gray-400':'white'}`} onClick={(e)=>handleBackColor(3)}><Link to={'/completed'}><button class=' w-full h-full text-left'>Completed</button></Link></li>
                <li class={`border-t-2 p-3 m-3 text-left bg-${context.color==4?'gray-400':'white'}`} onClick={(e)=>handleBackColor(4)}><Link to={'/declined'}><button class=' w-full h-full text-left'>Declined</button></Link></li>
                <li class={`border-t-2 p-3 m-3 text-left bg-${context.color==5?'gray-400':'white'}`} onClick={(e)=>handleBackColor(5)}><Link to={'/invalid'}><button class=' w-full h-full text-left'>Invalid</button></Link></li>
                <li class={`border-t-2 p-3 m-3 text-left bg-${context.color==6?'gray-400':'white'}`} onClick={(e)=>handleBackColor(6)}><Link to={'/user'}><button class=' w-full h-full text-left'>User</button></Link></li>
            </ul>
         
          
        </div>
    )

}

export default Left