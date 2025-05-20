import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove token and other session data
        localStorage.removeItem("token");

        // Redirect to login page
        navigate("/login");
    };

    return (
        <div className="dashboard-header">
            <h1>Smart Water Filter Dashboard</h1>
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}
