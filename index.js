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
