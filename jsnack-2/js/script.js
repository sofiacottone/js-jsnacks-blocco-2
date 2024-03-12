// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// chiedo due parole all'utente
const userWordOne = prompt('Inserisci una parola');
const userWordTwo = prompt('Inserisci una parola');

// verifico quale delle due è più lunga
if (userWordOne.length < userWordTwo.length) {
    // stampo prima la più corta
    console.log(userWordOne, userWordTwo);
} else {
    console.log(userWordTwo, userWordOne);
}