import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getSearch } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');

let saveQuery = '';
let refreshPage;

loader.style.display = 'none';

form.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault()
    gallery.innerHTML = '';

    loader.style.display = 'block';

    saveQuery = evt.target.elements.query.value.trim();

    if (saveQuery === '') {
        return iziToast.info({
            title: 'Hello',
            message: 'Please enter search text!',
        }),
            loader.style.display = 'none',
            form.reset()
    }


    getSearch(saveQuery)
        .then(resp => {

            gallery.insertAdjacentHTML("beforeend", createMarkup(resp.data.hits));

            if (!resp.data.hits.length) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                }),
                    loader.style.display = 'none';
                return;
            }

            loader.style.display = 'none';

            refreshPage = new SimpleLightbox('.gallery a', {
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
            });
            refreshPage.refresh();
        })
        .catch(err => {

            loader.style.display = 'none';

            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later!',
            });

        });
    form.reset();
}