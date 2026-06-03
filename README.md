<div align="center">

<img src="view/img/orbyn_logo_sem_fundo2.png" alt="Orbyn Logo" width="120"/>

# ORBYN Environment

**Plataforma de análise geoespacial que combina imagens de satélite e inteligência artificial para apoiar o planejamento urbano e rural.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![FIAP](https://img.shields.io/badge/FIAP-Global_Solutions_2025-red?style=flat-square)

</div>

---

## Sobre o Projeto

A **Orbyn Environment** é uma startup fictícia desenvolvida como solução tecnológica para a **Global Solutions da FIAP**, na disciplina de **Front-End Development**.

O desafio envolve a criação de uma solução conectada à **Indústria Espacial** — e a Orbyn responde com uma plataforma de análise territorial que usa dados de satélites públicos (NASA, ESA, INPE, Copernicus) para ajudar governos, produtores rurais e gestores a tomar decisões mais inteligentes.

---

## Por que o Espaço?

| Dado | Impacto |
|------|---------|
| **US$ 1 trilhão** | Tamanho projetado da economia espacial global até 2030 |
| **+6.000 satélites** | Em órbita hoje, gerando dados constantemente |
| **4 bilhões de pessoas** | Ainda sem acesso confiável à internet via satélite |
| **4 APIs abertas** | NASA, ESA, INPE e Copernicus — dados gratuitos e acessíveis |

A Orbyn existe para **transformar esses dados em soluções reais** para cidades e o campo.

---

## Funcionalidades

- **Header fixo** com navegação suave por âncoras
- **Seção Hero** com ilustração animada
- **Contador animado** nas estatísticas, ativado ao rolar até a seção
- **Animação de reveal** — elementos aparecem ao entrar na tela
- **Troca de temas** — 4 paletas de cores alternáveis em tempo real
- **3 seções de soluções** alternadas (Monitoramento, Urbano, Agro)
- **Seção de equipe** com cards dos integrantes
- **Modal de contato** com fechamento ao clicar fora ou pressionar `Esc`
- **Design responsivo** — adaptado para celular, tablet e desktop

---

## Estrutura do Projeto

```
gs-front-orbyn/
└── view/
    ├── index.html        ← Estrutura da página
    ├── css/
    │   └── style.css     ← Estilização e responsividade
    ├── js/
    │   └── script.js     ← Interatividade e temas
    └── img/
        ├── orbyn_logo_sem_fundo2.png
        ├── 1.avif        ← Imagem: Monitoramento
        ├── 2.avif        ← Imagem: Urbano
        └── 3.avif        ← Imagem: Agricultura
```

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização, animações e responsividade |
| **JavaScript ES6** | Interatividade e manipulação do DOM |
| **Google Fonts** | Tipografia: Orbitron + Inter |

> Nenhum framework ou biblioteca externa foi utilizado — **tudo em JavaScript puro.**

---

## Conceitos de JavaScript Aplicados

```
✅ document.getElementById() / querySelector() / querySelectorAll()
✅ addEventListener() — eventos de click, scroll e keydown
✅ classList.add() / remove() / toggle()
✅ element.style / document.createElement() — manipulação dinâmica do DOM
✅ window.scrollY / window.innerHeight
✅ getBoundingClientRect() — detectar visibilidade na tela
✅ requestAnimationFrame() — animação de contadores
✅ element.getAttribute() / dataset — ler atributos data-*
✅ CSS Custom Properties via JS — sistema de temas dinâmico
✅ Math.ceil() / toLocaleString() — formatar números
```

---

## Como Rodar

Sem instalação necessária. Basta abrir o arquivo no navegador:

```bash
# Clone o repositório
git clone https://github.com/dudsbtw/gs-front-orbyn.git

# Acesse a pasta do projeto
cd gs-front-orbyn/view

# Abra o index.html no navegador
```

> **Dica:** Para melhor experiência de desenvolvimento, use a extensão **Live Server** no VS Code — clique com o botão direito em `index.html` → `Open with Live Server`.

---

## Equipe

Desenvolvido por estudantes de **Engenharia de Software** na **FIAP**:

| Nome | RM |
|------|----|
| Eduardo Felix Frois Silva | 574103 |
| Gabriel Henique Ongarelli Reis | 572636 |
| Lucas Rodrigues dos Santos | 571778 |
| Matheus de Amorim Brito | 572435 |
| Thiago Gomes Nascimento | 569436 |

---

## Licença

Projeto desenvolvido para fins acadêmicos — **FIAP Global Solutions 2025**.
