import React, { useContext, useState,createContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import { DisputeContext } from '../../helper/context'



const Single=()=>{

    const context=useContext(DisputeContext)
    const navigate=useNavigate()

    useEffect(()=>{
    
        console.log('changed',context.path);
         navigate(context.path)
      },[context.path])
      
    return(
        <div class='h-full w-full bg-green  text-center'>
             This is single page
        </div>
    )

}

export default Single