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
    header.style.boxShadow = '0 4px 20px var(--t-glow)';
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
      link.style.color = 'var(--t-accent)';
    } else {
      link.style.color = '';
    }
  });
});

// animacao de secoes aparecendo ao rolar a pagina
const secoesAnimar = document.querySelectorAll('.sobre-orbyn, .stats, .secao-destaque');
secoesAnimar.forEach(function (el) {
  el.classList.add('revelar');
});

const estiloReveal = document.createElement('style');
estiloReveal.textContent = `
  .revelar { opacity: 0; transform: translateY(25px); transition: opacity 0.6s, transform 0.6s; }
  .revelar.visivel { opacity: 1; transform: none; }
`;
document.head.appendChild(estiloReveal);

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

verificarReveal();
verificarAnimacaoStats();
window.addEventListener('scroll', function () {
  verificarReveal();
  verificarAnimacaoStats();
});

const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', function () {
  btnTopo.classList.toggle('ativo', window.scrollY > 400);
});

btnTopo.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// temas
const temas = {
  escuro: {
    nome: 'Escuro',
    cor:  '#0d1a2e',
    vars: {
      '--t-bg':           '#06080f',
      '--t-card':         '#0d1320',
      '--t-header':       'rgba(6,8,15,0.85)',
      '--t-text':         '#ffffff',
      '--t-texto2':       '#c8d8ff',
      '--t-texto3':       '#d5def8',
      '--t-accent':       '#4cc9f0',
      '--t-borda':        'rgba(76,201,240,0.15)',
      '--t-modal':        '#111827',
      '--t-btn-text':     '#000000',
      '--t-glow':         'rgba(76,201,240,0.25)',
      '--t-btn-topo-bg':  '#4cc9f0',
      '--t-btn-topo-cor': '#000000',
    }
  },

  branco: {
    nome: 'Azul claro',
    cor:  '#7dd8f5',
    vars: {
      '--t-bg':           '#0d1f35',
      '--t-card':         '#152840',
      '--t-header':       'rgba(13,31,53,0.88)',
      '--t-text':         '#e8f4ff',
      '--t-texto2':       '#a8cce8',
      '--t-texto3':       '#bdd8f0',
      '--t-accent':       '#7dd8f5',
      '--t-borda':        'rgba(125,216,245,0.18)',
      '--t-modal':        '#1a304d',
      '--t-btn-text':     '#000000',
      '--t-glow':         'rgba(125,216,245,0.22)',
      '--t-btn-topo-bg':  '#7dd8f5',
      '--t-btn-topo-cor': '#000000',
    }
  },

  verde: {
    nome: 'Verde',
    cor:  '#4cf0a0',
    vars: {
      '--t-bg':           '#060f09',
      '--t-card':         '#0a1f10',
      '--t-header':       'rgba(6,15,9,0.85)',
      '--t-text':         '#ffffff',
      '--t-texto2':       '#c8ffd8',
      '--t-texto3':       '#d5f8e2',
      '--t-accent':       '#4cf0a0',
      '--t-borda':        'rgba(76,240,160,0.15)',
      '--t-modal':        '#081a0c',
      '--t-btn-text':     '#000000',
      '--t-glow':         'rgba(76,240,160,0.25)',
      '--t-btn-topo-bg':  '#f59e0b',
      '--t-btn-topo-cor': '#000000',
    }
  },

  concreto: {
    nome: 'Concreto',
    cor:  '#d4a853',
    vars: {
      '--t-bg':           '#1a1a1a',
      '--t-card':         '#262626',
      '--t-header':       'rgba(26,26,26,0.92)',
      '--t-text':         '#f0ebe3',
      '--t-texto2':       '#b0a090',
      '--t-texto3':       '#c8bfb0',
      '--t-accent':       '#d4a853',
      '--t-borda':        'rgba(212,168,83,0.2)',
      '--t-modal':        '#2a2a2a',
      '--t-btn-text':     '#000000',
      '--t-glow':         'rgba(212,168,83,0.25)',
      '--t-btn-topo-bg':  '#d4a853',
      '--t-btn-topo-cor': '#000000',
    }
  }
};

