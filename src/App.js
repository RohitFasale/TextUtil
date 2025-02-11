
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const[darkmode , setDarkMode] = useState('light'); // whether is the dark mode is unabled or not
  const[alert , type] = useState(null);
  const setMssage =(messageType , ty)=>{
    type({
      msg : messageType,
      type : ty
     })
     setTimeout(() =>{
        type(null);
     }, 1500);
  }
  const toogleMode=()=>{
    if(darkmode === 'light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#0a4a79';
      setMssage("Dark Mode has been Enabled", "success");
      // document.title = "TextUtil - dark Mode"
      // setInterval(()=>{
      //     document.title = "textutil is a amazing mode"
      // }, 2000)
      
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      setMssage("Light Mode has been Enabled", "success");
      // document.title = "TextUtil - white Mode"
      // setInterval(()=>{
      //     document.title = "download now"
      // }, 1500)
    }
  }
  return (
    <>     
      {/* <Navbar title = "TextUtils" aboutText = "About us"/> */}
      {/* <Navbar/> */}
      <Router>
          <Navbar title = "TextUtils" aboutText = "About us" darkmode={darkmode} toogleMode={toogleMode}/>
          <Alert alert={alert}/>
          <div className="container">
           {/* users ---> components1
           users/home ---> components1 */}
            <Routes>
              < Route exact path="/about" element={<About />}/>
              
              <Route exact path="/" element={<TextForm setMssage={setMssage}heading = "Enter A Text to Analyze" darkmode={darkmode}/> }/>
              
            </Routes>
            {/* <About/> */}
        
          </div>
      </Router>
  
    </>
  );
}

export default App;
