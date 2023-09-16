function showSmileyAndNavigate(url) {
  const container = document.getElementById("smileyContainer");
  container.innerHTML = "😊"; // Unicode for the smiley emoji
  
  // Navigate to the URL after a short delay to allow time for the smiley to show
  setTimeout(function() {
    window.location.href = url;
  }, 1000); // 1000 milliseconds = 1 second
}