$(document).ready(buildSurvey);

function buildSurvey() {
	console.log('Building survey ...')

	let questionsArray = [
		'I need a large area to play in',
		'I like to play outside more than indoors',
		'I like the noises squeaky toys make',
		'Fetch is one of my favorite games',
		'I am good at sharing my toys and attention',
		'I have a high energy level',
		'I tend to play rough',
		'I prefer to play with my hooman friends',
		'I make friends easily',
		'I am easy to get along with'
	];

	for (let i=0; i < questionsArray.length; i++) {
		let listNum = i + 1;
		$('#survey-content').append('<br><label>' + listNum + '. ' + questionsArray[i] + '</label><br>');
		$('#survey-content').append('<select id="question' + listNum + '""><option value="1">1 (Strongly Disagree)</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5 (Strongly Agree)</option></select><br>');
	}

	$('#survey-content').append($('<input>').attr('type', 'submit').attr('value', 'Submit').attr('class', 'submit').click(submitSurvey));

}

function submitSurvey () {
	
	let surveyResponse = {
		name: $("#dogname").val().trim(),
		photo: $("#dogphoto").val().trim(),
		q1: $("question1").val(),
        q2: $("question2").val(),
        q3: $("question3").val(),
        q4: $("question4").val(),
        q5: $("question5").val(),
        q6: $("question6").val(),
        q7: $("question7").val(),
    	q8: $("question8").val(),
		q9: $("question9").val(),
		q10: $("question10").val()
	};

	console.log(surveyResponse);

	$.post("/api/new", surveyResponse)
	.done(function(data) {
		console.log(data);
		alert("Adding new friend...");
	});
};

