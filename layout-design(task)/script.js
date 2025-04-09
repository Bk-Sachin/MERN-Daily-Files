document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu button and navigation menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Add click event to hamburger menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}); 