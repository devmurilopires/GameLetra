// script.js

var currentLetterIndex = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var audioElement = null;

function startGame() {
  document.getElementById("game").style.display = "block";
  generateLetter();
}

function generateLetter() {
  var letterBox = document.getElementById("letter-box");
  var letterImage = document.createElement("img");
  letterImage.src = "letras/" + letters[currentLetterIndex].toLowerCase() + ".png";
  letterBox.innerHTML = "";
  letterBox.appendChild(letterImage);

  // Inicializar o elemento de áudio
  var audioFile = "audio/" + letters[currentLetterIndex].toLowerCase() + ".mp3";
  audioElement = new Audio(audioFile);
}

function playAudio() {
  audioElement.play();
}

function previousLetter() {
  if (currentLetterIndex > 0) {
    currentLetterIndex--;
    generateLetter();
  }
}

function nextLetter() {
  if (currentLetterIndex < letters.length - 1) {
    currentLetterIndex++;
    generateLetter();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("end-game").style.display = "block";
}

function restartGame() {
  currentLetterIndex = 0;
  document.getElementById("game").style.display = "block";
  document.getElementById("end-game").style.display = "none";
  generateLetter();
}
