const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById('menorValor');
const elementoMaiorValor = document.getElementById('maiorValor');

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor