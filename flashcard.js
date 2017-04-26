var userInput = process.argv[2];

function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

function ClozeCard(text, cloze, partial){
	this.text = text;
	this.cloze = cloze;
	this.partial = partial;
}
  

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

if(userInput === 'front'){
	console.log(firstPresident.front);

}

if(userInput === 'back'){
		console.log(firstPresident.back); 
}


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington",'_______was the first president of the United States.');

if(userInput === 'cloze'){
		console.log(firstPresidentCloze.cloze); 

}


if(userInput === 'partial'){
	console.log(firstPresidentCloze.partial);
}

 
if(userInput === 'fullText'){
	console.log(firstPresidentCloze.fullText);
}

