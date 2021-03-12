# **Project 1**
## **Guess The Word**

### Aaron Long | [Github](https://github.com/J-AaronLong/guess-the-word) | [Game Link](https://j-aaronlong.github.io/guess-the-word/)
***

### **Objective**

#### The game: Guess The Word game which incorporates the following technologies:
* HTML
* CSS
* JavaScript

#### This is Guess the Word. The theme is **U.S Capital cities**. You begin by pressing a key on your keyboard to initiate the game. When a correct letter is pressed on the keyboard, the game will show the letter in the correct location of the hidden word. When an incorrect letter is pressed, that letter will show up on the side of the browser. This also results in the guess count decrementing by one from 8 with each incorrect guess. A win will result in player guessing before that count gets to 0. The game may also be reset by pressing the reset button. A new word will randomly be chosen from the themed words and rendered to the page. If the player doesn't guess the correct word, a game over message is rendered.
***
![Guess The Word image](https://i.imgur.com/tSqilqO.png)
##### Image of "Guess the Word"
***

### **Pseudocode:**

```
1.) Define required constants:
  1.1) Define words used in game that will represent the theme of the game.
  1.2) Define max number of wrong choices = 10.
  1.3) Define playable area (word boxes / spaces) or changeable width to where the words will be displayed.
  1.4) Ensure only Alpha keys are playable (A-Z).

2.) Define required variables to track the state of the game:
  2.1) Define variable for the word that will be chosen and hidden from view.
  2.2) Define win variable if all correct letters lead player to guessing the correct word.
  2.3) Variable to keep track of wrong letters, push those into new array.

3.) Store variables on the page that need to be accessed more than once to make code more DRY.
  3.1) Dom elements like messages, keys pressed, button pressed, etc.

4.) Initialize upon loading page:
  4.1) Initialiaze the state variables by picking a random word from constants that will be used for each play.
  4.2) Initialize winner to null.
  4.3) Render values to the page by showing guess remaining, when loaded, starting at 10 which will count down to 0 with each wrong guess.
  4.4) Wait for the user to press a key.
  4.5) Render a message if winner becomes no longer null. Display winner message if word is guessed less than 10 times.
  4.6) Loop through constants containing words that will be used to play the game, rendering the number of spaces needed for that word to the page.

5.) When player presses a key:
  5.1) Obtain keycode(?) for key pressed to determine which key was pressed and it's correlation to the letter chosen.
  5.2) If a letter has been chosen, display that letter in either the game area where the word is being guessed, or in the area reserved for already used letters which can no longer be chosen by player.
  5.3) Determine winner if player correctly guesses the word. (Correct letter guesses < 10) Display winning message to the page.
  5.4) If no winner (when guesses remaining is 0 or null), render loser message.
  5.5) All state has been updated. Render the state to the page.

6.) Handle a player clicking any other elements, such as a reset button or any other clickable elements added to the game, which will result in returning back to init() function: step 4.1 - 4.4.
```
***
### **Icebox Items:**

* Words related to a certain theme can be changed to a different ***theme*** of the players choosing.

* A ***sound*** played when either correct letter or wrong letter is pressed on keyboard.
* A ***hint button*** would be ideal. I'd like to add this at some point.
***

