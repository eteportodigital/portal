//Lógica para efeito na navbar

const links = document.querySelectorAll('.sub-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


//---------------------- HORÁRIOS --------------------------------------

const toggles = document.querySelectorAll('.modulo-toggle');

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const modulo = btn.parentElement;
      const grade = modulo.querySelector('.grade-horarios');
      const seta = btn.querySelector('.seta');

      const aberto = !grade.hasAttribute('hidden');

      // Fecha todos os módulos
      document.querySelectorAll('.grade-horarios').forEach(g => g.setAttribute('hidden', true));
      document.querySelectorAll('.seta').forEach(s => s.textContent = '▲');

      // Abre ou fecha atual
      if (!aberto) {
        grade.removeAttribute('hidden');
        seta.textContent = '▼';
      }
    });
  });