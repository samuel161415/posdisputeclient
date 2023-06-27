import React, { useContext, useState,createContext, useEffect  } from 'react';
import { DisputeContext } from "../../helper/context";
import { useNavigate } from "react-router-dom"
const Home=()=>{
  const navigate=useNavigate()
  const context=useContext(DisputeContext)
  console.log('path is ',context.path);
  useEffect(()=>{
    console.log('changed',context.path);
     navigate(context.path)
  },[context.path])

    return(
    
      <div class='h-full w-full bg-slate-400  text-center '>
        
          This is homepage
      </div>
    )
  }


export default Home