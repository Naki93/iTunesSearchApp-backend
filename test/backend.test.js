// const server = require('../index');
// const request = require('supertest');



// // Helper function to check if the response contains specific keys
// function hasKeys(response, keys) {
//   keys.forEach((key) => {
//     // Use toContainEqual to check if the response array contains an object that matches the expected keys
//     expect(response.body.results).toContainEqual(expect.objectContaining({ [key]: expect.anything() }));
//   });
// }

// describe('API Endpoints', () => {
//   test('should respond with 200 status and JSON data for /api/search', async () => {
//     const response = await request(server).post('/api/search').send({ term: 'harry potter', mediaType: 'movie' });

//     // Expect the response status code to be 200 (OK)
//     expect(response.status).toBe(200);

//     // Expect the 'Content-Type' header of the response to be 'application/json'
//     expect(response.headers['content-type']).toMatch(/application\/json/);

//     // Check if the response data contains the expected keys
//     // Define an array of expected keys that should be present in the response
//     const expectedKeys = ['wrapperType', 'kind', 'trackId', 'artistName', 'trackName', 'trackCensoredName', 'trackViewUrl', 'previewUrl', 'artworkUrl30', 'artworkUrl60'];

//     // Check for the presence of specific keys in the response
//     hasKeys(response, expectedKeys);
//   });

//   // Make sure to close the server after all tests are done
//   afterAll((done) => {
//     server.close(done); // Use 'app.close()' instead of 'server.close()'
//   });
// });

// const server = require('../index');
// const request = require('supertest');
// const fetch = require('node-fetch');

// // Mock the fetch function
// jest.mock('node-fetch');

// // Helper function to check if the response contains specific keys
// function hasKeys(response, keys) {
//   keys.forEach((key) => {
//     // Use toContainEqual to check if the response array contains an object that matches the expected keys
//     expect(response.body.results).toContainEqual(expect.objectContaining({ [key]: expect.anything() }));
//   });
// }

// describe('API Endpoints', () => {
//   test('should respond with 200 status and JSON data for /api/search', async () => {
//     // Mock the fetch response data
//     const mockResponse = {
//       ok: true,
//       json: jest.fn().mockResolvedValue({ /* Your mock response data goes here */ }),
//     };
//     fetch.mockResolvedValue(mockResponse);

//     const response = await request(server).post('/api/search').send({ term: 'harry potter', mediaType: 'movie' });

//     // Expect the response status code to be 200 (OK)
//     expect(response.status).toBe(200);

//     // Expect the 'Content-Type' header of the response to be 'application/json'
//     expect(response.headers['content-type']).toMatch(/application\/json/);

//     // Check if the response data contains the expected keys
//     // Define an array of expected keys that should be present in the response
//     const expectedKeys = ['wrapperType', 'kind', 'trackId', 'artistName', 'trackName', 'trackCensoredName', 'trackViewUrl', 'previewUrl', 'artworkUrl30', 'artworkUrl60'];

//     // Check for the presence of specific keys in the response
//     hasKeys(response, expectedKeys);
//   });

//   // Make sure to close the server after all tests are done
//   afterAll((done) => {
//     server.close(done); // Use 'app.close()' instead of 'server.close()'
//   });
// });

// const server = require('../index');
// const request = require('supertest');
// const fetch = require('node-fetch');

// // Mock the fetch function
// jest.mock('node-fetch');

// // Helper function to check if the response contains specific keys
// function hasKeys(response, keys) {
//   keys.forEach((key) => {
//     // Use toContainEqual to check if the response array contains an object that matches the expected keys
//     expect(response.body.results).toContainEqual(expect.objectContaining({ [key]: expect.anything() }));
//   });
// }

