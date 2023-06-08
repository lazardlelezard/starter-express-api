// Attend que le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector(".slider");
    var slides = document.querySelectorAll(".slide");
    var prevButton = document.querySelector(".slider-controls .slider-control:first-child");
    var nextButton = document.querySelector(".slider-controls .slider-control:last-child");
    var slideIndex = 0;
    var slideInterval = setInterval(nextSlide, 7000); // Change de diapositive toutes les 7 secondes
  
    // Ajoute l'événement de clic au bouton précédent
    prevButton.addEventListener("click", prevSlide);
    
    // Ajoute l'événement de clic au bouton suivant
    nextButton.addEventListener("click", nextSlide);
  
    // Fonction pour passer à la diapositive précédente
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      updateSlide();
      resetSlideInterval();
    }
  
    // Fonction pour passer à la diapositive suivante
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      updateSlide();
      resetSlideInterval();
    }
  
    // Fonction pour mettre à jour la classe active sur la diapositive actuelle
    function updateSlide() {
      slider.style.transform = "translateX(-" + (slideIndex * 100) + "%)";
    }
  
    // Fonction pour réinitialiser le compte à rebours du slide interval
    function resetSlideInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 7000);
    }
  });
  