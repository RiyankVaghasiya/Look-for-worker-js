import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./WorkerProfile02.css"

const WorkerProfile = () => {
    const { id } = useParams(); // Get worker ID from URL
    const [worker, setWorker] = useState(null);
    const [error, setError] = useState("");
    const [user, setUser] = useState(null); // Store user authentication status
    const workerId = worker?._id;
    const [isHired, setIsHired] = useState(false);
    useEffect(() => {
        const fetchWorker = async () => {
            try {
                console.log("Fetching worker with ID:", id);
                const response = await axios.get(`http://localhost:8000/api/v1/workers/${id}`, { withCredentials: true });

                console.log("API Response:", response.data);
                setWorker(response.data.data.worker || response.data);
            } catch (error) {
                console.error("Error fetching worker data:", error);
                setError("Worker not found or server error");
            }
        };

        const checkLoginStatus = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/v1/user/checkUserLogin", {
                    withCredentials: true, // Ensure cookies are sent
                });

                console.log("API Response:", response.data); // Debugging response

                if (response.data?.loggedIn && response.data?.user) {
                    setUser(response.data.user); // Set the user state correctly
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Error checking login status:", error);
                setUser(null);
            }
        };

        if (id) {
            fetchWorker();
            checkLoginStatus();
        }
    }, [id]);

    // Track hiring status

    const hireWorker = async (workerId, userId) => {

        if (!userId) {
            alert("You must be logged in to hire a worker.");
            return;
        }

        if (!workerId) {
            alert("Worker ID is missing!");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/hiring/hireWorker",
                { workerId, userId },
                { withCredentials: true }
            );

            if (response.data?.success) {
                alert(response.data?.message || "Worker successfully hired!");
                setIsHired(true);

                // ✅ Store hiring status in localStorage
                const storageKey = `hired_${workerId}_${userId}`;
                localStorage.setItem(storageKey, "true");

                // 🔍 Debug log
                console.log(`📝 Saved to localStorage: ${storageKey} = "true"`);
            } else {
                alert("Failed to hire worker. Please try again.");
            }
        } catch (error) {
            alert("Failed to hire worker: " + (error.response?.data?.message || "Unknown error"));
        }
    };


    useEffect(() => {
        if (!user || !workerId) return;

        const storageKey = `hired_${workerId}_${user._id}`;
        const storedStatus = localStorage.getItem(storageKey);

        // 🔍 Debug log
        console.log(`🔍 Checking localStorage: ${storageKey} =`, storedStatus);

        if (storedStatus !== null) {
            setIsHired(storedStatus === "true");
        }
    }, [workerId, user]);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!worker) return <p>Loading...</p>;

    return (
        <div className="hiring-profile-container">
            <div className="worker-info-section flex">
                <div className="worker-info-main-left flex">
                    <div className="info-left">
                        <div className="worker-info-image">
                            <img src={worker.file} alt="worker" />
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="info-name flex center">
                            <p className="fullname bold">{worker.firstName}  {worker.lastName}</p>
                            <div className="info-proffesion">
                                <p style={{ color: "#74767e" }}>@ {worker.category} - {worker.subCategory}</p>
                            </div>
                        </div>
                        <div className="info-rating flex center">
                            <div className="info-rating-count">
                                <span href="#" className="worker-profile-color"><i class="fa-solid fa-star"></i> 4.9 (<a href="#">552</a>) </span>
                            </div>
                            <div className="info-rating-status">
                                <span className="top-rated"> Top Rated ✦✦✦</span>
                            </div>
                        </div>

                        <div className="info-right-contact flex">
                            <span className="worker-profile-color"><i class="fa-solid fa-envelope"></i>  {worker.email}</span>
                            <span className="worker-profile-color"><i class="fa-solid fa-phone"></i>  {worker.phone}</span>
                        </div>
                        <span className="worker-profile-color"><i class="fa-solid fa-location-dot"></i>  {worker.city}</span>


                        <span className="info-proffesion worker-profile-color" >Work Experience : {worker.workExperience} Years</span>
                        <div className="info-location-language flex">
                            <div className="info-location">

                            </div>
                            <div className="info-language">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="worker-info-main-right">
                    {user ? (
                        isHired ? (
                            <button className="btn btn-sm btn-success hire-btn" disabled>
                                Already Hired ✅
                            </button>
                        ) : (
                            <button className="btn btn-sm btn-primary hire-btn" onClick={() => hireWorker(workerId, user._id)}>
                                Hire Now
                            </button>
                        )
                    ) : (
                        <p>Please <a href="/">log in</a> to hire a worker.</p>
                    )}
                </div>
            </div>
            <div className="worker-about-section">
                <p className="worker-head">About me</p>
                <p className="worker-about-main">{worker.workerDetails}</p>
            </div>
            <div className="worker-skill-section">
                <p className="worker-head">Skills</p>
                <div className="skill-list">
                    <ul className="flex">
                        <li>{worker.category}</li>
                        <li> {worker.subCategory} </li>
                    </ul>
                </div>
            </div>
            <div className="worker-rating-section">
                <div className="display-rating-count">
                    <div className="rating-count">
                        <p className="worker-profile-color">(552) Reviews</p>
                    </div>
                </div>
                <div className="rating-main-div flex">
                    {[5, 4, 3, 2, 1].map((stars) => (
                        <div className="rating-main flex" key={stars} >
                            <div className="rating-name">
                                <span className="worker-profile-color f-weight">{stars} Stars</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="rating-count">
                                <span className="worker-profile-color f-weight">(525)</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="customer-review-section">
                <div className="review-head">
                    <p className="worker-head">Review</p>
                </div>
                <div className="review-card">
                    <div className="user-info">
                        <div className="profile-pic">S</div>
                        <div className="user-details">
                            <h3>pravin_kucha <span className="repeat-client">♻ Repeat Client</span></h3>
                            <p>🏳️‍⚧️ India</p>
                        </div>
                    </div>

                    <div className="review-content">
                        <div className="rating">
                            ★★★★★ <span className="time">• 2 months ago</span>
                        </div>
                        <p className="review-text">
                            I've worked with Sohan on a couple of occasions and have been very happy with the final result both times.
                            Sometimes there is a bit of communication problem when messaging and not all changes get made the first time around.
                            We began talking through Zoom and this helped immensely getting my changes done...
                            <a href="#">See more</a>
                        </p>
                    </div>

                    <div className="price-duration">
                        <p className="worker-profile-color f-weight">₹8,800–₹17,600 <br /> Price</p>
                        <p className="worker-profile-color f-weight">10 days <br /> Duration</p>
                        <div className="category">

                        </div>
                    </div>

                    <div className="seller-response">
                        <p>User's Response</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default WorkerProfile;
