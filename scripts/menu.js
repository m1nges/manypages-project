document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.header-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');

  button.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }
  });
  //Скрытие по клику на любое место страницы
  document.addEventListener('click', function (e) {
    if (!button.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});