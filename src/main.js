import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getSearch } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

// Елементи DOM
const form = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');

// Ініціалізація змінних
let currentQuery = '';

// Приховуємо лоадер при завантаженні сторінки
hideLoader();

// Обробник події submit форми
form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  // Очищаємо галерею та показуємо лоадер
  clearGallery();
  showLoader();

  // Отримуємо пошуковий запит
  currentQuery = evt.target.elements.query.value.trim();

  // Перевірка на пустий запит
  if (!currentQuery) {
    showErrorToast('Please enter search text!');
    hideLoader();
    form.reset();
    return;
  }

  try {
    // Виконуємо пошук
    const response = await getSearch(currentQuery);
    const images = response.data.hits;
    
    // Перевірка на пустий результат
    if (!images.length) {
      showErrorToast('Sorry, no images found. Try another query!');
      return;
    }
    
    // Додаємо розмітку в галерею
    createGallery(images);
    
  } catch (error) {
    showErrorToast('Something went wrong. Please try again later!');
    console.error('Search error:', error);
  } finally {
    // Приховуємо лоадер в будь-якому випадку
    hideLoader();
    form.reset();
  }
});

// Функція для показу помилок
function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight'
  });
}