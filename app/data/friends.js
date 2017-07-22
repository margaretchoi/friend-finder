'use strict';

(function(){
	let friendsArray = [{
		name: 'Ivy',
		photo: 'https://pbs.twimg.com/profile_images/875221533341302786/QCno3P2m_400x400.jpg',
		scores:[
		      5,
		      1,
		      4,
		      4,
		      5,
		      1,
		      2,
		      5,
		      4,
		      1
		    ]
	}];

	let friendsScores = function(submission) {
		// Array of scores from the form submission
		let newScore = submission.scores;

		// Parse scores from strings into integers
		for(let i=0; i < newScore.length; i++) { 
			newScore[i] = parseInt(newScore[i]);
		}

		// Return the new array for scores as integers
		return newScore;
	}

	let calculateBestFriend = function(newScore) {

		// Variable to hold the friend with the best match
		var bestFriendMatch = {
			lowestScore: 1000,
			friendIndex: 0
		};

		// Loop through each friends' score in the friendsArray
		for(let i=0; i < friendsArray.length; i++) { 

			// Compare submitted scores to each score in the friendsArray
			// and calculate a match score
			var arrayScore = friendsArray[i].scores;

			var scoreDifference = [];

			for(let i=0; i < newScore.length; i++) { 
				let diffByID = Math.abs(newScore[i]-arrayScore[i]);
				scoreDifference.push(diffByID);
			}

			var sumOfDifference = scoreDifference.reduce(add, 0);

			function add(a, b) {
			    return a + b;
			}

			console.log('Sum of Differences', sumOfDifference); 
			
			if (sumOfDifference < bestFriendMatch.lowestScore) {
				bestFriendMatch.lowestScore = sumOfDifference;
				bestFriendMatch.friendIndex = i;
			}
		}

		let bestFriendObject = friendsArray[bestFriendMatch.friendIndex];
		console.log('My best friend match', bestFriendObject);

		return bestFriendObject;

	}

	module.exports = {
		'friendsArray': friendsArray,
		'friendsScores': friendsScores,
		'calculateBestFriend': calculateBestFriend
	}
}());

