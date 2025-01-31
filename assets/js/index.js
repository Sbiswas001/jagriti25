document.addEventListener("DOMContentLoaded", function() {
  const player = document.querySelector('#loadingAnimation');
  const lottiePlayer = new dotLottie.Player(player);
  lottiePlayer.load('../assets/loading.json'); // Replace with your actual .json file path
  lottiePlayer.play();

  // Run the animation for 1 second, even if the page is loaded
  setTimeout(function() {
    lottiePlayer.stop(); // Stop the animation
    document.getElementById('loadingAnimation').style.display = 'none'; // Hide the animation
  }, 1000); // 1000 milliseconds = 1 second

  // Carousel Logic
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  // Set transition for smooth sliding
  carouselSlide.style.transition = "transform 0.5s ease-in-out";

  // Move to the next slide
  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Move to the previous slide
  function moveToPreviousSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Auto-play every 3 seconds
  let autoPlayInterval = setInterval(moveToNextSlide, 3000);

  // Pause autoplay on hover
  carouselSlide.addEventListener("mouseenter", () => {
    clearInterval(autoPlayInterval);
  });

  carouselSlide.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(moveToNextSlide, 3000);
  });

  // Add navigation buttons
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  nextButton.addEventListener("click", moveToNextSlide);
  prevButton.addEventListener("click", moveToPreviousSlide);
});
