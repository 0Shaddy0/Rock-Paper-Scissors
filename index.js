function rockFunction(){
var botNum = Math.floor((Math.random()*3)+1);

if(botNum == 1){
	botNum == "Rock"
}
else if (botNum == 2){
	botNum == "Paper"
}
else {
	botNum == "Scissors"
}
	
if("Rock" > 3){
	document.querySelector("h1").innerHTML="Player 2 Wins";
}
else if("Rock" < 2){
	document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if("Rock" == 1){
	document.querySelector("h1").innerHTML="Draw";
}
else if("Paper" > 1){
	document.querySelector("h1").innerHTML="Player 2 Wins";
}
else if("Paper" < 3){
	document.querySelector("h1").innerHTML="Player 1 Wins":
}
else if("Paper" == 2){
	document.querySelector("h1").innerHTML="Draw";
}
else if("Scissors" < 1){
	document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if("Scissors" > 2){
	document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
	document.querySelector("h1").innerHTML="Draw";
}
}