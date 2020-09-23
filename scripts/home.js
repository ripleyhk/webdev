let audio = new Audio("/sounds/home.mp3");

let choice = document.getElementById("stay");

choice.addEventListener("click", function() {
  audio.play();
  document.getElementsByClassName("curtain")[0].classList.toggle('open-curtain');
  document.getElementById("stay").classList.add('clear');
} );
