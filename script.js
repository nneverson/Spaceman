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
let mistakes = 0;
let guessed = [];
//function to include is display guessed letters on the page.
// let wordStatus = null;
//what is wordStatus for?

function randomnPharse() {
	answer = phrases[Math.floor(Math.random() * phrases.length)];
}
function generateButtons() {
	let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.map(
			(letter) =>
				`
    
    <button type="button" class="btn btn-danger"
    id='` + letter + `' onClick='handleGuess('` + letter +`')'>` + letter + `</button>`
		)
		.join('\n');
	document.getElementById('keyboard').innerHTML = buttonsHTML;
}
//map creates a new array populated with the results of calling a provided function on every element in the calling array
document.getElementById('max-wrong').innerHTML = maxWrong;

randomnPharse();
generateButtons();
