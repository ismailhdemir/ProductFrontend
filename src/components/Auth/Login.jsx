import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // React Router için navigate hook'u

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7080/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
        setSuccess("Login successful!");
        setError(""); // Başarılı ise hata mesajını temizle
        // Başarılı giriş sonrası yönlendirme
        navigate("/dashboard"); // Burada yönlendirilmek istenen sayfanın yolu
      } else {
        const errorData = await response.text(); // JSON yerine düz metin al
        console.error("Login failed", errorData);
        setError("Login failed. Please check your credentials.");
        setSuccess(""); // Başarısız ise başarılı mesajını temizle
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred.");
      setSuccess(""); // Başarılı ise başarılı mesajını temizle
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default Login;
