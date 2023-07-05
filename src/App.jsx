import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import React, { useContext, useState,createContext  } from 'react';

import Left from "./components/Left";
import { DisputeContext } from "./helper/context";
import Declined from "./page/Declined";
import Pending from "./page/Pending";
import Requested from "./page/Requested";
import Completed from "./page/Completed";
import Invalid from "./page/Invalid";
import User from "./page/User";
import Login from "./page/Login";

function App() {  

  
  
  const [path,setPath]=useState('/')
  const [color,setColor]=useState(1)
  const [login,setLogin]=useState(false)
  return (
    <DisputeContext.Provider value={{path,setPath,color,setColor,login,setLogin}}>
    <div class='h-screen relative'>
   
      
          
          
          <Router>
            <Header />
            <div class=" border-solid border-2 border-black flex  h-5/6 justify-between items-stretch relative">
            <Left />
            <Routes>
              <Route exact path="/" element={<Login />}  />
              <Route exact path="/requested" element={<Requested />} />
              <Route exact path='/completed' element={<Completed />} />
              <Route exact path='/pending' element={<Pending />} />
              <Route exact path='/declined' element={<Declined />} />
              <Route exact path='/invalid' element={<Invalid />} />
              <Route exact path='/user' element={<User />} />
            </Routes>
            </div>
          </Router>

      
      <Footer />
    </div>
    </DisputeContext.Provider>
 
      
  );
}

export default App;
