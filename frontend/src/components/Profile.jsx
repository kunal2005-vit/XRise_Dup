import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const email = sessionStorage.getItem('userEmail');

        if (!email) {
            alert("Please log in first!");
            navigate('/login');
            return;
        }

        // Fetch user data from backend
        axios.post('https://xrise-dup.onrender.com/profile', { email })
            .then(response => {
                setUserData(response.data);
            })
            .catch(err => {
                console.error(err);
                alert("Error fetching profile data!");
                navigate('/login');
            });
    }, [navigate]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Navbar */}
            <nav
                className={`navbar navbar-expand-lg navbar-dark bg-primary shadow-lg ${showNavbar ? 'sticky-top' : 'navbar-hidden'}`}
                style={{
                    transition: 'transform 0.3s ease-in-out',
                    transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
                    height: '70px',
                }}
            >
                <div className="container">
                    <Link to="/" className="navbar-brand fs-4">
                        <i className="bi bi-stars me-2"></i>XRise
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{ backgroundColor: '#0d6efd' }}>
                        <ul className="navbar-nav ms-auto">
                            {[{ path: '/', label: 'Home', icon: 'bi-house' },
                                { path: '/therapist', label: 'Therapist', icon: 'bi bi-hospital' },
                                { path: '/parentdashboard', label: 'Parentdashboard', icon: 'bi-people' },
                                { path: '/contact', label: 'Contact Us', icon: 'bi bi-person-rolodex' },].map(
                                (navItem) => (
                                    <li className="nav-item" key={navItem.path}>
                                        <Link
                                            to={navItem.path}
                                            className={`nav-link ${location.pathname === navItem.path
                                                ? 'active bg-light text-primary rounded px-3'
                                                : ''}`}
                                        >
                                            <i className={`bi ${navItem.icon} me-2`}></i>
                                            {navItem.label}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Profile Content */}
            <div
                className="container my-5"
                style={{
                    maxWidth: "1200px",
                    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
                    padding: "30px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                }}
            >
                <div className="text-center mb-4">
                    <img
                        src={userData.profilePhoto || 'https://via.placeholder.com/150'}
                        alt="User Profile"
                        className="rounded-circle border"
                        style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                            borderColor: "#6c63ff",
                            borderWidth: "4px",
                            borderStyle: "solid",
                        }}
                    />
                    <h2 className="fw-bold mt-3">{userData.name}</h2>
                    <p className="text-muted">{userData.email}</p>
                </div>

                {/* New Sections */}
                <div className="row g-4">
                    {/* Bio Section */}
                    <div className="col-md-6">
                        <div
                            className="card h-100 shadow-sm"
                            style={{
                                border: "none",
                                background: "#ffffff",
                                borderRadius: "15px",
                            }}
                        >
                            <div className="card-body text-center">
                                <h5 className="fw-bold mb-3">Bio</h5>
                                <p>{userData.bio}</p>
                            </div>
                        </div>
                    </div>

                    {/* Subscription Section */}
                    <div className="col-md-6">
                        <div
                            className="card h-100 shadow-sm"
                            style={{
                                border: "none",
                                background: "#ffffff",
                                borderRadius: "15px",
                            }}
                        >
                            <div className="card-body text-center">
                                <h5 className="fw-bold mb-3">Subscription</h5>
                                <p className="mb-1">
                                    <strong>Plan:</strong> {userData.subscriptionTier}
                                </p>
                                <p className="mb-1">
                                    <strong>Expiry:</strong> {userData.subscription.expiryDate}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Number Section */}
                    <div className="col-md-6">
                        <div
                            className="card h-100 shadow-sm"
                            style={{
                                border: "none",
                                background: "#ffffff",
                                borderRadius: "15px",
                            }}
                        >
                            <div className="card-body text-center">
                                <h5 className="fw-bold mb-3">Mobile Number</h5>
                                <p>{userData.mobileNumber}</p>
                            </div>
                        </div>
                    </div>

                    {/* Profession Section */}
                    <div className="col-md-6">
                        <div
                            className="card h-100 shadow-sm"
                            style={{
                                border: "none",
                                background: "#ffffff",
                                borderRadius: "15px",
                            }}
                        >
                            <div className="card-body text-center">
                                <h5 className="fw-bold mb-3">Profession</h5>
                                <p>{userData.profession}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
