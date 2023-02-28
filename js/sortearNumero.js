const menorValor = 1;   //Definindo o menor valor
const maiorValor = 200;   //Definindo o maior valor
const numeroSecreto = gerarNumeroAleatorio()   //Criação de uma constante na qual está é o resultado de uma função

function gerarNumeroAleatorio() {   //Função que gera o número aleatório
    return parseInt(Math.random() * maiorValor + 1)   //quando a função é chamada retorna um valor aleatório entre 1 e 100
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById('menorValor');
const elementoMaiorValor = document.getElementById('maiorValor');
//Obtém as tags span com ids maior valor e menor valor

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor
//Insere no HTML os valores definidos como maior e menor