const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://kunalsonne:kunalsonne1847724@cluster0.95mdg.mongodb.net/Auth');

// Register endpoint with automatic login
app.post('/register', (req, res) => {
    const { name, email, password, subscriptionTier, role, mobileNumber, profession } = req.body;

    FormDataModel.findOne({ email })
        .then(user => {
            if (user) {
                res.json({ message: "Already registered" });
            } else {
                FormDataModel.create({ 
                    name, 
                    email, 
                    password, 
                    subscriptionTier: subscriptionTier || 'Free', // Default to 'Free'
                    role: role || 'Parent', // Default to 'Parent'
                    mobileNumber, 
                    profession 
                })
                    .then(newUser => res.json({
                        message: "Registered successfully",
                        user: {
                            id: newUser._id,
                            name: newUser.name,
                            email: newUser.email,
                            subscriptionTier: newUser.subscriptionTier,
                            role: newUser.role,
                            mobileNumber: newUser.mobileNumber,
                            profession: newUser.profession,
                        }
                    }))
                    .catch(err => res.json(err));
            }
        });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ message: "Please provide both email and password" });
    }

    FormDataModel.findOne({ email })
        .then(user => {
            if (user) {
                // Check if the password matches
                if (user.password === password) {
                    res.json({
                        message: "Success",
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email
                        }
                    });
                } else {
                    res.json({ message: "Incorrect password" });
                }
            } else {
                res.json({ message: "No records found!" });
            }
        })
        .catch(err => res.json(err));
});
// Profile endpoint to fetch user-specific data
app.post('/profile', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const user = await FormDataModel.findOne({ email });

        if (user) {
            res.json({
                name: user.name,
                email: user.email,
                bio: user.bio || "No bio available",
                profilePhoto: user.profilePhoto || "",
                subscriptionTier: user.subscriptionTier || 'Free', // Add subscriptionTier here
                role: user.role || 'Parent', // Add role here
                mobileNumber: user.mobileNumber || '',
                profession: user.profession || '',
                subscription: user.subscription || {},
                statistics: user.statistics || {},
                achievements: user.achievements || [],
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});



app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});
