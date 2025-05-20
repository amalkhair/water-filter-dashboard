import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/Login.css"; // Import your CSS file for styling

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Save token or user info if you have it in response
                localStorage.setItem("token", "yourAuthToken"); // Replace with actual token if you generate one
                navigate("/dashboard");
            } else {
                const errorData = await response.json();
                alert(errorData.detail || "Invalid username or password.");
            }
        } catch (error) {
            alert("Error connecting to server.");
            console.error(error);
        }
    };


    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleLogin} className="login-form">
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

                    <p className="signup-prompt">
                        Don&apos;t have an account?{' '}
                        <Link to="/signup" className="signup-link">Sign up!</Link>
                    </p>

                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}
