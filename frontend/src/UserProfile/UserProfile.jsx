import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../UserProfile/UserProfile.css';
import { FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function UserProfile() {
  // State for user profile details
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    email: '',
    phone: ''
  });


  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch user data and hiring history from the API when the component mounts
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get('http://localhost:8000/api/v1/user/getUserData', { withCredentials: true });
        // const historyResponse = await axios.get('http://localhost:8000/api/v1/user/hiring-history');
        console.log(userResponse.data.data.user);

        setUserDetails(userResponse.data.data.user);
        // setUserHistory(historyResponse.data);
        // setWorkersHired(userResponse.data.workersHired);
        // setTasksCompleted(userResponse.data.tasksCompleted);
        // setPendingRequests(userResponse.data.pendingRequests);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchUserData();
    const intervalId = setInterval(fetchUserData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [editDetails, setEditDetails] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleEditClick = () => {
    setEditDetails(userDetails);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const [updateLoading, setUpdateLoading] = useState(false);


  const handleUpdateProfile = async () => {
    setUpdateLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/user/editUserData',
        { ...editDetails },
        { withCredentials: true }
      );

      setUserDetails((prevDetails) => ({ ...prevDetails, ...editDetails }));
      window.location.reload();
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    } finally {
      setUpdateLoading(false);
    }
  };
  const [workerRequests, setWorkerRequests] = useState([]);

  useEffect(() => {
    const fetchWorkerStatus = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/user/fetchHistory", { withCredentials: true });
        console.log("API Response:", response.data); // Debugging log

        if (Array.isArray(response.data?.data)) {
          setWorkerRequests(response?.data?.data); // Extract 'data' array from response
        } else {
          setWorkerRequests([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching worker requests:", error);
      }
    };

    fetchWorkerStatus();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container userProfile-container">
      <header className="d-flex justify-content-between align-items-center mb-5 userProfile-header">
        <h1>Welcome, <span style={{ color: "#ff9502" }}>{userDetails.fullName}</span></h1>
      </header>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-4">Personal Details</h3>

            <div className=" d-flex align-items-center list-group-item">
              <i className="fa-solid fa-user editProfileIcons"></i>
              <p><strong>Name:</strong> {userDetails.fullName}</p>
            </div>

            <div className="d-flex align-items-center list-group-item">
              <i className="fa-solid fa-location-dot editProfileIcons"></i>
              <p><strong>Address:</strong> {userDetails.address}</p>
            </div>

            <div className="d-flex align-items-center list-group-item">
              <i className="fas fa-envelope editProfileIcons" ></i>
              <p><strong>Email:</strong> {userDetails.email}</p>
            </div>

            <div className="d-flex align-items-center list-group-item">
              <i className="fas fa-phone-alt editProfileIcons"></i>
              <p><strong>Phone:</strong> {userDetails.phone}</p>
            </div>

            <button
              className="btn w-100 mt-4 primary-btn editProfileBtn"
              data-bs-toggle="modal"
              data-bs-target="#authModal"
              onClick={() => {
                handleEditClick();
                setShowModal(true);

              }}
            >
              <i className="fas fa-edit me-2"></i> Edit Profile
            </button>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-lg p-4">
            <h3 className='mb-4'>Overview</h3>
            <div className="row">
              <div className="col-sm-4">
                <div className="stat-card p-3 text-center">
                  <h5>Workers Hired</h5>
                  <p className="counter">
                    {/* { {workersHired} } */}
                    0</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="stat-card p-3 text-center">
                  <h5>
                    Tasks Completed
                  </h5>
                  <p className="counter">
                    {/* { {tasksCompleted} } */}
                    0
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="stat-card p-3 text-center">
                  <h5>Pending Requests</h5>
                  <p className="counter">
                    {/* { {pendingRequests}  } */}
                    0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card shadow-lg p-4 mt-4">
        <h3>Hiring History</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Worker Name</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {workerRequests.length > 0 ? (
              workerRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.worker?.firstName} {request.worker?.lastName}</td>
                  <td>{request.worker?.category || "N/A"}</td>
                  <td>{request.worker?.subCategory || "N/A"}</td>
                  <td>{request.requestDate ? new Date(request.requestDate).toLocaleDateString() : "N/A"}</td>
                  <td>
                    <span className={
                      request.status === "accepted" ? "text-success" :
                        request.status === "rejected" ? "text-danger" :
                          "text-warning"
                    }>
                      {request.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No hiring history found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="modal fade"
        id='authModal' aria-labelledby="authModalLabel" aria-hidden="true" data-bs-backdrop="static"
        data-bs-keyboard="false" tabIndex="-1">
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                aria-label="Close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="fullName"
                  value={editDetails.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={editDetails.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={editDetails.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={editDetails.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleUpdateProfile} disabled={updateLoading}>{updateLoading ? 'Saving...' : 'Save changes'}</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserProfile;