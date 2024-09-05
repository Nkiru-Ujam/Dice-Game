"use strict";

const displayText = document.querySelector(".message");
const player1Text = document.querySelector(".player1");
const player2Text = document.querySelector(".player2");
const randomNum1 = document.querySelector(".number1");
const randomNum2 = document.querySelector(".number2");
const diceEl1 = document.querySelector(".img1");
const diceEl2 = document.querySelector(".img2");
const rollBtn = document.querySelector(".rollbtn");
const editBtn = document.querySelector(".editbtn");

let playing = true;
function rollDice() {
  if (playing) {
    playing = true;
    const randomNumber1 = Math.trunc(Math.random() * 6 + 1);
    const randomNumber2 = Math.trunc(Math.random() * 6 + 1);

    randomNum1.textContent = randomNumber1;
    randomNum2.textContent = randomNumber2;

    diceEl1.src = `images/dice-${randomNumber1}.png`;
    diceEl2.src = `images/dice-${randomNumber2}.png`;

    if (randomNumber1 === 6) {
      displayText.textContent = `${player1Text.textContent} Wins!`;
      playing = false;
    }

    if (randomNumber2 === 6) {
      displayText.textContent = `${player2Text.textContent} Wins!`;
      playing = false;
    }

    if (randomNumber1 === randomNumber2) {
      displayText.textContent = "Draw!";
      playing = false;
    }
  }
}

// rollDice();
rollBtn.addEventListener("click", rollDice);

function editPlayer() {
  const userInput1 = prompt("Player 1: Enter your name");
  player1Text.textContent = userInput1;
  const userInput2 = prompt("Player 2: Enter your name");
  player2Text.textContent = userInput2;
}

editBtn.addEventListener("click", editPlayer);
