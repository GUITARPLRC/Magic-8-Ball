window.onload = function() {
	
	var shake = document.getElementById("shake");
	var clear = document.getElementById("clear");
	var question = document.getElementById("question");
	var display = document.getElementById("display");
	var pic = document.getElementById("picture");
	var randomNumber = 0;
	var prevNumber = 0;

	var answers = ["Signs Point To Yes", "My Sources Say No", "Ask Again Later", "Not A Good Idea",
	 "As I See It, Yes", "Outlook Not So Good", "Very Doubtful", "It Is Certain", "Concentrate And Ask Again",
	 "Better Not Tell You Now"];

	clear.addEventListener("click", function(){
		
		toggleButtons();
		
		if (question.value !== ""){
			
		toggleImage();
		
		}
		
		question.value = "";		
		display.textContent = "";
		
	});

	shake.addEventListener("click", function(){		
	
		toggleButtons();
		
		if (question.value.length === 0) {
			
			alert("Please enter a question");
			clear.click();
			return;
			
		}
		
		randomNumber = Math.floor(Math.random() * 10);
		
		if (randomNumber === prevNumber) {
			
			randomNumber = Math.floor(Math.random() * 10);
			
		}
	
		prevNumber = randomNumber;
		toggleImage();	
		display.textContent = answers[randomNumber];		
		
	});
	
	function toggleImage() {
		
		pic.classList.toggle("big");
		pic.classList.toggle("small");
		
	}
	
	function toggleButtons() {
		
		shake.classList.toggle("hide");
		shake.classList.toggle("show");
		clear.classList.toggle("hide");
		clear.classList.toggle("show");
		
	}

};