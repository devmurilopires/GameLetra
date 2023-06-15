// script.js

var currentLetterIndex = 0;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var audioElement = null;

function startGame() {
  document.getElementById("game").style.display = "block";
  generateLetter();
}

function generateLetter() {
  var letterBox = document.getElementById("letter-box");
  letterBox.innerHTML = letters[currentLetterIndex];

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
