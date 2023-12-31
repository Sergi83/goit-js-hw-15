// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');

// add event listener to form
form.addEventListener('submit', handleSubmit);

// callback work when submit event on form
function handleSubmit(e) {
  e.preventDefault();
  // get email value
  let emailInputValue = form.elements['email'].value;
  // get password value
  let passwordInputValue = form.elements['password'].value;

  // check if all form's inputs are filled, create object with inputs values and reset form's inputs, if not filled - show alert message
  if (!!emailInputValue === false || !!passwordInputValue === false) {
    e.preventDefault();

    return alert('All inputs should be filled!');
  } else {
    console.log(
      { emailInputValue, passwordInputValue },
      'object email, password values'
    );
    e.target.reset();
  }
}
