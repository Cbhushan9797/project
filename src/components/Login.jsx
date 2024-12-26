import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail, loginWithGoogle, loginWithGitHub } from "../firebase/authService";
import "./Login.css";
import { FaGoogle, FaGithub } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle email login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const { success, error } = await loginWithEmail(email, password);
    if (success) {
      alert("Login successful");
      navigate("/home");
    } else {
      alert(error || "Login failed");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const { success, error, user } = await loginWithGoogle();
    if (success) {
      alert("Google login successful");
      navigate("/home");
    } else {
      alert(error || "Google login failed");
    }
  };

  // Handle GitHub login
  const handleGitHubLogin = async () => {
    const { success, error, user } = await loginWithGitHub();
    if (success) {
      alert("GitHub login successful");
      navigate("/home");
    } else {
      alert(error || "GitHub login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="head-login">Welcome to CodeAI</h2>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
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
        <button type="submit">Login</button>
      </form>

      <button onClick={handleGoogleLogin} className="login-google"><FaGoogle className="icon" />Login with Google</button>
      <button onClick={handleGitHubLogin} className="login-git"><FaGithub className="icon" />Login with GitHub</button>

      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
