import React, { useState } from "react";

function Accordion({ handleApplyFilter }) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState([]);

    const handleApply = () => {
        handleApplyFilter({
            categories: selectedCategories,
            cities: selectedCities,
            budget: selectedBudget,
        });
    };

    return (
        <div className="accordion" id="accordionExample">
            {/* Categories Section */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                        Categories
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Cleaning"
                                        onChange={() =>
                                            setSelectedCategories([...selectedCategories, "Cleaning"])
                                        }
                                    />{" "}
                                    Cleaning
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Construction & Renovation"
                                        onChange={() =>
                                            setSelectedCategories([
                                                ...selectedCategories,
                                                "Construction & Renovation",
                                            ])
                                        }
                                    />{" "}
                                    Construction & Renovation
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Kitchen & Bathroom"
                                        onChange={() =>
                                            setSelectedCategories([
                                                ...selectedCategories,
                                                "Kitchen & Bathroom",
                                            ])
                                        }
                                    />{" "}
                                    Kitchen & Bathroom
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Carpentry"
                                        onChange={() =>
                                            setSelectedCategories([
                                                ...selectedCategories,
                                                "Carpentry",
                                            ])
                                        }
                                    />{" "}
                                    Carpentry
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Washing"
                                        onChange={() =>
                                            setSelectedCategories([...selectedCategories, "Washing"])
                                        }
                                    />{" "}
                                    Automobiles
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Automobiles"
                                        onChange={() =>
                                            setSelectedCategories([
                                                ...selectedCategories,
                                                "Automobiles",
                                            ])
                                        }
                                    />{" "}
                                    Electricity
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Doors & Windows service"
                                        onChange={() =>
                                            setSelectedCategories([
                                                ...selectedCategories,
                                                "Doors & Windows service",
                                            ])
                                        }
                                    />{" "}
                                    Doors & Windows service
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Security"
                                        onChange={() =>
                                            setSelectedCategories([...selectedCategories, "Security"])
                                        }
                                    />{" "}
                                    Security
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Interior design"
                                        onChange={() =>
                                            setSelectedCategories([
                                                ...selectedCategories,
                                                "Interior design",
                                            ])
                                        }
                                    />{" "}
                                    Interior design
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Roofing & Exterior painting"
                                        onChange={() =>
                                            setSelectedCategories([
                                                ...selectedCategories,
                                                "Roofing & Exterior painting",
                                            ])
                                        }
                                    />
                                    Roofing & Exterior painting
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Cities Section */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Cities
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Surat"
                                        onChange={() =>
                                            setSelectedCities([...selectedCities, "Surat"])
                                        }
                                    />{" "}
                                    Surat
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Rajkot"
                                        onChange={() =>
                                            setSelectedCities([...selectedCities, "Rajkot"])
                                        }
                                    />{" "}
                                    Rajkot
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Bhavnagar"
                                        onChange={() =>
                                            setSelectedCities([...selectedCities, "Bhavnagar"])
                                        }
                                    />{" "}
                                    Bhavnagar
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="ahemdabad"
                                        onChange={() =>
                                            setSelectedCities([...selectedCities, "ahemdabad"])
                                        }
                                    />{" "}
                                    Ahemdabad
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Vadodara"
                                        onChange={() =>
                                            setSelectedCities([...selectedCities, "Vadodara"])
                                        }
                                    />{" "}
                                    Vadodara
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Budget Section */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Budget
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="100-300"
                                        onChange={() =>
                                            setSelectedBudget([...selectedBudget, "100-300"])
                                        }
                                    />{" "}
                                    Between 100 to 300
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="400-700"
                                        onChange={() =>
                                            setSelectedBudget([...selectedBudget, "400-700"])
                                        }
                                    />{" "}
                                    Between 400 to 700
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="800-1000"
                                        onChange={() =>
                                            setSelectedBudget([...selectedBudget, "800-1000"])
                                        }
                                    />{" "}
                                    Between 800 to 1000
                                </label>
                            </li>
                            {/* Add more budget ranges as needed */}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Apply Button */}
            <div class="d-flex justify-content-end">
                <button className="apply-btn primary-btn m-2" onClick={handleApply}>
                    Apply
                </button>
            </div>
        </div>
    );
}

export default Accordion;
