function calculo(num1, num2) {
    let soma = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    
    return `Soma: ${soma} Sub: ${sub} Mult: ${mult} Div: ${div}`
}
console.log(calculo(8, 2))