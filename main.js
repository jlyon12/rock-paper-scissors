//Randomly generate computer choice from array via function
const weapons = ['rock','paper','scissors'];
function getComputerChoice() {
    return weapons[Math.floor(Math.random()*weapons.length)];
}
