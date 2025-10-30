"use strict";
const optionElement = document.querySelector(".js-form_select");
const buttonElement = document.querySelector(".js-form_button");
const textElement = document.querySelector(".js-message");
const playerScoreElement = document.querySelector(".js-player_score");
const computerScoreElement = document.querySelector(".js-computer_score");

// Contadores de puntos
let counter_player_score = 0;
let counter_computer_score = 0;

const score = (winner) => {
  if (winner === "player") {
    textElement.innerHTML = "Has ganado!";
    counter_player_score += 1;
    playerScoreElement.innerHTML = `Jugador: ${counter_player_score}`

  } else if (winner === "computer") {
    textElement.innerHTML = "Has perdido!";
    counter_computer_score += 1;
    computerScoreElement.innerHTML = `Jugador: ${counter_computer_score}`
  }
};

const move = (option_player, option_computer) => {
  if (option_player === option_computer) {
    textElement.innerHTML = "Empate";
  } else if (option_player === "piedra") {
    if (option_computer == "tijera") {
      score("player");
    } else if (option_computer == "papel") {
      score("computer");
    }
  } else if (option_player === "papel") {
    if (option_computer == "piedra") {
      score("player");
    } else if (option_computer == "tijera") {
      score("computer");
    }
  } else if (option_player === "tijera") {
    if (option_computer == "papel") {
      score("player");
    } else if (option_computer == "piedra") {
      score("computer");
    }
  }
};

const getRandomNumber = (max) => {
  return 1 + parseInt(Math.random() * max);
};

const optionComputer = (number_random) => {
  if (number_random <= 3) {
    const option_computer = "piedra";
    return option_computer;
  } else if (number_random >= 7) {
    const option_computer = "papel";
    return option_computer;
  } else {
    const option_computer = "tijera";
    return option_computer;
  }
};

buttonElement.addEventListener("click", (ev) => {
  ev.preventDefault();
  const option_player = optionElement.value;
  const number_random = getRandomNumber(9);
  const option_computer = optionComputer(number_random);
  move(option_player, option_computer);
});
