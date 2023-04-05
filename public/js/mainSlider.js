window.onload = function() {
    var sliderSlides = document.querySelectorAll(".slider__slide");
    for (var i = 1; i <= sliderSlides.length; i++) {
      var indicator = document.createElement("div");
      indicator.classList.add("slider__indicator");
      indicator.setAttribute("data-slide", i);
      document.querySelector(".slider__indicators").appendChild(indicator);
    }
    setTimeout(function () {
      document.querySelector(".slider__wrap").classList.add("slider__wrap--hacked");
    }, 1000);
  }
  
  function goToSlide(number) {
    var slides = document.querySelectorAll(".slider__slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider__slide--active");
    }
    document.querySelector('.slider__slide[data-slide="' + number + '"]').classList.add("slider__slide--active");
  }
  
  var sliderNext = document.querySelector(".slider__next");
  var goToNext = document.querySelector(".go-to-next");
  sliderNext?.addEventListener("click", handleNextClick);
  goToNext?.addEventListener("click", handleNextClick);

  
  function handleNextClick() {
    var currentSlide = Number(document.querySelector(".slider__slide--active").getAttribute("data-slide"));
    var totalSlides = document.querySelectorAll(".slider__slide").length;
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    }
    goToSlide(currentSlide);
  }  