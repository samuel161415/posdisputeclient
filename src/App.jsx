import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import React, { useContext, useState,createContext  } from 'react';
import Home from "./page/home/Home";
import Left from "./components/Left";
import Single from "./page/single/Single";
import { DisputeContext } from "./helper/context";
import Category from "./page/category/Category";
function App() {

  const count='hi'
  
  const [path,setPath]=useState('/')
  return (
    <DisputeContext.Provider value={{path,setPath}}>
      <Header />
      <div class=" border-solid border-2 border-black flex  h-screen justify-between items-stretch">
          <Left />
          
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path='/other' element={<Single />} />
              <Route exact path='/category' element={<Category />} />
            </Routes>
          </Router>

      </div>
    </DisputeContext.Provider>
 
      
  );
}

export default App;
