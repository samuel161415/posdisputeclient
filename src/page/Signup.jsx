import React, { useState, useContext} from 'react';
import { DisputeContext } from '../helper/context';
import { useNavigate,Navigate } from 'react-router-dom';
import Branch from './modals/Branch';
import { userRequest } from '../helper/requestMethods';
import { branchs } from '../helper/branchs';

function Signup() {
  const context=useContext(DisputeContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [branch, setBranch] = useState(branchs[0])
  const [isModalOpen, setIsModalOpen] = useState(false);


  const navigate=useNavigate()

  console.log('login update',context.login,' path',context.path);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('branch value' ,branch);
    
    if(!branch || !username || !password){
        alert('input is missing')
        return
    }
    // Make a POST request to your Node.js backend for registration
    try {
        const response = await userRequest.post('/register',{
            username,
            password,
            branch
        })
  

      if (response.status === 201) {
        console.log('user created');
        context.setLogin(true)
        context.setCurrentBranch(response.data.branch)
        context.setCurrentUser(response.data.username)
        
        localStorage.setItem('login', 'true');
        localStorage.setItem('currentUser',response.data.username)
        localStorage.setItem('currentBranch',response.data.branch)
        navigate('/')
        // Authentication successful, redirect or perform other actions
        
      } else {
        // Authentication failed, handle error
        console.log('Login failed!');
      }
    } catch (error) {
      console.log('Error:', error);
    }


    // context.setLogin(true)
    // localStorage.setItem('login', 'true');
    // navigate('/')
  };

  const handleSelectChange = (event) => {
    setBranch(event.target.value);
  };
    const openModal = async(key) => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div class='h-screen w-full z-50 bg-white  fixed   '>
     {!context.login?<div class='flex flex-col  w-1/2 h-1/2 m-auto rounded-3xl bg-yellow-500'>
     <h1 class=' text-center p-6 text-4xl  '>Signup</h1>
      <div class=' p-4 m-auto'>
      <form onSubmit={handleSubmit} class='ml-12  p-4'>
        <div >
          <div class = 'flex '>
            <label class = 'hidden md:block flex-none p-2' htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              class='rounded px-8 m-2 flex-1 p-2 w-2/3'
            />
          </div>
          <div class = 'flex'>
            <label class = 'hidden md:block flex-none p-2 '  htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class='rounded p-2 ml-3 my-2 flex-1 w-2/3'
            />
          </div>
          <div class = 'flex'>
            <label class = 'hidden md:block flex-none p-2 ' htmlFor="branch ">Branch:  </label>
           
            <select 
            id="account"
            className="rounded ml-7  p-2 flex-1 w-2/3 "
            placeholder="Enter your account branch"
            value={branch}
            onChange={handleSelectChange}>
            {branchs.map(item=>(
              <option>
                {item}
              </option>
            ))}
          </select>
          </div>
        </div>
        <div class='w-full  p-4'>
        <button type="submit" class=' ml-20 p-4 rounded bg-green-500  w-1/3  '><span class="hidden sm:inline">Signup</span></button>
        </div>
        
      </form>
      </div>
      <Branch isOpen={isModalOpen} onClose={closeModal}  setBranch = {setBranch} />
      
     </div>:<Navigate to={`${context.path}`} />}
      
    </div>
  );
}

export default Signup;
