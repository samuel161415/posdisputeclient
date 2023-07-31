import React,{useState} from 'react'
import { branchs } from '../../helper/branchs';

const Branch = ({ isOpen, onClose, setBranch }) => {
  
  if (!isOpen) return null;

  const handleClose = () => {
     onClose();
  };

  const handleChange = (option) =>{
    
    setBranch(option)
    onClose()
  }
  

  return (
    <div className="fixed inset-0  items-center justify-start z-50 bg-black opacity-80  border-2 flex flex-col w-1/2 h-1/2 m-auto overflow-y-scroll">
      <h1 class='text-center text-white w-full pt-7  text-4xl mt-4  '>Branch</h1>
      <div class='flex flex-col mt-4 '>

      <ul>
        {
            branchs.map((option)=>(
                <li onClick={(e)=>handleChange(option)} key={option} class=' text-white w-full pt-2  mt-4 border-red border-2 p-2 rounded '>
                    {option}
                </li>
            ))
        }
   
      </ul>
        <button class='px-4 py-2 my-4 bg-blue-500 rounded' onClick={handleClose}>Close</button>
       
      </div>
     
    </div>
  );
};

export default Branch