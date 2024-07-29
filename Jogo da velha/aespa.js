var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogadorSelecionado');
var vencedorSelecionado = document.getElementById('vencedorSelecionado');
var quadrados = document.getElementsByClassName('quadrado');

// Defina os caminhos das imagens
var imagemWinter = 'img/winter.jpeg';
var imagemKarina = 'img/karina.jpeg';

// Inicializa com 'Winter'
mudarJogador('Winter');

function escolherQuadrado(id) {
    console.log(id);

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    var imagem = document.createElement('img');
    if (jogador === 'Winter') {
        imagem.src = imagemWinter;
    } else {
        imagem.src = imagemKarina;
    }
    quadrado.innerHTML = ''; // Limpe o conteúdo existente
    quadrado.appendChild(imagem); // Adicione a imagem

    // Alterna o jogador
    jogador = (jogador === 'Winter') ? 'Karina' : 'Winter';
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9); // Corrigido para id 9

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#00ff00';
    quadrado2.style.background = '#00ff00';
    quadrado3.style.background = '#00ff00';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var igual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        igual = true;
    }

    return igual;
}
