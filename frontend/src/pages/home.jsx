import React, { useEffect } from 'react';
import { useState } from 'react';
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
          <span className='lonetit' > <b>Hii, Welcome to WikiCrime <br /> <span style={{ color: "red", paddingLeft: 250 }}>Search for any Records or Register complaint</span></b></span><br /><br /><br />
          <div className="lonecontent" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni corporis quae maxime nulla officia iste dolore odit, iure ad esse obcaecati nihil sit assumenda alias modi nostrum unde quasi aperiam.</div><br /><br />

          <div className="input-group" id="#searchbox" >
            <input type="text" name="text" className="input" id="Email" placeholder="search Criminal record" />
            <button className="button--submit" >SEARCH</button>
          </div>
        </div>
        {/* SEARCHBAR */}


        <div className="contthreecont">

          {/* UPCOMING EVENTS */}
          <br />

          <span className='idli' style={{ color: "red", paddingLeft: 650 }} >FIND Latest News</span><br /><span className="imlimli" style={{ paddingLeft: 150 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus earum, esse quaerat consequatur ex distinctio?</span>

          <Upcoming />
          <a style={{ color: 'white', textDecoration: 'none' }} href="/Book"><span className="imlimli idlidli" >and more.... </span></a><br /><br /><br /><br /><br />

        </div>

        <div className='findnewevents' style={{ paddingTop: '70px', fontSize: '3em', paddingLeft: '137px', paddingRight: '30px' }}>
        <span className='idli'>Other useful Organisation <span style={{color:"red"}}>GOv Of InDia</span> </span><br /><span className="imlimli">Reach for any help </span>
        </div>
        <Upcoming/>
        <a style={{ color: 'black', textDecoration: 'none' }} href="/Book"><span className="imlimli idlidli" >and more.... </span></a>



      </div>
      <br /><br/><br/><br/><br/><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       
      <Footer />
    </div>
  )
}