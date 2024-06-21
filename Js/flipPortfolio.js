
// DOM elements inizialisation
const btnPrevious = document.querySelector('.btns-switching__btn-previous');
const btnNext = document.querySelector('.btns-switching__btn-next');
const slider = document.querySelectorAll('.portfolio-list__portfolio-item');
const positions = document.querySelectorAll('[data-name="switching-position"]');

let slideIndex = 1; // slide start index

let switchingIndex = 1; // position start index

switchSlides(slideIndex); // slides

switchPosition(slideIndex); // positions

// function to switch items in portfolio
function switchSlides(index) {
  if (index > slider.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slider.length;
  }
  for (let slide of slider) {
    slide.style.display = 'none';
  }

  slider[slideIndex - 1].style.display = 'flex';
}

// function to show position in portfolio
function switchPosition(index) {
  if (index > positions.length) {
    switchingIndex = 1;
  }
  if (index < 1) {
    switchingIndex = positions.length;
  }
  for (let position of positions) {
    position.style.backgroundColor = '#ffffff';
  }

  positions[switchingIndex - 1].style.backgroundColor = '#ffff00';
}

// event by click btnPrevious to switch items and show position in portfolio
btnPrevious.addEventListener('click', showPreviousSlide);

function showPreviousSlide() {
  switchSlides(slideIndex -= 1);
  switchPosition(switchingIndex -= 1);
}

// event by click btnNext to switch items and show position in portfolio
btnNext.addEventListener('click', showNextSlide);

function showNextSlide() {
  switchSlides(slideIndex += 1);
  switchPosition(switchingIndex += 1);
}
