const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

let favorites = [];

// Helper function to handle API requests
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Endpoint to handle iTunes Search API requests
app.post('/api/search', async (req, res) => {
  const { term, mediaType } = req.body;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    term
  )}&media=${encodeURIComponent(mediaType)}`;
  try {
    const data = await fetchData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from iTunes Search API.' });
  }
});

// Endpoint to handle favorite content
app.post('/api/favorites', (req, res) => {
  const { item } = req.body;
  favorites.push(item);
  res.sendStatus(200);
});
// Endpoint to delete favorite content
app.delete('/api/favorites/:id', (req, res) => {
  const id = req.params.id;
  favorites = favorites.filter((item) => item.trackId !== id);
  res.sendStatus(200);
});

//const server = http.createServer(app)

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;

