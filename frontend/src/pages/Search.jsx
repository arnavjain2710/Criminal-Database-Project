import React from 'react'
import Navbar from '../components/navbar/navbar';
import './search.css'
import { useState } from 'react';
import Footer from '../components/footer/footer';
import axios from "axios";
import CriminalCard from '../components/search/searchCard';


const SearchPage = () => {
  const [filters, setFilters] = useState({
    age: '',
    gender: '',
    crimeType: '',
    location: '',
    name: '',
    sentenceStatus: '',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };


  const [criminalData , setCriminalData]=useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(filters);
    const result= await axios.post("http://localhost:3000/allCriminals/byfilters",filters);
    setCriminalData(result.data);
    console.log(result);
  };

  return (
   <div className='seacrConatiner'>
   <Navbar/>
   <div className="search-page">
      <h2>Search Criminals</h2>
      <div className="filter-container">
        <div className="filter-column">
          <div className="filter-section">
            <label htmlFor="age">Prison Name:</label>
            <input
              type="text"
              id="prison"
              value={filters.prison}
              onChange={(e) => handleFilterChange('prison', e.target.value)}
            />
          </div>
          <div className="filter-section">
            <label htmlFor="sentenceStatus">Sentence Status:</label>
            <select
              id="sentenceStatus"
              value={filters.sentenceStatus}
              onChange={(e) => handleFilterChange('sentenceStatus', e.target.value)}
            >
              <option value="">Select Sentence Status</option>
              <option value="Open">Incarcerated</option>
              <option value="Closed">Released</option>
            </select>
          </div>
        </div>
        <div className="filter-column">
        <div className="filter-section">
            <label htmlFor="crimeType">Crime Type:</label>
            <select
              id="crimeType"
              value={filters.crimeType}
              onChange={(e) => handleFilterChange('crimeType', e.target.value)}
            >
              <option value="">Select Crime Type</option>
              <option value="Robbery">Robbery</option>
              <option value="Assault">Assault</option>
              <option value="Drug Trafficing">Drug Trafficing</option>
              <option value="Burglary">Burglary</option>
              <option value="kidnapping">kidnapping</option>
            </select>
          </div>
          <div className="filter-section">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            />
          </div>
        </div>
        <div className="filter-column">
          <div className="filter-section">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={filters.name}
              onChange={(e) => handleFilterChange('name', e.target.value)}
            />
          </div>
          
          {/* Add more filters to the third column */}
        </div>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
    <div className="criminals-list">
      {criminalData.map((criminal, index) => (
        <CriminalCard key={index} data={criminal} />
      ))}
    </div>
   <Footer/>
   </div>
  );
};

export default SearchPage;




// export default function Book() {
  
 

//   return (
    
   
//     <div className='maincontainer' style={{backgroundColor:'rgb(31,31,31)', marginTop:"-190px"}}>
//       <Navbar />
       


//     <div className="carrier" id="b3">
//       <div className="bookcontainer">
//       <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} >  Name</label><br/>
//                     <input className="styleinput" type="text"  />
//         </div>

//         <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} >Age</label><br/>
//                     <input className="styleinput" type="text"   />
//                 {/* </div>     */}
//         </div> 

//         <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} > Pison</label><br/>
//                     <input className="styleinput" type="text"  />
//         </div>
//         <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} > Location</label><br/>
//                     <input className="styleinput" type="text"  />
//         </div>
//         <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} > Gender</label><br/>
//                     <input className="styleinput" type="text"  />
//         </div>
//         <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} > CrimeTyoe</label><br/>
//                     <input className="styleinput" type="text"  />
//         </div>

    
//       </div>
 

              
//     <div className='asas' style={{ display:'flex', textAlign:'center',justifyContent:'center',color:'rgb(235, 222, 204)', margin:"-20px"}}><br/>Search results:
//     </div><br/><br/>
//     </div>
// <div className="listresults" id = "b1">
  



// </div> 

                    
                              




  
// </div>

//   )
// }
