import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import '../styles/Register.css';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        subscriptionTier: 'Free',
        role: 'Parent',
        mobileNumber: '',
        profession: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleFileChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            profilePhoto: e.target.files[0],
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://xrise-dup.onrender.com/register', formData)
            .then((response) => {
                console.log('Registration successful', response);
                navigate('/login');
            })
            .catch((error) => {
                console.error('Registration failed', error);
            });
    };

    return   (
        
        <div className="register-container">
           
            <div className="register-card">
            <br></br>
                <h2 className="register-title">Join Our Community</h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter a strong password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Subscription Tier</label>
                        <select
                            name="subscriptionTier"
                            value={formData.subscriptionTier}
                            onChange={handleChange}
                            required
                        >
                            <option value="Free">Free</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="Parent">Parent</option>
                            <option value="Children">Children</option>
                            <option value="Guardian">Guardian</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Profession</label>
                        <input
                            type="text"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            placeholder="Enter your profession"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Bio (Optional)</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Tell us something about yourself"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Profile Photo</label>
                        <input
                            type="file"
                            name="profilePhoto"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn-submit">
                            Register
                        </button>
                        <Link to="/" className="btn-back">
                            Back to Home
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
