import React,{useState,useContext,useEffect} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DisputeContext } from '../helper/context';
import { Link,Navigate } from 'react-router-dom';
import Completed_modal from './modals/Completed_modal';
import { userRequest } from '../helper/requestMethods';

function Completed() {

    const context=useContext(DisputeContext)
    const [data,setData] = useState([])
    const [selectedData,setSelectedData] = useState({})
    // const [refresh,setRefresh] = useState(false)


    const [isModalOpen, setIsModalOpen] = useState(false);
    const {login,setLogin}=context
    console.log('requested login',login);

    useEffect(()=>{
       const makeRequest = async () => {
     
           try {
     
             const res = await userRequest.get('/completed/get');
             console.log('data',res.data);
             setData(res.data)

             
     
           }
           catch (err) {
             console.log('error',err);
           }
         }
         makeRequest()
    },[])
    
    const openModal = async(key) => {
       const res = await userRequest.get(`/single/${key}`)
       setSelectedData(res.data)
       setIsModalOpen(true);
   };

   const closeModal = () => {
       setIsModalOpen(false);
   };
 return (
   <div class='overflow-y-scroll w-4/5 p-4 shadow-md'>
      {login?(<>
       <div class='flex flex-row justify-evenly mb-2 border-b-2'>
           <Link to={'/'}><button >Requested</button></Link>
           <Link to={'/pending'}><button onClick={(e)=>{context.setColor(2)}} >Pending</button></Link>
           <Link to={'/completed'} class='p-2 rounded-t border-x-2 border-t-2 shadow-md' onClick={(e)=>{context.setColor(3)}}><button >Completed</button></Link>
           <Link to={'/declined'}><button onClick={(e)=>{context.setColor(4)}}>Declined</button></Link>
           <Link to={'/invalid'}><button onClick={(e)=>{context.setColor(5)}} >Invalid</button></Link>
           </div>
       <table class="border-collapse border border-slate-500  w-full ">
       <thead class = 'shodow'>
           <tr >
           <th class="border border-slate-600 p-2 ">Date</th>
           <th class="border border-slate-600 ">Key</th>
           <th class="border border-slate-600 ">Show</th>
           </tr>
       </thead>
       <tbody >
           {
           data.map((item)=>{
               
               const cDate= new Date(item.date)
               const month = String(cDate.getMonth() + 1).padStart(2, '0');
               const date = String(cDate.getDate()).padStart(2, '0');
               const year = cDate.getFullYear();
               

               const formattedDate = `${year}/${month}/${date}`;
               
               
               return (
                   <tr >
                   <td class="border border-slate-700 p-1">{formattedDate}</td>
                   <td class="border border-slate-700 ">{item.key}</td>
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
          
           {/* <tr>
           <td class="border border-slate-700 ">Ohio</td>
           <td class="border border-slate-700 ">key2</td>
           <td class="border border-slate-700 ">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded"
               onClick={openModal}
               >
               <VisibilityIcon />
               </button>
           </td>
           </tr>
           <tr>
           <td class="border border-slate-700 ">Michigan</td>
           <td class="border border-slate-700 ">key3</td>
           <td class="border border-slate-700 ">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded"
               onClick={openModal}
               >
               <VisibilityIcon />
               </button>
           </td>
           </tr> */}
       </tbody>
       </table>
       <Completed_modal isOpen={isModalOpen} onClose={closeModal}  data={selectedData} />
      </>):
      (<Navigate to={'/login'} />)}
   </div>
 )
}

export default Completed