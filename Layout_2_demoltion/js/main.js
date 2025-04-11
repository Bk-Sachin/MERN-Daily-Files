document.addEventListener('DOMContentLoaded', function() {
    // Initialize Splide carousel with autoplay disabled
    var splide = new Splide('#image-carousel', {
        type: 'loop',
        perPage: 1,
        autoplay: false,
        pagination: true,
        arrows: true,
        speed: 800,
        rewind: true,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        drag: false,
    });
    
    splide.mount();
    
    // Add a small delay and check if arrows need additional handling
    setTimeout(function() {
        // Force z-index on arrows if needed
        var arrows = document.querySelectorAll('.splide__arrow');
        arrows.forEach(function(arrow) {
            arrow.style.zIndex = "20";
            arrow.style.pointerEvents = "auto";
        });
    }, 500);
});