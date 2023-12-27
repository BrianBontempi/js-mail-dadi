console.log("JS OK")

const button = document.getElementById("button");
const resultElement = document.getElementById("result");


button.addEventListener("click", function(){
    // ! randomizzo i due dadi 

const playerNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;

console.log( playerNumber, cpuNumber)

// ! chi ha vinto?

let resultMessage = "Pareggio";

if(playerNumber > cpuNumber){
    resultMessage = "ha vinto il player";
} else if(playerNumber < cpuNumber){
    resultMessage = "ha vinto il computer";
}

const result = `
<p>Risultato giocatore: ${playerNumber}</p>
<p>Risultato cpu: ${cpuNumber}</p>
<p><strong>${resultMessage}</strong></p>
`;

resultElement.innerHTML = result;
})

// ___________________________________________________

// ! creo array con le mail autorizzate

const allowedEmails = ["brian@boolean.it", "marco@boolean.it", "michele@boolean.it", "marius@boolean.it"];
