import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

function Invalid() {
  return (
    <div class='overflow-y-scroll w-4/5 p-4 border-2 border-red-500'>
        <div class='flex flex-row justify-evenly mb-2 border-b-2'>
            <button >Requested</button>
            <button>Pending</button>
            <button >Completed</button>
            <button>Declined</button>
            <button class='p-2 rounded-t border-x-2 border-t-2'>Invalid</button>
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
            <td class="border border-slate-700 ">key1</td>
            <td class="border border-slate-700 "><VisibilityIcon /></td>
            </tr>
            <tr>
            <td class="border border-slate-700 ">Ohio</td>
            <td class="border border-slate-700 ">key2</td>
            <td class="border border-slate-700 "><VisibilityIcon /></td>
            </tr>
            <tr>
            <td class="border border-slate-700 ">Michigan</td>
            <td class="border border-slate-700 ">key3</td>
            <td class="border border-slate-700 "><VisibilityIcon /></td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Invalid