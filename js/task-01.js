// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const listOfCategories = document.querySelector('#categories');

const categoriesLi = listOfCategories.children;
console.log(`Number of categories: ${categoriesLi.length}`);

// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
[...categoriesLi].forEach(item => {
  // get text from header
  const h2 = item.firstElementChild;
  const textH2 = h2.innerHTML;

  // get lists' length
  const innerList = item.lastElementChild;
  const innerListLength = innerList.children.length;

  // show message in console
  console.log(`\nCategory: ${textH2} \nElements: ${innerListLength}\n`);
});
