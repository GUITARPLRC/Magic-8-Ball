var shake = document.getElementById("shake");
var clear = document.getElementById("clear");
var question = document.getElementById("question");
var display = document.getElementById("display");
var pic = document.getElementById("picture");
var randomNumber = 0;
var prevNumber = 0;

var answers = ["Signs Point To Yes", "My Sources Say No", "Ask Again Later", "Not A Good Idea",
 "As I See It, Yes", "Outlook Not So Good", "Very Doubtful", "It Is Certain", "Concentrate And Ask Again", "Better Not Tell You Now"];

clear.addEventListener("click", function(){
	question.value = "";
	pic.setAttribute("src", "magic.png");
    pic.style.width = "200px";
	display.textContent = "";
});

shake.addEventListener("click", function(){

    pic.style.width = "300px";
    
	randomNumber = Math.floor(Math.random() * 10);
	
	if (randomNumber === prevNumber) {
		randomNumber = Math.floor(Math.random() * 10) + 1;
	}
	
	prevNumber = randomNumber;
	
	pic.setAttribute("src", "magic1.png");

	display.textContent = answers[randomNumber];
});

