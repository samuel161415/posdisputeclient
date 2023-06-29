import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import React, { useContext, useState,createContext  } from 'react';
import Home from "./page/home/Home";
import Left from "./components/Left";
import Single from "./page/single/Single";
import { DisputeContext } from "./helper/context";
import Category from "./page/category/Category";
import Declined from "./page/Declined";
import Pending from "./page/Pending";
import Requested from "./page/Requested";
import Completed from "./page/Completed";
import Invalid from "./page/Invalid";
import User from "./page/User";
function App() {  

  const count='hi'
  
  const [path,setPath]=useState('/')
  return (
    <DisputeContext.Provider value={{path,setPath}}>
    <div class='h-screen'>
    <Header />
      <div class=" border-solid border-2 border-black flex  h-5/6 justify-between items-stretch">
          
          
          <Router>
            <Left />
            <Routes>
              <Route exact path="/" element={<Requested />} />
              <Route exact path='/completed' element={<Completed />} />
              <Route exact path='/pending' element={<Pending />} />
              <Route exact path='/declined' element={<Declined />} />
              <Route exact path='/invalid' element={<Invalid />} />
              <Route exact path='/user' element={<User />} />
            </Routes>
          </Router>

      </div>
      <Footer />
    </div>
    </DisputeContext.Provider>
 
      
  );
}

export default App;
