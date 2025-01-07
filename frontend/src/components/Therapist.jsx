import React, { useState ,useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const TherapistPortal = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
  const doctors = [
    {
      name: "Dr. John Doe",
      hospital: "Green Valley Hospital",
      address: "123 Main Street, Green Valley",
      specialty: "Neurology",
      contact: "123-456-7890",
      available: "Monday - Friday, 1:00 PM - 5:00 PM",
      photo: "https://t4.ftcdn.net/jpg/01/34/29/31/360_F_134293169_ymHT6Lufl0i94WzyE0NNMyDkiMCH9HWx.jpg",
    },
    {
      name: "Dr. Jane Smith",
      hospital: "Sunshine Medical Center",
      address: "456 Oak Road, Sunshine City",
      specialty: "Pediatrics",
      contact: "987-654-3210",
      available: "Monday - Friday, 2:00 PM - 5:00 PM",
      photo: "https://cdn3d.iconscout.com/3d/premium/thumb/doctor-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hospital-clinic-man-avatars-pack-people-icons-8772456.png",
    },
    {
      name: "Dr. Mina Lee",
      hospital: "City Care Hospital",
      address: "789 Pine Avenue, Cityville",
      specialty: "Orthopedics",
      contact: "987-654-3210",
      available: "Monday - Friday, 3:00 PM - 5:00 PM",
      photo: "https://img.freepik.com/free-photo/portrait-3d-female-doctor_23-2151107332.jpg?t=st=1736187978~exp=1736191578~hmac=9d79424ae9376c03fa99cc267eeb2ca0b7f02c09d2cea07d2104237d9927ad1c&w=900",
    },
  ];

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
              <div className="collapse navbar-collapse" id="navbarNav" style={{ backgroundColor: '#0d6efd'  }}>
                <ul className="navbar-nav ms-auto">
                  {[{ path: '/', label: 'Home', icon: 'bi-house' },
                    
                    { path: '/profile', label: 'Profile', icon: 'bi-person-circle' },
                    { path: '/parentdashboard', label: 'Parentdashboard', icon: 'bi-people' },
                  ].map(
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
        backgroundColor: "#f4f7fc",
        padding: "40px",
        borderRadius: "15px",
      }}
    >
      <h1
        className="text-center mb-5"
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#374151",
        }}
      >
        Meet Our Therapists
      </h1>

      <div
        className="row g-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {doctors.map((doctor, index) => (
          <div
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            key={index}
          >
            <div
              className="card shadow-lg border-0"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                className="card-img-top d-flex justify-content-center align-items-center"
                style={{
                  padding: "20px",
                  backgroundColor: "#e3eaf1",
                }}
              >
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  onClick={() => handleImageClick(doctor.photo)}
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "50%",
                    border: "5px solid #f4f7fc",
                    objectFit: "cover",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
              <div
                className="card-body text-center"
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                }}
              >
                <h5
                  className="card-title mb-3"
                  style={{
                    color: "#1d4ed8",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {doctor.name}
                </h5>
                <p className="card-text text-muted mb-2">
                  <strong>Hospital:</strong> {doctor.hospital}
                </p>
                <p className="card-text text-muted mb-2">
                  <strong>Specialty:</strong> {doctor.specialty}
                </p>
                <p className="card-text text-muted mb-2">
                  <strong>Contact:</strong> {doctor.contact}
                </p>
                <p className="card-text text-muted">
                  <strong>Availability:</strong> {doctor.available}
                </p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <a
                    href={`tel:${doctor.contact}`}
                    className="btn btn-primary"
                    style={{
                      borderRadius: "30px",
                      padding: "10px 20px",
                    }}
                  >
                    <i className="bi bi-telephone-fill me-2"></i> Call
                  </a>
                  <a
                    href="mailto:doctor@example.com"
                    className="btn btn-success"
                    style={{
                      borderRadius: "30px",
                      padding: "10px 20px",
                    }}
                  >
                    <i className="bi bi-envelope-fill me-2"></i> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
          onClick={handleCloseModal}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{
              maxWidth: "500px",
              margin: "auto",
            }}
          >
            <div className="modal-content">
              <img
                src={selectedImage}
                alt="Therapist"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default TherapistPortal;
