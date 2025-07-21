//Lógica para efeito na navbar

const links = document.querySelectorAll('.sub-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

