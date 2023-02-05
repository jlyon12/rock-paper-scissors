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
        console.log('You played: '+ playerWeapon);
        console.log('Computer played: ' + computerWeapon);
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
    console.log('Round result: You ' + roundResult());
    });
});

