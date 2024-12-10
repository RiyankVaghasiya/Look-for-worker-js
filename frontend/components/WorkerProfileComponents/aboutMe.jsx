import { React, useState, useEffect } from "react";
import axios from "axios";
import '../../src/Worker-Profile/Worker-profile.css'

const AboutMeBox = ({ }) => {
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/workers/getWorkerprofile', { withCredentials: true });
        setWorker(response.data.data.worker);
      } catch (error) {
        console.error('Error fetching worker data:', error);
      }
    };

    fetchWorkerData();
  }, []);

  if (!worker) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">About Me</h3>
      </div>
      <div className="card-body">
        <strong>
          <i className="fas fa-book mr-1"></i> Personal Information
        </strong>
        <p className="text-muted">
          <span style={{ fontWeight: 600 }}> E-mail:</span> {worker.email} <br />
          <span style={{ fontWeight: 600 }}> Phone:</span> {worker.phone} <br />
          <span style={{ fontWeight: 600 }}> Aadhar:</span> {worker.aadhar} <br />
          <span style={{ fontWeight: 600 }}>address:</span> {worker.address}
        </p>
        <hr />
        <strong>
          <i className="fas fa-map-marker-alt mr-1"></i> Location
        </strong>
        <p className="text-muted mb-0"><span style={{ fontWeight: 600 }}>City:</span> {worker.city}</p>
        <p className="text-muted"><span style={{ fontWeight: 600 }}>Postal code:</span> {worker.postalCode}</p>
        <hr />
        <strong>
          <i className="fas fa-pencil-alt mr-1"></i> Work Details
        </strong>
        <p className="text-muted">
          <span className="tag tag-danger">
            <span style={{ fontWeight: 600 }}> Sub-category:</span> {worker.subCategory}
          </span>{" "}
          <br />
          <span className="tag tag-success">
            <span style={{ fontWeight: 600 }}> Desired Period:</span> {worker.desiredPeriod}
          </span>{" "}
          <br />
          <span className="tag tag-info"><span style={{ fontWeight: 600 }}> Hourly Pay:</span> {worker.hourlyPay}</span>
        </p>
        <hr />
        <strong>
          <i className="far fa-file-alt mr-1"></i> Description
        </strong>
        <p className="text-muted">{worker.workerDetails}</p>
      </div>
    </div>
  );
};

export default AboutMeBox;
