function showSmileyAndNavigate(url) {
    const smiley = document.createElement('img');
    smiley.src = "html_finalprojimages/smiley.png";
    smiley.width = 100;
    const container = document.getElementById('smileyContainer');
    container.appendChild(smiley);

    setTimeout(() => {
        window.location.href = url;
    }, 3000);
}

document.getElementById('backToTopButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior (in case it's causing issues)
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
});

function addRecommendation() {
    const textarea = document.getElementById('new_recommendation');
    const recommendationsContainer = document.getElementById('all_recommendations');
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation');

    newRecommendation.innerHTML = `
        <span>&#8220;</span>
        ${textarea.value}
        <span>&#8221;</span>
    `;

    recommendationsContainer.appendChild(newRecommendation);
    textarea.value = '';
    showPopup();
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
