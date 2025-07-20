document.addEventListener('DOMContentLoaded', function() {
    // Get all dots and slides container
    const dots = document.querySelectorAll('.dot');
    const slidesContainer = document.querySelector('.carousel-slides-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    // Set initial position
    let currentSlide = 0;
    
    // Function to update the carousel position
    function updateCarousel() {
        // Get the slide width including the gap
        const slideWidth = slides[0].offsetWidth;
        const gap = 20; // This should match the CSS gap value
        
        // Calculate the translation value based on current slide
        const translateValue = -(currentSlide * (slideWidth + gap)) + 'px';
        
        // Apply the translation to the slides container
        slidesContainer.style.transform = 'translateX(' + translateValue + ')';
        
        // Update active dot
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Add click event to each dot
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // Update current slide
            currentSlide = parseInt(this.getAttribute('data-index'));
            
            // Update carousel
            updateCarousel();
        });
    });
    
    // Auto-rotate carousel every 5 seconds
    setInterval(function() {
        // Increment current slide
        currentSlide++;
        
        // Loop back to first slide if needed
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        
        // Update carousel
        updateCarousel();
    }, 5000);
});
