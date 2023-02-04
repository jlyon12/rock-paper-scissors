const weapons = ['rock','paper','scissors'];

function computerPlay() {
    return weapons[Math.floor(Math.random()*weapons.length)];
    
}

console.log(computerPlay());