import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import TDSLevel from './components/TDSLevel';
import TDSChart from './components/TDSChart';
import Temperature from './components/Temperature';
import TimeDisplay from './components/TimeDisplay';
import './CSS/Dashboard.css';
import Login from './components/LoginPage.jsx'; // Import Login
import Signup from './components/SignupPage.jsx'; // Import Signup (adjust the path)
import TDSHistory from './components/TDSHistory'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} /> {/* Login route */}
                <Route path="/signup" element={<Signup />} /> {/* Signup route added */}
                <Route path="/dashboard" element={
                    <div className="dashboard">
                        <div className="dashboard-container">
                            <Header />
                            <h2 className="welcome">Welcome back!</h2>
                            <div className="cards">
                                <TDSLevel />
                                <TDSChart />
                                <TimeDisplay />
                                <Temperature />
                            </div>
                              <div className="TDSHistory">
                                  <TDSHistory />
                              </div>


                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    );
}
