import React, {component} from 'react'
import './navbarcss.css';
// import { func2 } from "./navbarjs"

function func2(){
    (window).scroll(function() {
        if ((document).scrollTop() > 50) {
            ('.nav').addClass('affix');
            console.log("OK");
        } else {
            ('.nav').removeClass('affix');
        }
    })
};

export default function Navbar()  {
    
    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="logo">
                        <a href="#">Your Logo</a>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Name</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>
        </>
    )
}
