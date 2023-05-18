// Neste jogo o usuário escolherá três opções: Pedra, Tesoura e Papel. O computador escolherá aleatoriamente uma das três opções também, sendo que no final será ostrado quem ganhou e quem perdeu a disputa. As regras básicas são estas abaixo:
//  1. Pedra ganha de Tesoura.
//  2. Tesoura ganha de Papel.
//  3. Papel ganha de Pedra.
//  Desafio:
//   Implementar uma regra onde só é declarado como ganhador, quem ganhou duas rodadas. Caso haja empate no jogo, não dá pontuação para nenhum dos jogadores.

var pontosJogador = 0;
var pontosComputador = 0;
var venceu = false;

var escolha = ["PEDRA", "PAPEL", "TESOURA"]

// Jogador escolhe um número entre 1 e 3.
// 1 = Pedra / 2 - Papel / 3 = Tesoura

while (venceu == false) {

    jogadorEscolhe(window.prompt("Vamos escolher uma opção para começar a jogar. 1 = pedra, 2 = papel, 3 = tesoura."))

    var escolhadoJogador = ""

}


function jogadorEscolhe(num) {
    // 
    if ((num != 1) && (num != 2) && (num != 3)) {

        alert("Opção inválida! Continue a escolher um número entre 1 e 3.")

    } else {

        // Armazena  a escolha do jogador

        escolhadoJogador = escolha[num - 1]

        alert("Jogador escolheu ", escolhadoJogador);

        computadorEscolhe(1, 4)
    }
}

// Armazena a escolha do computador

let escolhadoComputador = ""

function computadorEscolhe(min, max) {

    escolhadoComputador = escolha[Math.floor(Math.random() * (max - min) + min - 1)]

    alert("O computador escolheu ", escolhadoComputador);
  
}

// Verificação do Vencedor:

function vencedor() {

    alert("Jogador X Computador")

    // Empate:

    if (escolhadoJogador == escolhadoComputador) {

        alert("Empatado!")

    //  Regras do jogo:

    } else if (escolhadoJogador == "PEDRA" && escolhadoComputador == "PAPEL") {

        alert("O computador venceu!")

        pontosComputador++

    } else if (escolhadoJogador == "PAPEL" && escolhadoComputador == "TESOURA") {

        alert("O computador venceu!");

        pontosComputador++

    } else if (escolhadoJogador == "TESOURA" && escolhadoComputador == "PEDRA") {

        alert("O computador venceu!");

        pontosComputador++
    }

    // Caso não der empate e o computador não vencer, jogador vencerá:

    else {

        alert("O jogador venceu!");

        pontosJogador++
    }

    vencedor()

    // Mostrando a pontuação do Jogador e do Computador:

    alert("PONTOS : ", "Você: ", pontosJogador, "Computador: ", pontosComputador)

    // Declaração do vencedor:

    if (pontosJogador == 2) {

        venceu = true

        alert("Jogador é o vencedor!")
    } 
    else (pontosComputador == 2) {

        venceu = true

        alert("O computador é o vencedor!")
                  
    }
    
}





   