import React,{useState,useEffect} from 'react'
import { userRequest } from '../../helper/requestMethods';

function Pending_modal({ isOpen, onClose, data, refresh, setRefresh }) {

  const [declinedRemark,setDeclinedRemark]=useState('')
  const [invalidRemark,setInvalidRemark] = useState('')

  // const isDeclinedButtonDisabled = declinedRemark === '';
  // const isInvalidButtonDisabled = invalidRemark === '';
  console.log('modal data ',data);

    if (!isOpen) return null;
    // console.log('isopen',isOpen)

    const handleClose = async(status) => {
      console.log('clicked');
      if(status === 'completed'){
        const res = await userRequest.post('/completed/add',{
          key : data.key,
          date : data.date
        })
      }
    else if(status==='declined'){
      const res = await userRequest.post('/declined/add/pending',{
        key : data.key,
        date : data.date,
        remark : declinedRemark
      }) 
    }
  else{
      const res = await userRequest.post('/invalid/add/pending',{
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
    <div className="fixed inset-0  items-center justify-center z-50 bg-black opacity-80 m-20 border-2 flex flex-col p-4"
      >
    <h1 class='text-center text-white w-full pt-7  text-4xl  '>Pending</h1>
    <div class='flex flex-col m-auto w-2/3'>

      <div class='flex flex-col m-auto '>
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

      <div class='flex flex-col mb-3'>
        <h2 class='text-white text-center text-xl underline mt-4 '><b>Actions</b></h2>
        <div class=' p-2 ml-4 flex '>
         <button class=' px-4 py-2 bg-blue-500 rounded ' onClick={()=>handleClose('completed')} >Completed</button>
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
        

      </div>
    </div>
   
  </div>
  )
}

export default Pending_modal