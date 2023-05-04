const botao = document.getElementById('botao');
const texto = document.getElementById('texto');
const audio = document.getElementById('audio');

// Adicione um ouvinte de evento ao botão para converter o texto em áudio
botao.addEventListener('click', () => {
  // Crie um objeto de fala
  const utterance = new SpeechSynthesisUtterance(texto.value);

  // Use a API de síntese de fala para gerar um arquivo de áudio
  window.speechSynthesis.speak(utterance);

  // Atualize o elemento de áudio com o novo áudio gerado
  const blob = new Blob([new Uint8Array(0)]);
  const url = URL.createObjectURL(blob);
  audio.src = url;
});

  
  