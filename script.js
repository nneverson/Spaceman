let phrases = [
	"A bargin hunter's dream",
	'A barrel of laughs',
	'Big fish in a small pond',
	'Bang for your buck',
	'A stone throw away',
	'A melting pot',
	'A change of scenery',
	'A cheap shot',
	'A change of scenery',
];

let answer = '';
let maxWrong = 6;
let mistake = 0;
let guessed = [];
let wordStasus = null;


function randomPhrase() {
	answer =
		phrases[
			Math.floor(Math.random() * phrases.length)
		];
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
	} else if (answer.indexOf(chosenLetter)=== -1) {
        mistake++
        updateMistakes();
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
document.getElementById('max-wrong').innerHTML = maxWrong;

randomPhrase();
generateButtons();
guessedWord();
handleGuess();
