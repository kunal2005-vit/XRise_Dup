import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        padding: "12px 0px",
        backgroundColor: "rgb(232, 227, 227)",
        textAlign: "center",
        position: "relative",
        width: "100%",
        height: "85px",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: "1000",
      }}
    >
      <div className="text-center">
        <h5>
          XRise 2024-25{" "}
          <a href="#" style={{ textDecoration: "none", color: "red" }}>
            Team 488
          </a>
        </h5>
        <p>&copy; 2025 XRise. All Rights Reserved.</p>

      </div>

      <div className="text-center pt-1">
        <a href="#" target="_blank" rel="noreferrer">
          <i
            className="bi bi-linkedin mx-2"
            style={{ fontSize: "20px" }}
          ></i>
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <i
            className="bi bi-globe mx-2"
            style={{ fontSize: "20px" }}
          ></i>
        </a>


        <a href="#" target="_blank" rel="noreferrer">
          <i
            className="bi bi-envelope-fill mx-2"
            style={{ fontSize: "21px" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
