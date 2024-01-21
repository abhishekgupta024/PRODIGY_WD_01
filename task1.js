document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
  

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.style.background = '#2c3e50'; 
      } else {
        navbar.style.background = 'linear-gradient(to right, #3498db, #1abc9c)';
      }
    });
  
    // Change style on hover
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        item.style.backgroundColor = '#ecf0f1'; 
        item.style.color = '#2c3e50';
      });
  
      item.addEventListener('mouseleave', function () {
        item.style.backgroundColor = ''; 
        item.style.color = '';
      });
    });
  });
  
