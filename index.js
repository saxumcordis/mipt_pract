import defaultMultipyImport, { minus } from './utils.js';
import { sum } from './utils.js';
import { divideNum as divide } from './utils.js';
import * as utils from './utils.js';

console.log('multiply, ', defaultMultipyImport(2, 4));
console.log('sum, ', sum(2, 1));
console.log('divide, ', divide(10, 5));
console.log('minus, ', utils.minus(10, 2))


/** свой велосипед "модулей" */
console.log('multiply2, ', Calc.multiply(2, 100))
console.log('sum2, ', Calc.sum(2, 3))
console.log('divide2, ', Calc.divide(2, 3))
console.log('minus2, ', Calc.minus(2, 3))
=======
fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME').catch(console.log)

//console.log(fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'));

/*
  fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
    .then(res => res.json())
    .then(console.log).catch(error =>
    {
        console.log('error123', error)
        return error;
    }).finally(res => console.log('FINALLY', res))


    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME').then(res => res).then(res => res).then(res => res).then(res => res).then(res => res).then(res => res).then(console.log).catch(error =>
    {
        console.log('error123', error)
        return error;
    }).finally(res => console.log('FINALLY', res))
*/

const asyncFetch = async () => {
  let result;
  console.log('1')
  console.log('result, ', result)
  await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME').then(() => {
    console.log('2')
    result = '2'
  })
  console.log('3')
  console.log('result, ', result) /** с await вывод: 2, без await вывод: undefined, т.к фетч не успеет завершиться */

  return result;
}

const asyncSum = async () => {
  console.log('1a')
  console.log('2a')
  console.log('3a')
}

const async1 = async () => {
  asyncFetch();
  asyncSum();
}

async1();

const form = document.querySelector('form') // document.querySelector('#register');
const button = document.querySelector('button');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeatPassword');
const email = document.querySelector('#email');
const nameField = document.querySelector('#name');
const age = document.querySelector('#age');

/** Так можно сделать, если мы хотим описать валидацию в одном месте и дальше её переиспользовать */
const elementValidation = {
  'password': (passwordElement) => {
    return passwordElement.value.legnth > 2;
  },
  'age': (ageElement) => ageElement.value > 18,
}

const clearError = (element) => {
  const errorSpan = document.querySelector(`#error_${element.id}`);
  errorSpan.classList.remove('error-message-visible');
}

const showError = (element, customErrorMessage) => {
  /**  можно так: const span = document.createElement('span');
     span.innerText = element.validationMessage;
     element.after(span)
*/
import { Todolist } from './src/Todolist/Todolist';
import { TodolistForm } from './src/Todolist/TodolistForm';
import { TodolistItem } from './src/Todolist/TodolistItem';

const todoListItems = [
  'Сделать 1 задание',
  'Сделать 2 задание',
  'Сделать 3 задание',
  'Сходить в магазин',
  'Сделать лабку',
];

const contentContainer = document.querySelector('.content');

const createTodoListForm = (...arg) => new TodolistForm(...arg);
const createTodoListItem = (...arg) => new TodolistItem(...arg);

const todoListView = new Todolist(todoListItems, createTodoListItem, createTodoListForm);

todoListView.render(contentContainer);

 
  const errorSpan = document.querySelector(`#error_${element.id}`);
  errorSpan.innerText = customErrorMessage || element.validationMessage;
  errorSpan.classList.add('error-message-visible');
}


const isPasswordRepeated = () => {
  const password = document.querySelector('#password');
  const repeatPassword = document.querySelector('#repeatPassword');
  console.log(password.value, repeatPassword.value)
  return password.value === repeatPassword.value;
}

const handlePasswordValidate = () => {
  clearError(password);
  clearError(repeatPassword);

  if (!isPasswordRepeated()) {
    showError(password, 'please repeat your password');
    showError(repeatPassword, 'please repeat your password');

    return false;
  }

  return true;
}

const handleValidate = (element) => {
  clearError(element);
  if (!element.checkValidity() /** если хотим добавить посложнее валидацию && elementValidation[element.id](element) */) {
    showError(element);

    return false;
  } else if ((element.id === password.id || element.id === repeatPassword.id)) {
    return handlePasswordValidate();
  }

  return true;
}

button.addEventListener('click', (event) => {
  event.preventDefault();

  const elements = Array.from(form.elements);

  let isFormValid = true;

  elements.forEach(elem => {
    if (elem.id !== button.id) {
      const isElementValid = handleValidate(elem);

      isFormValid = isFormValid && isElementValid;
    }
  })

  if (isFormValid) {
    document.querySelector('#success-form').classList.add('success-message-visible')
  } else {
    document.querySelector('#success-form').classList.remove('success-message-visible')
  }
})

email.addEventListener('input', (event) => handleValidate(event.target));
password.addEventListener('input', (event) => handleValidate(event.target));
repeatPassword.addEventListener('input', (event) => handleValidate(event.target));
nameField.addEventListener('input', (event) => handleValidate(event.target));
age.addEventListener('input', (event) => handleValidate(event.target));
