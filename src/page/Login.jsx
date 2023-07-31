import React, { useState, useContext} from 'react';
import { DisputeContext } from '../helper/context';
import { useNavigate,Navigate } from 'react-router-dom';
import { userRequest } from '../helper/requestMethods';
import { Link } from 'react-router-dom';

function Login() {
  const context=useContext(DisputeContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  console.log('login update',context.login,' path',context.path);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your Node.js backend for authentication
    try {
      const response = await userRequest.post('/login',{username,password});
      

      console.log('login result ',response.status);

      if (response.status == 200) {
  
        context.setLogin(true)
        context.setCurrentBranch(response.data.branch)
        context.setCurrentUser(response.data.username)
        
        localStorage.setItem('login', 'true');
        localStorage.setItem('currentUser',response.data.username)
        localStorage.setItem('currentBranch',response.data.branch)
        navigate('/')
      } else {
        alert('Wrong credential')
      }
    } catch (error) {
      alert('Wrong credential')
      console.log('Error:', error);
    }

    
  };

  return (
    <div class='h-screen w-full z-50 bg-white  fixed   '>
     {!context.login?<div class='flex flex-col  w-1/2 h-1/2 m-auto rounded-3xl bg-yellow-500'>
     <h1 class=' text-center p-6 text-4xl  '>Login</h1>
      <div class=' p-4 m-auto'>
      <form onSubmit={handleSubmit} class='ml-12  px-4 pt-4 '>
        <div class=''>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              class='rounded p-2 m-2'
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class='rounded p-2 ml-3 my-2'
            />
          </div>
        </div>
        <div class='w-full login-2 p-4'>
        <button type="submit" class=' ml-20 py-4  rounded bg-green-500  w-1/3   '>Login</button>
        </div>
        
      </form>
      <Link to='/register'><p class='text-center text-blue-600 px-2 shadow-md'>If no account, register</p></Link>
      </div>
     </div>:<Navigate to={`${context.path}`} />}
      
    </div>
  );
}

export default Login;
