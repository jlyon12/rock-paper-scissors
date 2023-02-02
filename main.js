const choices = ['rock','paper','scissors'];
const scores = []

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

document.querySelector('#start-game').addEventListener('click', game);

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

function game (){
    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log ('Round # ' + i)
        logRound();
    }
    console.log('===============');
   finalScore();
}

function playRound() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    scores.push(calcRound());

}

function calcRound() {
    switch (true) {
        case (playerSelection === computerSelection):
        return 'TIE';
        break;
        case ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')):
        return 'WIN';
        default :
        return 'LOSE';
        break;
    }
}

function logRound() {
    console.log('You chose to play ' + playerSelection + '.');
    console.log('Computer chose to play ' + computerSelection + '.');
    console.log('YOU ' + calcRound());
    console.log('---------------');
}

function finalScore() {
    let playerScore = scores.filter((item) => item == 'WIN').length;
    let computerScore = scores.filter((item) => item == 'LOSE').length;
    let ties = scores.filter((item) => item == 'TIE').length;
    console.log('FINAL GAME RESULTS');
    console.log('Player wins : ' + playerScore)
    console.log('Computer wins : ' + computerScore)
    console.log('Ties: ' + ties)
}
    