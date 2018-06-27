require("dotenv").config();

// link keys.js file
var keys = require("./keys.js");

// link to api keys in keys.js file

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var a = process.argv[2]

if (a === 'my-tweets') {
    // show tweets
}
if (a === 'spotify-this-song') {
    // look at process.argv[3] for the song info
}
if (a === 'movie-this') {
    // look at process.argv[3] for the movie info
}
if (a === 'do-what-it-says') {
    // look at process.argv[3] for doing what it says
}