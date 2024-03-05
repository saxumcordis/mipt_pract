const openButton = document.querySelector('button');
const closeButton = document.querySelector('.close');

/* navigator.geolocation.getCurrentPosition(function (location) {
  console.log(location.coords.latitude);
  console.log(location.coords.longitude);
  console.log(location.coords.accuracy);
}); */

openButton.onclick = () => {
  const modal = document.querySelector('.modal')

  modal.style.display = 'block';
}

closeButton.onclick = () => {
  const modal = document.querySelector('.modal')

  modal.style.display = 'none';
}

fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(e => e.json()).then(response => {
  const modal = document.querySelector('.modal')

  response.forEach((elem) => {
    const img = document.createElement('img');
    img.setAttribute('src', elem.url);
    modal.append(img);
  })
})


