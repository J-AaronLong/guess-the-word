/*----- constants -----*/
const MAX_GUESSES = 10;
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
let hiddenWord, guesses, wrongLetters;

/*----- cached element references -----*/
const replayBtn = document.getElementById("reset");
const msgEl = document.getElementById("guess-msg");
const gameWord = document.getElementById("board");

/*----- event listeners -----*/
replayBtn.addEventListener("click", init);

// gameWord.addEventListenever("onkeypress", keyLog);

/*----- functions -----*/

init();

function init() {
  // Random word from array. Need to look into not repeating random words.
  hiddenWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  console.log(hiddenWord);

  let board = [];
  for (let i = 0; i < hiddenWord.length; i++) {
    board[i] = "_";
  }

  let extraLetters = hiddenWord.length;

  guesses = MAX_GUESSES;

  wrongLetters = [];

  render();
}

function render() {
  console.log("Render");
}

// function keyLog() {
//   console.log("keyLog", gameWord);
// }

// Notes as I go:
// Looking into differences between onkeypress, keydown, keyup and trying to figure out ways to render them to my "board", I came to the conclusion that this might not be a very responsive way to build the game as a tablet user wouldn't be able to play. So I may need to rethink how to approach the letter inputs. Look into options to bring up mobile or tablet keyboard?

// practice below to pick random word and not repeat it. Need to debug it.
// let b = [];
// const randomValueFromArray = function (myArray) {
//   if (b.length === 0) {
//     for (var i = 0; i < myArray.length; i++) b.push(i);
//   }
//   let randomIdx = Math.floor(Math.random() * b.length);
//   let indexOfItem = b[randomIdx];
//   b.splice(randomIdx, 1);
//   return myArray[indexOfItem];
// };

// randomValueFromArray(["a", "b", "c", "e", "f"]);
// console.log(randomValueFromArray);
