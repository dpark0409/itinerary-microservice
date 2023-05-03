Itinerary API Microservice
Daehun Park
May-02-2023
==========================

This microservice allows you to store and retrieve itinerary data. 

It provides two main API endpoints to add/retrieve itineraries data:

1. POST /api/itineraries - Add a new itinerary
2. GET /api/itineraries - Retrieve all stored itineraries

1. REQUEST data from the microservice
-------------------------------------

To add a new itinerary, send a POST request to the '/api/itineraries' endpoint 
with a JSON object containing the itinerary data. 
The JSON object should include the following properties:

- title: The title of the itinerary (string)
- location: The location of the itinerary (string)
- dateFrom: The start date of the itinerary (string, format: YYYY-MM-DD)
- dateTo: The end date of the itinerary (string, format: YYYY-MM-DD)

Example request using Axios:

import axios from 'axios';

const itinerary = {
  title: 'Trip 1',
  location: 'San Diego, CA',
  dateFrom: '2023-05-01',
  dateTo: '2023-05-07',
};

await axios.post('http://localhost:3001/api/itineraries', itinerary);

2. Receive data from the microserivce
--------------------------------------

To fetch stored itineraries, send a GET request to '/api/itineraries' endpoint.

Example request using Axios:

import axios from 'axios';
const response = await axios.get('http://localhost:3001/api/itineraries');
const itineraries = response.data;

