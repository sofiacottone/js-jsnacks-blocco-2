// Chiedi un numero di 4 cifre all’utente 
// calcola la somma di tutte le cifre che compongono il numero.

// chiedo un numero di 4 cifre all'utente
const userNumber = prompt('Inserisci un numero di 4 cifre');
console.log('user number', userNumber);

// calcolo la somma di tutte le cifre che compongono il numero
let sum = 0;

for (let i = 0; i < userNumber.length; i++) {
    thisNumber = userNumber[i];
    // console.log(thisNumber);

    thisNumberAsNumeric = parseInt(thisNumber);
    console.log('numeric', thisNumberAsNumeric);

    //somma
    sum += thisNumberAsNumeric;
}
console.log('sum', sum);