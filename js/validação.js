function verificaValidezDoChute() {
    const numero = +chute   //Só de tentar somar transforma o elemento chute em um número

    if (chuteInvalido(numero)) {  
        if (chute.toUpperCase() === 'FIM DE JOGO') {
            document.body.innerHTML = `
            <h2>Fim DE JOGO</h2>
            <h3>Precione o botão para jogar nonamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        } else {
            elementoChute.innerHTML += `<div>Valor inválido: Fale um número</div>`
            return
        }
    }

    if (numeroForaDoIntervalo(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um núemro entre ${menorValor} e ${maiorValor}</div>`
        return   //O return é usado para quando após executada não faça mais nada dessa função
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numeroSecreto > numero) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)   //Se não é um número isNotANumber() 
}
//Para deixar o código mais claro transformar o Number/NaN em uma função
//Retorna true quando o numero = NaN

function numeroForaDoIntervalo(numero) {
    return numero > maiorValor || numero < menorValor
}
//retorna true quando houver um número maior ou menor que o intervalo

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()   //recarrega a página
    }
})
//Função de evento click no body da página
//Ao clicar na página em um elemento com id = 'jogar-novamente'