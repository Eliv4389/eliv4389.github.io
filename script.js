function showSmileyAndNavigate(url) {
  const container = document.getElementById("smileyContainer");
  container.innerHTML = "😊"; // Unicode for the smiley emoji
  
  // Navigate to the URL after a short delay to allow time for the smiley to show
  setTimeout(function() {
    window.location.href = url;
  }, 1000); // 1000 milliseconds = 1 second
}

function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Call showPopup here
    showPopup(true);

    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = '<span>&#8220;</span>' + recommendation.value + '<span>&#8221;</span>';
    document.getElementById("all_recommendations").appendChild(element);

    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
