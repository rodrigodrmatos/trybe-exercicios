function sorteiaSeisNumeros() {
    let numeros = [];
    for (let index = 1; index <= 6; index += 1) {
        numeros.push(Math.ceil(Math.random() * 60));
    }
return numeros;
}

sorteiaSeisNumeros();

let guessRodrigo = [25, 55, 12, 13, 05, 18];

let numberOfHits = 0;
let numberOftries = 0;

while (numberOfHits < 6) {
    numberOfHits = 0;
    numberOftries += 1;
    
}
function numeroDeAcertos () {

    for (let index = 0; index < numerosSorteados.length; index += 1) {
        for (let indexGuess = 0; indexGuess < palpite.length; indexGuess +=1) {
            if (numerosSorteados [index] === palpite [indexGuess]) {
                numberOfHits += 1;
            }
        }
    }
        return numberOfHits;
}