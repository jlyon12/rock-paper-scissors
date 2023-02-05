//Randomly generate computer choice from array via function
const weapons = ['Rock','Paper','Scissors'];
function getComputerChoice() {
    return weapons[Math.floor(Math.random()*weapons.length)];
}

//Event listener on-click for user input

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function playRound()  {
        // On-click event will call the below game logic via playRound function
        const computerWeapon = getComputerChoice();
        const playerWeapon = button.value;
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

    // Target HTML Flex Container and append a new div for results only after on click
    const container = document.querySelector('.flex-container');

    let results = document.createElement('div');
    results.classList.add('results');

    container.appendChild(results);

    //Round number output div
    let roundNumber = document.createElement('div');
    roundNumber.classList.add('round-number');
    roundNumber.textContent = "Round Results: ";

    results.appendChild(roundNumber);

    //Player output div creation 
    const playerOutput = document.createElement('div');
    playerOutput.classList.add('player-output')
    playerOutput.textContent = "You chose to play " + playerWeapon;

    results.appendChild(playerOutput);

     //Computer output div creation 
     const computerOutput = document.createElement('div');
     computerOutput.classList.add('computer-output')
     computerOutput.textContent = "Computer chose to play " + computerWeapon;
 
     results.appendChild(computerOutput);

      //Round Results div creation 
    const roundResultsOutput = document.createElement('div');
    roundResultsOutput.classList.add('round-results-output')
    roundResultsOutput.textContent = "You " + roundResult();

    results.appendChild(roundResultsOutput);

    // //Remove Round Result Div
    // container.removeChild(results);

    });
});

