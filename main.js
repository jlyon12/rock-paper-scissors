//Randomly generate computer choice from array via function
const weapons = ['Rock','Paper','Scissors'];
function getComputerChoice() {
    return weapons[Math.floor(Math.random()*weapons.length)];
}

//Empty array to push the result of the rounds into. 
const scoreBoard = [];

//Event listener on-click for user input
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function playRound()  {
        // On-click event will call the below game logic via playRound function
        const computerWeapon = getComputerChoice();
        const playerWeapon = button.value;
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
    }
    
    }
        //Pushes result of the round into empty scoreBoard array
        //Calculate running scores from that array
        scoreBoard.push(roundResult());
        let runningTies = scoreBoard.filter((item => item === 'tie')).length;
        let runningPlayerScore = scoreBoard.filter((item => item === 'win')).length;
        let runningComputerScore = scoreBoard.filter((item => item === 'lose')).length;
        
        
    //Round Results
    

    let roundNumber = document.querySelector('#round-number');
    roundNumber.textContent = "Round " + scoreBoard.length + ' of 5';

    let playerOutput = document.querySelector('#player-result');
    playerOutput.textContent = "You played " + playerWeapon;

    let computerOutput = document.querySelector('#computer-result');
     computerOutput.textContent = "Computer played " + computerWeapon;

    let roundResultsOutput = document.querySelector('#round-result');
    roundResultsOutput.textContent = "You " + roundResult();

    //Running Totals
    let runningPlayerScoreOutput = document.querySelector('#player-total');
    runningPlayerScoreOutput.textContent = 'Player Wins : ' + runningPlayerScore;

    let runningTiesOutput = document.querySelector('#tie-total');
    runningTiesOutput.textContent = 'Total Ties: ' + runningTies;

    let runningComputerScoreOutput = document.querySelector('#computer-total');
    runningComputerScoreOutput.textContent = 'Computer Wins : ' + runningComputerScore;

    //Game end output on total rounds reached

    function gameEnd() {
        switch (true) {
            case (runningPlayerScore >= 3):
                return 'Congrats! You have won the game.';
                break;
            case (runningComputerScore >= 3):
                return 'Bummer! You have lost the game.';
                break;
            case (runningTies >= 3):
                return 'Try again! There is no definitive winner.';
                break;
        }
    }

    let totalRoundsPlayed = scoreBoard.length
    if (totalRoundsPlayed === 5 ) {
        let gameEndResultOutput = document.querySelector('#game-end-text');
        gameEndResultOutput.classList.remove('hidden');
        gameEndResultOutput.textContent = gameEnd();

        let gameRestart = document.querySelector('#game-restart-btn');
        gameRestart.classList.remove('hidden');


    }
    }
    

    

    });
});

