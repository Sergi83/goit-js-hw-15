// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// get input and span
const inputSlider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// add listener to inputSlider
inputSlider.addEventListener('change', handleChange);

// callback change font size depending on input slider position
function handleChange(e) {
  let changingFontSize = e.target.value;
  text.style.fontSize = `${changingFontSize}px`;
}
