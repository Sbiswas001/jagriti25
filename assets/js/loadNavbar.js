// loadNavbar.js
function loadNavbar() {
  fetch('pages/components/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
  }
  
  // Call the function to load the navbar
  loadNavbar();