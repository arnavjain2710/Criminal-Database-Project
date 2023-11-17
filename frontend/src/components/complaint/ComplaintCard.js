// ComplaintCard.jsx
import React, { useState } from 'react';
import './ComplaintCard.css'; // Import a separate CSS file for styling

const ComplaintCard = ({ index, complainerName, complainerEmail, complaintDescription, complaintCategory, complaintSeverity, toggleDesc=true }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`complaint-card ${showDescription&&toggleDesc ? 'expanded' : ''}`} onClick={toggleDescription}>
      <div className="complaint-header">
        <h3>{`Complaint #${index + 1}`}</h3>
        <p>{complainerName}</p>
        <p>{complainerEmail}</p>
        <p>{complaintCategory}</p>
        <p>{complaintSeverity}</p>
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
