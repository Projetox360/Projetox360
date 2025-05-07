const videos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumb: "https://via.placeholder.com/300x160.png?text=Vídeo+1",
    corPele: "branca",
    corOlhos: "azuis",
    altura: "1.70m",
    peso: "60kg",
    tamanhoPeito: "médio",
    tamanhoBunda: "grande",
    tamanhoPau: "16cm",
    tamanhoPe: "39",
    local: "quarto"
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    thumb: "https://via.placeholder.com/300x160.png?text=Vídeo+2",
    corPele: "parda",
    corOlhos: "castanhos",
    altura: "1.65m",
    peso: "55kg",
    tamanhoPeito: "pequeno",
    tamanhoBunda: "médio",
    tamanhoPau: "15cm",
    tamanhoPe: "37",
    local: "sala"
  }
];

function renderVideos(filtrados) {
  const section = document.getElementById("videoSection");
  section.innerHTML = "";

  if (filtrados.length === 0) {
    section.innerHTML = "<p>Nenhum vídeo encontrado com os filtros aplicados.</p>";
    return;
  }

  filtrados.forEach(video => {
    const videoDiv = document.createElement("div");
    videoDiv.className = "video-card";
    videoDiv.innerHTML = `
      <img src="${video.thumb}" alt="Thumbnail do vídeo">
      <video controls width="300">
        <source src="${video.src}" type="video/mp4">
        Seu navegador não suporta vídeo HTML5.
      </video>
      <p>Local: ${video.local}</p>
    `;
    section.appendChild(videoDiv);
  });
}

document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const filtros = Object.fromEntries(formData.entries());

  const filtrados = videos.filter(video => {
    return Object.keys(filtros).every(key => {
      return !filtros[key] || video[key]?.toLowerCase().includes(filtros[key].toLowerCase());
    });
  });

  renderVideos(filtrados);
});

// Adicionar vídeo manualmente
document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const novoVideo = Object.fromEntries(formData.entries());
  novoVideo.id = videos.length + 1;

  videos.push(novoVideo);
  alert("Vídeo enviado com sucesso!");
  this.reset();
  renderVideos(videos);
});

renderVideos(videos);
