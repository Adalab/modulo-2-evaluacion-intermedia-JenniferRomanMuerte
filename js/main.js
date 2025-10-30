'use strict';
const optionElement = document.querySelector('.js-form_select');
const buttonElement = document.querySelector('.js-form_button');
const textElement = document.querySelector('.js-message');


const move = (option_player, option_computer) =>{
  if(option_player === option_computer){
    textElement.innerHTML = "Empate";
  }
  else if(option_player === "piedra"){
    if(option_computer == "tijera"){
      textElement.innerHTML = "Has ganado!";
    }
    else if(option_computer == "papel"){
      textElement.innerHTML = "Has perdido";
    }
  }
  else if(option_player === "papel"){
     if(option_computer == "piedra"){
      textElement.innerHTML = "Has ganado!";
    }
    else if(option_computer == "tijera"){
      textElement.innerHTML = "Has perdido!";
    }
  }
  else if(option_player === "tijera"){
    if(option_computer == "papel"){
      textElement.innerHTML = "Has ganado!";
    }
    else if(option_computer == "piedra"){
      textElement.innerHTML = "Has perdido!";
    }
  }
}

const getRandomNumber = (max) => {
  return 1 + parseInt(Math.random() * max);
}

const optionComputer = (number_random) => {
  if(number_random <=3){
    const option_computer = "piedra";
    return option_computer;
  }
  else if(number_random >=7){
    const option_computer = "papel";
    return option_computer;
  }
  else{
    const option_computer = "tijera";
    return option_computer;
  }
}

buttonElement.addEventListener('click',(ev)=>{
  ev.preventDefault();
  const option_player = optionElement.value;
  console.log("Eleccion del jugador: " + option_player)
  const number_random = getRandomNumber(9);
  const option_computer = optionComputer(number_random);
  console.log("Eleccion de la computadora: " + option_computer);
  move(option_player, option_computer);
});