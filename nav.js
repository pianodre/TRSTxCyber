// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Wait for the navigation to be loaded
    setTimeout(function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.nav-links');
        let isOpen = false;
        
        if (hamburgerMenu && navLinks) {
            // Add hover event to hamburger menu
            hamburgerMenu.addEventListener('mouseenter', function() {
                if (!isOpen) {
                    // Open the menu
                    navLinks.style.opacity = '1';
                    navLinks.style.visibility = 'visible';
                    navLinks.style.transform = 'translateY(0)';
                    isOpen = true;
                } else {
                    // Close the menu
                    navLinks.style.opacity = '0';
                    navLinks.style.visibility = 'hidden';
                    navLinks.style.transform = 'translateY(-10px)';
                    isOpen = false;
                }
            });
            
            // Keep menu open when hovering over nav links
            navLinks.addEventListener('mouseenter', function() {
                navLinks.style.opacity = '1';
                navLinks.style.visibility = 'visible';
                navLinks.style.transform = 'translateY(0)';
                isOpen = true;
            });
            
            // Close menu when mouse leaves nav links
            navLinks.addEventListener('mouseleave', function() {
                if (!hamburgerMenu.matches(':hover')) {
                    navLinks.style.opacity = '0';
                    navLinks.style.visibility = 'hidden';
                    navLinks.style.transform = 'translateY(-10px)';
                    isOpen = false;
                }
            });
        }
    }, 200); // Small delay to ensure navigation is loaded
});
