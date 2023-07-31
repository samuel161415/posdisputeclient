import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom'
import React, { useContext, useState,createContext,useEffect  } from 'react';

// routes
import Left from "./components/Left";
import { DisputeContext } from "./helper/context";
import Declined from "./page/Declined";
import Pending from "./page/Pending";
import Requested from "./page/Requested";
import Completed from "./page/Completed";
import Invalid from "./page/Invalid";
import User from "./page/User";
import Login from "./page/Login";
import Branch_input from "./page/Branch_input";
import Signup from "./page/Signup";

function App() {  

  
  
  const [path,setPath]=useState('/')
  const [color,setColor]=useState(1)
  const [login,setLogin]=useState(false)
  const [user,setUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentBranch,setCurrentBranch] = useState('')
  const [currentUser,setCurrentUser] = useState('')

  useEffect(() => {
    
    const storedLoginStatus = localStorage.getItem('login');
    setLogin(storedLoginStatus==='true');

    const storedUser = localStorage.getItem('currentBranch')
    const storedBranch = localStorage.getItem('currentUser')

    setCurrentBranch(storedBranch)
    setCurrentUser(storedUser)
    
    console.log('localstorage data',storedLoginStatus);
  }, []);


console.log('updated local storage data',login);

  return (
    <DisputeContext.Provider value={{path,setPath,color,setColor,login,setLogin,currentBranch,setCurrentBranch,currentUser,setCurrentUser}}>
    <div class='h-screen relative'>
   
          <Router>
            <Header />
            <div class=" flex  h-5/6 justify-between items-stretch relative">
            <Left />
            <Routes>
              
              <Route exact path="/" element={<Requested />} />
              <Route exact path='/completed' element={<Completed /> } />
              <Route exact path='/pending' element={<Pending />} />
              <Route exact path='/declined' element={<Declined />} />
              <Route exact path='/invalid' element={<Invalid />} />
              <Route exact path='/user' element={<User />} />
              <Route exact path="/login" element={<Login />}  />
              <Route exact path='/input' element={<Branch_input />} />
              <Route exact path='/register' element={<Signup />} />
            </Routes>
            </div>
          </Router>

      
      <Footer />
    </div>
    </DisputeContext.Provider>
 
      
  );
}

export default App;
