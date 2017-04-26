var userInput = process.argv[2];

function BasicCard(front, back){
	this.statement = statement;
	this.answer = answer;
}

function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
}
  

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

BasicCard.prototype.printFont = function(){
console.log(firstPresident.front);
}
 

BasicCard.prototype.printBack = function(){
	console.log(firstPresident.back); 
}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

BasicCard.prototype.printCloze = function(){
	console.log(firstPresidentCloze.cloze); 
}


BasicCard.prototype.printPartial = function(){
	console.log(firstPresidentCloze.partial);
}
 
BasicCard.prototype.printFullText = function(){
	console.log(firstPresidentCloze.fullText): 
}


// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops"); 