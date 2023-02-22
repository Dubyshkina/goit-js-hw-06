
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.body;


btn.addEventListener('click', changeColor);

function changeColor (event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  span.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
