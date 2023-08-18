import React,{useState,useEffect} from 'react'
import { userRequest } from '../../helper/requestMethods';

function Requested_modal({ isOpen, onClose, data, setRefresh, refresh}) {

  const [declinedRemark,setDeclinedRemark]=useState('')
  const [invalidRemark,setInvalidRemark] = useState('')

  // const isDeclinedButtonDisabled = declinedRemark === '';
  // const isInvalidButtonDisabled = invalidRemark === '';
  

    if (!isOpen) return null;
    // console.log('isopen',isOpen)

    const handleClose = async(status) => {
      console.log('clicked');
      if(status === 'pending'){
        const res = await userRequest.post('/pending/add',{
          key : data.key,
          date : data.date
        })
      }
    else if(status==='declined'){
      const res = await userRequest.post('/declined/add/requested',{
        key : data.key,
        date : data.date,
        remark : declinedRemark
      }) 
    }
  else{
      const res = await userRequest.post('/invalid/add/requested',{
      key : data.key,
      date : data.date,
      remark : invalidRemark
    }) 
  }
       setRefresh(!refresh)
       onClose();
    };

    const handleContainerClose = () =>{
      onClose()
    }
    

    const handleDeclineRemark = (e) => {
        setDeclinedRemark(e.target.value);
      };
    const handleInvalidRemark = (e) => {
      setInvalidRemark(e.target.value);
    };
  return (
    <div className="fixed inset-0  items-center justify-center z-50 bg-black opacity-95 mx-5 my-20 border-2 flex flex-col "
      >
    <h1 class='text-center text-white w-full pt-7  text-4xl  '>Requested</h1>
    <div class='flex w-full'>

      <div class='flex flex-col  flex-1 m-5'>
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
        <p class=' text-white'><b>Date : </b>{data.date.toString().slice(0,10)}</p>
        <p class=' text-white'><b>Branch : </b>{data.branch}</p>
        <p class=' text-white'><b>Amount : </b>{data.amount}</p>
        <p class=' text-white'><b>Account : </b>{data.account}</p>
        <p class=' text-white'><b>Pan : </b>{data.pan}</p>
        <p class=' text-white'><b>Terminal  : </b>{data.terminal}</p>
        <p class=' text-white'><b>Trxn Date  : </b>{data.trxn_date}</p> */}
      </div>

      <div class='flex flex-col flex-1 m-5'>
        <h2 class='text-white text-center text-xl underline mt-4 '><b>Actions</b></h2>
        <div class=' p-2 ml-4 flex '>
         <button class=' px-4 py-2 bg-blue-500 rounded ' onClick={()=>handleClose('pending')} >To Pending</button>
         <button class='mx-4 px-4 py-2  bg-blue-500 rounded' onClick={handleContainerClose}>Close</button>
        </div>

        <div class='flex  p-2 '>
        <textarea
              id="comment2"
              class='border-2 m-4 w-4/5 rounded'
              value={declinedRemark}
              onChange={handleDeclineRemark}
              placeholder='Declined remark'
              rows={4}>
        </textarea>
         <button class={`h-2/5 m-auto p-2 rounded  bg-blue-500 rounded' `} disabled = {declinedRemark === ''}   onClick={()=>handleClose('declined')}>Declined</button>

        </div>

        <div class='flex  p-2 '>
        <textarea
              id="comment3"
              class='border-2 m-4 w-4/5 rounded'
              value={invalidRemark}
              onChange={handleInvalidRemark}
              placeholder='Invalid remark'
              rows={4}>
        </textarea>
         <button class='h-2/5 m-auto p-2 bg-blue-500 rounded' disabled={invalidRemark===''} onClick={()=>handleClose('invalid')}>Invalid</button>

        </div>
        <button>Close</button>

      </div>
    </div>
   
  </div>
  )
}

export default Requested_modal