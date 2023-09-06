let myName = "rodrigo";
let birthCity = "fortaleza";
let birthYear = 1988;

let base = 5;
let height = 8;
let area = null;
let perimeter = null;

let nota = 90;
if (nota >= 80) {
    console.log ("Parabéns, você faz parte do grupo de pessoas aprovadas!");
}

else if (nota < 80 && nota >= 60) {
    console.log ("Você está na nossa lista de espera.");
}

else if (nota < 60) {
    console.log ("Infelizmente, você reprovou.");
}

console.log(myName);
console.log(birthCity);
console.log(birthYear);
console.log(base);
console.log(height);
console.log(base*height)
console.log(base*2+height*2)

//switch -- case
let trafficLight = "azul"; 
switch (trafficLight) {
    case "vermelho":
    console.log("pare");
    break

    case "amarelo":
    console.log("atenção");
    break

    case "verde":
    console.log("siga");
    break

    default:
    console.log("valor não encontrado")
}