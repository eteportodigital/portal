//Lógica para efeito na navbar

const links = document.querySelectorAll(".sub-link");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Lógica para menu hambúrguer mobile
document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const closeMenu = document.getElementById("closeMenu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Abrir menu mobile
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", function() {
      mobileMenuOverlay.style.display = "block";
      document.body.style.overflow = "hidden"; // Previne scroll do body
    });
  }

  // Fechar menu mobile
  if (closeMenu) {
    closeMenu.addEventListener("click", function() {
      mobileMenuOverlay.style.display = "none";
      document.body.style.overflow = "auto"; // Restaura scroll do body
    });
  }

  // Fechar menu ao clicar em um link
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", function() {
      mobileMenuOverlay.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  // Fechar menu ao clicar fora do conteúdo
  mobileMenuOverlay.addEventListener("click", function(e) {
    if (e.target === mobileMenuOverlay) {
      mobileMenuOverlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Fechar menu com tecla ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && mobileMenuOverlay.style.display === "block") {
      mobileMenuOverlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Lógica do paginador
  const cardsPorPagina = 3;
  const cards = document.querySelectorAll(".grid-cards .card");
  const paginador = document.getElementById("paginador");
  let paginaAtual = 1;

  function mostrarPagina(pagina) {
    paginaAtual = pagina;

    const inicio = (pagina - 1) * cardsPorPagina;
    const fim = inicio + cardsPorPagina;

    cards.forEach((card, index) => {
      if (index >= inicio && index < fim) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    atualizarPaginador();
  }

  function atualizarPaginador() {
    const totalPaginas = Math.ceil(cards.length / cardsPorPagina);
    paginador.innerHTML = "";

    for (let i = 1; i <= totalPaginas; i++) {
      const botao = document.createElement("button");
      botao.textContent = i;
      botao.className = "paginador-botao";
      if (i === paginaAtual) {
        botao.classList.add("ativo");
      }
      botao.addEventListener("click", () => mostrarPagina(i));
      paginador.appendChild(botao);
    }
  }

  // Iniciar com a primeira página
  mostrarPagina(1);
});