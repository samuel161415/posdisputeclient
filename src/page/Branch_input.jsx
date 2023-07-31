// InputDataAcceptor.js

import React,{useState,useEffect,useContext} from 'react';
import { userRequest } from '../helper/requestMethods';
import { DisputeContext } from '../helper/context';
import { branchs } from '../helper/branchs';
import { locat } from '../helper/location';
import Branch from './modals/Branch';

const Branch_input = () => {

  // const [branch,setBranch] = useState('')
  const [amount , setAmount] = useState('')
  const [account , setAccount] = useState('')
  const [branch , setBranch] = useState('shiromeda')
  const [pan , setPan] = useState('')
  const [terminal , setTerminal] = useState('Off_us')
  const [trxn_date , setTrxnDate] = useState('')

  const handleSelectChange = (event) => {
    setBranch(event.target.value);
  };

  

  const handleRequest = async(event)=>{
    event.preventDefault()

    // console.log('branch',branch);
    // console.log('account',account);
    // console.log('amount',amount);
    // console.log('pan',pan);
    // console.log('terminal',terminal);
    // console.log('trxn_date',trxn_date);
    

    try{
      if(!branch || !account || !amount ||!pan || !terminal || !trxn_date ){
        alert('input is missing')
        return
      }

        const res= await userRequest.post('/requested/add',{
        branch,amount,account,pan,terminal,trxn_date
      })

      alert('User is created successfully')
      setAccount('')
      setBranch('')
      setAmount('')


    }
    catch(err){

    }

  }

  return (
    <div className="flex flex-col   bg-white w-full  px-4 rounded ">
      <h1 className="text-2xl font-bold mb-6">Input Data Acceptor</h1>
      <div className=" shadow-2xl p-8 rounded  grid grid-cols-2 gap-4">

        <div className="m-4" >
          <label htmlFor="account" className="block font-semibold mb-2">
            Branch:
          </label>
          <select 
            id="account"
            className="p-2 w-full border-gray-300 border-2 rounded focus:ring focus:ring-blue-200 focus:border-blue-500 drop-shadow-sm"
            placeholder="Enter your account number"
            value={branch}
            onChange={handleSelectChange}>
            {branchs.map(item=>(
              <option>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="m-4">
          <label htmlFor="branch" className="block font-semibold mb-2">
            Account:
          </label>
          <input
            type="text"
            id="branch"
            className="p-2 w-full border-gray-300 rounded focus:ring focus:ring-blue-200 focus:border-blue-500 drop-shadow-sm border-2"
            placeholder="Enter your account number"
            value={account}
            onChange={(event) => setAccount(event.target.value)}
          />
        </div>
        

        <div className="m-4">
          <label htmlFor="amount" className="block font-semibold mb-2">
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            className="p-2 w-full border-gray-300 rounded focus:ring focus:ring-blue-200 focus:border-blue-500 border-2 drop-shadow-sm"
            placeholder="Enter your amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="m-4">
          <label htmlFor="pan" className="block font-semibold mb-2">
            Pan:
          </label>
          <input
            type="text"
            id="pan"
            className="p-2 w-full border-gray-300 rounded focus:ring focus:ring-blue-200 focus:border-blue-500 drop-shadow-sm border-2"
            placeholder="Enter your pan"
            value={pan}
            onChange={(event) => setPan(event.target.value)}
          />
        </div>
        <div className="m-4">
          <label htmlFor="location" className="block font-semibold mb-2">
            Terminal:
          </label>
          <select 
            id="location"
            className="p-2 w-full border-gray-300 rounded focus:ring focus:ring-blue-200 focus:border-blue-500 drop-shadow-sm border-2"
            placeholder="Enter your transaction "
            value={terminal}
            onChange={(e)=>setTerminal(e.target.value)}>
            {locat.map(item=>(
              <option>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="m-4">
          <label htmlFor="account" className="block font-semibold mb-2">
            Date of transaction:
          </label>
          <input
            type="date"
            id="trxn_date_field"
            className="p-2 w-full border-gray-300 rounded focus:ring focus:ring-blue-200 focus:border-blue-500 border-2 drop-shadow-sm"
            placeholder="select trxn_date"
            value={trxn_date}
            onChange={(event) => setTrxnDate(event.target.value)}
          />
        </div>

        <button
          onClick={handleRequest}
          className=" bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 w-1/2 ml-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Branch_input;
