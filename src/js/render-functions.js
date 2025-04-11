import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox; // Екземпляр SimpleLightbox

// Функція для створення галереї
export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}">
          <div class="thumb-block">
            <div class="block">
              <h2 class="title">Likes</h2>
              <p class="amount">${likes}</p>
            </div>
            <div class="block">
              <h2 class="title">Views</h2>
              <p class="amount">${views}</p>
            </div>
            <div class="block">
              <h2 class="title">Comments</h2>
              <p class="amount">${comments}</p>
            </div>
            <div class="block">
              <h2 class="title">Downloads</h2>
              <p class="amount">${downloads}</p>
            </div>
          </div>
        </a>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  
  // Ініціалізуємо або оновлюємо SimpleLightbox
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}

// Функція для очищення галереї
export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  
  // Якщо lightbox існує, знищуємо його
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}

// Функція для показу лоадера
export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

// Функція для приховування лоадера
export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}