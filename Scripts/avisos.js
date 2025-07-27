//Lógica para efeito na navbar

const links = document.querySelectorAll('.sub-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Lógica do paginador

const cardsPorPagina = 3;
const cards = document.querySelectorAll('.grid-cards .card');
const paginador = document.getElementById('paginador');
let paginaAtual = 1;

function mostrarPagina(pagina) {
  paginaAtual = pagina;

  const inicio = (pagina - 1) * cardsPorPagina;
  const fim = inicio + cardsPorPagina;

  cards.forEach((card, index) => {
    if (index >= inicio && index < fim) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  atualizarPaginador();
}

function atualizarPaginador() {
  const totalPaginas = Math.ceil(cards.length / cardsPorPagina);
  paginador.innerHTML = '';

  for (let i = 1; i <= totalPaginas; i++) {
    const botao = document.createElement('button');
    botao.textContent = i;
    botao.className = 'paginador-botao';
    if (i === paginaAtual) {
      botao.classList.add('ativo');
    }
    botao.addEventListener('click', () => mostrarPagina(i));
    paginador.appendChild(botao);
  }
}

// Iniciar com a primeira página
mostrarPagina(1);