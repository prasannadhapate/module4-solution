(function (){
	var Names = ["Yaakov", "John", "jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < Names.length; i++) {
	var first_Letter = Names[i].charAt(0);
	if(first_Letter ===  'J' || first_Letter === 'j'){
		speakGoodBye.speak(Names[i]);
	}
	else{
		speakHello.speak(Names[i]);
	}
}
})();