import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Responsive from './styles/Responsive';
//import Footer from './components/Footer'
import './styles/styles.css'; // Import the CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="page-container">
    <Responsive>
      <App />
      {/* <Footer /> */}
      </Responsive>
    </div>
  </React.StrictMode>
);