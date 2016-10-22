const router            = require('express').Router();
// Destructure `searchMovies` out of the cruisedb model
const { searchMovies }  = require('../models/cruisedb');

// Handle GET request for '/search', but remember in server.js we routed '/api' GET
// requests here, so really we're handling GET requests for '/api/search'
router.get('/search', searchMovies, (req, res) => {
  // When we get a request for '/api/search', we pass `req`, `res`, `next` through our
  // searchMovies middleware (cruisedb model), which may or may not find and filter 
  // data before sending our response (json)
  // Consider how this would look if we wanted to render a view instead
  res.json(res.data);
});

// Export router object so that it can be used in server.js
module.exports = router;
