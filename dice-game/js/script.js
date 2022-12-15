"use strict";

//select elements
const player0Ele = document.querySelector(".player--0");
const player1Ele = document.querySelector(".player--1");
const score0Ele = document.getElementById("score--0");
const score1Ele = document.getElementById("score--1");
const current0Ele = document.getElementById("current--0");
const current1Ele = document.getElementById("current--1");
const diceEle = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting conditions
let scores, currentScore, activePlayer, playing;
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  current0Ele.textContent = 0;
  current1Ele.textContent = 0;
  diceEle.classList.add("hidden");
  player0Ele.classList.remove("player--winner");
  player1Ele.classList.remove("player--winner");
  player0Ele.classList.add("player--active");
  player1Ele.classList.remove("player--active");
};
init();
//switch the player
const playerSwitch = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Ele.classList.toggle("player--active");
  player1Ele.classList.toggle("player--active");
};

//rolling the dice
btnRoll.addEventListener("click", () => {
  if (playing) {
    //generate random dice roll
    const dice = Math.ceil(Math.random() * 6);

    //display dice with generated roll
    diceEle.classList.remove("hidden");
    diceEle.src = `./assets/dice-${dice}.png`;

    //check for dice roll
    if (dice != 1) {
      //Add dice to currentScore
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      playerSwitch();
    }
  }
});
btnHold.addEventListener("click", () => {
  if (playing) {
    //add currentScore to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if score >=100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEle.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //switch to next player
      playerSwitch();
    }
  }
});
btnNew.addEventListener("click", init);
