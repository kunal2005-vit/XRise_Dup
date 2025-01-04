import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Global Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  /* Global Media Queries */
  @media (max-width: 1200px) {
    .container {
      max-width: 95%;
      padding: 0 20px;
    }
    .hero-section h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    .navbar-brand {
      font-size: 1.5rem;
    }
    .hero-section h1 {
      font-size: 2.5rem;
    }
    .hero-section p {
      font-size: 1rem;
    }
    .card {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      flex-direction: column;
      text-align: center;
    }
    .hero-section h1 {
      font-size: 2rem;
    }
    .hero-section p {
      font-size: 0.9rem;
    }
  }
`;

export default function Responsive({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
