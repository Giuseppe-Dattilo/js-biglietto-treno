// console.log('JS OK');

/* TRACCIA:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo con massimo due decimali, per indicare centesimi sul prezzo.
*/



// prendo l'elemento dal DOM
const finalPrice = document.getElementById('target-element');

// Chiedo all’utente il numero di km che vuole percorrere con un prompt e lo salvo in una variabile
const kmNumber = parseInt(prompt('Quanti km vuoi percorrere?', '50').trim());
console.log(kmNumber); 

// Chiedo all’utente l'età con un prompt e la salvo in una variabile
const userAge = parseInt(prompt('Quanti anni hai?', '18').trim());
console.log(userAge); 

// Verifico se i dati inseriti sono numeri
if (isNaN(userAge) || isNaN(kmNumber)) {
    alert ('I dati inseriti non sono corretti')

} else {
     // Calcolo il costo del biglietto in base ai km indicati dall'utente
     let priceSale = kmNumber * 0.21;

    // applico il 20% di sconto se minorenne, dando a priceSale il valore del biglietto già scontato
    if(userAge < 18){
            priceSale = (priceSale * 80) / 100;
    }
    // applico il 40% di sconto se ha più di 65 anni, dando a priceSale il valore del biglietto già scontato
    if(userAge > 65){
            priceSale = (priceSale * 60) / 100;
    }
    // console.log('il costo del tuo biglietto è di: '  + priceSale.toFixed(2) +  ' euro'); 

finalPrice.innerText = `Il costo del tuo biglietto è di: ${priceSale.toFixed(2)}  euro`;
}




