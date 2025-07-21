document.addEventListener("DOMContentLoaded", () => {
  // Slider automático
  let current = 0;
  const images = document.querySelectorAll(".slider img");
  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 4000);

  // Botão voltar ao topo
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  
  });