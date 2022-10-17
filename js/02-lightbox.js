import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const createGalleryMarkup = function (array) {
    return array
        .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `
        })
        .join('');
};

const galleryMarup = createGalleryMarkup(galleryItems);

galleryListEl.insertAdjacentHTML('beforeend', galleryMarup);

console.log(galleryItems);