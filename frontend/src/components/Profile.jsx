import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/styles.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Profile = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A creative designer who loves crafting unique experiences.",
    profilePhoto:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    subscription: {
      plan: "Premium",
      expiryDate: "2025-12-31",
      features: ["Ad-free experience", "Exclusive content", "Priority support"],
    },
  };

  return (
    <div>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[{ path: '/', label: 'Home', icon: 'bi-house' },
                
                { path: '/parentdashboard', label: 'Parentdashboard', icon: 'bi-people' },].map(
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
          src={user.profilePhoto}
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
        <h2 className="fw-bold mt-3">{user.name}</h2>
        <p className="text-muted">{user.email}</p>
      </div>

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
              <p>{user.bio}</p>
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
                <strong>Plan:</strong> {user.subscription.plan}
              </p>
              <p className="mb-1">
                <strong>Expiry:</strong> {user.subscription.expiryDate}
              </p>
              <ul className="list-unstyled mt-3">
                {user.subscription.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
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
              <h5 className="fw-bold mb-3">Statistics</h5>
              <div className="d-flex justify-content-around">
                <div>
                  <h6 className="fw-bold">Projects</h6>
                  <p>15</p>
                </div>
                <div>
                  <h6 className="fw-bold">Likes</h6>
                  <p>500</p>
                </div>
                <div>
                  <h6 className="fw-bold">Followers</h6>
                  <p>300</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
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
              <h5 className="fw-bold mb-3">Achievements</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-trophy-fill text-warning me-2"></i>
                  Top 10 Designer
                </li>
                <li className="mb-2">
                  <i className="bi bi-star-fill text-primary me-2"></i>
                  Expert in UI/UX
                </li>
                <li>
                  <i className="bi bi-award-fill text-success me-2"></i>
                  Best Designer of the Month
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
            <Plans></Plans>
      {/* Buttons */}
      <div className="text-center mt-4">
        <button className="btn btn-primary me-2">
          <i className="bi bi-pencil-square me-2"></i>Edit Profile
        </button>
        <button className="btn btn-danger">
          <i className="bi bi-arrow-repeat me-2"></i>Change Plan
        </button>
      </div>
    </div>
</div>
  );
};

export default Profile;
