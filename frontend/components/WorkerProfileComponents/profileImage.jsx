import { React, useState, useEffect } from "react";
import '../../src/Worker-Profile/Worker-profile.css'
import axios from "axios";

const ProfileImage = ({ }) => {
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
    <div className="card card-primary card-outline">
      <div className="card-body box-profile">
        <div className="text-center">
          <img
            className="profile-user-img img-fluid img-circle"
            src={worker.file}
            alt="User profile"
          />
        </div>
        <h4 className="profile-username text-center">
          {worker.firstName} {worker.lastName}
        </h4>
        <p className="text-center fs-5">
          {worker.category} - {worker.subCategory}
        </p>
        <ul className="list-group list-group-unbordered mb-3">
          <li className="list-group-item">
            <b>Total Jobs</b> <a className="float-right">1,322</a>
          </li>
          <li className="list-group-item">
            <b>Earning</b> <a className="float-right">543</a>
          </li>
          <li className="list-group-item">
            <b>Ratings</b> <a className="float-right">4.5/5</a>
          </li>
        </ul>
        <a href="javascript:void(0)" className="btn btn-block">
          <b>Follow</b>
        </a>
      </div>
    </div>

  );
};

export default ProfileImage;
