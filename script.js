document.addEventListener("DOMContentLoaded", function() {
    // Código para el juego de adivinanza
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guessInput = document.getElementById("guessInput");
    var guessButton = document.getElementById("guessButton");
    var resultDiv = document.getElementById("result");
  
    guessButton.addEventListener("click", function() {
      var guess = parseInt(guessInput.value);
  
      if (isNaN(guess) || guess < 1 || guess > 100) {
        resultDiv.innerHTML = "Por favor, introduce un número válido entre 1 y 100.";
      } else {
        if (guess === randomNumber) {
          resultDiv.innerHTML = "¡Adivinaste, MUY BIEN MI AMOR! El número era " + randomNumber + ". ¡Felicitaciones!";
        } else {
          var message = guess < randomNumber ? "¡Demasiado bajo!" : "¡Demasiado alto!";
          resultDiv.innerHTML = message + " Intenta de nuevo.";
        }
      }
    });
  
    // Reproductor de música estilo Spotify
    var backgroundMusic = document.getElementById('backgroundMusic');
    var playPauseButton = document.getElementById('playPauseButton');
    var progressBar = document.getElementById('progressBar');
  
    playPauseButton.addEventListener('click', function() {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseButton.innerHTML = '&#10074;&#10074;'; // Cambia el ícono a pausa
      } else {
        backgroundMusic.pause();
        playPauseButton.innerHTML = '&#9658;'; // Cambia el ícono a reproducción
      }
    });
  
    backgroundMusic.addEventListener('timeupdate', function() {
      var progress = (backgroundMusic.currentTime / backgroundMusic.duration) * 100;
      progressBar.style.width = progress + '%';
    });
  
    // Espera 142,200 segundos (2 minutos y 22 segundos) antes de reproducir la música
    setTimeout(function() {
      backgroundMusic.play();
    }, 142200000);
  });
  