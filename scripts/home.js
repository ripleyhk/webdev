let audio = new Audio("/sounds/home.mp3");

let choice = document.getElementById("stay");

choice.addEventListener("click", function() {
  audio.play();
  document.getElementsByTagName("body")[0].classList.add('night');
  document.getElementById("stay").classList.add('clear');
} );
