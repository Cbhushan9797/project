import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faCloud,
  faBook,
  faCog,
  faEnvelope,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = ({ user }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = () => setIsNavbarVisible(!isNavbarVisible);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="home-container">
      {/* Sidebar for laptops */}
      <div className="sidebar">
        <p>
          <FontAwesomeIcon icon={faCode} className="icon" /> <strong>CodeAI</strong> make code better
        </p>
        <h3>Welcome, {user?.displayName || "User"}</h3>
        <p>{user?.email}</p>
        <div className="nav-links">
          <button
            className={isActive("/home/repositories") ? "active" : ""}
            onClick={() => navigate("/home/repositories")}
          >
            <FontAwesomeIcon icon={faHome} className="icon" /> Repositories
          </button>
          <button
            className={isActive("/home/ai-code-review") ? "active" : ""}
            onClick={() => navigate("/home/ai-code-review")}
          >
            <FontAwesomeIcon icon={faCode} className="icon" /> AI Code Review
          </button>
          <button
            className={isActive("/home/cloud-security") ? "active" : ""}
            onClick={() => navigate("/home/cloud-security")}
          >
            <FontAwesomeIcon icon={faCloud} className="icon" /> Cloud Security
          </button>
          <button
            className={isActive("/home/how-to-use") ? "active" : ""}
            onClick={() => navigate("/home/how-to-use")}
          >
            <FontAwesomeIcon icon={faBook} className="icon" /> How to Use
          </button>
          <button
            className={isActive("/home/settings") ? "active" : ""}
            onClick={() => navigate("/home/settings")}
          >
            <FontAwesomeIcon icon={faCog} className="icon" /> Settings
          </button>
        </div>

        {/* Bottom buttons */}
        <div className="bottom-buttons">
          <button onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
          </button>
          <button>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact
          </button>
        </div>
      </div>

      {/* Toggle button for mobile */}
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>

      {/* Mobile dropdown navbar */}
      {isNavbarVisible && (
        <div className={`navbar ${isNavbarVisible ? "active" : ""}`}>
          <p>
            <FontAwesomeIcon icon={faCode} className="icon" /> <strong>CodeAI</strong> make code better
          </p>
          <button
            className={isActive("/home/repositories") ? "active" : ""}
            onClick={() => navigate("/home/repositories")}
          >
            <FontAwesomeIcon icon={faHome} className="icon" /> Repositories
          </button>
          <button
            className={isActive("/home/ai-code-review") ? "active" : ""}
            onClick={() => navigate("/home/ai-code-review")}
          >
            <FontAwesomeIcon icon={faCode} className="icon" /> AI Code Review
          </button>
          <button
            className={isActive("/home/cloud-security") ? "active" : ""}
            onClick={() => navigate("/home/cloud-security")}
          >
            <FontAwesomeIcon icon={faCloud} className="icon" /> Cloud Security
          </button>
          <button
            className={isActive("/home/how-to-use") ? "active" : ""}
            onClick={() => navigate("/home/how-to-use")}
          >
            <FontAwesomeIcon icon={faBook} className="icon" /> How to Use
          </button>
          <button
            className={isActive("/home/settings") ? "active" : ""}
            onClick={() => navigate("/home/settings")}
          >
            <FontAwesomeIcon icon={faCog} className="icon" /> Settings
          </button>
        </div>
      )}

      {/* Right frame for content */}
      <div className="frame">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