// describe('API Endpoints', () => {
//   test('should respond with 200 status and JSON data for /api/search', async () => {
//     // Mock the fetch response data
//     const mockResponse = {
//       ok: true,
//       json: jest.fn().mockResolvedValue({
//         resultCount: 2,
//         results: [
//           {
//             wrapperType: 'track',
//             kind: 'song',
//             trackId: 123,
//             artistName: 'Artist 1',
//             trackName: 'Song 1',
//             trackCensoredName: 'Song 1 (censored)',
//             trackViewUrl: 'https://example.com/song1',
//             previewUrl: 'https://example.com/song1/preview',
//             artworkUrl30: 'https://example.com/song1/artwork30',
//             artworkUrl60: 'https://example.com/song1/artwork60',
//           },
//           {
//             wrapperType: 'track',
//             kind: 'song',
//             trackId: 456,
//             artistName: 'Artist 2',
//             trackName: 'Song 2',
//             trackCensoredName: 'Song 2 (censored)',
//             trackViewUrl: 'https://example.com/song2',
//             previewUrl: 'https://example.com/song2/preview',
//             artworkUrl30: 'https://example.com/song2/artwork30',
//             artworkUrl60: 'https://example.com/song2/artwork60',
//           },
//         ],
//       }),
//     };
//     fetch.mockResolvedValue(mockResponse);

//     const response = await request(server).post('/api/search').send({ term: 'harry potter', mediaType: 'movie' });

//     // Expect the response status code to be 200 (OK)
//     expect(response.status).toBe(200);

//     // Expect the 'Content-Type' header of the response to be 'application/json'
//     expect(response.headers['content-type']).toMatch(/application\/json/);

//     // Check if the response data contains the expected keys
//     // Define an array of expected keys that should be present in the response
//     const expectedKeys = ['wrapperType', 'kind', 'trackId', 'artistName', 'trackName', 'trackCensoredName', 'trackViewUrl', 'previewUrl', 'artworkUrl30', 'artworkUrl60'];

//     // Check for the presence of specific keys in the response
//     hasKeys(response, expectedKeys);
//   });

//   // Make sure to close the server after all tests are done
//   afterAll((done) => {
//     server.close(done); // Use 'app.close()' instead of 'server.close()'
//   });
// });

// const server = require('../index');
// const request = require('supertest');
// const fetch = require('node-fetch');

// // Mock the fetch function
// jest.spyOn(global, 'fetch').mockResolvedValue({
//   ok: true,
//   json: jest.fn().mockResolvedValue({
//     resultCount: 2,
//     results: [
//       {
//         wrapperType: 'track',
//         kind: 'song',
//         trackId: 123,
//         artistName: 'Artist 1',
//         trackName: 'Song 1',
//         trackCensoredName: 'Song 1 (censored)',
//         trackViewUrl: 'https://example.com/song1',
//         previewUrl: 'https://example.com/song1/preview',
//         artworkUrl30: 'https://example.com/song1/artwork30',
//         artworkUrl60: 'https://example.com/song1/artwork60',
//       },
//       {
//         wrapperType: 'track',
//         kind: 'song',
//         trackId: 456,
//         artistName: 'Artist 2',
//         trackName: 'Song 2',
//         trackCensoredName: 'Song 2 (censored)',
//         trackViewUrl: 'https://example.com/song2',
//         previewUrl: 'https://example.com/song2/preview',
//         artworkUrl30: 'https://example.com/song2/artwork30',
//         artworkUrl60: 'https://example.com/song2/artwork60',
//       },
//     ],
//   }),
// });

// // Helper function to check if the response contains specific keys
// function hasKeys(response, keys) {
//   keys.forEach((key) => {
//     // Use toContainEqual to check if the response array contains an object that matches the expected keys
//     expect(response.body.results).toContainEqual(expect.objectContaining({ [key]: expect.anything() }));
//   });
// }

// describe('API Endpoints', () => {
//   test('should respond with 200 status and JSON data for /api/search', async () => {
//     const response = await request(server).post('/api/search').send({ term: 'harry potter', mediaType: 'movie' });

//     // Expect the response status code to be 200 (OK)
//     expect(response.status).toBe(200);

//     // Expect the 'Content-Type' header of the response to be 'application/json'
//     expect(response.headers['content-type']).toMatch(/application\/json/);

//     // Check if the response data contains the expected keys
//     // Define an array of expected keys that should be present in the response
//     const expectedKeys = ['wrapperType', 'kind', 'trackId', 'artistName', 'trackName', 'trackCensoredName', 'trackViewUrl', 'previewUrl', 'artworkUrl30', 'artworkUrl60'];

//     // Check for the presence of specific keys in the response
//     hasKeys(response, expectedKeys);
//   });

