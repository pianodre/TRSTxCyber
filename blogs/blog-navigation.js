// Blog navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get current blog number from the URL
    const currentPath = window.location.pathname;
    const blogFileName = currentPath.split('/').pop();
    const currentBlogMatch = blogFileName.match(/blog(\d+)\.html/);
    
    if (currentBlogMatch) {
        const currentBlogNumber = parseInt(currentBlogMatch[1]);
        const totalBlogs = 12; // Total number of blog pages
        
        // Create navigation container
        const navContainer = document.createElement('div');
        navContainer.className = 'blog-navigation';
        
        // Create previous button if not on first blog
        if (currentBlogNumber > 1) {
            const prevButton = document.createElement('a');
            prevButton.href = `blog${currentBlogNumber - 1}.html`;
            prevButton.className = 'blog-nav-button prev-button';
            prevButton.innerHTML = '&larr; Previous';
            navContainer.appendChild(prevButton);
        } else {
            // Add empty space to maintain layout when no prev button
            const spacer = document.createElement('div');
            spacer.className = 'blog-nav-spacer';
            navContainer.appendChild(spacer);
        }
        
        // Create next button if not on last blog
        if (currentBlogNumber < totalBlogs) {
            const nextButton = document.createElement('a');
            nextButton.href = `blog${currentBlogNumber + 1}.html`;
            nextButton.className = 'blog-nav-button next-button';
            nextButton.innerHTML = 'Next &rarr;';
            navContainer.appendChild(nextButton);
        } else {
            // Add empty space to maintain layout when no next button
            const spacer = document.createElement('div');
            spacer.className = 'blog-nav-spacer';
            navContainer.appendChild(spacer);
        }
        
        // Add navigation to the page
        const mainElement = document.querySelector('main.blog-post-container');
        if (mainElement) {
            mainElement.appendChild(navContainer);
        }
    }
});
