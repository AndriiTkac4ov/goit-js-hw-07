import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');

const createGalleryList = function (array) {
  array.forEach(image => {
    const galleryItemEl = document.createElement('div');
    galleryItemEl.classList.add('gallery__item');
    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery__link');
    galleryLinkEl.href = image.original;
    galleryItemEl.append(galleryLinkEl);
    const galleryImgEl = document.createElement('img');
    galleryImgEl.classList.add('gallery__image');
    galleryImgEl.src = image.preview;
    galleryImgEl.dataset.source = image.original;
    galleryImgEl.alt = image.description;
    galleryLinkEl.append(galleryImgEl);
    
    galleryListEl.append(galleryItemEl);
  });
};

createGalleryList(galleryItems);

console.log(galleryItems);