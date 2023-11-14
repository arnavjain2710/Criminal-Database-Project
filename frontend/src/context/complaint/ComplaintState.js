import complaintContext from "./complaintContext";
import { useState } from "react";

const ComplaintState = (props) => {
  const host = "http://localhost:8000";
  const complaintInitial = [];
  const [complaints, setComplaints] = useState(complaintInitial);

  // Get all to do list items
  const addComplaints = async (Name, Email, Complaint, Category, Severity) => {
    try {
      const response = await fetch(`${host}/allCriminals/regcomplaint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name, Email, Complaint, Category, Severity }),
      });

      if (!response.ok) {
        throw new Error('Failed to insert complaint');
      }

      const json = await response.json();
      console.log(json);
      console.log("yo here");
      console.log(Name, Email, Complaint, Category, Severity);
      setComplaints(json);
    } catch (error) {
      console.error(error);
    }
  };


 
    return (
        <complaintContext.Provider value={{complaints , setComplaints,addComplaints}}>
            {props.children}
        </complaintContext.Provider>
    )
}

export default ComplaintState;