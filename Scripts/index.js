//Lógica para efeito na navbar

const links = document.querySelectorAll('.sub-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Lógica para menu hambúrguer mobile
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const closeMenu = document.getElementById('closeMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Abrir menu mobile
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function() {
      mobileMenuOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Previne scroll do body
    });
  }

  // Fechar menu mobile
  if (closeMenu) {
    closeMenu.addEventListener('click', function() {
      mobileMenuOverlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura scroll do body
    });
  }

  // Fechar menu ao clicar em um link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  // Fechar menu ao clicar fora do conteúdo
  mobileMenuOverlay.addEventListener('click', function(e) {
    if (e.target === mobileMenuOverlay) {
      mobileMenuOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Fechar menu com tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenuOverlay.style.display === 'block') {
      mobileMenuOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});


