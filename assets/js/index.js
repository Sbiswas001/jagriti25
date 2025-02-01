/** Page Loader **/
window.onload = function() {
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }, 1000);
};

document.addEventListener("DOMContentLoaded", function () {
  /** Carousel Setup **/
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 1; // Start from first cloned slide
  const slideWidth = 100;
  let autoPlayInterval;

  /** Clone first and last slides for infinite scrolling **/
  const firstClone = carouselItems[0].cloneNode(true);
  const lastClone = carouselItems[carouselItems.length - 1].cloneNode(true);
  carouselSlide.appendChild(firstClone);
  carouselSlide.insertBefore(lastClone, carouselSlide.firstChild);

  const allSlides = document.querySelectorAll(".carousel-item");
  carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

  /** Move to next slide **/
  function moveToNextSlide() {
    if (currentIndex >= allSlides.length - 1) return;
    currentIndex++;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

    setTimeout(() => {
      if (currentIndex === allSlides.length - 1) {
        carouselSlide.style.transition = "none";
        currentIndex = 1;
        carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      }
    }, 500);
  }

  /** Move to previous slide **/
  function moveToPreviousSlide() {
    if (currentIndex <= 0) return;
    currentIndex--;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

    setTimeout(() => {
      if (currentIndex === 0) {
        carouselSlide.style.transition = "none";
        currentIndex = allSlides.length - 2;
        carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      }
    }, 500);
  }

  /** Auto-play functionality **/
  function startAutoPlay() {
    autoPlayInterval = setInterval(moveToNextSlide, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  startAutoPlay();

  /** Navigation Controls **/
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  nextButton.addEventListener("click", moveToNextSlide);
  prevButton.addEventListener("click", moveToPreviousSlide);
});


    function toggleEvent(eventElement) {
      if (eventElement.classList.contains("open")) {
        eventElement.classList.remove("open");
        eventElement.classList.add("closed");
      } else {
        document.querySelectorAll(".event.open").forEach((el) => {
          el.classList.remove("open");
          el.classList.add("closed");
        });
        eventElement.classList.remove("closed");
        eventElement.classList.add("open");
      }
    }


