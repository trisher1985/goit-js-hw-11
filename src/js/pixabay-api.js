import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const KEY = '49618464-a19ac1b17166537848db4f1c0';
const BASE_URL = 'https://pixabay.com/api/';

// export function getSearch(searchText) {
//     try {
//         if (searchText.includes(' ')) {
//             searchText.replace(/\s+/g, '+');
//         }
//         const response = axios.get(`${BASE_URL}`, {
//             params: {
//                 key: KEY,
//                 q: searchText,
//                 image_type: 'photo',
//                 orientation: 'horizontal',
//                 safesearch: true,
//             }
//         })
//         return response;
//     } catch (error) {
//         iziToast.error({
//             title: 'Error',
//             message: 'Sorry! The site is currently unavailable. Please try later!',
//         });
//     }
// }

export function getSearch(searchText) {
    searchText = searchText.replace(/\s+/g, '+');

    return axios.get(`${BASE_URL}`, {
        params: {
            key: KEY,
            q: searchText,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    })
        .then(response => response)
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Sorry! The site is currently unavailable. Please try later!',
            });
            // throw error;
        });
}
