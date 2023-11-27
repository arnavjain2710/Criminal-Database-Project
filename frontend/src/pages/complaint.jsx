
import './complaint.css'
import React, { useContext, useState  } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import complaintContext from '../context/complaint/complaintContext';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

const ComplaintForm = () => {
  const context = useContext(complaintContext)
  const {addComplaints} = context
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Complaint, setComplaint] = useState('');
  const [Category, setCategory] = useState('');
  const [Severity, setSeverity] = useState('');

  const [Complaints , setComplaints] = useState({
    Name:"",
    Email:"",
    Complaint:"",
    Severity:"",
    Category:""
  })

  const onChange1 = (e) => {
    setComplaints({ ...Complaints, [e.target.name]: e.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
   addComplaints(Complaints.Name , Complaints.Email , Complaints.Complaint , Complaints.Category , Complaints.Severity);
    console.log('Form submitted:'  , Complaints.Name );
    toast.success("Complaint Submited Successfully", {
      position: toast.POSITION.TOP_CENTER
  });
  document.getElementById('form').reset();
  };

  return (
   <>
    <ToastContainer />
    <Navbar/>
    <div className="complaint-form">
      <h2>Register a Complaint</h2>
      <form id="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            // value={Complaints.Name}
            onChange={onChange1}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            // value={Complaints.Email}
            onChange={onChange1}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            id="complaint"
            name="Complaint"
            // value={Complaints.Complaint}
            onChange={onChange1}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="Category"
            // value={Complaints.Category}/
            onChange={onChange1}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="severity">Severity:</label>
          <select
            id="severity"
            name="Severity"
            // value={Complaints.Severity}
            onChange={onChange1}
            required
          >
            <option value="">Select Severity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit"
        onClick={handleSubmit}
        >Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ComplaintForm;
