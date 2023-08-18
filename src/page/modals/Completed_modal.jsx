import React,{useState} from 'react'

const Completed_modal = ({ isOpen, onClose, data }) => {
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
    <div className="fixed inset-0  items-center justify-start z-50 bg-black opacity-90 mx-5 my-20 border-2 flex flex-col ">
      <h1 class='text-center text-white w-full pt-7  text-4xl mt-4  '>Completed</h1>
      <div class='flex flex-col mt-4 '>
      
      <div class='flex flex-col m-auto p-4 '>
      <table class="border-collapse border border-slate-500  w-full ">
       <thead class = 'shodow bg-green-600  '>
            <th class="border border-slate-600 p-3 text-white">Information </th>
           <th class="border border-slate-600 text-white">Value</th>
       </thead>
         
       <tbody>
       <tr >
           <td class="border border-slate-600 p-3 text-white">KEY</td>
           <td class="border border-slate-600 text-white p-3">{data.key}</td>
           
          </tr>
          <tr >
           <td class="border border-slate-600 p-3 text-white  ">Date of registration</td>
           <td class="border border-slate-600 text-white ">{data.date.toString().slice(0,10)}</td>
           
          </tr>
          <tr >
           <td class="border border-slate-600 text-white p-3 ">Branch</td>
           <td class="border border-slate-600 text-white">{data.branch}</td>
           
          </tr>
          <tr >
           <td class="border border-slate-600  text-white  p-3">Amount</td>
           <td class="border border-slate-600 text-white p-3">{data.amount}</td>
           
          </tr>
          <tr >
           <td class="border border-slate-600  text-white  p-3">Account</td>
           <td class="border border-slate-600 text-white p-3">{data.account}</td>
           
           </tr>
          <tr >
           <td class="border border-slate-600  text-white  p-3">pan</td>
           <td class="border border-slate-600 text-white p-3">{data.pan}</td>
           
          </tr>
          <tr >
           <td class="border border-slate-600  text-white p-3">Terminal</td>
           <td class="border border-slate-600 text-white p-3">{data.terminal}</td>
           
          </tr>
          <tr >
           <td class="border border-slate-600  text-white  p-3">Transaction date</td>
           <td class="border border-slate-600 text-white p-3">{data.trxn_date.toString().slice(0,10)}</td>
           
          </tr>

       </tbody>
       

       </ table >



        {/* <h1 class='text-white text-xl text-center underline m-2'><b>Dispute Information</b></h1>
        <p class=' text-white'><b>Key : </b>{data.key}</p>
        <p class=' text-white'><b>Date of registration : </b>{data.date.toString().slice(0,10)}</p>
        <p class=' text-white'><b>Branch : </b>{data.branch}</p>
        <p class=' text-white'><b>Amount : </b>{data.amount}</p>
        <p class=' text-white'><b>Account : </b>{data.account}</p>
        <p class=' text-white'><b>Pan : </b>{data.pan}</p>
        <p class=' text-white'><b>Terminal  : </b>{data.terminal}</p>
        <p class=' text-white'><b>Trxn Date  : </b>{data.trxn_date}</p> */}


      </div>
        <button class='px-4 py-2 my-4 bg-blue-500 rounded' onClick={handleClose}>Close</button>
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

export default Completed_modal