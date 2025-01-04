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
<<<<<<< HEAD
          <Route path="/home" element ={<Home/>} />
          <Route path="/base" element ={<Base/>} />
          <Route path="/parentdashboard" element ={<Parentdashboard/>} />

=======
          <Route path="/extras" element ={<Home/>} />
          <Route path="/home" element ={<Base/>} />
>>>>>>> 393c157226e54dc2aef1a4afba5abbcb1b63b78c
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
