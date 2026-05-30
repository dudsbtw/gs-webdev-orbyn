# 🛰️ Orbyn — Inteligência Espacial

> Plataforma de análise geoespacial que combina imagens de satélite e inteligência artificial para apoiar o planejamento urbano e rural.

<br>

## 📌 Sobre o Projeto

A **Orbyn Environment** é uma startup fictícia desenvolvida como solução tecnológica para a **Global Solutions da FIAP**, na disciplina de **Front-End Development**.

O desafio proposto envolve a criação de uma solução conectada à **Indústria Espacial** — e a Orbyn responde a esse desafio com uma plataforma de análise territorial que usa dados de satélites públicos (NASA, ESA, INPE, Copernicus) para ajudar governos, produtores rurais e gestores a tomar decisões mais inteligentes.

<br>

## 🌍 Contexto — Por que o Espaço?

| Dado | Impacto |
|------|---------|
| **US$ 1 trilhão** | Tamanho projetado da economia espacial global até 2030 |
| **+6.000 satélites** | Em órbita hoje, gerando dados constantemente |
| **4 bilhões de pessoas** | Ainda sem acesso confiável à internet via satélite |
| **4 APIs abertas** | NASA, ESA, INPE e Copernicus — dados gratuitos para quem saber usá-los |

A Orbyn existe para **transformar esses dados em soluções reais** para cidades e o campo.

<br>

## ✨ Funcionalidades do Site

- **Header fixo** com navegação suave por âncoras
- **Menu hambúrguer** funcional para dispositivos móveis
- **Seção Hero** com ilustração SVG animada de satélite em órbita
- **Contador animado** nas estatísticas (ativa ao rolar até a seção)
- **Animação de reveal** — elementos aparecem ao entrar na tela
- **3 seções de soluções** alternadas (Monitoramento, Urbano, Agro)
- **Seção de equipe** com cards dos integrantes
- **Modal de contato** com fechamento ao clicar fora
- **Design responsivo** — adaptado para celular, tablet e desktop

<br>

## 🗂️ Estrutura do Projeto

```
gs-front-orbyn/
└── view/
    ├── index.html        ← Estrutura da página (HTML)
    ├── css/
    │   └── style.css     ← Estilização (CSS)
    ├── js/
    │   └── script.js     ← Interatividade (JavaScript)
    └── img/
        ├── orbyn_logo_sem_fundo2.png
        ├── 1.avif        ← Imagem: Monitoramento
        ├── 2.avif        ← Imagem: Urbano
        └── 3.avif        ← Imagem: Agricultura
```

<br>

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização, animações e responsividade |
| **JavaScript (ES6)** | Interatividade e manipulação do DOM |
| **Google Fonts** | Tipografia: Orbitron + Inter |
| **SVG** | Ilustração inline do satélite na seção Hero |

Nenhum framework ou biblioteca externa foi utilizado — **tudo em JavaScript puro.**

<br>

## 🧠 Conceitos de JavaScript Aplicados

```
✅ document.getElementById() / querySelector() / querySelectorAll()
✅ addEventListener() — eventos de click e scroll
✅ classList.add() / remove() / toggle()
✅ element.style.display — mostrar/esconder elementos
✅ window.scrollY / window.innerHeight
✅ getBoundingClientRect() — detectar visibilidade na tela
✅ setInterval() / clearInterval() — animação de contador
✅ element.getAttribute() — ler atributos data-*
✅ Math.floor() / toLocaleString() — formatar números
```

<br>

## 🚀 Como Rodar

**Sem instalação necessária.** Basta abrir o arquivo no navegador:

```bash
# Clone o repositório
git clone https://github.com/dudsbtw/gs-front-orbyn.git

# Acesse a pasta do projeto
cd gs-front-orbyn/view

# Abra o arquivo index.html no seu navegador
# (pode arrastar o arquivo para o navegador ou abrir direto)
```

> **Dica:** Para uma melhor experiência de desenvolvimento, use a extensão **Live Server** no VS Code. Basta clicar com o botão direito no `index.html` → `Open with Live Server`.

<br>

## 👥 Equipe

Desenvolvido por estudantes de **Engenharia de Software** na **FIAP**:

| Nome | RM |
|------|-----|
| Eduardo Felix Frois Silva | 574103 |
| Gabriel Henique Ongarelli Reis | 572636 |
| Lucas Rodrigues dos Santos | 571778 |
| Matheus de Amorim Brito | 572435 |
| Thiago Gomes Nascimento | 569436 |

<br>

## 📄 Licença

Projeto desenvolvido para fins acadêmicos — **FIAP Global Solutions 2025**.

---

<p align="center">
  Feito com 🛰️ pela equipe <strong>Orbyn</strong>
</p>
