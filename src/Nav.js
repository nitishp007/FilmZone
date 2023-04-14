import React, { useState , useEffect } from 'react'
import './Nav.css';
import { useNavigate } from "react-router-dom";
function Nav() {

    // scroll karne pe colour change hone ka logic
    const[show,handleShow]=useState(false);
    const history =useNavigate();
    const transitionNavbar = () =>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };
    useEffect(() => {
      window.addEventListener("scroll",transitionNavbar);
      return () => window.removeEventListener("scroll",transitionNavbar);
    }, [])
    // comment end


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'>
                <img onClick={() => history("/")} className='nav__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />
                <img onClick={() => history("/profile")} className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
            </div>
        </div>
    )
}

export default Nav