window.onload = function() {
	
	var shake = document.getElementById("shake");
	var clear = document.getElementById("clear");
	var question = document.getElementById("question");
	var display = document.getElementById("display");
	var pic = document.getElementById("picture");
	var warn = document.getElementById("warn");
	var randomNumber = 0;
	var prevNumber = 0;
	var answers = ["Signs Point To Yes", "My Sources Say No", "Ask Again Later", "Not A Good Idea",
	 "As I See It, Yes", "Outlook Not So Good", "Very Doubtful", "It Is Certain", "Concentrate And Ask Again",
	 "Better Not Tell You Now"];
	var length = answers.length;

	clear.addEventListener("click", function(){
		
		toggleButtons();
		
		if (question.value !== ""){
			
		toggleImage();
		
		}
		
		question.value = "";		
		display.textContent = "";
		display.style.visibility = "hidden";
		
	});

	shake.addEventListener("click", function(){		
	
		toggleButtons();
		
		if (question.value === "") {
			
			warn.style.visibility = "visible";
			clear.click();
			return;
			
		} else {
		
			warn.style.visibility = "hidden";
			randomNumber = Math.floor(Math.random() * length);
			
			if (randomNumber === prevNumber) {
				
				randomNumber = Math.floor(Math.random() * length);
				
			}
		
			prevNumber = randomNumber;
			toggleImage();	
			setTimeout(function(){
				
				display.style.visibility = "visible";
				display.classList.toggle("fade");
				display.textContent = answers[randomNumber];
			
			}, 2300);
		}
		
	});
	
	function toggleImage() {
			
		pic.classList.toggle("shake");
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