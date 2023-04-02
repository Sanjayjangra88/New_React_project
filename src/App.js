
import logo from './logo.svg';
import React, { useState ,useEffect,useRef} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Mainbody from './Components/Mainbody';

import axios from 'axios';



function App () {
  
 return  (
    <>
    {/* <div className='container' style={{height:"100%"}}>
      <div style={{height:"5rem"}}></div>
    
      <Mainbody/>
    <div id="footer"style={{height:"10rem"}}></div>
    </div> */}
 
    <div className="App">
      <header className="header">
      <Header/>
      </header>
      <div className="body">
      <Mainbody/>
      </div>
      <footer className="footer">
      <Footer/>
      </footer>
    </div>
 

      </>
  


   
  
  );
}

export default App;

