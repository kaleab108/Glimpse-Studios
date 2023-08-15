function toggleMenuForResponsive() {
    const menu = document.querySelector('.menu');
  
    // Define the breakpoint where you want to switch to the minimized menu
    const breakpoint = 768; // Change this value according to your requirements
  
    if (window.innerWidth <= breakpoint) {
      // For small screens, add the minimized menu class
      menu.classList.add('menu-minimized');
    } else {
      // For larger screens, remove the minimized menu class
      menu.classList.remove('menu-minimized');
    }
  }
  // Call the function on page load
window.addEventListener('load', toggleMenuForResponsive);

// Call the function whenever the window is resized
window.addEventListener('resize', toggleMenuForResponsive);
