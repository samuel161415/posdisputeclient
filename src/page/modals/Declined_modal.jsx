import React,{useEffect,useState} from 'react'

function Declined_modal({ isOpen, onClose }) {
  const [comment,setComment]=useState('')

    if (!isOpen) return null;
    console.log('isopen',isOpen)

    const handleClose = () => {
      console.log('closed on first');
       onClose();
    };
    

    const handleCommentChange = (e) => {
        setComment(e.target.value);
      };
  
    return (
      <div className="fixed inset-0  items-center justify-center z-50 bg-black opacity-80 m-20 border-2 flex flex-col">
      <h1 class='text-center text-white w-full pt-6 text-xl'>Declined</h1>
      <div class='flex m-auto'>

        <div class='flex flex-col m-4 '>
         <p class=' text-white'>KEYS</p>
         <p class=' text-white'>Date</p>
         <p class=' text-white'>Branch</p>
         <p class=' text-white'>Amount</p>
        </div>
        <div class='flex flex-col'>
          <textarea
                id="comment"
                class='border-2 m-4 w-4/5 rounded'
                value={comment}
                onChange={handleCommentChange}
                placeholder='remark'
                rows={4}>
          </textarea>
           <button class='px-4 py-2 bg-blue-500 rounded' onClick={handleClose}>Close</button>
        </div>
      </div>
     
    </div>
    );
  };

export default Declined_modal