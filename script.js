window.onload = function() {
	var shake = document.getElementById('shake');
	var clear = document.getElementById('clear');
	var question = document.getElementById('question');
	var display = document.getElementById('display');
	var pic = document.getElementById('picture');
	var warn = document.getElementById('warn');
	var randomNumber;
	var answers = [
		'Signs Point To Yes',
		'My Sources Say No',
		'Ask Again Later',
		'Not A Good Idea',
		'As I See It, Yes',
		'Outlook Not So Good',
		'Very Doubtful',
		'It Is Certain',
		'Concentrate And Ask Again',
		'Better Not Tell You Now'
	];
	let inputCheck = false;

	question.focus();

	clear.addEventListener('click', function() {
		if (inputCheck) {
			toggleButtons();
			toggleImage();
		}

		display.textContent = '';
		display.style.visibility = 'hidden';

		setTimeout(function() {
			question.value = '';
			question.style.visibility = 'visible';
			question.focus();
		}, 500);
	});

	function checkQuestion(input) {
		let firstThree = input.slice(0, 3);
		switch (firstThree) {
			case 'who':
				inputCheck = true;
				break;
			case 'wha':
				inputCheck = true;
				break;
			case 'whe':
				inputCheck = true;
				break;
			case 'how':
				inputCheck = true;
				break;
			default:
				inputCheck = false;
		}
	}

	shake.addEventListener('click', function() {
		checkQuestion(question.value);

		if (inputCheck) {
			toggleButtons();
			question.style.visibility = 'hidden';
			warn.style.visibility = 'hidden';
			randomNumber = Math.floor(Math.random() * answers.length);

			toggleImage();
			setTimeout(function() {
				display.style.visibility = 'visible';
				display.classList.toggle('fade');
				display.textContent = answers[randomNumber];
			}, 2300);
		} else {
			warn.style.visibility = 'visible';
			clear.click();
			return;
		}
	});

	function toggleImage() {
		pic.classList.toggle('shake');
		if (pic.getAttribute('src') == 'magic.png') {
			setTimeout(function() {
				pic.setAttribute('src', 'magic1.png');
				pic.style.width = '400px';
			}, 500);
		} else {
			setTimeout(function() {
				pic.setAttribute('src', 'magic.png');
				pic.style.width = '200px';
			}, 500);
		}
	}

	function toggleButtons() {
		shake.classList.toggle('hide');
		shake.classList.toggle('show');
		clear.classList.toggle('hide');
		clear.classList.toggle('show');
	}
};
