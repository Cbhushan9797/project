import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, loginWithGitHub } from "../firebase/authService";
import "./Login.css"

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Google signup
  const handleGoogleSignup = async () => {
    const { success, error } = await loginWithGoogle();
    if (success) {
      alert("Google signup successful");
      navigate("/home");
    } else {
      alert(error || "Google signup failed");
    }
  };

  // Handle GitHub signup
  const handleGitHubSignup = async () => {
    const { success, error } = await loginWithGitHub();
    if (success) {
      alert("GitHub signup successful");
      navigate("/home");
    } else {
      alert(error || "GitHub signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <button onClick={handleGoogleSignup} className="login-google">Sign Up with Google</button>
      <button onClick={handleGitHubSignup} className="login-git">Sign Up with GitHub</button>

      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
}

export default Signup;
