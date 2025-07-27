//Lógica para efeito na navbar

const links = document.querySelectorAll('.sub-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


//---------------------- HORÁRIOS --------------------------------------

const moduloCards = document.querySelectorAll('.modulo-card');

moduloCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('ativo');
  });

  // Previne duplo clique no ícone de disparar duas vezes
  const icon = card.querySelector('.icone-modulo');
  icon.addEventListener('click', e => e.stopPropagation());
});