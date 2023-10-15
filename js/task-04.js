// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const counter = document.querySelector('#value');

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

function handleClick(evt) {
  if (evt.currentTarget.textContent === '+1') {
    counterValue += 1;
  }
  if (evt.currentTarget.textContent === '-1') {
    counterValue -= 1;
  }
  return (counter.innerHTML = counterValue);
}
