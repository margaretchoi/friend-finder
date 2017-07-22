 // Dependencies
var express = require('express');
var router = express.Router();
var path = require('path');

// let appData = require("../data/app");
var friendsData = require("../data/friends.js");

router.get("/friends", function(req, res) {
	res.json(friendsData.friendsArray);
});

router.post("/friends", function(req, res) {
	let person = friendsData.friendsScores(req.body);
	let bestFriendObject = friendsData.calculateBestFriend(person);
	friendsData.friendsArray.push(req.body);
	res.json(bestFriendObject);
	console.log('Object', bestFriendObject);
});

module.exports = router;