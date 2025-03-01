import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllWorkers, fetchFilteredWorkers, setFilters, successForWorkers } from "../../store/slices/workerSlice.js";
import Accordion from "../../components/accordian/accordian";
// import WorkerProfileCard from "../../components/WorkerProfileCard/WorkerProfileCard";
import "./FindWorker.css";

const FindWorker = () => {
  const dispatch = useDispatch();
  const { workers, allWorkers, loading, error, filters } = useSelector((state) => state.workers);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    {
      dispatch(fetchAllWorkers());
    }
  }, [dispatch]);




  // Handle search button click
  const handleSearch = () => {
    if (searchKeyword.trim() === "") {
      dispatch(successForWorkers(allWorkers)); // Reset to original workers list
      return;
    }

    // Always search from allWorkers to prevent filtering an already filtered list
    const filteredWorkers = allWorkers.filter(worker =>
      worker.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      worker.lastName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      worker.category.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      worker.city.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    dispatch(successForWorkers(filteredWorkers)); // Update state with filtered results
  };

  // Handle filter apply from accordion
  const handleApplyFilter = (selectedFilters) => {
    dispatch(setFilters({
      category: selectedFilters.categories,
      city: selectedFilters.cities,
      hourlyPay: selectedFilters.hourlyPay,
      searchKeyword: selectedFilters.searchKeyword  // Update searchKeyword state
    }));
    dispatch(fetchFilteredWorkers());
  }


  return (
    <div>
      <div className="banner-image">
        <img src="../../components/assets/jobboard-banner copy.jpg" alt="banner-image" />
      </div>

      <div className="worker-banner-text">
        <h2 style={{ fontWeight: 500 }}>Worker Board</h2>
        <div className="small-bold-text" style={{ fontSize: "1.2rem" }}>
          Choose the best worker based on your needs
        </div>
      </div>

      <div className="filter-wrap">
        <div className="worker-filter d-flex">
          <div className="filter-left">
            <p className="filter-common">Search filters</p>
            <Accordion handleApplyFilter={handleApplyFilter} />
          </div>

          <div className="filter-right">
            <div className="search-input mt-0 flex">
              <input
                type="text"
                name="search-input"
                id="search-input"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="What are you looking for?"
              />
              <button className="primary-btn search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>

            <div className="card card-solid">
              <div className="card-body pb-0">
                <div className="row">
                  <div className="container">
                    <div className="row">
                      {loading ? (
                        <p className="text-center">Loading workers...</p>
                      ) : error ? (
                        <p className="text-center text-danger">Error: {error}</p>
                      ) : Array.isArray(workers) && workers.length > 0 ? (
                        workers.map((worker) => (
                          <div key={worker._id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                            <div className="card bg-light d-flex flex-fill">
                              <div className="card-header text-muted border-bottom-0 flex justify-content-between">
                                <div className="worker-card-category">
                                  {worker.category}
                                </div>
                                <div className="worker-card-budget">
                                  <i class="fa-solid fa-indian-rupee-sign"></i>  {worker.hourlyPay}/hr.
                                </div>
                              </div>
                              <div className="card-body pt-0">
                                <div className="row gap flex">
                                  <div className="col-7">
                                    <h2 className="lead">
                                      <b>{worker.firstName ? `${worker.firstName} ${worker.lastName}` : "No Name"}</b>
                                    </h2>
                                    <p className="text-muted text-sm">
                                      <b>About: </b> {worker.workerDetails || "No details available"}
                                    </p>
                                    <ul className="mb-0 fa-ul text-muted">

                                      <li className="small">
                                        <span className="fa-li"><i class="fa-solid fa-location-dot fa-lg"></i> </span>{worker.city || "No cities"}
                                      </li>

                                      <li className="small">
                                        <span className="fa-li"><i className="fas fa-lg fa-phone"></i></span>
                                        {worker.phone || "No phone number"}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-5 text-center">
                                    <img
                                      src={worker.file ? worker.file : "/default-user.png"}
                                      alt={`${worker.firstName} ${worker.lastName}`}
                                      className="img-circle img-fluid"
                                      style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer">
                                <div className="text-right">
                                  <a href={`/worker-profile02/${worker._id}`} className="btn btn-sm btn-primary">
                                    <i className="fas fa-user"></i> View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center">No workers found.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWorker;