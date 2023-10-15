const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Напиши скрипт, який для кожного елемента масиву ingredients:

function createListOfIngredients(arr) {
  let list = document.querySelector('#ingredients');
  for (let i = 0; i < arr.length; i += 1) {
    // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    const li = document.createElement('li');

    // Додасть назву інгредієнта як його текстовий вміст.
    li.textContent = arr[i];

    // Додасть елементу клас item.
    li.classList.add('item');

    // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
    list.append(li);
  }
}

createListOfIngredients(ingredients);
