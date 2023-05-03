// importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// using express app
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(cors());

// storing itineraries data
const itineraries = [];

// set up POST route for adding itinerarires
app.post('/api/itineraries', (req, res) => {
  const itinerary = req.body;
  itineraries.push(itinerary);
  res.status(201).send();
});

// set up Get route for retrieving itinerarires
app.get('/api/itineraries', (req, res) => {
  res.json(itineraries);
});

// listening for incoming reuqests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
