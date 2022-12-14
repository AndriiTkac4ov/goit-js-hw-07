import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');

// 1)
// ================================================

// const createGalleryMarkup = function (array) {
//     return array
//         .map(({ preview, original, description }) => {
//         return `
//             <div class="gallery__item">
//                 <a class="gallery__link" href="${original}">
//                     <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
//                 </a>
//             </div>
//         `
//         })
//         .join('');
// };

// const galleryMarkup = createGalleryMarkup(galleryItems);

// galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);

// ================================================

// 2)
const createGalleryList = function (array) {
  array.forEach(({preview, original, description}) => {
    const galleryItemEl = document.createElement('div');
    galleryItemEl.classList.add('gallery__item');
    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery__link');
    galleryLinkEl.href = original;
    galleryItemEl.append(galleryLinkEl);
    const galleryImgEl = document.createElement('img');
    galleryImgEl.classList.add('gallery__image');
    galleryImgEl.src = preview;
    galleryImgEl.dataset.source = original;
    galleryImgEl.alt = description;
    galleryLinkEl.append(galleryImgEl);
    
    galleryListEl.append(galleryItemEl);
  });
};

createGalleryList(galleryItems);

const onGalleryClick = function (event) {
    event.preventDefault();

    const isGalleryImgEl = event.target.classList.contains('gallery__image');

    if (!isGalleryImgEl) {
        return;
    }

    const imgSrcForLibrary = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src='${imgSrcForLibrary}' width="1280">
    `)

  instance.show()
  
  closeModalWindowByEscape(instance)
};

galleryListEl.addEventListener('click', onGalleryClick)

// Escape
function closeModalWindowByEscape(modalWindow) {
  const onEscapeKey = (event) => {
    // console.log(event.code)
    if (event.code === 'Escape') {
      modalWindow.close();
      window.removeEventListener('keydown', onEscapeKey)
    }
    return;
  };
  window.addEventListener('keydown', onEscapeKey);
}

console.log(galleryItems);