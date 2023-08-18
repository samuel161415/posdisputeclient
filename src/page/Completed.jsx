import React,{useState,useContext,useEffect} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DisputeContext } from '../helper/context';
import { Link,Navigate } from 'react-router-dom';
import Completed_modal from './modals/Completed_modal';
import { userRequest } from '../helper/requestMethods';
import ExportToExcel from '../helper/ExportToExcel';
import Links from '../components/Links';
import Select from '../components/Select';

function Completed() {

    const context=useContext(DisputeContext)
    const [data,setData] = useState([])
    const [selectedData,setSelectedData] = useState({})
    const [filtered,setFiltered] = useState([])
    const [searchQeury,setSearchQeury] = useState('')
    // const [refresh,setRefresh] = useState(false)


    const [isModalOpen, setIsModalOpen] = useState(false);
    const {login,setLogin}=context
    console.log('requested login',login);

    useEffect(()=>{
       const makeRequest = async () => {
     
           try {
            //  ? await userRequest.get('/requested/get'): await userRequest.get(`/requested/get/${context.currentBranch}`) ;
                const res = context.currentBranch==='AR_TEAM' ? await userRequest.get('/completed/get') : await userRequest.get(`/completed/get/${context.currentBranch}`);
             
                const keys = []
                res.data.map(item =>(
                keys.push(item.key)
                ))
                
                const res_combine = await userRequest.post('/combine',{keys})

                setData(res_combine.data)
                setFiltered(res_combine.data)

           }
           catch (err) {
             console.log('error',err);
           }
         }
         makeRequest()
    },[])

    useEffect(()=>{
        console.log('current user',context.currentBranch);
        const filtered = data.filter(item =>
            item.key.toString().includes(searchQeury))
        setFiltered(filtered)

    },[searchQeury])

    const FilteredOld = () =>{
        const filtered = data.filter(item =>{
          const today = new Date();
          const targetDate = new Date(item.date);
  
          // Calculate the time difference in milliseconds
          const timeDifference = today - targetDate;
          const dayDifference = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
          console.log('dayDifference',dayDifference);
          return dayDifference > 8
        })
  
        setFiltered(filtered)
    }
    
    const openModal = async(key) => {
       const res = await userRequest.get(`/single/${key}`)
       setSelectedData(res.data)
       setIsModalOpen(true);
   };

   const closeModal = () => {
       setIsModalOpen(false);
   };
 return (
   <div class='overflow-y-scroll w-4/5 p-2 shadow-md'>
      {login?(<>
        <div class = 'flex justify-between'>
            <h1 class = 'p-2 font-bold'>{context.currentBranch}</h1>
            <div class = 'flex justify-end mb-3'>
                <ExportToExcel tableData={data} filename={'Completed'}/>
                {/* <button class = 'border-2 rounded mb-2 p-2 bg-green-500 hover:bg-blue-500 border-gray-300 mr-2' onClick={FilteredOld}>Filtered Oldest</button> */}
                <Select data={data} setFiltered={setFiltered} />
                <input type='text' class= 'mb-2 p-2 border-gray-300 rounded focus:ring focus:ring-blue-200 focus:border-blue-500 drop-shadow-sm border-2' onChange={(e)=>setSearchQeury(e.target.value)} placeholder='search by key'></input>
            </div>
        </div>
       {/* <div class='flex flex-row justify-evenly mb-2 border-b-2'>
           <Link to={'/'}><button >Requested</button></Link>
           <Link to={'/pending'}><button onClick={(e)=>{context.setColor(2)}} >Pending</button></Link>
           <Link to={'/completed'} class='p-2 rounded-t border-x-2 border-t-2 shadow-md' onClick={(e)=>{context.setColor(3)}}><button >Completed</button></Link>
           <Link to={'/declined'}><button onClick={(e)=>{context.setColor(4)}}>Declined</button></Link>
           <Link to={'/invalid'}><button onClick={(e)=>{context.setColor(5)}} >Invalid</button></Link>
           </div> */}
       <Links />
       <table class="border-collapse border border-slate-500  w-full ">
       <thead class = 'shodow bg-blue-200'>
           <tr >
           <th class="border border-slate-600 p-2 ">Date</th>
           <th class="border border-slate-600 ">Key</th>
           <th class = "border border-slate-600" >Branch</th>
           <th class="border border-slate-600 ">Show</th>
           </tr>
       </thead>
       <tbody >
           {
           filtered.map((item)=>{
               
               const cDate= new Date(item.date)
               const month = String(cDate.getMonth() + 1).padStart(2, '0');
               const date = String(cDate.getDate()).padStart(2, '0');
               const year = cDate.getFullYear();
               

               const formattedDate = `${year}/${month}/${date}`;
               
               
               return (
                   <tr >
                   <td class="border border-slate-700 p-1">{formattedDate}</td>
                   <td class="border border-slate-700 ">{item.key}</td>
                   <td class="border border-slate-700 ">{item.branch}</td>
                   <td class="border border-slate-700 ">
                       <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded"
                       onClick={()=>{openModal(item.key)}}
                       >
                       <VisibilityIcon />
                       </button>
                   </td>
                   </tr>
               )
          
               })}
          
           
       </tbody>
       </table>
       <Completed_modal isOpen={isModalOpen} onClose={closeModal}  data={selectedData} />
      </>):
      (<Navigate to={'/login'} />)}
   </div>
 )
}

export default Completed