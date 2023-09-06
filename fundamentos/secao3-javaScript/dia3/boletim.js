let joão = [6.5, 8, 4.5, 1];
let leticia = [10, 9.5, 8.2, 9.7]

function average(arrayNotas) {
    let sum = 0;
    for (let index = 0; index < arrayNotas.length; index += 1) {
        sum += arrayNotas[index];
    }
    let avg = sum / arrayNotas.length;
    return avg;
}

function isAproved(average){
    if (average >= 6) {
        return true;
    }
    else {
        return false;
    }
}

console.log ('A média de João é:', average(joão), 'Aprovado?', isAproved(average(joão)));
console.log ('A média de Letícia é:', average(leticia), 'Aprovado?', isAproved(average(leticia)));

