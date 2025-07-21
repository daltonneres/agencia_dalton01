const slides = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const intervalTime = 4000; // tempo entre slides em ms
let slideInterval;

// Função para mostrar o slide no índice escolhido
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentIndex = index;
}

// Próximo slide (com loop)
function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

// Inicia troca automática
function startSlideShow() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Para troca automática
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Clique nas bolinhas para trocar slide e reiniciar autoplay
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    stopSlideShow();
    showSlide(idx);
    startSlideShow();
  });
});

// Inicializa mostrando o primeiro slide e começa o autoplay
showSlide(0);
startSlideShow();

/* -------------------- */
/* Seu código FAQ e botão voltar ao topo aqui, sem alterações */
const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach(card => {
  const title = card.querySelector("h3");
  const content = card.querySelector("p");

  content.style.display = "none"; // inicializa escondido
  title.style.cursor = "pointer";

  title.addEventListener("click", () => {
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});

const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
