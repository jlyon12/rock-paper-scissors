//Computer play - random
const weapons = ['Rock','Paper','Scissors'];
function getComputerChoice() {
    return weapons[Math.floor(Math.random()*weapons.length)];
}
//Empty array to hold scores - receive each round
const scoreBoard = [];
//Click from user initiates game logic via event listener 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function playRound()  {
        //Ensure computer play is generated each round , get player weapon
        const computerWeapon = getComputerChoice();
        const playerWeapon = button.value;
        //Set round limit to 5 , calc round winner
        if (scoreBoard.length <=4) {
        function roundResult() { 
        switch (true) {
        case (playerWeapon === computerWeapon):
            return 'tie';
            break;
        case ((playerWeapon === 'Rock' && computerWeapon === 'Scissors') || (playerWeapon === 'Paper' && computerWeapon === 'Rock') || (playerWeapon === 'Scissors' && computerWeapon === 'Paper')):
            return 'win';
            break;
        case ((playerWeapon === 'Rock' && computerWeapon === 'Paper') || (playerWeapon === 'Paper' && computerWeapon === 'Scissors') || (playerWeapon === 'Scissors' && computerWeapon === 'Rock')):
            return 'lose';
            break;
    };
    };
        //Push round result to empty array , calc running total 
        scoreBoard.push(roundResult());
        let runningTies = scoreBoard.filter((item => item === 'tie')).length;
        let runningPlayerScore = scoreBoard.filter((item => item === 'win')).length;
        let runningComputerScore = scoreBoard.filter((item => item === 'lose')).length;      
    //Round Results Output
    let roundNumber = document.querySelector('#round-number');
    roundNumber.textContent = "Round " + scoreBoard.length + ' of 5';
    let playerOutput = document.querySelector('#player-result');
    playerOutput.textContent = "You played " + playerWeapon;
    let computerOutput = document.querySelector('#computer-result');
     computerOutput.textContent = "Computer played " + computerWeapon;
    let roundResultsOutput = document.querySelector('#round-result');
    roundResultsOutput.textContent = "You " + roundResult() + ' the round';
    //Running Total Output
    let runningPlayerScoreOutput = document.querySelector('#player-total');
    runningPlayerScoreOutput.textContent = 'Player Wins : ' + runningPlayerScore;
    let runningTiesOutput = document.querySelector('#tie-total');
    runningTiesOutput.textContent = 'Total Ties: ' + runningTies;
    let runningComputerScoreOutput = document.querySelector('#computer-total');
    runningComputerScoreOutput.textContent = 'Computer Wins : ' + runningComputerScore;
    //Calc winner of game after 5 rounds
    function gameEnd() {
        switch (true) {
            case (runningPlayerScore >= 3):
                gameEndResultOutput.classList.add('clr-accent-100');
                return 'Congrats! You have won the game.';
                break;
            case (runningComputerScore >= 3):
                gameEndResultOutput.classList.add('clr-accent-200');
                return 'Bummer! You have lost the game.';
                break;
            case (scoreBoard.length === 5):
                gameEndResultOutput.classList.add('clr-accent-300');
                return 'Try again! There is no definitive winner.';
                break;
        };
    };
//Declare and make game-restart button visible winner on round 5
    let totalRoundsPlayed = scoreBoard.length;
    let gameEndResultOutput = document.querySelector('#game-end-text');
    let gameRestart = document.querySelector('#game-restart-btn');
    if (totalRoundsPlayed === 5 ) {
        gameEndResultOutput.textContent = gameEnd();
        gameEndResultOutput.classList.remove('hidden');
        gameRestart.classList.remove('hidden');
    };
    };
    });
});