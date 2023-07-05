import React,{useState,useContext} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DisputeContext } from '../helper/context';
import { Link } from 'react-router-dom';
import Declined_modal from './modals/Declined_modal';

function Declined() {
    const context=useContext(DisputeContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comment, setComment] = useState('');
    const handleCommentChange = (e) => {
        setComment(e.target.value);
      };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div class='overflow-y-scroll w-4/5 p-4 border-2 border-red-500'>
    <div class='flex flex-row justify-evenly mb-2 border-b-2'>
        <Link to={'/'}><button onClick={(e)=>{context.setColor(1)}}>Requested</button></Link>
        <Link to={'/pending'}><button onClick={(e)=>{context.setColor(2)}}>Pending</button></Link>
        <Link to={'/completed'} onClick={(e)=>{context.setColor(3)}}><button >Completed</button></Link>
        <Link to={'/declined'}><button  class='p-2 rounded-t border-x-2 border-t-2'>Declined</button></Link>
        <Link to={'/invalid'}><button onClick={(e)=>{context.setColor(5)}}>Invalid</button></Link>
    </div>
    <table class="border-collapse border border-slate-500  w-full ">
    <thead>
        <tr>
        <th class="border border-slate-600 ">Date</th>
        <th class="border border-slate-600 ">Key</th>
        <th class="border border-slate-600 ">Show</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td class="border border-slate-700 ">Indiana</td>
        <td class="border border-slate-700 ">key1</td><td class="border border-slate-700 ">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded"
                onClick={openModal}
                >
                <VisibilityIcon />
                </button>
            </td>
        </tr>
        <tr>
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
        </tr>
    </tbody>
    </table>
    <Declined_modal isOpen={isModalOpen} onClose={closeModal} />
</div>
  )
}

export default Declined