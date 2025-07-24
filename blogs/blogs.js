// Load navigation only (footer is handled by footer.js)
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation from main site with path adjustments
    fetch('../nav.html')
        .then(response => response.text())
        .then(data => {
            // Replace all relative paths with paths that include the parent directory
            let modifiedData = data
                .replace(/href="([^"]*)\.html"/g, 'href="../$1.html"')
                .replace(/src="([^"]*)"/g, 'src="../$1"');
            
            document.getElementById('nav-placeholder').innerHTML = modifiedData;
            
            // Initialize hamburger menu functionality
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');
            
            if (hamburgerMenu && navLinks) {
                hamburgerMenu.addEventListener('click', function() {
                    hamburgerMenu.classList.toggle('active');
                    navLinks.classList.toggle('active');
                });
            }
        });
});
