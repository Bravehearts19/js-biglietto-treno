const kmDaPercorrere = prompt("Inserisci qui il numero di km che percorrerai nel tuo viaggio in treno:");
const eta = prompt("Inserisci qui la tua età attuale:");

if (isNaN(kmDaPercorrere)) {
    console.log("L'inserimento dei dati sui km da percorrere non è andato a buon fine");
} else {
    console.log("Questo è il numero di km del viaggio:" + kmDaPercorrere);
}

if (isNaN(eta)) {
    console.log("L'inserimento dei dati sulla tua età non è andato a buon fine");
} else {
    console.log("Questa è l'età del passeggero:" + eta);
}

const prezzoAlKm = 0.21;
let prezzoFinale = prezzoAlKm * kmDaPercorrere;

if (eta < 18) {
    prezzoFinale = prezzoFinale * 0.8;
} else if (eta >= 65) {
    prezzoFinale = prezzoFinale * 0.6;
}

const prezzoFinaleInCentesimi = Math.round(prezzoFinale * 100) / 100;

if (isNaN(kmDaPercorrere) || isNaN(eta)) {
    alert("I dati che hai inserito hanno qualcosa che non va...");
} else {
    alert("Il costo del tuo biglietto è " + prezzoFinaleInCentesimi + "€");
}