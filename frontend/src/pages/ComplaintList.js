// ComplaintList.jsx
import React from 'react';
import ComplaintCard from '../components/complaint/ComplaintCard';
import Navbar from '../components/navbar/navbar';
import "../components/complaint/ComplaintCard.css"
// import 

const ComplaintList = () => {
  const complaints = [
    {
      complainerName: 'John Doe',
      complainerEmail: 'john.doe@example.com',
      complaintDescription: 'This is a sample complaint description.',
      complaintCategory: 'Service',
      complaintSeverity: 'High',
    },
    {
      complainerName: 'May Bach',
      complainerEmail: 'may.bach@example.com',
      complaintDescription: 'This is a sample complaint description 2.',
      complaintCategory: 'IT',
      complaintSeverity: 'Medium',
    },
  ];

  const complaintFields = ['Index', 'Name', 'Email', 'Category', 'Severity'];

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
          <ComplaintCard key={index} index={index} {...complaint} />
        ))}
      </div>
    </>
  );
};

export default ComplaintList;
