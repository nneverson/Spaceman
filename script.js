// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

let colors = ['pink', 'green', 'blue', 'brown', 'cerulean'];
let Hints = [
	'was once assigned to the male gender',
	'the color of moss',
	'the sky',
	'wood',
	'Miranda Priestly had a monologue about this color ',
];
let answer = '';
let maxWrong = 4;
let mistake = 0;
let guessed = [];
let wordStasus = null;
let url = 'images/wavingspaceman.gif';
let image = new Image();
image.src = url;




function randomPhrase() {
	answer = colors[Math.floor(Math.random() * colors.length)];
}
function generateButtons() {
	let buttonsHTML = 'qwertyuiopasdfghjklzxcvbnm'
		.split('')
		.map(
			(letter) =>
				`
      <button
        class="btn btn-lg btn-primary m-2"
        id='` +
				letter +
				`'
        onClick="handleGuess('` +
				letter +
				`')"
      >
        ` +
				letter +
				`
      </button>
    `
		)
		.join('');
	document.getElementById('keyboard').innerHTML = buttonsHTML;
}
function handleGuess(chosenLetter) {
	guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
	document.getElementById(chosenLetter).setAttribute('disabled', true);
	if (answer.indexOf(chosenLetter) >= 0) {
		guessedWord();
		checkIfGameWon();
	} else if (answer.indexOf(chosenLetter) === -1) {
		mistake++;
		updateMistakes();
		checkIfGameLost();
		updatePicture();
	}
}
function guessedWord() {
	wordStatus = answer
		.split('')
		.map((letter) => (guessed.indexOf(letter) >= 0 ? letter : ' _ '))
		
		.join('');
	//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
	document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
//map creates a new array populated with the results of calling a provided function on every element in the calling array
function updateMistakes() {
	document.getElementById('mistakes').innerHTML = mistake;
}

function checkIfGameWon() {
	if (wordStatus === answer) {
		document.getElementById('keyboard').innerHTML = 'You won! The spaceman can now complete his space walk and not worry about being launched into the sun.';
		document.getElementById('title').innerHTML = answer;
		document.getElementById('base').style.display = 'none';
        document.getElementById('hint').style.display = 'none';
		document.getElementById('wordSpotlight').style.display = 'none';
		document.getElementById('hintSpotlight').style.display = 'none';
        document.getElementById('childContainer').appendChild(image);
	}
}

function checkIfGameLost() {
	if (mistake === maxWrong) {
		document.getElementById('keyboard').innerHTML = 'You Lost';
		document.getElementById('title').style.display = 'none';
		document.getElementById('wordSpotlight').innerHTML =
			'The answer was: ' + answer;
	}
}
function reset() {
	// mistake = 0;
	// guessed = [];
	// document.getElementById('base').src ='images/blank.png';
	// randomPhrase();
	// guessedWord();
	// updateMistakes();
	// generateButtons(); 
	//base source is not being chnaged to the blank png and the previous answer doesn't disappear
location.reload();
}
function updatePicture() {
	document.getElementById('base').src = 'images/' + mistake + '.png';
}

function giveHint() {
	document.getElementById('hintSpotlight').innerHTML =
		Hints[colors.indexOf(answer)];
	//the hint index will equal the value of color array
}
document.getElementById('max-wrong').innerHTML = maxWrong;

randomPhrase();
generateButtons();
guessedWord();
