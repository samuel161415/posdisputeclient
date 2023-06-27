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
    return(
        <div class='bg-green-300 w-1/4 m-4 rounded'>
            This is Footer from downtown
         
            <button class='bg-green-900 p-4 m-4 rounde' onClick={()=>handleClick('/single')}> 
                Single
            </button>
            <button  class='bg-green-900 p-4 m-4 rounde' onClick={()=>handleClick('/Category')} >
                Category
            </button>
           
          
        </div>
    )

}

export default Left