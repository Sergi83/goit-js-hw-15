// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
const input = document.querySelector('#controls').firstElementChild;
const boxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

console.log(btnCreate, btnDestroy, 'btns----', input.value, 'input');
// add listener on button (work on click)
btnCreate.addEventListener('click', handleCreate);
btnDestroy.addEventListener('click', handleDestroy);

function handleCreate(e) {
  if (!!e.currentTarget && input.value > 0) {
    console.log(input.value);
    createBoxes(input.value);
  } else {
    input.value = null;
  }
}
function handleDestroy(e) {
  if (!!e.currentTarget) {
    console.log(e.currentTarget.value, 'destroy');
    boxes.innerHTML = '';
  }
}
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

function createBoxes(amount) {
  // console.log(amount, 'amount');
  if (amount > 0) {
    const markup = [];
    let divWidth = 0;
    let divHeight = 0;

    // cycle amount iterations to create array of divs
    for (let i = 1; i <= amount; i += 1) {
      // create div
      const div = document.createElement('div');

      // add styles to div
      // Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
      div.style.backgroundColor = getRandomHexColor();
      // add more width and height to first div, make every next little bit bigger
      // Розміри найпершого <div> - 30px на 30px.
      // Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
      if (i === 1) {
        divWidth += 30;
        divHeight += 30;
        div.style.width = `${divWidth}px`;
        div.style.height = `${divHeight}px`;
      }
      if (i > 1) {
        divWidth += 10;
        divHeight += 10;
        div.style.width = `${divWidth}px`;
        div.style.height = `${divHeight}px`;
      }

      // fill empty array with divs
      markup.push(div);
    }
    // add all divs to html document
    boxes.append(...markup);
  }
}

//

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
