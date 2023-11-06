import React from 'react';
import './searchcard.css'; // Import the CSS file

const CriminalCard = ({data}) => {
  const {
    first_name,
    last_name,
    crime_name,
    gender,
    address,
    case_description,
    prison_name,
    status,
  } = data;

  return (
    <div className="criminal-card">
      <div className="mugshot">
        <img src="mugshot_image_url" alt="Mugshot" />
      </div>
      <div className="details">
        <h2>{first_name} {last_name}</h2>
        <p><strong>Crime:</strong> {crime_name}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Case Description:</strong> {case_description}</p>
        <p><strong>Prison Name:</strong> {prison_name}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
    </div>
  );
};

export default CriminalCard;
