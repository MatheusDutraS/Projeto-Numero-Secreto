function verificaValidezDoChute() {
    const numero = +chute   //Só de tentar somar transforma o elemento chute em um número

    if (chuteInvalido(numero)) {  
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número</div>`
    }

    if (numeroForaDoIntervalo(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um núemro entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)   //Se não é um número isNotANumber() 
}
//Para deixar o código mais claro transformar o Number/NaN em uma função

function numeroForaDoIntervalo(numero) {
    return numero > maiorValor || numero < menorValor
}