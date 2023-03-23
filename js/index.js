const baseUrl = 'https://api.pexels.com/v1/search?query=';
const form = document.getElementById('form');
const ulImages = document.getElementById('ulImages');

form.addEventListener('submit', e => {
  e.preventDefault();

  getImages(e.target.term.value.trim());
});

function getImages(term) {
  fetch (`${baseUrl}${term}`, {
    headers: {
      'Authorization': 'Pxtfdm6xiqmXUq5dLZxCzjgHSCJv4Yf0TBAt7263jjmxAPdxEgFcoWIF'
    },
    method: 'GET'
  })
  .then(response => response.json())
  .then(response => renderImages(response.photos))
  .catch(error => console.log(error))
  .finally(() => console.log('Request is completed!'));
}

function renderImages(photos) {
  ulImages.innerHTML = '';

  photos.map(photo => {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.setAttribute('src', `${photo.src.tiny}`);
    img.setAttribute('alt', 'Some image');

    li.append(img);
    ulImages.append(li);
  });
}