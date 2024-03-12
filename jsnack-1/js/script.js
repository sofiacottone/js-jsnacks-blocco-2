// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// chiedo un numero all'utente
let userNumber = parseInt(prompt('Inserisci un numero'));

// verifico se è pari
if (userNumber % 2 === 0) {
    // se sì stampo il numero
    console.log(userNumber);

} else {
    // se dispari stampo il numero successivo a quello inserito dall'utente
    console.log(++userNumber);
}