/* ================================================================
   ORBYN — script.js
   JavaScript para interatividade do site
   Cada função está comentada para facilitar o aprendizado!
   ================================================================ */


/* ----------------------------------------------------------------
   1. MENU HAMBÚRGUER (para celular)
   
   Conceito usado: querySelector + addEventListener + classList
   
   querySelector('seletor') → encontra um elemento HTML pelo seletor
   addEventListener('evento', funcao) → escuta um evento no elemento
   classList.toggle('classe') → adiciona a classe se não tiver,
                                remove se já tiver (funciona como liga/desliga)
   ---------------------------------------------------------------- */

// Pega o botão hambúrguer e o menu do HTML
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Quando o hambúrguer for clicado:
hamburger.addEventListener('click', function() {
  menu.classList.toggle('aberto');  // liga/desliga a classe "aberto"
});

// Fecha o menu ao clicar em qualquer link dentro dele
// querySelectorAll → retorna TODOS os elementos com esse seletor
const linksMenu = document.querySelectorAll('.menu a');

// forEach → repete uma função para cada item da lista
linksMenu.forEach(function(link) {
  link.addEventListener('click', function() {
    menu.classList.remove('aberto');  // remove a classe "aberto"
  });
});


/* ----------------------------------------------------------------
   2. EFEITO NO HEADER AO ROLAR A PÁGINA
   
   Conceito usado: window.addEventListener('scroll') + classList
   
   window → objeto que representa a janela do navegador
   window.scrollY → quantos pixels a página rolou para baixo
   ---------------------------------------------------------------- */

const cabecalho = document.getElementById('cabecalho');

window.addEventListener('scroll', function() {
  // Se a página rolou mais de 50px, adiciona a classe "rolado"
  if (window.scrollY > 50) {
    cabecalho.classList.add('rolado');
  } else {
    cabecalho.classList.remove('rolado');
  }
});


/* ----------------------------------------------------------------
   3. MODAL DE CONTATO
   
   Conceito usado: getElementById + style.display
   
   element.style.display = 'flex' → mostra o elemento (via JS)
   element.style.display = 'none' → esconde o elemento
   
   Essas funções são chamadas diretamente no HTML via onclick=""
   ---------------------------------------------------------------- */

// Abre o modal (chamada pelo onclick no botão "Contato")
function abrirContato() {
  document.getElementById('modalContato').style.display = 'flex';
}

// Fecha o modal (chamada pelo botão X)
function fecharContato() {
  document.getElementById('modalContato').style.display = 'none';
}

// Fecha o modal se o usuário clicar FORA da caixa (no fundo escuro)
document.getElementById('modalContato').addEventListener('click', function(event) {
  // event.target → o elemento que foi clicado
  // "this" → o próprio modal (o fundo escuro)
  // Se clicou no fundo (não na caixa), fecha
  if (event.target === this) {
    fecharContato();
  }
});


/* ----------------------------------------------------------------
   4. ANIMAÇÃO DE CONTADOR (Estatísticas)
   
   Conceito usado: setInterval + clearInterval + getAttribute
   
   setInterval(funcao, ms) → executa a função repetidamente
   clearInterval(id) → para o setInterval quando o número chegar ao alvo
   getAttribute('nome') → lê um atributo data-* do HTML
   ---------------------------------------------------------------- */

function animarContador(elemento) {
  // Lê os atributos data-* do elemento HTML
  const alvo    = parseInt(elemento.getAttribute('data-alvo'));   // número final
  const sufixo  = elemento.getAttribute('data-sufixo')  || '';   // ex: " tri"
  const prefixo = elemento.getAttribute('data-prefixo') || '';   // ex: "+"

  const duracao   = 2000;            // duração total em milissegundos (2 segundos)
  const intervalo = 30;              // atualiza a cada 30ms
  const passos    = duracao / intervalo;  // quantas atualizações acontecem
  const incremento = alvo / passos;  // quanto aumenta a cada passo

  let atual = 0;  // valor atual do contador

  // Executa a função a cada 30ms
  const timer = setInterval(function() {
    atual += incremento;  // aumenta o valor

    // Quando chegou ao alvo, para o timer
    if (atual >= alvo) {
      atual = alvo;
      clearInterval(timer);
    }

    // Atualiza o texto do elemento no HTML
    // Math.floor() → arredonda para baixo (evita números decimais)
    // toLocaleString('pt-BR') → formata com ponto de milhar (6.000)
    elemento.textContent = prefixo + Math.floor(atual).toLocaleString('pt-BR') + sufixo;

  }, intervalo);
}


/* ----------------------------------------------------------------
   5. REVEAL AO ROLAR + ATIVAÇÃO DOS CONTADORES
   
   Conceito usado: getBoundingClientRect + classList.add
   
   getBoundingClientRect() → retorna a posição do elemento na tela
   .top → distância do topo do elemento até o topo da JANELA (não da página)
   Se .top < innerHeight, o elemento está visível na tela
   ---------------------------------------------------------------- */

// Seleciona todos os elementos com a classe "revelar"
const elementosRevelar = document.querySelectorAll('.revelar');

// Seleciona todos os números das estatísticas
const numerosStats = document.querySelectorAll('.stat-numero');

// Variável de controle: impede que os contadores rodem mais de uma vez
let contadoresAtivados = false;

function verificarScroll() {

  // --- Revelar elementos ao rolar ---
  elementosRevelar.forEach(function(el) {
    // Pega a posição do elemento em relação à janela
    const posicaoTopo = el.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight;

    // Se o topo do elemento está 80px acima do fundo da janela...
    if (posicaoTopo < alturaJanela - 80) {
      el.classList.add('visivel');  // adiciona classe que faz aparecer
    }
  });

  // --- Ativar contadores uma única vez ---
  if (!contadoresAtivados) {
    const secaoStats = document.getElementById('stats');
    const posicaoStats = secaoStats.getBoundingClientRect().top;

    if (posicaoStats < window.innerHeight - 80) {
      contadoresAtivados = true;  // marca que já ativou

      // Anima cada número
      numerosStats.forEach(function(num) {
        animarContador(num);
      });
    }
  }
}

// Roda uma vez ao carregar (para elementos já visíveis sem rolar)
verificarScroll();

// Roda toda vez que o usuário rolar a página
window.addEventListener('scroll', verificarScroll);


/* ----------------------------------------------------------------
   FIM DO SCRIPT
   
   Resumo das funções JavaScript usadas:
   ✅ document.getElementById()
   ✅ document.querySelector() / querySelectorAll()
   ✅ addEventListener('click' / 'scroll')
   ✅ classList.add() / remove() / toggle()
   ✅ element.style.display
   ✅ window.scrollY / window.innerHeight
   ✅ getBoundingClientRect()
   ✅ setInterval() / clearInterval()
   ✅ element.getAttribute()
   ✅ element.textContent
   ✅ Math.floor() / toLocaleString()
   ---------------------------------------------------------------- */
