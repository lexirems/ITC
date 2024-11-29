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

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active"); // Toggle the 'active' class
}

// JavaScript for menu toggle
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Ensure navbar is always visible on larger screens
window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        document.getElementById("myLinks").style.display = "block"; // Show links on larger screens
    } else {
        document.getElementById("myLinks").style.display = "none"; // Hide links on smaller screens
    }
});
