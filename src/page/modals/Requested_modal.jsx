import React,{useState,useEffect} from 'react'

function Requested_modal({ isOpen, onClose }) {

  const [comment,setComment]=useState('')

    if (!isOpen) return null;
    // console.log('isopen',isOpen)

    const handleClose = () => {
      console.log('closed on first');
       onClose();
    };
    

    const handleCommentChange = (e) => {
        setComment(e.target.value);
      };
  return (
    <div className="fixed inset-0  items-center justify-center z-50 bg-black opacity-80 m-20 border-2 flex flex-col">
    <h1 class='text-center text-white w-full pt-7  text-4xl  '>Requested</h1>
    <div class='flex m-auto'>

      <div class='flex flex-col m-auto '>
       <p class=' text-white'>KEYS</p>
       <p class=' text-white'>Date</p>
       <p class=' text-white'>Branch</p>
       <p class=' text-white'>Amount</p>
      </div>

      <div class='flex flex-col'>
        <h2 class='text-white text-center'>Actions</h2>
        <div class='flex    px-4 py-2 justify-end'>
        {/* <textarea
              id="comment1"
              class='border-2 m-4 w-4/5 rounded'
              value={comment}
              onChange={handleCommentChange}
              placeholder='remark'
              rows={4}>
        </textarea> */}
         <button class='p-2 bg-blue-500 rounded' onClick={handleClose}>Pending</button>

        </div>

        <div class='flex  p-4 '>
        <textarea
              id="comment2"
              class='border-2 m-4 w-4/5 rounded'
              value={comment}
              onChange={handleCommentChange}
              placeholder='Declined remark'
              rows={4}>
        </textarea>
         <button class='h-2/5 m-auto p-2 bg-blue-500 rounded' onClick={handleClose}>Declined</button>

        </div>

        <div class='flex  p-4 '>
        <textarea
              id="comment3"
              class='border-2 m-4 w-4/5 rounded'
              // value={comment}
              onChange={handleCommentChange}
              placeholder='Invalid remark'
              rows={4}>
        </textarea>
         <button class='h-2/5 m-auto p-2 bg-blue-500 rounded' onClick={handleClose}>Invalid</button>

        </div>

      </div>
    </div>
   
  </div>
  )
}

export default Requested_modal