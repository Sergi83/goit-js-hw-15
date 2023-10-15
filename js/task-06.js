// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// get input
const input = document.querySelector('#validation-input');

// get min number of sybols inside input
const inputMinSymbolsToNumber = Number(input.dataset.length);

// add event listener to input
input.addEventListener('blur', handleBlur);

// callback work when blur event on input
function handleBlur(e) {
  // get number of symbols inside input
  const symbolsInsideInput = e.target.value.length;

  // add/remove classes(change border color) if the symbols enough or not
  if (symbolsInsideInput >= inputMinSymbolsToNumber) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
  if (symbolsInsideInput < inputMinSymbolsToNumber) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
