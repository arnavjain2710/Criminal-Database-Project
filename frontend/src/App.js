import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/home'
import Search from '../src/pages/Search'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Complaint from './pages/complaint'
import NewsPage from './pages/news';

function App() {
  return (
    <Router>   
        <Routes> 
                <Route exact path='/' element={< Home />}></Route> 
                <Route exact path='/search' element={< Search />}></Route> 
                <Route exact path='/complaint' element={< Complaint />}></Route> 
                <Route exact path='/news' element={< NewsPage />}></Route>
        </Routes> 
    </Router> 
  );
}

export default App;
