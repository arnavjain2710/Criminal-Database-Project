
import './complaint.css'
import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');
  const [category, setCategory] = useState('');
  const [severity, setSeverity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Form submitted:', { name, email, complaint });
  };

  return (
   <>
    <Navbar/>
    <div className="complaint-form">
      <h2>Register a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="severity">Severity:</label>
          <select
            id="severity"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            required
          >
            <option value="">Select Severity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ComplaintForm;
