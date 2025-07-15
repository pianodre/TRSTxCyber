// Load navigation only (footer is handled by footer.js)
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});
