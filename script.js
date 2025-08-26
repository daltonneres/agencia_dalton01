// Abrir popup automaticamente ao carregar a página
window.onload = function() {
  document.getElementById("popup").style.display = "flex";
}

// Fechar popup
function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function mostrarImagem(event) {
  event.preventDefault(); // não recarrega a página
  document.getElementById("popupImg").style.display = "flex";
}

function fecharImagem() {
  document.getElementById("popupImg").style.display = "none";
}

// OPEN

function toggleCard(el) {
  const card = el.closest(".consulta-card");
  const allCards = document.querySelectorAll(".consulta-card");

  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove("open"); // fecha todos os outros
    }
  });

  card.classList.toggle("open"); // abre/fecha o card clicado
}

// Botão Voltar ao Iníco
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
