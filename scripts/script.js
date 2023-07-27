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

// Handles the custom play button for audio
var audio = document.getElementById('audio');
var playButton = document.getElementById('play-button');

if (audio && playButton) {
  playButton.classList.add('play');

  playButton.addEventListener('click', function() {
      if (audio.paused) {
          // Start audio playback if it's paused
          audio.play();
          playButton.textContent = 'Click play for an enhanced experience and enjoy audio from the game!';
      } else {
          // Pause audio if it's playing
          audio.pause();
          playButton.textContent = 'Click play for an enhanced experience and enjoy audio from the game!';
      }
  });
}

function swapStyleSheet() {
  let currentStyle = document.getElementById('pagestyle').getAttribute('href');
  let imageElement1 = document.getElementById('switchdarkicon'); // replace 'your-image-id' with the actual id of your image
  let imageElement2 = document.getElementById('switchtwittericon');

  if (currentStyle === 'css/styles.css') {
    document.getElementById('pagestyle').setAttribute('href', 'css/stylesdark.css');
    localStorage.setItem('preferredStyleSheet', 'css/stylesdark.css');
    imageElement1.src = 'images/lightthemeicon.png'; // replace with the actual path to your dark mode image
    imageElement2.src = 'images/twitter-drk.png';
    localStorage.setItem('image1Src', 'images/lightthemeicon.png');
    localStorage.setItem('image2Src', 'images/twitter-drk.png');
  } else {
    document.getElementById('pagestyle').setAttribute('href', 'css/styles.css');
    localStorage.setItem('preferredStyleSheet', 'css/styles.css');
    imageElement1.src = 'images/darkthemeicon.png'; // replace with the actual path to your light mode image
    imageElement2.src = 'images/twitter-logo-twitter-icon-transparent-free-free-png.png';
    localStorage.setItem('image1Src', 'images/darkthemeicon.png');
    localStorage.setItem('image2Src', 'images/twitter-logo-twitter-icon-transparent-free-free-png.png');
  }
}


window.onload = function() {
  let preferredStyleSheet = localStorage.getItem('preferredStyleSheet');
  let image1Src = localStorage.getItem('image1Src');
  let image2Src = localStorage.getItem('image2Src');
  let imageElement1 = document.getElementById('switchdarkicon');
  let imageElement2 = document.getElementById('switchtwittericon');
  
  if (preferredStyleSheet) {
    document.getElementById('pagestyle').setAttribute('href', preferredStyleSheet);
  } else {
    document.getElementById('pagestyle').setAttribute('href', 'css/styles.css');
  }

  if (image1Src) {
    imageElement1.src = image1Src;
  } else {
    imageElement1.src = 'images/lightthemeicon.png';
  }
  
  if (image2Src) {
    imageElement2.src = image2Src;
  } else {
    imageElement2.src = 'images/twitter-logo-twitter-icon-transparent-free-free-png.png';
  }
}
