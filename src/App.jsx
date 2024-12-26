import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Repositories from './components/Repositories';
import AICodeReview from './components/AICodeReview';
import CloudSecurity from './components/CloudSecurity';
import HowToUse from './components/HowToUse';
import Settings from './components/Settings';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/home" element={<Home />}>
          {/* Nested Routes */}
          <Route index element={<Navigate to="/home/repositories" replace />} />
          <Route path="repositories" element={<Repositories />} />
          <Route path="ai-code-review" element={<AICodeReview />} />
          <Route path="cloud-security" element={<CloudSecurity />} />
          <Route path="how-to-use" element={<HowToUse />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
