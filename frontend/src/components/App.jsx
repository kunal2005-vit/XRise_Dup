import Home from './Home';
import Login from './Login';
import Register from './Register';
import Base from './Base';
import Parentdashboard from './Parentdashboard';
import Profile from './Profile';
import Plans from './Plans';
import Contact from './Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Therapist from './Therapist';
function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Base/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/base" element ={<Base/>} />
          <Route path="/parentdashboard" element ={<Parentdashboard/>} />
          <Route path="/profile" element ={<Profile/>} />
          <Route path="/plans" element ={<Plans/>} />
          <Route path="/therapist" element ={<Therapist/>} />
          <Route path="/contact" element ={<Contact/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
