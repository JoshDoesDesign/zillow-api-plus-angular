
// server.js (Express 4.0)

var express        = require('express');
var bodyParser     = require('body-parser');
var gulp 		   = require('gulp');
var sass 		   = require('gulp-sass');
var babel		   = require('gulp-babel');
var app            = express();

app.use(express.static(__dirname + '/')); // set the static files location /dist/img will be /img for users                     // log every request to the console
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    // parse application/json
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: './dist'});
});

app.listen(port); 
console.log('Magic happens on port 3000'); // shoutout to the user