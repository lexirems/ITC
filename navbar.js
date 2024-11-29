let lastScrollTop = 0; 
const navbar = document.getElementById('navbar'); 

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop; 

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-60px"; 
    } else {
        // Scrolling up
        navbar.style.top = "0"; // Show navbar
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
