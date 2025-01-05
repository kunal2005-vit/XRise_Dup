import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react"; // Chakra UI Button component

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('https://xrise-dup.onrender.com/login', { email, password })
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                console.log("Login Success");
                alert('Login successful!');
                navigate('/base');
            } else {
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(139, 220, 114, 0.56))" }}>
                <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
                    <h2 className='mb-3 text-primary'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        {/* Chakra UI Button */}
                        <Button 
                            type="submit" 
                            bgGradient="linear(to-r, teal.400, blue.500)" 
                            _hover={{
                                bgGradient: "linear(to-r, teal.500, blue.600)",
                                boxShadow: "md"
                            }} 
                            color="black" 
                            fontSize="lg" 
                            borderRadius="md" 
                            width="100%" 
                            mt={4}
                            className="btn"
                        >
                            Login
                        </Button>
                    </form>
                    <p className='container my-2'>Don&apos;t have an account?</p>
                    <Link to='/register' className="btn btn-secondary">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
