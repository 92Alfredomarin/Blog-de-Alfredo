document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll("article, section");

  elementos.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease-out";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  elementos.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("article, #contacto");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});

div.innerHTML = `<p>${post.texto}</p><small>${fecha}</small><hr>`;
