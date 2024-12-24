// Import dependenci
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://kunalsonne:kunalsonne1847724@cluster0.95mdg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection failed:', err);
});

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);



app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'login.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'home.html'));
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.redirect('/home'); 
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        if (password === user.password) {
            res.redirect('/home'); 
        } else {
            res.status(401).send('Invalid password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Error logging in');
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
