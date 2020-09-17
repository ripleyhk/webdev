var audio = new Audio("/sounds/frog.mp3");
var frog = document.getElementById("frog");

frog.addEventListener("click", function() {audio.play();} );