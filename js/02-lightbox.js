import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const createGalleryMarkup = function (array) {
    return array
        .map(({ preview, original, description }) => {
            return `
            <li>
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>
        `
        })
        .join('');
};

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

console.log(galleryItems);