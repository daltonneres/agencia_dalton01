document.addEventListener("DOMContentLoaded", () => {
  // CARROSSEL COM SETAS
  const images = document.querySelectorAll(".slider img");
  let current = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
  }

  showSlide(current);

  let slideInterval = setInterval(nextSlide, 4000);

  const btnPrev = document.querySelector(".arrow-left");
  const btnNext = document.querySelector(".arrow-right");

  btnPrev.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  btnNext.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
  }

  // FAQ CARDS: Toggle do conteúdo ao clicar no título
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
});

  // Botão voltar ao topo (mantém seu código)
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }