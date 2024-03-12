// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// creo un array di numeri
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const oddNumbers = []
const evenNumbers = []

for (i = 0; i < numbers.length; i++) {
    // console.log(i);

    let thisNumber = numbers[i];

    // verifico quali numeri sono dispari
    if (thisNumber % 2 !== 0) {

        oddNumbers.push(thisNumber);
        // li inserisco nel div rosso
        document.querySelector('#red').innerHTML = oddNumbers;

    } else {
        evenNumbers.push(thisNumber);

        // verifico quali numeri sono pari
        // li inserisco nel div verde
        document.querySelector('#green').innerHTML = evenNumbers;
    }
}
console.log('odd', oddNumbers);
console.log('even', evenNumbers);