//   // Make sure to close the server after all tests are done
//   afterAll((done) => {
//     server.close(done); // Use 'app.close()' instead of 'server.close()'
//   });
// });

const server = require('../index');
const request = require('supertest');
const fetchMock = require('jest-fetch-mock');

// Use fetchMock instead of jest.spyOn(global, 'fetch').mockResolvedValue
fetchMock.enableMocks();

// Your existing mock response data for /api/search goes here
fetchMock.mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    resultCount: 2,
    results: [
      {
        wrapperType: 'track',
        kind: 'song',
        trackId: 123,
        artistName: 'Artist 1',
        trackName: 'Song 1',
        trackCensoredName: 'Song 1 (censored)',
        trackViewUrl: 'https://example.com/song1',
        previewUrl: 'https://example.com/song1/preview',
        artworkUrl30: 'https://example.com/song1/artwork30',
        artworkUrl60: 'https://example.com/song1/artwork60',
      },
      {
        wrapperType: 'track',
        kind: 'song',
        trackId: 456,
        artistName: 'Artist 2',
        trackName: 'Song 2',
        trackCensoredName: 'Song 2 (censored)',
        trackViewUrl: 'https://example.com/song2',
        previewUrl: 'https://example.com/song2/preview',
        artworkUrl30: 'https://example.com/song2/artwork30',
        artworkUrl60: 'https://example.com/song2/artwork60',
      },
    ],
  }),
});

// Helper function to check if the response contains specific keys
function hasKeys(response, keys) {
  keys.forEach((key) => {
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
    const expectedKeys = ['wrapperType', 'kind', 'trackId', 'artistName', 'trackName', 'trackCensoredName', 'trackViewUrl', 'previewUrl', 'artworkUrl30', 'artworkUrl60'];
    hasKeys(response, expectedKeys);
  });

  test('should add item to favorites on /api/favorites POST', async () => {
    const newItem = {
      trackId: 789,
      artistName: 'Artist 3',
      trackName: 'Song 3',
      trackCensoredName: 'Song 3 (censored)',
      trackViewUrl: 'https://example.com/song3',
      previewUrl: 'https://example.com/song3/preview',
      artworkUrl30: 'https://example.com/song3/artwork30',
      artworkUrl60: 'https://example.com/song3/artwork60',
    };

    const response = await request(server).post('/api/favorites').send({ item: newItem });

    // Expect the response status code to be 200 (OK)
    expect(response.status).toBe(200);

    // Expect the favorites array to contain the newly added item
    const favorites = response.body;
    expect(favorites).toContainEqual(newItem);
  });

  test('should delete item from favorites on /api/favorites/:id DELETE', async () => {
    // Create a sample favorites array with some items
    const initialFavorites = [
      {
        trackId: 123,
        artistName: 'Artist 1',
        trackName: 'Song 1',
        trackCensoredName: 'Song 1 (censored)',
        trackViewUrl: 'https://example.com/song1',
        previewUrl: 'https://example.com/song1/preview',
        artworkUrl30: 'https://example.com/song1/artwork30',
        artworkUrl60: 'https://example.com/song1/artwork60',
      },
      {
        trackId: 456,
        artistName: 'Artist 2',
        trackName: 'Song 2',
        trackCensoredName: 'Song 2 (censored)',
        trackViewUrl: 'https://example.com/song2',
        previewUrl: 'https://example.com/song2/preview',
        artworkUrl30: 'https://example.com/song2/artwork30',
        artworkUrl60: 'https://example.com/song2/artwork60',
      },
      // Add more items as needed
    ];

    // Mock the initial favorites array on the server
    server.favorites = initialFavorites;

    // Select an item to delete (in this case, we're selecting the first item in the array)
    const itemToDelete = initialFavorites[0];

    const response = await request(server).delete(`/api/favorites/${itemToDelete.trackId}`);

    // Expect the response status code to be 200 (OK)
    expect(response.status).toBe(200);

    // Expect the favorites array not to contain the deleted item
    const updatedFavorites = response.body;
    expect(updatedFavorites).not.toContainEqual(itemToDelete);
  });

  // Make sure to close the server after all tests are done
  afterAll((done) => {
    server.close(done);
  });
});





