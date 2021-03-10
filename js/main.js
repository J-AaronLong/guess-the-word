/*----- constants -----*/
const MAX_GUESSES = 8;
const WORDS = [
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEST TEST",
];
/*----- app's state (variables) -----*/
let hiddenWord, guess, wrongLets;

/*----- cached element references -----*/
const replayBtn = document.getElementById("reset");
const msgEl = document.getElementById("guess-msg");
const guessEl = document.getElementById("guess");
const guessRemainEl = document.getElementById("guess-remain");
const wrongLetsEl = document.getElementById("wrong-letters");

/*----- event listeners -----*/
replayBtn.addEventListener("click", init);

document.addEventListener("keypress", handleLetGuess);

/*----- functions -----*/

init();

function init() {
  // Random word from array. Need to look into not repeating random words.
  hiddenWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  // for of loop here instead:
  guess = "";
  for (let char of hiddenWord) {
    guess += char === " " ? " " : "_";
  }
  console.log(hiddenWord, guess);

  wrongLets = [];

  render();
}

function render() {
  guessEl.textContent = guess;
  guessRemainEl.textContent = MAX_GUESSES - wrongLets.length;
  wrongLetsEl.innerHTML = wrongLets.join("<br>");
  // console.log("Render");
}

function handleLetGuess(evt) {
  const letter = evt.key.toUpperCase();
  if (
    letter.charCodeAt() < 65 ||
    letter.charCodeAt() > 90 ||
    isGameOver() ||
    guess.includes(letter) ||
    wrongLets.includes(letter)
  )
    return;
  if (hiddenWord.includes(letter)) {
    let newGuess = "";
    for (let i = 0; i < hiddenWord.length; i++) {
      newGuess += hiddenWord[i] === letter ? letter : guess[i];
    }
    guess = newGuess;
  } else {
    wrongLets.push(letter);
  }

  render();
}

function isGameOver() {
  return wrongLets.length === MAX_GUESSES || hiddenWord === guess;
}
