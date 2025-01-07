import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    return (
        <div className="container">
            <h2 className="my-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subscription Tier</label>
                    <select
                        className="form-select"
                        name="subscriptionTier"
                        value={formData.subscriptionTier}
                        onChange={handleChange}
                    >
                        <option value="Free">Free</option>
                        <option value="Premium">Premium</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                        className="form-select"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="Parent">Parent</option>
                        <option value="Children">Children</option>
                        <option value="Guardian">Guardian</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Profession</label>
                    <input
                        type="text"
                        className="form-control"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tell Us about your self(optional)</label>
                    <input
                        type="text"
                        className="form-control"
                        name="profession"
                        value={formData.bio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Upload Profile Photo</label>
                    <input
                        type="file"
                        className="form-control"
                        name="profilePhoto"
                        onChange={handleChange}
                        accept="image/*"
                        required
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
