import React from 'react';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <section className="home">
      <Home />
      </section>
      <div className='crimes-news-section'>
      {/* <div className="col-md-2 col-sm-6">
      <a href="https://lostfound.delhipolice.gov.in/" target="_blank">
        <div className="service-box">
          <div className="service-icon yellow">
            <div className="front-content">
              <img src="assets/img/tattpar/lost-report" alt="Lost Report" />
              <h3>
                <span id="MainContent_SpanLostReport">Lost Report</span>
              </h3>
            </div>
          </div>
        </div>
      </a>
    </div> */}
      </div>
      <div className='links-section'>
      </div>
    </div>
  );
}

export default App;
