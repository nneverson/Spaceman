let colors = ['pink', 'green', 'blue'];

let answer = '';
let maxWrong = 4;
let mistake = 0;
let guessed = [];
let wordStasus = null;

function randomPhrase() {
	answer = colors[Math.floor(Math.random() * colors.length)];
}
function generateButtons() {
	let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'
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

function updateMistakes() {
	document.getElementById('mistakes').innerHTML = mistake;
}

function checkIfGameWon() {
	if (wordStatus === answer) {
		document.getElementById('keyboard').innerHTML = 'You won';
		document.getElementById('title').style.display = 'none';
		document.getElementById('wordSpotlight').style.display = 'none';
	}
}

function checkIfGameLost() {
	if (mistake === maxWrong) {
		document.getElementById('keyboard').innerHTML = 'You Lost';
		document.getElementById('title').style.display = 'none';
		document.getElementById('wordSpotlight').innerHTML= 'The answer was: ' + answer;
	}
}
function reset(){
    mistake = 0;
    guessed= [];
    document.getElementById('base').src = '/images/png/0.png'
    randomPhrase();
    guessedWord();
    updateMistakes();
    generateButtons();
}
function updatePicture(){
    document.getElementById('base').src = '/images/png/' + mistake+'.png';
}
function giveHint(){

}
document.getElementById('max-wrong').innerHTML = maxWrong;

randomPhrase();
generateButtons();
guessedWord();
handleGuess();
checkIfGameWon();
checkIfGameLost();
giveHint();
