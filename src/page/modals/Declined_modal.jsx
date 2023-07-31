import React,{useState} from 'react'

const Declined_modal = ({ isOpen, onClose, data , singleData }) => {

  console.log(' data ',data, ' keyData ',singleData);
  const [comment, setComment] = useState('');
  if (!isOpen) return null;

  
  const handleCommentChange = (e) => {
      setComment(e.target.value);
    };
  console.log('isopen',isOpen)
  const handleClose = () => {
    console.log('closed on first');
     onClose();
  };
  

  return (
    <div className="fixed inset-0  items-center justify-start z-50 bg-black opacity-80 m-20 border-2 flex flex-col">
      <h1 class='text-center text-white w-full pt-7  text-4xl mt-4  '>Declined</h1>
      <div class='flex flex-col mt-4 '>

      <div class='flex flex-col m-auto p-4 '>
        <h1 class='text-white text-xl text-center underline m-2'><b>Dispute Information</b></h1>
        <p class=' text-white'><b>Key : </b>{data.key}</p>
        <p class=' text-white'><b>Date : </b>{data.date.toString().slice(0,10)}</p>
        <p class=' text-white'><b>Branch : </b>{data.branch}</p>
        <p class=' text-white'><b>Amount : </b>{data.amount}</p>
        <p class=' text-white'><b>Account : </b>{data.account}</p>
        <p class=' text-white'><b>Pan : </b>{data.pan}</p>
        <p class=' text-white'><b>Terminal  : </b>{data.terminal}</p>
        <p class=' text-white'><b>Trxn Date  : </b>{data.trxn_date}</p>
      </div>
      <div class = 'border rounded bg-white text-black p-4'>
        <h1 class=' text-xl   m-2'> Remark </h1>
        <p class=' drop-shodow-md '>{singleData.remark}</p>
      </div>
        <button class='px-4 py-2 my-4 bg-blue-500 rounded w-1/3' onClick={handleClose}>Close</button>
        {/* <div class='flex flex-col'>
          <textarea
                id="comment"
                class='border-2 m-4 w-4/5 rounded'
                value={comment}
                onChange={handleCommentChange}
                placeholder='remark'
                rows={4}>
          </textarea>
           <button class='px-4 py-2 bg-blue-500 rounded' onClick={handleClose}>Close</button>
        </div> */}
      </div>
     
    </div>
  );
};

export default Declined_modal