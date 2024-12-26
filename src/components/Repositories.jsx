import React, { useState } from "react";
import "./Repositories.css"; // Add styling for repositories
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus, // Add icon
  faSyncAlt, // Refresh icon
  faSearch,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

const Repositories = () => {
  const [repositories, setRepositories] = useState([
    { id: 1, name: "Repo 1", techStack: "React", date: "2024-12-01", display: "private" },
    { id: 2, name: "Repo 2", techStack: "Node.js", date: "2024-12-02", display: "public" },
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newRepoName, setNewRepoName] = useState("");
  const [newTechStack, setNewTechStack] = useState("");
  const [newRepoDate, setNewRepoDate] = useState("");
  const [newDisplay, setNewDisplay] = useState("");

  const handleAddNewRepo = () => {
    setIsAdding(true); // Show the form
  };

  const handleCreateRepo = () => {
    if (
      newRepoName.trim() === "" ||
      newTechStack.trim() === "" ||
      newRepoDate.trim() === "" ||
      (newDisplay.toLowerCase() !== "public" && newDisplay.toLowerCase() !== "private")
    ) {
      alert("All fields are required, and visibility must be 'public' or 'private'.");
      return;
    }
    const newRepo = {
      id: Date.now(),
      name: newRepoName,
      techStack: newTechStack,
      date: newRepoDate,
      display: newDisplay.toLowerCase(),
    };
    setRepositories([...repositories, newRepo]);
    setNewRepoName("");
    setNewTechStack("");
    setNewRepoDate("");
    setNewDisplay("");
    setIsAdding(false); // Close the form
  };

  const handleDeleteRepo = (id) => {
    const updatedRepos = repositories.filter((repo) => repo.id !== id);
    setRepositories(updatedRepos);
  };

  const calculateDaysAgo = (date) => {
    const today = new Date();
    const repoDate = new Date(date);
    const diffTime = Math.abs(today - repoDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const filteredRepositories = repositories.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.techStack.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="repositories-page">
      <span><strong>Repositories</strong> <br/>{repositories.length} total repositories </span>
      <div className="repositories-controls" >
          <button onClick={handleAddNewRepo} className="addButton">
            <FontAwesomeIcon icon={faPlus} className="icon" /> Add New Repo
          </button>
          <button className="refresh">
            <FontAwesomeIcon icon={faSyncAlt} className="icon" /> Refresh All
          </button>
        </div> 
        <br /> 
      

      {/* Top Controls */}
      <div className="repositories-header">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-box"
        />
        
        
      </div>

      {/* Add New Repository Form */}
      {isAdding && (
        <div className="add-repo-form">
          <input
            type="text"
            placeholder="Enter repository name"
            value={newRepoName}
            onChange={(e) => setNewRepoName(e.target.value)}
            className="repo-input"
          />
          <input
            type="text"
            placeholder="Enter tech stack"
            value={newTechStack}
            onChange={(e) => setNewTechStack(e.target.value)}
            className="repo-input"
          />
          <input
            type="date"
            placeholder="Enter date"
            value={newRepoDate}
            onChange={(e) => setNewRepoDate(e.target.value)}
            className="repo-input"
          />
          <select
            value={newDisplay}
            onChange={(e) => setNewDisplay(e.target.value)}
            className="repo-input"
          >
            <option value="">Select Visibility</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          <button onClick={handleCreateRepo}>Create Repo</button>
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      )}

      {/* Repository List */}
      <div className="repository-list">
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map((repo) => (
            <div key={repo.id} className="repo-item">
              <span>
                <strong>{repo.name}</strong>
                <span style={{ marginLeft: "8px" }}>
                  <button className="access-btn">
                  {repo.display === "public" ? "🌍 Public" : "🔒 Private"}
                  </button>
                  <br/>
                </span>
                <br />
                {repo.techStack}
                <span style={{ marginLeft: "100px" }}>{repo.date}</span>
                <span style={{ marginLeft: "100px" }}> {calculateDaysAgo(repo.date)} days ago</span>
              </span>
              <button
                className="delete-btn"
                onClick={() => handleDeleteRepo(repo.id)}
              >
                <FontAwesomeIcon icon={faTrash} className="icon" />
              </button>
            </div>
          ))
        ) : (
          <p>No repositories found.</p>
        )}
      </div>
    </div>
  );
};

export default Repositories;
