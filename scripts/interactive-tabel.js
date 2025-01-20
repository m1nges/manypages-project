const board = document.querySelector('#board');
const squares_number = 3927;
color = "#1d1d1d";
for (let i = 0; i <squares_number; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
  square.addEventListener('mouseover', ()=>setColor(square));
  // square.addEventListener('mouseleave', () => removeColor(square));
}

function setColor(element) {
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px black'
}

document.getElementById('red').addEventListener('click', () => ChooseColor("red"));
document.getElementById('yellow').addEventListener('click', () => ChooseColor("yellow"));
document.getElementById('blue').addEventListener('click', () => ChooseColor("blue"));
document.getElementById('green').addEventListener('click', () => ChooseColor("green"));

function ChooseColor(choosenColor) {
  color = choosenColor;
}

document.getElementById('reset').addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'lightgray';
    square.style.boxShadow = '0 0 2px #000';
  });
});