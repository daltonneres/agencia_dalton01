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

const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
  const title = card.querySelector("h3");
  const content = card.querySelector("p");

  content.style.display = "none"; // Inicialmente esconde o conteúdo

  title.style.cursor = "pointer";

  title.addEventListener("click", () => {
    // Fecha todas as outras perguntas
    faqCards.forEach((otherCard) => {
      const otherContent = otherCard.querySelector("p");
      if (otherCard !== card) {
        otherContent.style.display = "none";
      }
    });

    // Alterna visibilidade da pergunta atual
    content.style.display =
      content.style.display === "none" ? "block" : "none";
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

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, {
    threshold: 0.15, // 15% do elemento visível para ativar
  });

  // Seleciona os elementos que terão animação ao aparecer
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

  elementsToAnimate.forEach(el => observer.observe(el));
});

function demoRelatorio(tipo) {
  let inputId = tipo === "básico" ? "cpf-basico" : "cpf-avancado";
  let resultId = tipo === "básico" ? "resultado-basico" : "resultado-avancado";

  let valor = document.getElementById(inputId).value.trim();
  let resultado = document.getElementById(resultId);

  if (valor === "") {
    resultado.innerHTML = "⚠️ Digite um CPF ou CNPJ para simular.";
    resultado.style.display = "block";
    return;
  }

  if (tipo === "básico") {
    resultado.innerHTML = `
      <strong>Resultado da Simulação:</strong><br>
      ✅ Cadastro encontrado<br>
      ✅ Score: 720<br>
      ✅ Nenhum protesto<br>
      ⚠️ 1 negativação ativa
    `;
  } else {
    resultado.innerHTML = `
      <strong>Resultado da Simulação:</strong><br>
      ✅ Cadastro encontrado<br>
      ✅ Score: 650<br>
      ⚠️ 2 protestos ativos<br>
      ⚠️ 3 negativação(ões)<br>
      📊 Limite de crédito sugerido: R$ 15.000<br>
      💰 Faturamento presumido: R$ 80.000/mês
    `;
  }

  resultado.style.display = "block";
}
