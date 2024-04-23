export const initListItems = () => {
  return fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(e => e.json());
}
