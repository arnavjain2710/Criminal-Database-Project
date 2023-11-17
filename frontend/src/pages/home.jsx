import React, { useEffect, useState } from 'react';
import './home.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Upcoming from '../components/upcoming/upcoming_event'


export default function Home() {
  

  return (
    < div className='home'>
      <Navbar />
      <div className="contone">
        <div className="contonecont">
          <span className='lonetit' > <b>Hii, Welcome to WikiCrime <br /> <span style={{ paddingLeft: 250 }}>Search for any Records or Register complaint</span></b></span><br /><br /><br />
          <div className="lonecontent" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni corporis quae maxime nulla officia iste dolore odit, iure ad esse obcaecati nihil sit assumenda alias modi nostrum unde quasi aperiam.</div><br /><br />

          {/* <div className="input-group" id="#searchbox" >
            <input type="text" name="text" className="input" id="Email" placeholder="search Criminal record" />
            <button className="button--submit" >SEARCH</button>
          </div> */}
        </div>
        {/* SEARCHBAR */}
        <div> 
          <Upcoming />
        </div>
      </div>
      <Footer />
    </div>
  )
}