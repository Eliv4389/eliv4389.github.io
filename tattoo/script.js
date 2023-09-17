document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.getElementById("about");
  aboutSection.innerHTML = `
    <p><strong>Anna Vidal:</strong> The enigmatic, cat-loving artist behind the Muitos Gatinhos Tattoo Studio.</p>
    <p>Anna had a tattoo studio in Ukraine, which was the go-to spot for every cool cat in town. But life threw a curveball, and the studio was damaged due to the ongoing war. Like a phoenix, Anna didn't let this bring her down. She packed her bags, her cats, and her tattoo equipment and relocated to Brazil.</p>
    <p>In Brazil, Anna was like a kid in a candy store. Inspired by the culture, the music, the dance, and, of course, the beaches, her art found a new form of expression. Within weeks of her arrival, she set up Muitos Gatinhos Tattoo, and the buzz spread faster than spilled ink on a workbench.</p>
    <p>They say Anna's tattoo studio has some mystical aura, where the ink takes a life of its own. Some say they've seen her cats frolic around the parlor late at night when the shop is closed, performing some strange, cute rituals. But hey, that's just what people say.</p>
    <p>So if you're up for a tattoo experience that's out of this world, literally, then drop by. And oh, don't forget to pet the cats!</p>
  `;

  const gallery = document.getElementById("gallery");
  for (let i = 1; i <= 10; i++) {
    const img = document.createElement("img");
    img.src = `./${i}.jpg`;
    gallery.appendChild(img);
  }

  // Image rotation logic
  let index = 0;
  const images = document.querySelectorAll("#gallery img");

  const showNextImage = () => {
    images[index].classList.add("active");
    index = (index + 1) % images.length;

    if (index === 0) {
      clearInterval(interval);
    }
  };

  const interval = setInterval(showNextImage, 2000);
});
