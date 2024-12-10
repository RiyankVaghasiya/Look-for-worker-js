import React, { useState } from "react";
import axios from "axios"; 
import './Complaint.css';

const Complaint = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("description", description);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) { 
        alert("Ticket submitted successfully!");
      } else {
        alert("Failed to submit the ticket.");
      }
    } catch (error) {
      console.error("Error submitting the ticket:", error);
      alert("Error submitting the ticket.");
    }
  };

  return (
    <div className="support-ticket container">
      <div className="ticket-header">
        <h2 style={{ color: "#ff9502", textAlign: "center" }}>
          Have any complaint?
        </h2>
      </div>
      <div className="ticket-content">
        <div className="ticket-content-header flex">
          <a href="#" id="my-ticket">My Tickets</a>
          <a href="#" id="customer-care">Customer care</a>
        </div>

        <form className="ticket-content-form" onSubmit={handleSubmit}>
          <div className="form-subject flex">
            <label htmlFor="subject" id="subject-label">Subject</label>
            <input
              type="text"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Purpose to write a ticket"
              required
            />
          </div>
          <div className="form-subject flex">
            <label htmlFor="description" id="description-label">Description</label>
            <textarea
              name="complaine-description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Explain in brief..."
              required
            ></textarea>
          </div>
          <div className="form-subject flex">
            <label htmlFor="attachments" id="attachments-label">Attachments</label>
            <input 
              type="file" 
              name="file" 
              id="attachments" 
              className="choose-file" 
              onChange={(e) => setFile(e.target.files[0])}
            />
            <p className="upload-criteria">
              You can upload up to 2 files (maximum 2 MB each) of the following
              types: .jpg, .jpeg, .png, .pdf, .doc, .ppt, .zip, .mp3, .mp4
            </p>
          </div>
          
          {/* Use a button with type="submit" */}
          <div className="ticket-btn">
            <button type="submit" className="primary-btn">SUBMIT TICKET</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
