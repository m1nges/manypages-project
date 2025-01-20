document.addEventListener('DOMContentLoaded', () => {
  const headersAndClosers = document.querySelectorAll('.header-and-closer h3, .header-and-closer span');

  headersAndClosers.forEach(element => {
    element.addEventListener('click', function () {
      const description = this.parentElement.nextElementSibling;
      if (description.style.display === 'none') {
        description.style.display = ''; // Показать описание
      } else {
        description.style.display = 'none'; // Скрыть описание
      }
    });
  });
});




