// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// get elements
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

// add listener on button (work on click)
btn.addEventListener('click', handleClick);

// callback when click to btn -> change body color + show color's value
function handleClick(e) {
  if (e) {
    const randomColor = getRandomHexColor();
    // change body's background to random color
    body.style.backgroundColor = randomColor;
    // show body's color hex in span
    span.innerHTML = randomColor;
  }
}
// generate random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
