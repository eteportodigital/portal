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

    document.querySelectorAll('.icone-modulo').forEach(botao => {
      botao.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que clique afete o pai
        const moduloCard = botao.closest('.modulo-card');
        const grade = moduloCard.querySelector('.grade-horarios');
        grade.classList.toggle('ativo');
      });
    });