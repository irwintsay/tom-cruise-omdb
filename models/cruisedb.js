// Requiring `mongodb` package and destructure to `MongoClient`
const { MongoClient } = require('mongodb');
// My Tom Cruise Movie database is called 'cruise_movie_db', change this to whatever you called your database
const dbConnection = 'mongodb://localhost:27017/cruise_movie_db';

const searchMovies = (req, res, next) => {
  // Remember, req.query contains all query parameters passed to us in the GET request
  // Filter req.query and only accept queries for `id`, `y`, `t`, and `d`
  // Check if each one exists, and if it does store it in our new queryObj
  let queryObj = {};
  if (req.query.id) queryObj.imdbID  = req.query.id
  if (req.query.y) queryObj.Year     = req.query.y
  if (req.query.t) queryObj.Title    = req.query.t
  if (req.query.d) queryObj.Director = req.query.d

  MongoClient.connect(dbConnection, (err, db) => {
    // If there's an error, throw error
    if (err) {
      next(err);
    }
    db.collection('cruise_movies')
      // Find all documents in 'cruise_movies' collection matching our query object
      .find(queryObj)
      .sort({ Year: -1, Title: 1 })
      .toArray((err, data) => {
        // Once data is formatted into an array, store it in our response object
        res.data = data;
        next();
      });
  });
}

// Export searchMovies object for use in our routers
module.exports = { searchMovies };