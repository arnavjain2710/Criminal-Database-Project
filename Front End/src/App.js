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
      </div>
      <div className='links-section'>
      </div>
    </div>
  );
}

export default App;
