import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Custom CSS for additional styling
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { path: '/', label: 'Home', icon: 'bi-house' },
                { path: '../base#about', label: 'About', icon: 'bi-info-circle' },
                { path: '#services', label: 'Services', icon: 'bi-gear' },
                { path: '/parentdashboard', label: 'Contact', icon: 'bi-envelope' },
                { path: '/login', label: 'Login', icon: 'bi-box-arrow-in-right' },
                { path: '/signup', label: 'Signup', icon: 'bi-person-plus' },
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

      {/* Hero Section */}
      <header id='home'
        className="d-flex flex-column justify-content-center align-items-center text-white text-center hero-section"
        style={{
          height: '98vh',
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://media.assettype.com/healthday-en%2F2024-08-07%2Fy192dmdh%2FAdobeStock_420956842.jpeg) no-repeat center center/cover',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="animated-background "></div>
        <h1
          className="display-4 animate-title  dynamic-header"
          style={{ fontSize: '3.5rem', fontWeight: 'bold' }}
        >
          Welcome to XRise
        </h1>
        <p
          className="lead animate-text dynamic-header"
          style={{
            fontSize: '1.5rem',
            marginTop: '10px',
          }}
        >
          Empowering lives through innovative VR/AR technology.
        </p>
      </header>

      <section className="container my-5">
  <h2
    id='features'
    className="text-center mb-4 animate-header"
    style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}
  >
    Features of XRise
  </h2>
  <div
    className="row align-items-center features-section"
    onMouseEnter={() =>
      document
        .querySelector('.features-section')
        .classList.add('animate-triggered')
    }
    onMouseLeave={() =>
      document
        .querySelector('.features-section')
        .classList.remove('animate-triggered')
    }
  >
    <div className="col-md-6">
      <ul
        className="text-start list-unstyled feature-list animate-fade-up"
        style={{ fontSize: '1.2rem', lineHeight: '1.8' }}
      >
        <li>
          <i className="bi bi-check-circle text-success me-2"></i> Dual VR/AR capabilities
        </li>
        <li>
          <i className="bi bi-check-circle text-success me-2"></i> Adaptive AI-driven learning
        </li>
        <li>
          <i className="bi bi-check-circle text-success me-2"></i> Parental and therapist portal
        </li>
        <li>
          <i className="bi bi-check-circle text-success me-2"></i> User assessment reports
        </li>
      </ul>
    </div>
    <div className="col-md-6 text-center feature-image animate-zoom-in">
      <img
        src="https://st3.depositphotos.com/1092019/12815/i/450/depositphotos_128158612-stock-photo-features-on-small-chalkboard-3d.jpg"
        alt="Features of XRise"
        className="img-fluid rounded shadow"
        style={{ width: '650px', height: '350px', borderRadius: '20px' }}
      />
    </div>
  </div>
</section>

<section id="about" className="container my-5 " >
  <h2
    className="text-center mb-4 animate-header"
    style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}
  >
    About XRise
  </h2>
  <div
    className="row align-items-center about-section"
    onMouseEnter={() =>
      document.querySelector('.about-section').classList.add('animate-triggered')
    }
    onMouseLeave={() =>
      document.querySelector('.about-section').classList.remove('animate-triggered')
    }
  >
    <div className="col-md-6 text-center about-image animate-slide-left">
      <img
        src="https://cubicleninjas.com/wp-content/uploads/2017/12/howdoes360videowork.jpg"
        alt="About XRise"
        className="img-fluid rounded shadow"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px' }}
      />
    </div>
    <div
      className="col-md-6 about-text animate-fade-in"
      style={{ animationDelay: '0.5s' }}
    >
      <p
        style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          textAlign: 'justify',
          color: '#343a40',

        }}
      >
        XRise is a platform designed for children and teenagers with Autism
        Spectrum Disorder (ASD) and Intellectual Disabilities (ID), focusing on
        the development and improvement of social and behavioral skills. Our
        goal is to provide a structured learning experience using a customized
        standalone VR headset.
      </p>
    </div>
  </div>
</section>


      <section id='services' className="container my-5">
        <h2
          className="text-center mb-4 animate-header"
          style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#007bff' }}
        >
          Our Offerings
        </h2>
        <div
          className="row g-4 animate-section"
          onMouseEnter={() => document.querySelectorAll('.card').forEach(card => card.classList.add('animate-card'))}
          onMouseLeave={() => document.querySelectorAll('.card').forEach(card => card.classList.remove('animate-card'))}
        >
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
            <div className="col-md-4" key={idx}>
              <div
                className="card shadow-lg border-0"
                style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  width: '400px', // Fixed width
                  height: '350px', // Fixed height
                }}
              >
                <img
                  src={offering.img}
                  alt={offering.title}
                  className="card-img-top animate-fade-up"
                  style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5
                    className="card-title animate-slide-up"
                    style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                  >
                    {offering.title}
                  </h5>
                  <p className="card-text animate-slide-up" style={{ color: '#6c757d' }}>
                    {offering.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </section>



    </div>
    
    
  );

  
}

export default Base;
