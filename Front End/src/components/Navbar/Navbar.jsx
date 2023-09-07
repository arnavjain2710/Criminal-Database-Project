import React, {component} from 'react'
import './navbarcss.css';
import { func2 } from "./navbarjs"

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

            <section className="home">
            </section>
            <div className='img'>
                {/* <!-- just to make scrolling effect possible --> */}
                <h2 className="myH2">What is this ?</h2>
                <p className="myP">This is a responsive fixed navbar animated on scroll</p>
                <p className="myP">I took inspiration from  ABDO STEIF (<a href="https://codepen.io/abdosteif/pen/bRoyMb?editors=1100">https://codepen.io/abdosteif/pen/bRoyMb?editors=1100</a>)
                    and Dicson <a href="https://codepen.io/dicson/pen/waKPgQ">(https://codepen.io/dicson/pen/waKPgQ)</a></p>
                <p className="myP">I HOPE YOU FIND THIS USEFULL</p>
                <p className="myP">Albi</p>
                <p className="myP">

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
                </p>
            </div>

            {/* <!-- Jquery needed --> */}
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            {/* <script src="./navbarjs.js"></script> */}

            {/* <!-- Function used to shrink nav bar removing paddings and adding black background --> */}
            <script src="./navbarjs.js">
                console.log("test1")
            {
            function func2() {
                (window).scroll(function () {
                    if ((document).scrollTop() > 50) {
                        ('.nav').addClass('affix');
                        console.log("OK");
                    } else {
                        ('.nav').removeClass('affix');
                    }
                })
            console.log("test")
            }}
            </script>
            {/* {
            function func2() {
                (window).scroll(function () {
                    if ((document).scrollTop() > 50) {
                        ('.nav').addClass('affix');
                        console.log("OK");
                    } else {
                        ('.nav').removeClass('affix');
                    }
                })
                console.log("test")
            }} */}
        </>
    )
}
