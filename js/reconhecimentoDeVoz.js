window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementoChute = document.getElementById('chute')   //Obtém o elemento chute no HTML

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'   //Configuração do idioma para pt-br
recognition.start()   //Começo do reconhecimento de voz

recognition.addEventListener('result', onSpeak)   //Ao falar executa a função onSpeak

function onSpeak(e) {   //e significa evento
    chute = e.results[0][0].transcript   //Pega o que foi dito e insere no elemento chute
    exibeChute(chute)
    verificaValidezDoChute(chute)
    fimDeJogo(chute)
}


function exibeChute(chute) {   //Função que exibe o que foi dito na tela
    elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}
//Criação de uma div e span no HTML

recognition.addEventListener('end', () => recognition.start())   //Quando o reconhecimento de voz terminar ele será inicializado novamente