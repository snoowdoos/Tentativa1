const items = document.querySelectorAll(".item-lista");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

items.forEach(item => observer.observe(item));
// --- FUNÇÕES DE MÚSICA QUE VOCÊ JÁ TINHA ---

function mostrarIvy() {
  if (window.navigator.vibrate) window.navigator.vibrate(50);
  const ivy = document.getElementById("ivy-player");
  const best = document.getElementById("best-player");
  const btnBest = document.getElementById("btn-best");
  const disco = document.getElementById("disco");

  ivy.classList.remove("hidden");
  best.classList.add("hidden");
  btnBest.classList.remove("hidden");
  
  disco.classList.add("tocando");
  disco.classList.remove("best-mode");

  document.body.classList.add("modo-musica");
  document.body.classList.remove("modo-best");
}

function mostrarBest() {
  if (window.navigator.vibrate) window.navigator.vibrate(50);
  const ivy = document.getElementById("ivy-player");
  const best = document.getElementById("best-player");
  const btnBest = document.getElementById("btn-best");
  const disco = document.getElementById("disco");

  best.classList.remove("hidden");
  ivy.classList.add("hidden");
  btnBest.classList.add("hidden");

  disco.classList.add("tocando");
  disco.classList.add("best-mode");

  document.body.classList.add("modo-best");
  document.body.classList.remove("modo-musica");

  best.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// --- NOVAS FUNÇÕES PARA O BOTÃO DE PERGAMINHO E MODAL ---

function abrirjanela() {
  const modal = document.getElementById('janelapapel');
  const overlay = document.getElementById('overlay');
  
  // Como você está usando Tailwind e CSS manual, o mais seguro é:
  modal.style.display = 'block';
  overlay.style.display = 'block';
  
  // Impede o scroll do fundo quando a carta estiver aberta
  document.body.style.overflow = 'hidden';
  // Feedback vibratório opcional (se o celular suportar)
  if (window.navigator.vibrate) window.navigator.vibrate(30);
}

function fecharjanela() {
  const modal = document.getElementById('janelapapel');
  const overlay = document.getElementById('overlay');
  
  modal.style.display = 'none';
  overlay.style.display = 'none';
  
  // Devolve o scroll ao fundo
  document.body.style.overflow = 'auto';
}
