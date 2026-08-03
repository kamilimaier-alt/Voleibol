// Seleciona os elementos do HTML
const modal = document.getElementById('meuModal');
const btnAbrir = document.getElementById('btnAbrirModal');
const btnFechar = document.querySelector('.fechar');

// Abre a janela ao clicar no botão
btnAbrir.onclick = function() {
  modal.style.display = 'block';
}

// Fecha a janela ao clicar no (X)
btnFechar.onclick = function() {
  modal.style.display = 'none';
}

// Fecha a janela se o usuário clicar fora do conteúdo
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
