// import { React, useState } from "react";
// import '../../src/Worker-Profile/Worker-profile.css'
// import Activity from '../../components/WorkerProfileComponents/workerProfileActivity.jsx';
// import Settings from '../../components/WorkerProfileComponents/workerProfileSettings.jsx';

// import { Link, NavLink } from "react-router-dom";


// const RightColumn = () => {
//   const [activeTab, setActiveTab] = useState("activity");

//   return (

//     <div className="card-header p-2">
//       <ul className="nav nav-pills">
//         <li className="nav-item">
//           <button className="nav-link active" onClick={() => setActiveTab("activity")}>Activity</button>
//         </li>
//         <li className="nav-item">
//           <button className="nav-link" onClick={() => setActiveTab("settings")}>Settings</button>
//         </li>
//       </ul>
//       {activeTab === "activity" && <Activity />}
//       {activeTab === "settings" && <Settings />}
//     </div>

//   );
// };

// export default RightColumn;


import { React, useState } from "react";
import '../../src/Worker-Profile/Worker-profile.css';
import Activity from '../../components/WorkerProfileComponents/workerProfileActivity.jsx';
import Settings from '../../components/WorkerProfileComponents/workerProfileSettings.jsx';
import ChangeEmailAndPassword from "./editCredentials.jsx";
import Applicants from "./applicants.jsx";
import "./workerProfileCss.css";

import { Link, NavLink } from "react-router-dom";

const RightColumn = () => {
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <div className="card-header p-2">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "activity" ? "active" : ""}`}
            onClick={() => setActiveTab("activity")}
          >
            Activity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            Edit info
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "editcredentials" ? "active" : ""}`}
            onClick={() => setActiveTab("editcredentials")}
          >
            Edit Credentials
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "applicants" ? "active" : ""}`}
            onClick={() => setActiveTab("applicants")}
          >
            Applicants
          </button>
        </li>
      </ul>
      <hr />
      {activeTab === "activity" && <Activity />}
      {activeTab === "settings" && <Settings />}
      {activeTab === "editcredentials" && <ChangeEmailAndPassword />}
      {activeTab === "applicants" && <Applicants />}
    </div>
  );
};

export default RightColumn;