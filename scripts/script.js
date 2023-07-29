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
          audio.play();
          playButton.textContent = 'Click to play for an enhanced experience and enjoy audio from the game!';
      } else {
          audio.pause();
          playButton.textContent = 'Click to play for an enhanced experience and enjoy audio from the game!';
      }
  });
}

// Function swaps style sheet when image icon is clicked and switches light/dark mode icons
// Selections saved to local storage for persistance across webpages
function swapStyleSheet() {
  let currentStyle = document.getElementById('pagestyle').getAttribute('href');
  let imageElement1 = document.getElementById('switchdarkicon');
  let imageElement2 = document.getElementById('switchtwittericon');

  if (currentStyle === 'css/styles.css') {
    document.getElementById('pagestyle').setAttribute('href', 'css/stylesdark.css');
    localStorage.setItem('preferredStyleSheet', 'css/stylesdark.css');
    imageElement1.src = 'images/lightthemeicon.png';
    imageElement2.src = 'images/twitter-drk.png';
    localStorage.setItem('image1Src', 'images/lightthemeicon.png');
    localStorage.setItem('image2Src', 'images/twitter-drk.png');
  } else {
    document.getElementById('pagestyle').setAttribute('href', 'css/styles.css');
    localStorage.setItem('preferredStyleSheet', 'css/styles.css');
    imageElement1.src = 'images/darkthemeicon.png';
    imageElement2.src = 'images/twitter-logo-twitter-icon-transparent-free-free-png.png';
    localStorage.setItem('image1Src', 'images/darkthemeicon.png');
    localStorage.setItem('image2Src', 'images/twitter-logo-twitter-icon-transparent-free-free-png.png');
  }
}

// Function checks local storage when browser loaded to retain previously selected stylesheet/icon
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

// Function cycles through images on home page
function cycleImages() {
  var images = ["images/homestray.jpeg", "images/homeds.jpeg", "images/homehorizon.jpeg", "images/homegot.jpeg"];
  var currentIndex = 0;
  var image = document.getElementById("myImage");
  var fadeOutTime = 1000;

  setInterval(function() {
    image.style.opacity = 0;

    // Updates image source and resets opacity after fadeout
    setTimeout(function() {
      image.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
      image.style.opacity = 1;
    }, fadeOutTime);

  }, 4000);
}

document.addEventListener("DOMContentLoaded", function() {
  cycleImages();
});

