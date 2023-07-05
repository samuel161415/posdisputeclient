import React, { useState, useContext} from 'react';
import { DisputeContext } from '../helper/context';
import { useNavigate } from 'react-router-dom';

function Login() {
  const context=useContext(DisputeContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    context.setLogin(true)
    navigate('/requested')
    

    // Make a POST request to your Node.js backend for authentication
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Authentication successful, redirect or perform other actions
        console.log('Logged in successfully!');
      } else {
        // Authentication failed, handle error
        console.log('Login failed!');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div class='h-screen w-full z-50 bg-white  fixed   '>
     <div class='flex flex-col  w-1/2 h-1/2 m-auto rounded-3xl bg-yellow-500'>
     <h1 class=' text-center p-6 text-4xl  '>Login</h1>
      <div class=' p-4'>
      <form onSubmit={handleSubmit} class='ml-12  p-4'>
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
        <button type="submit" class=' ml-20 p-4 rounded bg-green-500  w-1/3   '>Login</button>
        </div>
        
      </form>
      </div>
     </div>
      
    </div>
  );
}

export default Login;
