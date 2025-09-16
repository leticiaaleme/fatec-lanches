// Carrossel da galeria

const galeria = document.querySelector('.galeria');
let isDown = false;
let startX;
let scrollLeft;

galeria.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - galeria.offsetLeft;
  scrollLeft = galeria.scrollLeft;
});

galeria.addEventListener('mouseleave', () => {
  isDown = false;
});

galeria.addEventListener('mouseup', () => {
  isDown = false;
});

galeria.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - galeria.offsetLeft;
  const walk = (x - startX) * 2;
  galeria.scrollLeft = scrollLeft - walk;
});
