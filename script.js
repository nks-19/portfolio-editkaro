function showCategory(category) {
    let items = document.getElementsByClassName('portfolio-item');

    for (let i = 0; i < items.length; i++) {
        if (category === 'all' || items[i].classList.contains(category)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Event listener for hamburger menu toggle
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth Scroll and Hide Navbar
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Get the target section's ID
        const targetId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        
        // Hide the navbar
        navbar.classList.remove('active');

        // Smooth scroll to the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        const video = card.querySelector('.flip-card-back video');
        if (video) {
            video.play();  // Start playing video on hover
        }
    });

    card.addEventListener('mouseleave', () => {
        const video = card.querySelector('.flip-card-back video');
        if (video) {
            video.pause();  // Pause the video when the mouse leaves
            video.currentTime = 0;  // Reset video to start
        }
    });
});
