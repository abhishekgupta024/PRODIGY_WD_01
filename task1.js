document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
  
    // Change background color when scrolling
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.style.background = '#2c3e50'; // Change to the desired color
      } else {
        navbar.style.background = 'linear-gradient(to right, #3498db, #1abc9c)';
      }
    });
  
    // Change style on hover
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        item.style.backgroundColor = '#ecf0f1'; // Change to the desired hover color
        item.style.color = '#2c3e50'; // Change to the desired hover text color
      });
  
      item.addEventListener('mouseleave', function () {
        item.style.backgroundColor = ''; // Reset to default background color
        item.style.color = ''; // Reset to default text color
      });
    });
  });
  