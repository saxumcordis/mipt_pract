const DEFAULT_IMAGES = [
  {
    "id": "kt",
    "url": "https://cdn2.thecatapi.com/images/kt.jpg",
    "width": 1600,
    "height": 1067
  },
  {
    "id": "m2",
    "url": "https://cdn2.thecatapi.com/images/m2.jpg",
    "width": 500,
    "height": 500
  },
  {
    "id": "18d",
    "url": "https://cdn2.thecatapi.com/images/18d.gif",
    "width": 372,
    "height": 242
  },
  {
    "id": "6tk",
    "url": "https://cdn2.thecatapi.com/images/6tk.jpg",
    "width": 640,
    "height": 426
  },
  {
    "id": "bdu",
    "url": "https://cdn2.thecatapi.com/images/bdu.jpg",
    "width": 500,
    "height": 328
  },
  {
    "id": "bjh",
    "url": "https://cdn2.thecatapi.com/images/bjh.jpg",
    "width": 640,
    "height": 360
  },
  {
    "id": "cqj",
    "url": "https://cdn2.thecatapi.com/images/cqj.jpg",
    "width": 3870,
    "height": 3104
  },
  {
    "id": "MjAwMzg3Ng",
    "url": "https://cdn2.thecatapi.com/images/MjAwMzg3Ng.jpg",
    "width": 1000,
    "height": 664
  },
  {
    "id": "tZYP8bcem",
    "url": "https://cdn2.thecatapi.com/images/tZYP8bcem.jpg",
    "width": 1200,
    "height": 900
  },
  {
    "id": "jyjEWK7xp",
    "url": "https://cdn2.thecatapi.com/images/jyjEWK7xp.jpg",
    "width": 3144,
    "height": 2448
  }
]

const createImgToUl = (url) => {
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.setAttribute('src', url)
  img.className = 'list__item_image';

  li.className = 'list__item'

  return li;
}

function initImages() {
  const gallery = document.querySelector('.gallery');
  const ul = document.createElement('ul');
  ul.className = 'list';

  DEFAULT_IMAGES.forEach(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.setAttribute('src', image.url)
    img.className = 'list__item_image';

    li.className = 'list__item'
    li.append(img);

    ul.append(li)
  })

  gallery.append(ul);
}

function initCreateButton() {
  const button = document.querySelector('.create-elem');
  const ul = document.querySelector('.list');


  button.onclick = () => {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.setAttribute('src', 'https://cdn2.thecatapi.com/images/tZYP8bcem.jpg')
    img.className = 'list__item_image';

    li.className = 'list__item'
    li.append(img);
    ul.append(li)
  }
}

initImages();
initCreateButton();

