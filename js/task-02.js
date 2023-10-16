const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Напиши скрипт, який для кожного елемента масиву ingredients:
const list = document.querySelector('#ingredients');

function createListOfItems(arr) {
  const markup = arr.map(ingredient => {
    // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    const li = document.createElement('li');

    // Додасть назву інгредієнта як його текстовий вміст.
    li.textContent = ingredient;

    // Додасть елементу клас item.
    li.classList.add('item');
    return li;
  });
  // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
  list.append(...markup);
}

createListOfItems(ingredients);
