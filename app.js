const slides = document.querySelectorAll('.slide');

const deactivateAll = (arrayOfElements) => {
  arrayOfElements.forEach((element) => {
    element.classList.remove('active');
  });
};

const activate = (element) => {
  element.classList.add('active');
};

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    deactivateAll(slides);
    activate(slide);
  })
});

