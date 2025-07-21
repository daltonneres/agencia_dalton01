document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider img");
  const dotsContainer = document.querySelector(".dots");
  let current = 0;

  // Limpa dots antigos (se houver)
  dotsContainer.innerHTML = "";

  // Cria as bolinhas
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      current = index;
      showSlide(current);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }

  // Começa mostrando a primeira imagem
  showSlide(current);

  // Troca a cada 4 segundos
  setInterval(nextSlide, 4000);

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
});
