const readline = require("readline-sync");
const name = readline.question("What is your name? ");
let hasKey = false;
let isPlaying = true;
console.log('Wake up ' + name + '!' + ' You need to escape this room.');

let choices = ['Put hand in hole', 'Find the key', 'Open the door'];
while (isPlaying) {
    let index = readline.keyInSelect(choices, 'What will you do ' + name + '?');
    console.log('You have chosen ' + choices[index] + '.');
    
    if (choices[index] === 'Put hand in hole') {
        console.log('You have died 💀.');
    } else if (choices[index] === 'Find the key') {
        hasKey = true;
        console.log('You have found the key 🔑.');
        continue;
    } else if (choices[index] === 'Open the door' && hasKey === false) {
        console.log('You will need a key 🔑.');
        continue;
    } else if (choices[index] === 'Open the door' && hasKey === true) {
        console.log('You have escaped!')
        break;
    }

}