
/** visibilitychange применяется только к document, см консоль */
document.addEventListener('visibilitychange', () => {
  console.log('isPageVisible: ', document.visibilityState)
})

const button = document.querySelector('button');

button.addEventListener('visibilitychange', () => {
  console.log('test')
}) /** не работает на кнопке */
