import React from 'react'
import { Link } from 'react-router-dom'
import { DisputeContext } from '../helper/context'
import { useContext } from 'react'

function Links() {

    const context=useContext(DisputeContext)
  return (
    <div class='flex flex-row justify-evenly mb-2 border-b-2'>
        
    <Link to={'/'} ><button class= {`${context.color === 1 && 'p-2 rounded-t border-x-3 border-t-2 shadow bg-blue-200 '} hover:bg-blue-500 px-2 rounded`} onClick={(e)=>{context.setColor(1)}} >Requested</button></Link>
    <Link to={'/pending'} ><button class= {`${context.color === 2 && 'p-2 rounded-t border-x-3 border-t-2 shadow bg-blue-200 '} hover:bg-blue-500 px-2 rounded`} onClick={(e)=>{context.setColor(2)}} >Pending</button></Link>
    <Link to={'/completed'}  ><button class= {`${context.color === 3 && 'p-2 rounded-t border-x-3 border-t-2 shadow bg-blue-200 '} hover:bg-blue-500 px-2 rounded`} onClick={(e)=>{context.setColor(3)}}>Completed</button></Link>
    <Link to={'/declined'} ><button class= {`${context.color === 4 && 'p-2 rounded-t border-x-3 border-t-2 shadow bg-blue-200  '} hover:bg-blue-500 px-2 rounded`} onClick={(e)=>{context.setColor(4)}}>Declined</button></Link>
    <Link to={'/invalid'} ><button class= {`${context.color === 5 && 'p-2 rounded-t border-x-3 border-t-2 shadow bg-blue-200 '} hover:bg-blue-500 px-2 rounded`} onClick={(e)=>{context.setColor(5)}} >Invalid</button></Link>
    </div>
  )
}

export default Links