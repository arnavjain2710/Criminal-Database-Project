// ComplaintCard.jsx
import React, { useState } from 'react';
import './ComplaintCard.css'; // Import a separate CSS file for styling

const ComplaintCard = ({ index, complainerName, complainerEmail, complaintDescription, complaintCategory, complaintSeverity }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`complaint-card ${showDescription ? 'expanded' : ''}`} onClick={toggleDescription}>
      <div className="complaint-header">
        <h3>{`Complaint #${index + 1}`}</h3>
        <p>Name: {complainerName}</p>
        <p>Email: {complainerEmail}</p>
        <p>Category: {complaintCategory}</p>
        <p>Severity: {complaintSeverity}</p>
      </div>
      {showDescription && (
        <div className="complaint-description">
          <p>{complaintDescription}</p>
        </div>
      )}
    </div>
  );
};

export default ComplaintCard;
