const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
const mongoURI = "mongodb+srv://kunalsonne:kunalsonne1847724@cluster0.95mdg.mongodb.net/Auth";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model
const MetricsSchema = new mongoose.Schema({
  id: Number,
  playtime: Number,
  metric1: Number,
  metric2: Number,
  module_completed: { type: String, enum: ['Yes', 'No'], default: 'No' },
  result: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now }
});

const Metrics = mongoose.model("Metrics", MetricsSchema);

// Endpoint to receive game metrics
app.post("/save_metrics", async (req, res) => {
  try {
    const metrics = new Metrics(req.body); // Create a new Metrics document
    await metrics.save(); // Save to MongoDB
    res.status(200).send("Metrics saved successfully!");
  } catch (error) {
    res.status(500).send("Error saving metrics: " + error.message);
  }
});
app.get("/get_metrics", async (req, res) => {
  try {
    const metrics = await Metrics.find().sort({ timestamp: -1 }); // Fetch metrics, sorted by latest first
    res.status(200).json(metrics); // Send metrics as a JSON response
  } catch (error) {
    res.status(500).send("Error fetching metrics: " + error.message);
  }
});
const dataToSend = {
    result: "Hello, Player! Welcome to the XRise platform."
};

app.get('/get_data', (req, res) => {
    try {
        res.status(200).json(dataToSend); // Send the data as JSON
    } catch (error) {
        console.error("Error handling /get_data request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
