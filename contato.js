const campoBusca = document.querySelector("#busca");
const cards = document.querySelectorAll(".card");

if (campoBusca) {
  campoBusca.addEventListener("input", () => {
    const termo = campoBusca.value.toLowerCase();

    cards.forEach(card => {
      const titulo = card.dataset.titulo.toLowerCase();
      const autor = card.dataset.autor.toLowerCase();

      if (titulo.includes(termo) || autor.includes(termo)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
}
