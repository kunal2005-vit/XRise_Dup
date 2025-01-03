import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom';

const Base = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }} className="text-center">
      <header className="d-flex flex-column justify-content-center align-items-center text-white" style={{ height: '50vh', background: 'url(https://media.assettype.com/healthday-en%2F2024-08-07%2Fy192dmdh%2FAdobeStock_420956842.jpeg?w=1024&auto=format%2Ccompress&fit=max) no-repeat center center/cover', paddingTop: '20vh' }}>
        <nav
          className={`navbar navbar-expand-lg navbar-dark bg-primary shadow-lg ${showNavbar ? 'sticky-top' : 'navbar-hidden'}`}
          style={{ transition: 'transform 0.3s ease-in-out', transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)', height: '70px' }}
        >
          <div className="container">
            <Link to="/" className="navbar-brand fs-4">
              <i className="bi bi-stars me-2"></i>XRise
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {[
                  { path: '/', label: 'Home', icon: 'bi-house' },
                  { path: '/about', label: 'About', icon: 'bi-info-circle' },
                  { path: '/services', label: 'Services', icon: 'bi-gear' },
                  { path: '/contact', label: 'Contact', icon: 'bi-envelope' },
                  { path: '/login', label: 'Login', icon: 'bi-box-arrow-in-right' },
                  { path: '/signup', label: 'Signup', icon: 'bi-person-plus' },
                ].map((navItem) => (
                  <li className="nav-item" key={navItem.path}>
                    <Link
                      to={navItem.path}
                      className={`nav-link d-flex align-items-center ${
                        location.pathname === navItem.path ? 'active bg-light text-primary rounded px-3' : ''
                      }`}
                    >
                      <i className={`bi ${navItem.icon} me-2`}></i>{navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <h1>Welcome to XRise</h1>
        <p>Empowering children and teenagers with ASD and ID through innovative VR/AR technology.Empowering lives of children and thier parents.</p>

      </header>
      <section className="container my-5">
        <h2>Features of XRise</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="text-start">
              <li>Dual VR/AR capabilities</li>
              <li>Adaptive AI-driven learning</li>
              <li>Parental and therapist portal</li>
              <li>User assessment reports</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src="images/vr.jpeg" alt="Features of XRise" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      <section className="container my-5">
        <h2>About XRise</h2>
        <div className="row">
          <div className="col-md-6">
            <img src="images/img.webp" alt="About XRise" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <p>XRise is a platform designed for children and teenagers with Autism Spectrum Disorder (ASD) and Intellectual Disabilities (ID), focusing on the development and improvement of social and behavioral skills. Our goal is to provide a structured learning experience using a customized standalone VR headset.</p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <h2>Our Offerings</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="images/vr1.jpeg" alt="Customized Learning" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Customized Learning</h5>
                <p className="card-text">Adaptive lessons powered by AI for personalized development.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="images/parent.webp" alt="Parent & Therapist Portal" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Parent & Therapist Portal</h5>
                <p className="card-text">Track progress and collaborate for better outcomes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="images/progress.jpeg" alt="Progress Reports" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Progress Reports</h5>
                <p className="card-text">Detailed user assessments to monitor improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-3">
        <p>&copy; 2024 XRise. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Base;
