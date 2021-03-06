/*----- constants -----*/
const MAX_GUESSES = 10;
const WORDS = [
  "TEST",
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
  "ELEVEN",
  "TWELVE",
];
/*----- app's state (variables) -----*/
let board, hiddenWord, guesses, incorrectLetters;

/*----- cached element references -----*/
const replayBtn = document.getElementById("reset");
const msgEl = document.getElementById("guess-msg");

/*----- event listeners -----*/
replayBtn.addEventListener("click", init);
/*----- functions -----*/

init();

function init() {
  console.log(`It's working!`);
}

function render() {}
