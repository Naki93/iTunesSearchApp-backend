const server = require('../index');
const request = require('supertest');



// Helper function to check if the response contains specific keys
function hasKeys(response, keys) {
  keys.forEach((key) => {
    // Use toContainEqual to check if the response array contains an object that matches the expected keys
    expect(response.body.results).toContainEqual(expect.objectContaining({ [key]: expect.anything() }));
  });
}

describe('API Endpoints', () => {
  test('should respond with 200 status and JSON data for /api/search', async () => {
    const response = await request(server).post('/api/search').send({ term: 'harry potter', mediaType: 'movie' });

    // Expect the response status code to be 200 (OK)
    expect(response.status).toBe(200);

    // Expect the 'Content-Type' header of the response to be 'application/json'
    expect(response.headers['content-type']).toMatch(/application\/json/);

    // Check if the response data contains the expected keys
    // Define an array of expected keys that should be present in the response
    const expectedKeys = ['wrapperType', 'kind', 'trackId', 'artistName', 'trackName', 'trackCensoredName', 'trackViewUrl', 'previewUrl', 'artworkUrl30', 'artworkUrl60'];

    // Check for the presence of specific keys in the response
    hasKeys(response, expectedKeys);
  });

  // Make sure to close the server after all tests are done
  afterAll((done) => {
    server.close(done); // Use 'app.close()' instead of 'server.close()'
  });
});

