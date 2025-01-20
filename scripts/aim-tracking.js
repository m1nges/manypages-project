document.addEventListener('DOMContentLoaded', () => {
  const startGameBtn = document.getElementById('startGameBtn');
  const screens = document.querySelectorAll('.screen');
  const timeButtons = document.querySelectorAll('.time-btn');
  const timeEl = document.getElementById('time-left');
  const board = document.getElementById('board');
  let time = 20;
  let score = 0;

  startGameBtn.addEventListener('click', () => {
    setTimeout(() => {
      screens[0].classList.add('up'); // Экран "Начать игру" уходит
      setTimeout(showTimeButtons, 500); // Показываем кнопки выбора времени с задержкой
    }, 300); // Задержка перед показом второго экрана
  });

  function showTimeButtons() {
    let delay = 0;
    timeButtons.forEach(btn => {
      setTimeout(() => {
        btn.style.opacity = 1;
        btn.addEventListener('click', function () {
          time = parseInt(this.getAttribute('data-time'));
          screens[1].classList.add('up');
          startGame();
        });
      }, delay);
      delay += 100; // Задержка перед показом следующей кнопки
    });
  }

  board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
      score++;
      event.target.remove();
      createRandomCircle();
    }
  });

  function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
  }

  function decreaseTime() {
    if (time === 0) {
      finishGame();
    } else {
      let current = --time;
      setTime(current);
    }
  }

  function setTime(value) {
    timeEl.innerHTML = `00:${value < 10 ? `0${value}` : value}`;
  }

  function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1 class="primary">Счет: <span>${score}</span></h1>`;
  }

  function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const size = getRandomNumber(20, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.appendChild(circle);
  }

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const resetGameBtn = document.getElementById('resetGameBtn');

  resetGameBtn.addEventListener('click', () => {
    window.location.reload();
  });
});
