import React, { useContext, useState,createContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import { DisputeContext } from '../../helper/context'

const Category=()=>{
    const context=useContext(DisputeContext)
    const navigate=useNavigate(DisputeContext)

    useEffect(()=>{
        console.log('changed',context.path);
         navigate(context.path)
      },[context.path])

    return(
        <div class='h-full w-full bg-green  text-center'>
             Category
        </div>
    )

}

export default Category