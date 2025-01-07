import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate import
import '../styles/ParentDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Parentdashboard = () => {
  const [metrics, setMetrics] = useState([]);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate for redirection
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Fetch user email from session storage
  // const userEmail = sessionStorage.getItem('userEmail');
  // if (!userEmail) {
  //   // If email is not found, redirect to login
  //   alert("Please log in first!");
  //   navigate('/login'); // Redirect to the login page
  //   return; // Prevent further execution of the component
  // }

  // Define PRN mapping
  const prnMapping = {
    'kunalsonne@gmail.com': 69,
    'prabhakar.uparkar23@vit.edu': 96,
  };

  // Get the corresponding PRN for the user
  const userPrn = prnMapping[userEmail] || null;

  useEffect(() => {
      const userEmail = sessionStorage.getItem('userEmail');
        if (!userEmail) {
    // If email is not found, redirect to login
        alert("Please log in first!");
        navigate('/login'); // Redirect to the login page
        return; // Prevent further execution of the component
        }
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await fetch('https://xrise-dup-7lyv.onrender.com/get_metrics');
      if (!response.ok) {
        throw new Error('Failed to fetch metrics');
      }
      const data = await response.json();
      const filteredData = data.filter(item => item.PRN === userPrn); // Filter metrics by PRN
      setMetrics(filteredData);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  const calculateImprovement = (prev, current) => {
    const playtimeImprovement = calculatePercentageChange(prev.playtime, current.playtime);
    const blocksDestroyedImprovement = calculatePercentageChange(prev.blocks_destroyed, current.blocks_destroyed);
    const blocksPlacedImprovement = calculatePercentageChange(prev.blocks_placed, current.blocks_placed);

    return (
      <div>
        <span className="positive">Playtime: {playtimeImprovement}%</span>
        <br />
        <span className="positive">Blocks Destroyed: {blocksDestroyedImprovement}%</span>
        <br />
        <span className="positive">Blocks Placed: {blocksPlacedImprovement}%</span>
      </div>
    );
  };

  const calculatePercentageChange = (prevValue, currentValue) => {
    if (prevValue === 0) return 100; // Handle division by zero
    const change = currentValue - prevValue;
    return ((change / prevValue) * 100).toFixed(2);
  };

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
              {[{
                path: '/', label: 'Home', icon: 'bi-house'
              },
              {
                path: '/login', label: 'Login', icon: 'bi-box-arrow-in-right'
              },
              {
                path: '/signup', label: 'Signup', icon: 'bi-person-plus'
              },
              {
                path: '/therapist', label: 'Therapist', icon: 'bi bi-hospital'
              },
              {
                path: '/plans', label: 'Subscription', icon: 'bi bi-cart'
              },
              {
                path: '/contact', label: 'Contact Us', icon: 'bi bi-person-rolodex'
              },
              {
                path: '/profile', label: 'Profile', icon: 'bi-person-circle'
              }].map((navItem) => (
                <li className="nav-item" key={navItem.path}>
                  <Link
                    to={navItem.path}
                    className={`nav-link ${location.pathname === navItem.path ? 'active bg-light text-primary rounded px-3' : ''}`}
                  >
                    <i className={`bi ${navItem.icon} me-2`}></i>
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <div style={{ marginTop: '50px' }} className="dashboard-container">
        <h1>Parent Game Metrics Dashboard</h1>
        <h2>Metrics Overview</h2>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Playtime (Minutes)</th>
              <th>Blocks Destroyed</th>
              <th>Blocks Placed</th>
              <th>Timestamp</th>
              <th>Improvement</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => (
              <tr key={index}>
                <td>{metric.playtime}</td>
                <td>
                  <div className="bar" style={{ width: `${Math.min((metric.blocks_destroyed / 1000) * 100, 100)}%` }}>
                    {metric.blocks_destroyed}
                  </div>
                </td>
                <td>
                  <div className="bar" style={{ width: `${Math.min((metric.blocks_placed / 1000) * 100, 100)}%` }}>
                    {metric.blocks_placed}
                  </div>
                </td>
                <td>{new Date(metric.timestamp).toLocaleString()}</td>
                <td>
                  {index > 0 ? calculateImprovement(metrics[index - 1], metric) : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Parentdashboard;
