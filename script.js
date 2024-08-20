document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');

    // Function to update visibility based on screen width
    function updateVisibility() {
        if (window.innerWidth > 1000) {
            sidebar.style.display = 'none';
            menuButton.style.display = 'none';
            closeButton.style.display = 'none';
        } else {
            sidebar.style.display = 'none';
            menuButton.style.display = 'block';
            closeButton.style.display = 'none';
        }
    }

    // Initial check
    updateVisibility();

    // Add an event listener to handle window resize
    window.addEventListener('resize', updateVisibility);
});








document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');

    // Initial display settings
    sidebar.style.display = 'none';
    menuButton.style.display = 'block';
    closeButton.style.display = 'none';
});





let isSidebarVisible = false; // Boolean to track sidebar visibility

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    
    if (isSidebarVisible) {
        sidebar.style.display = 'none';
        menuButton.style.display = 'block';
        closeButton.style.display = 'none';
    } else {
        sidebar.style.display = 'flex';
        menuButton.style.display = 'none';
        closeButton.style.display = 'block';
    }
    
    isSidebarVisible = !isSidebarVisible; // Toggle the boolean value
}

// Add event listeners to the buttons
document.querySelector('.menu-button').addEventListener('click', toggleSidebar);
document.querySelector('.close-button').addEventListener('click', toggleSidebar);
