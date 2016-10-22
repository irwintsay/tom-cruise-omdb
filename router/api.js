const router            = require('express').Router();
// Destructure `searchMovies` out of the cruisedb model
const { searchMovies }  = require('../models/cruisedb');

// Handle GET request for '/search', but remember in server.js we routed '/api' GET
// requests here, so really we're handling GET requests for '/api/search'
router.get('/search', searchMovies, (req, res) => {
  res.json(res.data);
});

// Export router object so that it can be used in server.js
module.exports = router;
