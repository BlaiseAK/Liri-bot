require("dotenv").config();

// link keys.js file
var keys = require("./keys.js");

// link to api keys in keys.js file

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
