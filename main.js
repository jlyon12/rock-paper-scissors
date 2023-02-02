const choices = ['rock','paper','scissors'];
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

function getPlayerChoice() {
    let input = prompt('Choose your weapon: Please type Rock, Paper, or Scissors.');
    while (input === null) {
        input = prompt ('You are empty handed there, partner.\nPlease choose your weapon by typing Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validate(input);
    while (check === false) {
        input = prompt ('Our weapon choices are limited... Make sure you are choosing either Rock, Paper, or Scissors. Please check your spelling');
    
    while (input === null) {
        input = prompt ('You are empty handed there, partner.\nPlease choose your weapon by typing Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    check = validate(input);
}
    return input;
}

function validate(choice) {
    return choices.includes(choice);
}


console.log(getComputerChoice() + ' - from computer');
console.log(getPlayerChoice() + ' - from player');