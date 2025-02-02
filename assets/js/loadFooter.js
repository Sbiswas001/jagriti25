// loadFooter.js
function loadFooter() {
  fetch('/jagriti25/pages/components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }
  
  // Call the function to load the footer
  loadFooter();