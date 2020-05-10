(function (){
	var speakHello = {};

	var speak_Word = "Hello "
	speakHello.speak = function speak(name){
		console.log(speak_Word + name);
	}

	window.speakHello = speakHello;
})();