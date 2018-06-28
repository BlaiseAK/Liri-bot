require("dotenv").config();

// link keys.js file
var keys = require("./keys.js");

// link to api keys in keys.js file
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



// Stores all of the arguments in an array
var nodeArgs = process.argv;

// Creates an empty variable for holding the artist/movie/item todo
var doTheThing = "";

var a = process.argv[2];

for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {

        doTheThing = doTheThing + "+" + nodeArgs[i];

    }

    else {

        doTheThing += nodeArgs[i];

    }
}


if (a === 'my-tweets') {
    var params = { blaiseiscool1: "node.js", count: 20 }
    // show tweets
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            tweets.forEach(function (tweet) {

                console.log("\n===============================\n");
                console.log("Twitter handle: " + tweet.user.screen_name)
                console.log("Tweet: " + tweet.text);
                console.log("Posted on: " + tweet.created_at);
                console.log("\n===============================\n");
            })


        }
    });
}
if (a === 'spotify-this-song') {
    // if doTheThing variable is blank then....
    if (doTheThing === '') {
        doTheThing = 'The Sign';
    }
    // else look at doTheThing for the song info
    spotify.search({ type: 'track', query: doTheThing })
        .then(function (response) {

            console.log("\n===============================\n");
            // Artist
            console.log(response.tracks.items[0].artists[0].name);
            // Song name
            console.log(response.tracks.items[0].name);
            // preview link from Spotify
            console.log(response.tracks.items[0].external_urls.spotify);
            // The album
            console.log(response.tracks.items[0].album.name);
            console.log("\n===============================\n");

        })
        .catch(function (err) {
            console.log(err);
        });
}
if (a === 'movie-this') {
    if (doTheThing === '') {
        doTheThing = 'Mr. Nobody';
    }

    // look at process.argv[3] for the movie info
    var queryUrl = "http://www.omdbapi.com/?t=" + doTheThing + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);
    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // give me my stuff like this
            console.log("\n===============================\n");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year of release: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1][1]);
            console.log("Country produced in: " + JSON.parse(body).Country);
            console.log("Languages: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("\n===============================\n");
        }
    });

}
if (a === 'do-what-it-says') {
    // look at process.argv[3] for doing what it says
}