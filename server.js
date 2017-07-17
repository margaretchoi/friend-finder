// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var http = require("http");

// Sets up the Express App
var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Start the server
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

// Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.use(express.static('app/public'));
app.use(express.static('app/images'));
app.use(express.static('app/data'));