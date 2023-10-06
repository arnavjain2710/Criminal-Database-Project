import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/home'
import Search from '../src/pages/Search'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Complaint from './pages/complaint'
function App() {
  return (
    <Router> 
       
        <Routes> 
                <Route exact path='/' element={< Home />}></Route> 
                <Route exact path='/search' element={< Search />}></Route> 
                <Route exact path='/complaint' element={< Complaint />}></Route> 
                
        </Routes> 
        
    </Router> 
  );
}

export default App;
