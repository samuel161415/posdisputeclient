import React,{useState} from 'react'

function Select({setFiltered, data}) {
    const [terminal_filter, setTerminal_Filter] = useState('')

    const FilteredOld = (val) =>{
        setTerminal_Filter(val)
        let filtered = []
    
        if (val === 'All'){
          filtered = data
        }
        else if(val === 'Date'){
    
          filtered = data.filter(item =>{
            const today = new Date();
            const targetDate = new Date(item.date);
    
            // Calculate the time difference in milliseconds
            const timeDifference = today - targetDate;
            const dayDifference = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
            console.log('dayDifference',dayDifference);
            return dayDifference > 8
        })}
        
    
        else 
            filtered = data.filter(item => {
            return item.terminal == val
        })
           
    
          setFiltered(filtered)
      }


  return (
    <select 
    class = 'px-2 mx-2 h-11 bg-green-500 rounded border-2 hover:bg-blue-500 border-gray-300'
    value = {terminal_filter}
    onChange={(e) => FilteredOld(e.target.value)}>
      <option>
        All
      </option>
      <option>
        Date
      </option>
       <option>
        On_us
       </option>
       <option>
         Remote_on_us 
       </option>

    </select>
  )
}

export default Select