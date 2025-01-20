document.addEventListener('mousemove', function (e) {
  const parallax = document.querySelector('.parallax-interactive');
  const widthShift = (e.clientX - window.innerWidth / 2) / 100;
  const heightShift = (e.clientY - window.innerHeight / 2) / 100;

  parallax.style.transform = `translate3d(${widthShift}px, ${heightShift}px, 0)`;
});
