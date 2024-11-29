let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

// Handle scroll event to hide/show navbar
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
   var x = document.getElementById("myLinks");
   
   if (window.innerWidth > 600) {
       x.style.display = "block"; // Show links on larger screens
   } else {
       x.style.display = "none"; // Hide links on smaller screens
   }
});

// Initial load check
window.onload = function() {
   var x = document.getElementById("myLinks");
   
   if (window.innerWidth > 600) {
       x.style.display = "block"; // Show links if on larger screens
   } else {
       x.style.display = "none"; // Hide links if on smaller screens
   }
};
