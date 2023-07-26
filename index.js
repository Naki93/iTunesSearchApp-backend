



const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http'); // Import the built-in 'http' module

const app = express();
const port = process.env.PORT || 5000;

// ... (rest of your code)
const allowedOrigins = ['https://itunes-search-store.onrender.com', 'http://localhost:3000']; // Add your deployed domain here
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
let favorites = [];

app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());

// Helper function to handle API requests using 'http' module
async function fetchData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      const { statusCode } = response;
      if (statusCode !== 200) {
        reject(new Error(`Request failed with status code: ${statusCode}`));
        response.resume();
        return;
      }

      let rawData = '';
      response.on('data', (chunk) => {
        rawData += chunk;
      });

      response.on('end', () => {
        try {
          const data = JSON.parse(rawData);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// ... (rest of your code)
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

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;


