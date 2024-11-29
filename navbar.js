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

// Function to toggle the visibility of the links
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
