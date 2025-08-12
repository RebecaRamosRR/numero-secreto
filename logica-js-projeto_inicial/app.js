//Variaveis
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



// Selecionar elementos do DOM e alterar seu conteúdo
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`;
        
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'O número secreto é menor');
        } else {
                exibirTextoNaTela('h1', 'O número secreto é maior');
            }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return numeroEscolhido = parseInt(Math.random() * 10 + 1);
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        return numeroEscolhido;
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
