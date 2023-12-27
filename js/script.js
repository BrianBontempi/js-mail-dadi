console.log("JS OK")

const button = document.getElementById("button");
const resultElement = document.getElementById("result");

// ! randomizzo i due dadi 

const playerNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;

console.log( playerNumber, cpuNumber)