function showSmileyAndNavigate(url) {
  const container = document.getElementById("smileyContainer");
  container.innerHTML = "😊"; // Unicode for the smiley emoji
  
  // Navigate to the URL after a short delay to allow time for the smiley to show
  setTimeout(function() {
    window.location.href = url;
  }, 1000); // 1000 milliseconds = 1 second
}


function changeBackground() {
  document.body.style.backgroundColor = "lightblue"; // Or any color you like
}

function playAudio() {
  const audio = document.querySelector("audio");
  audio.play();
}

function pauseAudio() {
  const audio = document.querySelector("audio");
  audio.pause();
}

let text = "Hi 👋, I'm Eli";
let index = 0;
let targetElement = document.getElementById('title');
let newText = "";

function animateText() {
  if (index < text.length) {
    let codePoint = text.codePointAt(index);

    // Add the character to newText
    newText += String.fromCodePoint(codePoint);
    
    // Update the innerText of the target element
    targetElement.innerText = newText;

    // If the code point is above 0xFFFF, we are dealing with a surrogate pair.
    // Skip the next index since we've already processed both parts of the surrogate pair.
    if (codePoint > 0xFFFF) {
      index += 2;
    } else {
      index++;
    }

    setTimeout(animateText, 300); // 300ms delay between characters
  }
}

window.onload = function() {
  animateText();
};


function toggleDescription() {
  const para = document.querySelector("p");
  if (para.style.display === "none" || para.style.display === "") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}

document.querySelectorAll("tr").forEach(row => {
  row.addEventListener("mouseover", function() {
    // Show tooltip
  });
  row.addEventListener("mouseout", function() {
    // Hide tooltip
  });
});

function startTimer() {
  // Your countdown logic here
}

let currentImage = 0;
function nextImage() {
  // Show next image in the array
}


document.addEventListener("DOMContentLoaded", function() {
  // Make sure the DOM is fully loaded
  let countdownElement = document.getElementById("countdown");
  let countdownValue = 10;

  document.getElementById("startCountdown").addEventListener("click", function() {
    let intervalId = setInterval(function() {
      countdownElement.textContent = countdownValue;

      if (countdownValue <= 0) {
        clearInterval(intervalId);
        countdownElement.textContent = "Time's up!";
      }

      countdownValue -= 1;
    }, 1000);
  });
});
