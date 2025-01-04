import Home from './Home';
import Login from './Login';
import Register from './Register';
import Base from './Base';
import Parentdashboard from './ParentDashboard';
import {BrowserRouter, Routes, Route} from "react-router-dom";

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

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
