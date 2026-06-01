// abre o modal de contato
function abrirContato() {
  document.getElementById('modalContato').style.display = 'flex';
}

// fecha o modal de contato
function fecharContato() {

  document.getElementById('modalContato').style.display = 'none';
}

// fecha ao clicar fora da caixa
document.getElementById('modalContato').addEventListener('click', function (e) {
  if (e.target === this) fecharContato();
});

// fecha ao pressionar esc
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') fecharContato();
});

// sombra no header ao rolar a página
window.addEventListener('scroll', function () {
  const header = document.querySelector('.cabecalho');

  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(76, 201, 240, 0.15)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// destaque no link ativo do menu
const secoes  = document.querySelectorAll('section[id]');
const linksNav = document.querySelectorAll('.menu a');

window.addEventListener('scroll', function () {
  let secaoAtual = '';

  secoes.forEach(function (secao) {
    if (window.scrollY >= secao.offsetTop - 150) {
      secaoAtual = secao.getAttribute('id');
    }
  });

  linksNav.forEach(function (link) {
    if (link.getAttribute('href') === '#' + secaoAtual) {
      link.style.color = '#4cc9f0';
    } else {
      link.style.color = '';
    }
  });
});

// animacao de secoes aparecendo ao rolar a pagina
// adiciona a classe .revelar nas secoes
const secoesAnimar = document.querySelectorAll('.sobre-orbyn, .stats, .secao-destaque');
  secoesAnimar.forEach(function (el) {
    el.classList.add('revelar');
});

// injeta o css para o efeito funcionar
const estiloReveal = document.createElement('style');
estiloReveal.textContent = `
  .revelar { opacity: 0; transform: translateY(25px); transition: opacity 0.6s, transform 0.6s; }
  .revelar.visivel { opacity: 1; transform: none; }
`;
document.head.appendChild(estiloReveal);

// verifica quais elementos ja estao visiveis na tela
function verificarReveal() {
  document.querySelectorAll('.revelar').forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('visivel');
    }
  });
}

function formatarNumero(valor, prefixo, sufixo) {
  const texto = valor.toLocaleString('pt-BR');
  return `${prefixo || ''}${texto}${sufixo || ''}`;
}

function animarContador(elemento) {
  const target = parseInt(elemento.dataset.alvo || elemento.textContent.replace(/\D/g, ''), 10) || 0;
  const prefixo = elemento.dataset.prefixo || '';
  const sufixo = elemento.dataset.sufixo || '';
  const duracao = 2600;
  let inicio = null;

  function passo(timestamp) {
    if (!inicio) inicio = timestamp;
    const progresso = Math.min((timestamp - inicio) / duracao, 1);
    const valorAtual = Math.min(target, Math.max(1, Math.ceil(progresso * target)));
    elemento.textContent = formatarNumero(valorAtual, prefixo, sufixo);

    if (progresso < 1) {
      window.requestAnimationFrame(passo);
    } else {
      elemento.textContent = formatarNumero(target, prefixo, sufixo);
    }
  }

  window.requestAnimationFrame(passo);
}

const statsSection = document.querySelector('#stats');
const statNumeros = document.querySelectorAll('.stat-numero');
let statsAnimados = false;

function verificarAnimacaoStats() {
  if (statsAnimados || !statsSection) return;
  const rect = statsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 80) {
    statNumeros.forEach(animarContador);
    statsAnimados = true;
  }
}

// roda uma vez ao carregar
verificarReveal();
verificarAnimacaoStats();
window.addEventListener('scroll', function () {
  verificarReveal();
  verificarAnimacaoStats();
});

// recebe o id do botao de voltar pro topo
const btnTopo = document.getElementById('btnTopo');

// mostra o botao ao rolar mais de 400px
window.addEventListener('scroll', function () {
  btnTopo.classList.toggle('ativo', window.scrollY > 400);
});

// sobe a pag com o click
btnTopo.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

