let clienteCadastrados = ['Marta', 'Paulo', 'Alexandre', 'Ester']
let sorvetes = ['morango', 'chocolate', 'flocos']

function verificaCliente(nome){
    let clienteValido = false;

    for (let index = 0; index < clienteCadastrados.length; index += 1) {
        if (clienteCadastrados[index] === nome) {
            clienteValido = true;
        }
    }
    return clienteValido;
}

function verificaSorvete(sabor){
    let sorveteValido = false;
    
    for (let index = 0; index < sorvetes.length; index +=1) {
        if (sorvetes[index] === sabor) {
            sorveteValido = true;
        }
    }
    return sorveteValido;
}

function sorveteEscolhido(nome, sabor) {
    let existeCliente = verificaCliente (nome);
    let existeSorvete = verificaSorvete (sabor);

    if (existeCliente && existeSorvete) {
        return nome + ', pague seu sorvete de ' + sabor + ' no caixa';
    } else {
        return 'cliente e/ou não cadastrado';   
    }
    //----------------------------FORMA RESUMIDA------------------------------
    // if (clienteCadastrados.includes(nome) && sorvetes.includes(sabor)) {
    //     return nome + ', pague seu sorvete de ' + sabor + ' no caixa';
    // } else {
    //     return 'cliente e/ou não cadastrado';   
    // }
    //Usar o comando return no lugar do console.log
}

console.log (sorveteEscolhido('Paulo', 'flocos'));
console.log (sorveteEscolhido('Marta', 'chocolate'));
console.log (sorveteEscolhido('Rodrigo', 'chocolate'));