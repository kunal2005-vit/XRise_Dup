import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom';

const Contact = () => {
      const location = useLocation();
      const [showNavbar, setShowNavbar] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
      useEffect(() => {
          const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 50);
            setLastScrollY(currentScrollY);
          };
      
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, [lastScrollY]);
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
             <div className="collapse navbar-collapse" id="navbarNav" style={{ backgroundColor: '#0d6efd'  }}>
               <ul className="navbar-nav ms-auto">
                 {[
                   { path: '/', label: 'Home', icon: 'bi-house' },
                   { path: '/parentdashboard', label: 'Parentdashboard', icon: 'bi-people' },
                { path: '/plans', label: 'Plans', icon: 'bi bi-cart' },
                   { path: '/therapist', label: 'Therapist', icon: 'bi bi-hospital' },
                   
                   { path: '/profile', label: 'Profile', icon: 'bi-person-circle' },
                 ].map((navItem) => (
                   <li className="nav-item" key={navItem.path}>
                     <a
                       href={navItem.path}
                       className={`nav-link ${location.pathname === navItem.path
                         ? 'active bg-light text-primary rounded px-3'
                         : ''}`}
                     >
                       <i className={`bi ${navItem.icon} me-2`}></i>
                       {navItem.label}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         </nav>
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f4f7fc",
        padding: "50px 20px",
        color: "#34495e",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#2c3e50",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Contact Us
        </h1>
        <p style={{ fontSize: "18px", color: "#7f8c8d", marginTop: "10px" }}>
          Let's connect and make your experience extraordinary!
        </p>
        <div
          style={{
            width: "120px",
            height: "4px",
            backgroundColor: "#007bff",
            margin: "20px auto",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {/* Office Info Card */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          className="hoverable-card"
        >
          <h3
            style={{
              fontSize: "28px",
              color: "#007bff",
              marginBottom: "20px",
            }}
          >
            Our Office
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            <strong>Address:</strong>
            <br />
            1234 XRise Street, Tech City, Country
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            <strong>Email:</strong> contact@xrise.com
          </p>
          <div
            style={{
              marginTop: "20px",
              padding: "10px 15px",
              backgroundColor: "#007bff",
              color: "#ffffff",
              textAlign: "center",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Business Hours: Mon-Fri, 9:00 AM - 6:00 PM
          </div>
        </div>

        {/* Map Section */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            height: "350px",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          className="hoverable-card"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8727945018686!2d73.8463787!3d18.4709459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea974085768d%3A0x167d3f7d6fa4e276!2sVishwakarma%20Institute%20of%20Technology%20(VIT),%20Pune!5e0!3m2!1sen!2sus!4v1637774380834!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        style={{
          marginTop: "50px",
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Need Assistance?
        </h3>
        <p style={{ fontSize: "18px", marginBottom: "25px", lineHeight: "1.8" }}>
          We're just a call or an email away. Reach out to us and let us help
          you with any questions or support you need.
        </p>
        <a
          href="mailto:contact@xrise.com"
          style={{
            textDecoration: "none",
            backgroundColor: "#ffffff",
            color: "#007bff",
            padding: "12px 25px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "600",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          className="hoverable-link"
        >
          Email Us
        </a>
      </div>
    </div>
    </div>
  );
};

export default Contact;
