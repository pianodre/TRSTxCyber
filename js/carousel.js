document.addEventListener('DOMContentLoaded', function() {
    // Get all dots and slides container
    const dots = document.querySelectorAll('.dot');
    const slidesContainer = document.querySelector('.carousel-slides-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    // Set initial position
    let currentSlide = 0;
    let autoScrollTimer;
    
    // Function to get current gap value based on screen size
    function getCurrentGap() {
        // Check if we're on mobile (matches CSS media query)
        if (window.innerWidth <= 768) {
            return 0; // Mobile gap
        } else {
            return 20; // Desktop gap
        }
    }
    
    // Function to update the carousel position
    function updateCarousel() {
        // Get the slide width and current gap
        const slideWidth = slides[0].offsetWidth;
        const gap = getCurrentGap();
        
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
    
    // Function to start auto-scroll timer
    function startAutoScroll() {
        autoScrollTimer = setInterval(function() {
            // Increment current slide
            currentSlide++;
            
            // Loop back to first slide if needed
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            
            // Update carousel
            updateCarousel();
        }, 5000);
    }
    
    // Function to reset auto-scroll timer
    function resetAutoScroll() {
        clearInterval(autoScrollTimer);
        startAutoScroll();
    }
    
    // Add click event to each dot
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // Update current slide
            currentSlide = parseInt(this.getAttribute('data-index'));
            
            // Update carousel
            updateCarousel();
            
            // Reset the auto-scroll timer
            resetAutoScroll();
        });
    });
    
    // Start the auto-scroll timer
    startAutoScroll();
    
    // Add window resize listener to recalculate carousel position
    window.addEventListener('resize', function() {
        // Recalculate carousel position when screen size changes
        updateCarousel();
    });
});
