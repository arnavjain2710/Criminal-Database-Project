// ComplaintList.jsx
import React, { useEffect, useState } from 'react';
import ComplaintCard from '../components/complaint/ComplaintCard';
import Navbar from '../components/navbar/navbar';
import "../components/complaint/ComplaintCard.css"
import axios from 'axios';
// import 

const ComplaintList = () => {

  const [complaints, setComplaints]= useState([]);

  useEffect(() => {
    (async () => {
      const result= await axios.post("http://localhost:8000/allCriminals/getcomplaint");
      setComplaints(result.data);
      console.log(result.data);
    })();

  }, []);


  const complaintFields = ['Index', 'Name', 'Email', 'Category', 'Severity','Accept','Reject'];

  return (
    <>
      <Navbar />
      <div className="complaint-list-title-bar">
        {complaintFields.map((field, index) => (
          <div key={index} className="complaint-list-title">
            {field}
          </div>
        ))}
      </div>
      <div className="complaint-list">
        {complaints.map((complaint, index) => (
          <ComplaintCard key={index} index={index} complainerName={complaint.Name} complainerEmail={complaint.Email}  complaintDescription={complaint.Description}complaintCategory={complaint.Category} complaintSeverity={complaint.Severity} />
        ))}
      </div>
    </>
  );
};

export default ComplaintList;
