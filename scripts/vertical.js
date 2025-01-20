document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    });
  });

  function clearActiveClasses() {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
  }
});


//Second block

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-left'); // Изменил селектор на '.slide-left'

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active-left'); // Используем класс 'active-left' для активного слайда
    });
  });

  function clearActiveClasses() {
    slides.forEach(slide => {
      slide.classList.remove('active-left'); // Удаляем класс 'active-left' у всех слайдов
    });
  }
});
