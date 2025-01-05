
import React from 'react'
<<<<<<< HEAD
import { Provider } from "./components/ui/provider"
=======
import { Provider } from "./components/ui/provider";

>>>>>>> 81f256bbae3d44ef2544f18ec953a17b6d5ddd62
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Responsive from './styles/Responsive';
//import Footer from './components/Footer'
import './styles/styles.css'; // Import the CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="page-container">
    <Responsive>
      <Provider>
        <App />
      <App />
      </Provider>
      </Responsive>
    </div>
  </React.StrictMode>
);