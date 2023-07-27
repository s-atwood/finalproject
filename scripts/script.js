/*
  Name: Shawn Atwood
  Date: 7/10/2023
  Filename: scripts.js
*/

// Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// JavaScript to handle the custom play button
var audio = document.getElementById('audio');
var playButton = document.getElementById('play-button');
playButton.classList.add('play');

playButton.addEventListener('click', function() {
    if (audio.paused) {
        // Start audio playback if it's paused
        audio.play();
        playButton.textContent = '\u25FC';
    } else {
        // Pause audio if it's playing
        audio.pause();
        playButton.textContent = '\u25B6';
    }
});