// injeta o CSS que conecta as variáveis de tema a TODOS os elementos do site
const estiloTema = document.createElement('style');
estiloTema.textContent = `
  /* Base */
  body                         { background: var(--t-bg)            !important; color: var(--t-text)          !important; }

  /* Header e nav */
  .cabecalho                   { background: var(--t-header)         !important; }
  .menu a                      { color:      var(--t-texto2)         !important; }
  .menu a:hover                { color:      var(--t-accent)         !important; }

  /* Botões */
  .btn-contato, .btn-principal { background: var(--t-accent)         !important; color: var(--t-btn-text)     !important; }
  .btnTopo                     { background: var(--t-btn-topo-bg)    !important; color: var(--t-btn-topo-cor) !important; }

  /* Hero */
  .tag, .secao-tag             { border-color: var(--t-accent)       !important; color: var(--t-accent)       !important; }
  .hero p                      { color:        var(--t-texto2)       !important; }
  .hero-imagem img             { filter: drop-shadow(0 0 25px var(--t-glow)) !important; }

  /* Stats */
  .stat-numero                 { color:      var(--t-accent)         !important; }
  .stat-descricao              { color:      var(--t-texto2)         !important; }

  /* Seção Sobre */
  .sobre-texto                 { background: var(--t-card)           !important; border-color: var(--t-borda) !important; }
  .sobre-texto h2              { color:      var(--t-accent)         !important; }
  .sobre-texto p               { color:      var(--t-texto3)         !important; }

  /* Seções de destaque */
  .secao-texto h2              { color:      var(--t-text)           !important; }
  .secao-texto p               { color:      var(--t-texto2)         !important; }

  /* Seção do time */
  .secao-time                  { background: var(--t-header)         !important; border-color: var(--t-borda) !important; }
  .secao-time h2               { color:      var(--t-accent)         !important; }
  .secao-time .subtitulo       { color:      var(--t-texto2)         !important; }

  /* Cards do time */
  .card-pessoa                 { background: var(--t-card)           !important; border-color: var(--t-borda) !important; }
  .card-pessoa h3              { color:      var(--t-text)           !important; }
  .card-pessoa span            { color:      var(--t-accent)         !important; }
  .avatar                      { color:      var(--t-accent)         !important; border-color: var(--t-borda) !important; }

  /* Modal de contato */
  .modal-box                   { background: var(--t-modal)          !important; }
  .modal-box h2                { color:      var(--t-accent)         !important; }
  .fechar                      { color:      var(--t-texto2)         !important; }
  .fechar:hover                { color:      var(--t-accent)         !important; }
  .contato-item                { background: var(--t-card)           !important; color: var(--t-texto3)       !important; border-color: var(--t-borda) !important; }
  .contato-item .label         { color:      var(--t-accent)         !important; }

  /* Footer */
  .footer-logo                 { color:      var(--t-accent)         !important; }
  .footer-texto                { color:      var(--t-texto2)         !important; }
  .footer-links a              { color:      var(--t-texto2)         !important; }
  .footer-links a:hover        { color:      var(--t-accent)         !important; }
`;
document.head.appendChild(estiloTema);

// aplica as variáveis do tema escolhido no :root
function aplicarTema(chave) {
  const tema = temas[chave];

  Object.entries(tema.vars).forEach(function ([propriedade, valor]) {
    document.documentElement.style.setProperty(propriedade, valor);
  });

  document.querySelectorAll('.btn-tema').forEach(function (btn) {
    btn.style.outline = btn.dataset.tema === chave
      ? '2px solid rgba(255,255,255,0.8)'
      : '2px solid transparent';
  });
}

// cria os botões de tema — lado esquerdo, centralizado verticalmente
const painelTemas = document.createElement('div');
painelTemas.style.cssText = `
  position: fixed; top: 55%; right: 30px;
  transform: translateY(-50%);
  display: flex; flex-direction: column;
  gap: 10px; z-index: 998;
`;

Object.keys(temas).forEach(function (chave) {
  const btn = document.createElement('button');
  btn.className    = 'btn-tema';
  btn.dataset.tema = chave;
  btn.title        = temas[chave].nome;
  btn.style.cssText = `
    width: 22px; height: 22px; border-radius: 50%;
    background: ${temas[chave].cor};
    border: 2px solid rgba(100,100,100,0.4);
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  `;
  btn.addEventListener('mouseenter', function () {
    btn.style.transform = 'scale(1.28)';
    btn.style.boxShadow = '0 0 8px rgba(255,255,255,0.25)';
  });
  btn.addEventListener('mouseleave', function () {
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = 'none';
  });
  btn.addEventListener('click', function () { aplicarTema(chave); });
  painelTemas.appendChild(btn);
});

document.body.appendChild(painelTemas);

// ativa o tema escuro por padrão
aplicarTema('escuro');