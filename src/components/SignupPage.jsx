import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/Login.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Signup successful! Redirecting to login.");
                navigate("/login");
            } else {
                alert(data.message || "Signup failed.");
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Sign Up</h2>
                <form onSubmit={handleSignup} className="login-form">

                    <label htmlFor="email" className="login-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="username" className="login-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="login-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password" className="login-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmPassword" className="login-label">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="login-input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="login-button">Sign Up</button>

                    <p className="signup-prompt">
                        Already have an account?{" "}
                        <Link to="/login" className="signup-link">Login!</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
