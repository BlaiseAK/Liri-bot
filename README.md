# Liri-bot

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition interface, LIRI is a Language Interpretation and Recognition Interface. Liri is a command line node app that takes in the parameters of a 4 commands and give you back data.

To use LIRI please select one of the 4 commands: 'my-tweets', 'spotify-this-song', 'movie-this', and 'do-what-it-says'

The 'my-tweets' command will provide you with the 20 most recent tweets from the cool cat of twitter @blaiseiscool1.

The 'spotify-this-song' command followed by the name of a song of the users choosing will callback the artist(s) name, the song name, a link to open spotify and play the song, and the name of the album. If no song is chosen then 'spotify-this-song' will automatically search for the song "The Sign."

The 'movie-this' command followed by the name of a movie of the users choosing and will call back the movies title, year of release, imdb rating, rotten tomatoes rating, country of production, languages, plot, and actors. If no movie is chosen then 'movie-this; will automatically search for the movie "Mr. Nobody."

The 'do-what-it-says' command will go into the random.txt file and read whatever command is inside and then run what ever song or movie is placed inside of it. Currently the random.txt file has spotify-this-song,"I want it that way" already written. If you descide to change the file you must leave no space between the comma and beginning double quote.