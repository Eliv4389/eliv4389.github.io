// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation feedback (browser-dependent)
document.querySelector('form').addEventListener('submit', function (e) {
    let valid = true;
    document.querySelectorAll('form input[required], form textarea[required]').forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            alert("Please fill out all required fields.");
        }
    });
    if (!valid) e.preventDefault();
});
