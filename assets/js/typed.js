// Text que será digitado
var textToType = "Hi! I'm Werner, better known as 'Tito' ";

// Elemento onde o texto será exibido
var typedTextElement = document.getElementById("typed-text");

// Velocidade de digitação (em milissegundos)
var typingSpeed = 50;

// Função para adicionar caracteres ao elemento
function typeText(index) {
  typedTextElement.innerHTML = textToType.slice(0, index) + '<span style="opacity: 0;">' + textToType.slice(index) + '</span>';
}

// Função para iniciar o efeito de digitação
function startTyping() {
  var index = 0;
  var typingInterval = setInterval(function() {
    typeText(index);
    index++;

    if (index > textToType.length) {
      clearInterval(typingInterval);
    }
  }, typingSpeed);
}

// Iniciar o efeito de digitação quando a página carregar
window.onload = startTyping;
