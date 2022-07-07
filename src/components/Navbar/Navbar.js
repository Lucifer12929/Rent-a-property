import React,{useState} from 'react'
import './Navbar.css'
import LOGO from '../../Images/Property_logo.png'

import {Link} from "react-router-dom"


function Header() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    
    return (
        <div className={colorChange ? 'navbar-colorChange' : 'navbar'}>
            <div className='navbar-container'>
            <Link to="/">
            <img className="header_logo"
            src={LOGO}
            />
            </Link>  
            </div>
             
        </div>
    )
}

export default Header