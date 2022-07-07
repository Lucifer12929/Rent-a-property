import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar.js';
import Home from '../src/components/Home/Home.js'
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';


import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";


function App() {
  return(
  <Router>
     <div className="App">
       <Switch>
         <Route path="/">
         <Navbar  />
            <div style={{overflowY:"scroll", height:"0px"}}></div> 
           <Home/>
           <Filter />
           
           <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
