(function (){
	var speakGoodBye = {};

	var speak_Word = "Good Bye ";
	speakGoodBye.speak = function speak(name){
		console.log(speak_Word + name)
	}

	window.speakGoodBye = speakGoodBye;
}());