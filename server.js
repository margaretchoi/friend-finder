// Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let fs = require("fs");
let http = require("http");

// Sets up the Express App
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static('app'));
app.use(express.static('app/public'));
app.use(express.static('app/images'));
app.use(express.static('app/data'));

// Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Separate route files
let htmlRoutes = require('./app/routing/htmlRoutes');
app.use('/', htmlRoutes);

// let apiRoutes = require('./app/routing/apiRoutes');
// app.use('/api', apiRoutes);

// let furryFriends = [
// 	name: 'Ivy',
// 	photo: 'https://pbs.twimg.com/profile_images/875221533341302786/QCno3P2m_400x400.jpg',
// 	q1: 5,
//     q2: 5,
//     q3: 5,
//     q4: 5,
//     q5: 5,
//     q6: 5,
//     q7: 5,
// 	q8: 5,
// 	q9: 5,
// 	q10: 5
// ];

// Create New Friends - takes in JSON input
// app.post("/api/new", function(req, res) {
//   let newfriend = req.body;
//   newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newfriend);

//   furryFriends.push(newfriend);

//   res.json(newfriend);
// });