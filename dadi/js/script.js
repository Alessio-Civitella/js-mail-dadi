// Genera i numeri casuali
const playerRoll = Math.floor(Math.random() * 6) + 1;
const computerRoll = Math.floor(Math.random() * 6) + 1;

// Determina il vincitore
let resultMessage;
if (playerRoll > computerRoll) {
    resultMessage = `Hai vinto! Hai lanciato ${playerRoll}, il computer ${computerRoll}.`;
} else if (playerRoll < computerRoll) {
    resultMessage = `Hai perso! Hai lanciato ${playerRoll}, il computer ${computerRoll}.`;
} else {
    resultMessage = `È un pareggio! Entrambi avete lanciato ${playerRoll}.`;
}

// Stampa il risultato nella console
console.log(resultMessage);
