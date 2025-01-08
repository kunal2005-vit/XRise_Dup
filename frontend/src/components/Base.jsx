import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom';

function Base() {
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
    <div style={{backgroundColor : "#f39f9f"}}>
     
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
          {[
            { path: '/', label: 'Home', icon: 'bi-house' },
            { path: '/parentdashboard', label: 'Parentdashboard', icon: 'bi-people' },
            { path: '/plans', label: 'Plans', icon: 'bi bi-cart' },
            { path: '/therapist', label: 'Therapist', icon: 'bi bi-hospital' },
            { path: '#about', label: 'About Us', icon: 'bi-info-circle' ,dropdown: true, items: [
              { path: '#about', label: 'About Us' },
              { path: '#services', label: 'Our Services' },
              { path: '/contact', label: 'Contact Us' },
            ] },
            { path: '/profile', label: 'Profile', icon: 'bi-person-circle', dropdown: true, items: [
              { path: '/profile', label: 'Profile' },
              { path: '/login', label: 'Login' },
              { path: '/register', label: 'Signup'},
            ] },
          ].map((navItem) => (
            <li className={`nav-item ${navItem.dropdown ? 'dropdown' : ''}`} key={navItem.path}>
              {navItem.dropdown ? (
                <>
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id={`dropdown-${navItem.label}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className={`bi ${navItem.icon} me-2`}></i>
                    {navItem.label}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby={`dropdown-${navItem.label}`}>
                    {navItem.items.map((dropdownItem) => (
                      <li key={dropdownItem.path}>
                        <a className="dropdown-item" href={dropdownItem.path}>
                          {dropdownItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={navItem.path}
                  className={`nav-link ${location.pathname === navItem.path
                    ? 'active bg-light text-primary rounded px-3'
                    : ''}`}
                >
                  <i className={`bi ${navItem.icon} me-2`}></i>
                  {navItem.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>

      {/* Hero Section */}
      <header id="home"
        className="hero-section"
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '98vh',
          width: '100%',
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://media.assettype.com/healthday-en%2F2024-08-07%2Fy192dmdh%2FAdobeStock_420956842.jpeg) no-repeat center center/cover',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div>
          <h1 className="display-4 dynamic-header">Welcome to XRise</h1>
          <p className="lead dynamic-header">Empowering lives through innovative VR/AR technology.</p>
        </div>
      </header>

      {/* Features Section */}


        <br></br><br></br>
      <section
  id="features"
  className="container py-5"
  style={{
    backgroundColor: "#d4f3ef",
    borderRadius: "15px",
    padding: "50px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  <h2
    className="text-center mb-4"
    style={{
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#374151",
    }}
  >
    Features of XRise
  </h2>
  <div
    className="row d-flex flex-column flex-lg-row justify-content-between align-items-center"
    style={{ gap: "30px" }}
  >
    {/* Feature List (Text) */}
    <div
      className="col-lg-6 col-md-12 mb-4 mb-lg-0"
      style={{
        fontSize: "1.25rem",
        lineHeight: "2",
        color: "#4b5563",
        textAlign: "justify",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
        }}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#0d6efd", fontSize: "1.5rem" }}
          ></i>
          Dual VR/AR capabilities
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#0d6efd", fontSize: "1.5rem" }}
          ></i>
          Adaptive AI-driven learning
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#0d6efd", fontSize: "1.5rem" }}
          ></i>
          Parental and therapist portal
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#0d6efd", fontSize: "1.5rem" }}
          ></i>
          User assessment reports
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#0d6efd", fontSize: "1.5rem" }}
          ></i>
          <strong>
            The headset is wireless and manufactured in-house by students,
            offering engaging content tailored to individual needs without
            external device complications.
          </strong>
        </li>
      </ul>
    </div>

    {/* Feature Image */}
    <div
      className="col-lg-6 col-md-12 text-center"
      style={{
        flex: "1",
      }}
    >
      <img
        src="https://st3.depositphotos.com/1092019/12815/i/450/depositphotos_128158612-stock-photo-features-on-small-chalkboard-3d.jpg"
        alt="Features of XRise"
        className="img-fluid rounded shadow"
        style={{
          height: "auto",
          maxWidth: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</section>

{/* About Section */}
{/* About Section */}

<section
  id="about"
  className="container py-5 my-5 "
  style={{
    backgroundColor: "#fff5e1",
    borderRadius: "15px",
    padding: "50px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  <h2
    className="text-center mb-4"
    style={{
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#374151",
    }}
  >
    About XRise
  </h2>
  <div
    className="row d-flex flex-column flex-lg-row align-items-center"
    style={{ gap: "30px" }}
  >
    {/* Image on the left for larger screens, on top for smaller screens */}
    <div
      className="col-lg-6 col-md-12 mb-4 mb-lg-0"
      style={{
        textAlign: "center",
        flex: 1,
      }}
    >
      <img
        src="https://cubicleninjas.com/wp-content/uploads/2017/12/howdoes360videowork.jpg"
        alt="About XRise"
        className="img-fluid rounded shadow"
        style={{
          height: "auto",
          width: "100%",
          maxWidth: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Text on the right for larger screens, below the image for smaller screens */}
    <div
      className="col-lg-6 col-md-12"
      style={{
        fontSize: "1.25rem",
        color: "#4b5563",
        lineHeight: "1.8",
        textAlign: "justify",
        flex: 1,
      }}
    >
      <p>
        XRise is a platform designed for children and teenagers with Autism
        Spectrum Disorder (ASD) and Intellectual Disabilities (ID), focusing on
        the development and improvement of social and behavioral skills.
      </p>
      <p>
        Our goal is to provide a structured learning experience using a
        customized standalone VR headset.
      </p>
    </div>
  </div>
</section>




  
      {/* Services Section */}
      <section id="services" className="container my-5">
        <h2 className="text-center mb-4"
    style={{
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#374151",}}>Our Offerings</h2>
        <div className="services-grid">
          {[
            {
              title: 'Customized Learning',
              text: 'Adaptive lessons powered by AI for personalized development.',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s',
            },
            {
              title: 'Parent & Therapist Portal',
              text: 'Track progress and collaborate for better outcomes.',
              img: 'https://assets.clevelandclinic.org/transform/b199f3bf-2223-4276-b471-1973ef13ae91/child-therapy-and-parents-1256276099-770x533-1_jpg',
            },
            {
              title: 'Progress Reports',
              text: 'Detailed user assessments to monitor improvement.',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5ewmsUiYP8h0deX-yzo47MpJfZlcOctWFQ&s',
            },
          ].map((offering, idx) => (
            <div key={idx} className="card">
              <img src={offering.img} alt={offering.title} />
              <h5>{offering.title}</h5>
              <p>{offering.text}</p>
            </div>
          ))}
        </div>
      </section>

<br></br>
    </div>
  );
}

export default Base;
