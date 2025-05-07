function allowAccess() {
  document.getElementById("age-verification").style.display = "none";
}

function denyAccess() {
  alert("Você precisa ter mais de 18 anos para acessar.");
  window.location.href = "https://google.com";
}

document.getElementById("filters").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Busca ativada! Em breve, resultados reais serão exibidos.");
});
