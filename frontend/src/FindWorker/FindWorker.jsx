import React, { useState } from 'react';
import Accordion from '../../components/accordian/accordian';
import './FindWorker.css';
import axios from 'axios';

const FindWorker = () => {
  const [category, setCategory] = useState('Categories');
  const [city, setCity] = useState('Cities');
  const [budget, setBudget] = useState('Budget');
  const [searchInput, setSearchInput] = useState('');
  const [workerList, setWorkerList] = useState([]);

  const handleSearchInputChange = (e) => setSearchInput(e.target.value);

  // Search function for Search button
  const handleSearch = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        searchInput
      });
      console.log(response.data);
      setWorkerList(response.data);
    } catch (error) {
      console.error('Error fetching worker data:', error);
    }
  };

  // Filter function for Apply button in Accordion
  const handleApplyFilter = async (selectedFilters) => {
    const { categories, cities, budget } = selectedFilters;
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        category: categories,
        city: cities,
        budget: budget,
        searchInput
      });
      console.log(response.data);
      setWorkerList(response.data);
    } catch (error) {
      console.error('Error fetching worker data:', error);
    }
  };

  return (
    <div>
      <div className="banner-image">
        <img src="../../components/assets/jobboard-banner copy.jpg" alt="banner-image" />
      </div>

      <div className="worker-banner-text">
        <h2 style={{ fontWeight: 500 }}>Worker Board</h2>
        <div className="small-bold-text" style={{ fontSize: '1.2rem' }}>
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
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="What are you looking for?"
              />
              <button className="primary-btn search-btn" onClick={handleSearch}>Search</button>

            </div>
            <div class="card card-solid">
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                    <div class="card bg-light d-flex flex-fill">
                      <div class="card-header text-muted border-bottom-0">
                        Carpenter
                      </div>
                      <div class="card-body pt-0">
                        <div class="row">
                          <div class="col-7">
                            <h2 class="lead"><b>Ramji Suthar</b></h2>
                            <p class="text-muted text-sm"><b>About: </b> Wardrobes experts / 10 years of experience / 60+ jobs done. </p>
                            <ul class="ml-4 mb-0 fa-ul text-muted">
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                Address: 136, shivshakti society, kargil chowk, surat 395010.</li>
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>
                                Phone : + 91 -9265353224</li>
                            </ul>
                          </div>
                          <div class="col-5 text-center">
                            <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar"
                              class="img-circle img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="text-right">
                          <a href="javascript:void(0)" class="btn btn-sm bg-teal border-0">
                            <i class="fas fa-comments text-white"></i>
                          </a>
                          <a href="#" class="btn btn-sm btn-primary">
                            <i class="fas fa-user"></i> View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                    <div class="card bg-light d-flex flex-fill">
                      <div class="card-header text-muted border-bottom-0">
                        Painter
                      </div>
                      <div class="card-body pt-0">
                        <div class="row">
                          <div class="col-7">
                            <h2 class="lead"><b>Shailesh kumar</b></h2>
                            <p class="text-muted text-sm"><b>About: </b> Painting experts / 2+ years of experience / 20+ jobs done. </p>
                            <ul class="ml-4 mb-0 fa-ul text-muted">
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                Address: A-105, celebration homes, vraj chowk, surat 395010.
                              </li>
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>
                                Phone : + 91 -9825827334</li>
                            </ul>
                          </div>
                          <div class="col-5 text-center">
                            <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar"
                              class="img-circle img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="text-right">
                          <a href="javascript:void(0)" class="btn btn-sm bg-teal border-0">
                            <i class="fas fa-comments text-white"></i>
                          </a>
                          <a href="#" class="btn btn-sm btn-primary">
                            <i class="fas fa-user"></i> View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                    <div class="card bg-light d-flex flex-fill">
                      <div class="card-header text-muted border-bottom-0">
                        Carpenter
                      </div>
                      <div class="card-body pt-0">
                        <div class="row">
                          <div class="col-7">
                            <h2 class="lead"><b>Ramji Suthar</b></h2>
                            <p class="text-muted text-sm"><b>About: </b> Wardrobes experts / 10 years of experience / 60+ jobs done. </p>
                            <ul class="ml-4 mb-0 fa-ul text-muted">
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                Address: 136, shivshakti society, kargil chowk, surat 395010.</li>
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>
                                Phone : + 91 -9265353224</li>
                            </ul>
                          </div>
                          <div class="col-5 text-center">
                            <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar"
                              class="img-circle img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="text-right">
                          <a href="javascript:void(0)" class="btn btn-sm bg-teal border-0">
                            <i class="fas fa-comments text-white"></i>
                          </a>
                          <a href="#" class="btn btn-sm btn-primary">
                            <i class="fas fa-user"></i> View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                    <div class="card bg-light d-flex flex-fill">
                      <div class="card-header text-muted border-bottom-0">
                        Painter
                      </div>
                      <div class="card-body pt-0">
                        <div class="row">
                          <div class="col-7">
                            <h2 class="lead"><b>Shailesh kumar</b></h2>
                            <p class="text-muted text-sm"><b>About: </b> Painting experts / 2+ years of experience / 20+ jobs done. </p>
                            <ul class="ml-4 mb-0 fa-ul text-muted">
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                Address: A-105, celebration homes, vraj chowk, surat 395010.
                              </li>
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>
                                Phone : + 91 -9825827334</li>
                            </ul>
                          </div>
                          <div class="col-5 text-center">
                            <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar"
                              class="img-circle img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="text-right">
                          <a href="javascript:void(0)" class="btn btn-sm bg-teal border-0">
                            <i class="fas fa-comments text-white"></i>
                          </a>
                          <a href="#" class="btn btn-sm btn-primary">
                            <i class="fas fa-user"></i> View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Display Worker Results */}
      <div className="worker-list">
        {workerList.length > 0 ? (
          workerList.map(worker => (
            <div key={worker._id} className="worker-item">
              <h3>{worker.name}</h3>
              <p>Category: {worker.category}</p>
              <p>City: {worker.city}</p>
              <p>Budget: {worker.budget}</p>
            </div>
          ))
        ) : (
          <p>No workers found</p>
        )}
      </div>
    </div>
  );
};

export default FindWorker;
