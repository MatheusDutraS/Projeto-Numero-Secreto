function fimDeJogo() {
    if (chute === 'Fim de jogo') {
        document.body.innerHTML = `
        <h2>Fim DE JOGO</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    }
}